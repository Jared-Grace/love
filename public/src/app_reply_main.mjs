import { html_button } from "./html_button.mjs";
import { each } from "./each.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { marker } from "./marker.mjs";
export function app_reply_main() {
  marker("1");
  let choices = [
    {
      text: emoji_wave() + "Greetings",
      response:
        emoji_wave() +
        emoji_smile() +
        " Greetings in the name of our LORD Jesus Christ " +
        emoji_cross(),
    },
  ];
  function lambda(choice) {
    let component = html_button(parent, text2, function lambda3() {});
  }
  each(choices, lambda);
}
