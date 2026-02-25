import { createClient, type SanityClient } from "@sanity/client";

import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "../env";

// Lazy-load client only when Sanity is configured
let _client: SanityClient | null = null;

export const client = {
	fetch: async <T = any>(query: string, params?: Record<string, any>): Promise<T | null> => {
		if (!isSanityConfigured()) {
			return null;
		}
		if (!_client) {
			_client = createClient({
				projectId,
				dataset,
				apiVersion,
				useCdn,
				perspective: "published",
			});
		}
		return _client.fetch<T>(query, params || {});
	},
};
