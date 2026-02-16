import { emoji_point_right } from "../../../love/public/src/emoji_point_right.mjs";
import { string_pad_left_space } from "../../../love/public/src/string_pad_left_space.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function app_replace_button_text_and_next(
  completed,
  completed_previous,
  index,
) {
  const choose_this_next = not(completed) && completed_previous;
  let text = add_1(index) + ".";
  if (completed) {
    let e = emoji_check();
    text += string_pad_left_space(e);
  } else {
    if (choose_this_next) {
      let e = emoji_point_right();
      text += string_pad_left_space(e);
    }
  }
  let r3 = {
    text,
    choose_this_next,
  };
  return r3;
}
