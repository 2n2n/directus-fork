import { EXTENSION_TYPES } from '@directus/extensions';
import { z } from 'zod';

export const RegistryListResponse = z.object({
	meta: z.object({
		filter_count: z.number(),
	}),
	data: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			description: z.union([z.null(), z.string()]),
			total_downloads: z.number(),
			verified: z.boolean(),
			type: z.enum(EXTENSION_TYPES),
			last_updated: z.string(),
			host_version: z.string(),
			publisher: z.object({
				username: z.string(),
				verified: z.boolean(),
				github_name: z.string().nullable(),
			}),
		}),
	),
});

export type RegistryListResponse = z.infer<typeof RegistryListResponse>;
