import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_close_texts } from "./app_shared_close_texts.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_close_text() {
  "What the button that puts a panel away says, in the language the reader of this app reads.";
  "It is the way back out of anything laid over the app, so it is the word a reader most needs to be able to read without knowing any english. Somebody who cannot read it is shut in.";
  "The words themselves are asked for rather than spelled here, because the could-not-start notice needs the same word at a moment when there is no reader to ask about, and one table is what stops the two saying close differently.";
  arguments_assert(arguments, 0);
  let texts = app_shared_close_texts();
  let text = app_shared_text_reader_language(texts);
  return text;
}
