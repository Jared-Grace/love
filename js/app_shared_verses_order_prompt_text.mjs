import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_verses_order_prompt_text() {
  "What the card for putting chosen verses in an order asks above them, in the language the reader of this app reads.";
  "The card only appears once two or more verses are chosen, so the question arrives at the moment there is something to answer it with, and it has to say which of the two things on the screen it is asking about.";
  arguments_assert(arguments, 0);
  let texts = {
    en: "What order do you want the verses in?",
    ur: "آپ آیات کو کس ترتیب میں چاہتے ہیں؟",
    translated_from: {
      ur: "What order do you want the verses in?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
