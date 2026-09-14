import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.hakamyazansuzi.familyhub",
  appName: "FamilyHub",
  webDir: "dist",
  android: {
    // http (not the https default) so calls to http://127.0.0.1:8080
    // aren't blocked as mixed content
    androidScheme: "http",
  },
  plugins: {
    CapacitorUpdater: {
      autoUpdate: true,
      defaultChannel: "production",
      periodCheckDelay: 3600,
    },
  },
};

export default config;
