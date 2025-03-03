export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTACT_EMAIL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_GITHUB_URL: string;
    }
  }
}
