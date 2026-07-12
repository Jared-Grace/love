import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
export function app_shared_button_next_text() {
  let left = emoji_arrow_right();
  let r = text_combine_middle_space_nb(left, "Next");
  return r;
}
