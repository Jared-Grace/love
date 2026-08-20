import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_contact_send_text() {
  "What the button that carries a message to the developer says, in the language the reader of this app reads.";
  "It begins with a space, because a little picture of an envelope stands in front of it and the gap between the two belongs to the words rather than to the picture. A language wanting no gap can say so by leaving it out.";
  arguments_assert(arguments, 0);
  let texts = {
    en: " Send",
    ur: " بھیجیں",
    translated_from: {
      ur: " Send",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
