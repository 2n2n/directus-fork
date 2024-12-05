# Directus Custom Login Changes

## 1. Schema Update: Adding `user_id` to `directus_user`

To support custom login using `user_id`, we made the following modifications to the schema:

**File path:** `/seeds/03-users.yaml`

- **Field Added:** `user_id`
  - **Type:** string
  - **Length:** 255

- **Seeder Implementation:**
  - Added a default value of `"1"` for the admin account.

## 2. Custom Auth Driver: `localUserId.ts`

We created a custom authentication driver to enable login with `user_id` instead of the default email-based login.

**File path:** `/api/src/auth/drivers/localUserId.ts`

- This driver is essentially a modified version of `local.ts`, where the **email** field is replaced with **user_id** for database interactions.

- **Constraints:**
  - Changing the query to use `user_id` creates compatibility issues since the Directus SDK only accepts email as the default identifier. Changing the email would require modifying or extending the SDK to handle authentication using `user_id`. This means adding a new method for logging in or altering the existing SDK to support custom usernames.

## 3. Custom Login Component: `login-form-user.vue`

To support logging in with `user_id`, we created a custom Vue component for the login form.

**Component Created:** `login-form-user.vue`

- Modified placeholder from **Email** to **User ID**.
- Integrated this custom component into `login.vue` to provide a conditional login option. The component is rendered if the `driver` is set to `custom`.

**Environment Variables Required:**

```bash
AUTH_PROVIDERS="custom"
AUTH_CUSTOM_DRIVER="custom"
```

- With this configuration, users will see an additional login option on the login page:
  - **Default Login:** Email and password
  - **Custom Login:** User ID and password (using the `login-form-user.vue` component)

## Notes

- **Bootstrapping Process:** When bootstrapping the system, the new schema with `user_id` will be seeded automatically.
- **Environment Setup:** Ensure that the necessary environment variables (`AUTH_PROVIDERS` and `AUTH_CUSTOM_DRIVER`) are included to enable this feature within the container.
- **User ID Incrementation:** To increment `user_id`, ensure it is parsed as an integer/number.

