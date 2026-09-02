import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_function_chapters_uploaded } from "./firebase_function_chapters_uploaded.mjs";
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
export async function app_shared_gloss_chapters_uploaded_generic(
  cache_fn,
  namespace_fn,
) {
  "Every chapter one gloss app has actually published, which is every chapter it is able to put in front of a reader.";
  "Read from the store rather than written down here, because which chapters have been explained grows without this repo being told. Offering a chapter with nothing written for it breaks the promise the moment a reader takes it: they choose, the page turns, and the verse arrives with none of the help they came for.";
  "Asked once and kept for the rest of the page's life. Both pickers ask, and a reader going book to chapter and back again would otherwise send the same question off on every step, for an answer that cannot change while they are looking at it.";
  "The app hands in its own asking function to be kept under, so each app keeps its own answer - one cache shared between apps would hand the second app the first one's chapters. It hands in a way of naming where its chapters were filed rather than the name itself, so shared code names no app.";
  arguments_assert(arguments, 2);
  let f_name = namespace_fn();
  async function published_ask() {
    let chapter_codes = await firebase_function_chapters_uploaded(f_name);
    return chapter_codes;
  }
  let value = await global_function_call_cache_async(
    cache_fn,
    [],
    published_ask,
  );
  return value;
}
