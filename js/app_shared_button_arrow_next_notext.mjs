import { app_shared_emoji_mirror_if_rtl } from "./app_shared_emoji_mirror_if_rtl.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
export function app_shared_button_arrow_next_notext(parent, lambda) {
  "A small button on to whatever comes after, wearing an arrow and no words at all.";
  "Its neighbour going the other way says why it is named for where it leads rather than for the way its arrow points.";
  let arrow = emoji_arrow_right();
  let text = app_shared_emoji_mirror_if_rtl(arrow);
  let component = app_shared_button(parent, text, lambda);
  return component;
}
