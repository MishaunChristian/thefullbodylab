import { groq, createClient, createPreviewSubscriptionHook } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const apiVersion = 'v2021-06-07';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  apiVersion,
  token: process.env.SANITY_API_TOKEN
});

export const usePreviewSubscription = createPreviewSubscriptionHook({
  projectId,
  dataset,
  useCdn: false,
  token
});

export const getClient = usePreview => (usePreview ? previewClient : sanityClient);

export async function querySanity(query, params) {
  return previewClient.fetch(query, params);
}

// Helper function for easily switching between normal client and preview client
