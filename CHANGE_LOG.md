# Directus Changes: Custom Login Implementation (Dec 4, 2024)

## 1. Schema Changes for `directus_user` Table

### Modifications
- **Added a `user_id` field** to the schema of the `directus_user` table.

#### File Path
`/seeds/03-users.yaml`

#### Field Details
- **Field Name:** `user_id`
- **Type:** `string`
- **Length:** 255

#### Seeder Implementation
- **Default Value:** Set to `"1"` for the admin account during seeding.

---

## 2. Custom Authentication Driver

### New Auth Driver: `localUserId.ts`
- **File Path:** `/api/src/auth/drivers/localUserId.ts`

#### Description
- This is a duplicate of the existing `local.ts` authentication driver.
- Replaces `email` with `user_id` when querying the database.

#### Constraints
- **SDK Limitation:** The Directus SDK currently uses `email` as the default identifier.
  - Modifying this to `user_id` requires altering the SDK or extending it.
  - Changing to `user_id` will create a new authentication flow incompatible with the default SDK setup.

---

## 3. Custom Login Component

### Component: `login-form-user.vue`
- **Purpose:** Handles login functionality using `user_id` instead of `email`.

#### Modifications
1. **Placeholder Changes:**
   - Replaced "Email" with "User ID."
2. **Integration in `login.vue`:**
   - Added the `login-form-user` component.
   - Conditional rendering based on the authentication driver (`custom`).

#### Environment Configuration
- Update the API environment variables:
  ```env
  AUTH_PROVIDERS="custom"
  AUTH_CUSTOM_DRIVER="custom"
