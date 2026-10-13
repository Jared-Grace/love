import { arguments_assert } from "./arguments_assert.mjs";
export function html_scroll_window_top_set(scroll_top) {
  "$plain scroll_top";
  "Puts the whole page this far down, at once and without gliding there.";
  arguments_assert(arguments, 1);
  window.scrollTo({
    top: scroll_top,
    behavior: "auto",
  });
}
