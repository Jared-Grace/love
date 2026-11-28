import { app_shared_loading_wait_texts } from "./app_shared_loading_wait_texts.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_loading_wait_text() {
  "The line under the spinner while an app is still coming up, in the language the reader of the game reads.";
  "IT ASKS RATHER THAN ANNOUNCES, and that is the whole difference between this and a progress figure. Nothing here can honestly say how long is left - the wait is a download over whatever connection the reader has - so what is left to say is the courteous thing, which is to ask them to stay.";
  "THE FOLDED HANDS ARE NOT IN IT. A little picture reads the same in every language and is put on afterwards, and a language written from the right hangs it on the other end by itself; written into the sentence it would have to be placed again by hand in every language, and placed wrongly in the ones nobody checked.";
  "THE STATIC SPLASH IS ASKED SEPARATELY, out of the same table. That one is baked into the page while the app is being built, where there is no reader to ask - so it is told the language the page is being built for, which a page per language knows and an app's own page takes from the app.";
  let texts = app_shared_loading_wait_texts();
  let text = app_shared_text_reader_language(texts);
  return text;
}
