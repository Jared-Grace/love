import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_toast } from "./app_shared_game_toast.mjs";
export function app_shared_toast(text) {
  arguments_assert(arguments, 1);
  ("Tells the person what their action just did - copied, saved - in a small pill that fades by itself, so the page's own content never shifts to make room for the news.");
  let div = app_shared_game_toast(text, 2500);
  return div;
}
