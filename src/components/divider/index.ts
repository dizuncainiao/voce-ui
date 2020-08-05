import { App } from "vue";
import Component from "./src/index.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export * from "./src/index.vue";

export const Divider = Component;
