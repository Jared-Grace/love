import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { emoji_arrow_left } from "../../love/js/emoji_arrow_left.mjs";
export function app_shared_button_arrow_previous_notext(parent, lambda) {
  "A small button back to whatever comes before, wearing an arrow and no words at all.";
  "It is named for where it leads and not for the way its arrow points, because those two come apart. For a reader who reads from the right, back is to the right, and the arrow drawn here turns round to say so.";
  let arrow = emoji_arrow_left();
  let text = app_shared_emoji_mirror_if_rtl(arrow);
  let component = app_shared_button(parent, text, lambda);
  return component;
}
