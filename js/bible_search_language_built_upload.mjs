import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_language_built_path } from "./bible_search_language_built_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function bible_search_language_built_upload(language_code, built) {
  "$plain language_code";
  "$plain built";
  "Write down that one language's search index is up there whole, and when it was built.";
  "It goes up only after every word, so a page that finds the mark can ask for any word and trust a missing one to be missing; a page that finds no mark says the language is not searchable yet rather than reporting every word as nowhere in the Bible.";
  arguments_assert(arguments, 2);
  let destination = bible_search_language_built_path(language_code);
  await firebase_upload_object_compressed(destination, built);
}
