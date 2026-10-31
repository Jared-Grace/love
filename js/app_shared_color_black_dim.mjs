import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_black_dim() {
  arguments_assert(arguments, 0);
  ("Half-clear black, laid over the whole page behind a card that has opened on top of it.");
  ("HALF, so the page is still there behind it: the reader sees they have not left where they were, only stepped in front of it, and a tap on the dimmed part takes them back.");
  let color = "rgba(0,0,0,0.5)";
  return color;
}
