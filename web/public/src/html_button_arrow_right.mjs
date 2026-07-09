import { html_button } from "../../../love/public/src/html_button.mjs";
import { emoji_arrow_right } from "../../../love/public/src/emoji_arrow_right.mjs";
export function html_button_arrow_right(parent, lambda) {
  let text = emoji_arrow_right();
  let component = html_button(parent, text, lambda);
}
