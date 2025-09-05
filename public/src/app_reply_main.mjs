import { html_p } from "./html_p.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button } from "./html_button.mjs";
import { each } from "./each.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { marker } from "./marker.mjs";
export function app_reply_main() {
  const root = html_document_body();
  let component2 = html_p(root2);
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
    let response2 = object_property_get(choice, "response");
    let text3 = object_property_get(choice, "text");
    async function lambda3() {
      await clipboard_copy(response2);
    }
    let component = html_button(root, text3, lambda3);
  }
  each(choices, lambda);
}
