import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { window_go } from "./window_go.mjs";
export function app_shared_all_apps_button(parent) {
  "every app can offer the way back out to the page listing all of them, without any of them writing that address down for itself: goes to the index page, which is where somebody who has finished with this app chooses the next one.";
  "The address is a relative one, so the app leads to whichever copy of the index it was itself opened from - the built site from the built site, the dev build from the dev build - and no app has to ask which copy it is standing in.";
  "It goes there in the tab already open rather than in a second one, which is the opposite of the way the index leads OUT to an app. Somebody leaving an app wants the app behind them where the browser's own back button reaches it; a second tab would leave them holding two.";
  function on_click() {
    window_go("index.html");
  }
  let left = emoji_home();
  let label = text_combine(left, " All apps");
  let button = app_shared_button_wide(parent, label, on_click);
  return button;
}
