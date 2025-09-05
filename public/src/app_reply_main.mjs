import { emoji_book_open } from "./emoji_book_open.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_add } from "./list_add.mjs";
import { emoji_ok } from "./emoji_ok.mjs";
import { emoji_100 } from "./emoji_100.mjs";
import { string_the_servant_of_god_is } from "./string_the_servant_of_god_is.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { html_text_set } from "./html_text_set.mjs";
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
  let copied = [];
  let component2 = html_p(root);
  marker("1");
  let choices = [
    {
      text: emoji_wave() + "Greetings",
      response:
        emoji_wave() +
        emoji_smile() +
        " Greetings in the name of our LORD Jesus Christ! " +
        emoji_cross(),
    },
    {
      text: emoji_ok() + "How r u",
      response:
        emoji_ok() +
        " " +
        string_the_servant_of_god_is() +
        " doing good " +
        emoji_100() +
        " through the grace of God, because " +
        emoji_book_open() +
        " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28)" +
        emoji_pray(),
    },
    {
      text: emoji_globe_americas() + " Location",
      response:
        emoji_globe_americas() +
        " " +
        string_the_servant_of_god_is() +
        " from 🇺🇸 the United States of America, state of Florida, city of Jacksonville. " +
        emoji_pray(),
    },
  ];
  function lambda(choice) {
    let response2 = object_property_get(choice, "response");
    let text3 = object_property_get(choice, "text");
    async function lambda3() {
      list_add(copied, response2);
      let joined = list_join_newline_2(copied);
      await clipboard_copy(joined);
      html_text_set(component2, response2);
    }
    let component = html_button(root, text3, lambda3);
  }
  each(choices, lambda);
}
