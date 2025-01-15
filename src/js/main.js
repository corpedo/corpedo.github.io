import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import collapse from "@alpinejs/collapse";
import 'iconify-icon';

window.Alpine = Alpine;
//Init collapse plugin
Alpine.plugin(collapse);
//Init intersect plugin
Alpine.plugin(intersect);
//Init persist plugin
Alpine.plugin(persist);
//Init store
Alpine.store("app", {
  init() {
    this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
  isLoggedIn: Alpine.$persist(false),
});
//Start Alpine JS
Alpine.start();

import "./components";
