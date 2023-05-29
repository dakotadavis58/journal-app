/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: "https://bxogcogluotpqkczbwlm.supabase.co",
    SUPABASE_PUBLIC_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4b2djb2dsdW90cHFrY3pid2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4OTc0OTAsImV4cCI6MjAwMDQ3MzQ5MH0.bvkbCvX5rOCeKmimCzpxoL6FH0cYXEMEyTAkF4LFaQU",
  },
};

module.exports = nextConfig;
