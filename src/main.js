import "./axios";
import App from "./App.vue";
import { createApp } from "vue";
import pinia from "@/store";
import { useMe } from "@/store/me";
import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.use(pinia);

const meStore = useMe();
meStore
  .getMe()
  .catch(() => {})
  .finally(() => {
    registerPlugins(app);
    app.mount("#app");
  });
