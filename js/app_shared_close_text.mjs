import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_close_text() {
  "What the button that puts a panel away says, in the language the reader of this app reads.";
  "It is the way back out of anything laid over the app, so it is the word a reader most needs to be able to read without knowing any english. Somebody who cannot read it is shut in.";
  arguments_assert(arguments, 0);
  let texts = {
    en: "Close",
    ur: "بند کریں",
    translated_from: {
      ur: "Close",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
