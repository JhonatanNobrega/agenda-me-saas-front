import { loadFonts } from "./webfontloader";
import vuetify from "@/plugins/vuetify";
import router from "@/router";

export function registerPlugins(app) {
  app.use(vuetify);
  app.use(router);
  loadFonts();
}
