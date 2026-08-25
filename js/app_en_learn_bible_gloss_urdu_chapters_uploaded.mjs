import { app_en_learn_bible_gloss_urdu_generate_upload_namespace } from "./app_en_learn_bible_gloss_urdu_generate_upload_namespace.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_function_chapters_uploaded } from "./firebase_function_chapters_uploaded.mjs";
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_uploaded() {
  "Every chapter this app can actually explain a word of, which is every chapter of English words explained in Urdu that has been published.";
  "This is the app's answer to what it is willing to put in front of a reader, and it is read from the store rather than written down here. The app already refuses to offer a language it cannot explain a word in; a chapter is the same promise made smaller, and a chapter offered with nothing written for it is that promise broken the moment somebody takes it - they choose, the page turns, and the verse arrives in the one language they came here not knowing.";
  "Read rather than listed is what makes it need no attention. Publishing a chapter is what puts it in front of a reader, in the same breath and with nothing else to remember, and there is no day on which a list here has to be brought back into line with what is up there.";
  "Asked once and kept for the rest of the page's life. Both pickers ask, and a reader going book to chapter and back would otherwise send the same question off again on every step, for an answer that cannot change while they are looking at it.";
  arguments_assert(arguments, 0);
  let f_name = app_en_learn_bible_gloss_urdu_generate_upload_namespace();
  async function published_ask() {
    let chapter_codes = await firebase_function_chapters_uploaded(f_name);
    return chapter_codes;
  }
  let value = await global_function_call_cache_async(
    app_en_learn_bible_gloss_urdu_chapters_uploaded,
    arguments,
    published_ask,
  );
  return value;
}
