module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_6hzDuT1wyFmBf4gEYmH1Zzh4v8oE/v2izyhR9lH",
        apiToken: "SD7dUW3EsTBv40AKQv1VH0gn",
        appFilter: "learn-strapi-nu.vercel.app",
        teamFilter: "",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });