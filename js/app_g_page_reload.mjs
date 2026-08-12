import { window_reload } from "./window_reload.mjs";
export function app_g_page_reload() {
  "load the page again from the player menu, so a new build can be picked up without reaching for the browser's own reload";
  "it keeps the screen you were on. reloading asks for the address that is already in the bar, and the hash naming a dev route is part of that address, so you come back on the same route rather than at the front door. the game itself is saved, so the world is the one you left; a route that sets a scene up runs its setup again, which is what makes it a fresh run of that scene rather than a resumed one";
  "a phone is the reason it exists at all: the browser's reload lives behind the bar that a full-height page is hiding, so on the very screen most worth reloading it is the hardest thing to reach";
  window_reload();
}
