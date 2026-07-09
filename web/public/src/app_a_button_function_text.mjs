import { emoji_computer } from "../../../love/public/src/emoji_computer.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_a_button_function_text(f_name) {
  let v = text_combine_multiple([emoji_computer(), " function: ", f_name]);
  return v;
}
