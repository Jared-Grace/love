import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_language_searchable } from "./app_search_language_searchable.mjs";
import { bible_search_language_upload } from "./bible_search_language_upload.mjs";
export async function bible_search_languages_unbuilt_upload() {
  "Build the search index of every offered language storage has no index for yet, one language after another.";
  "It finds its own set rather than taking a list: a language counts as built only once its mark is up, so running it again after a dropped connection or a stopped machine picks up exactly the languages still missing, and a language already built is never built twice.";
  "A language that fails is written down and passed over rather than stopping the rest, because one bible whose text cannot be read should not keep three hundred others unsearchable. The failures come back with their reasons, so each can be looked at by itself.";
  arguments_assert(arguments, 0);
  let languages = ebible_languages();
  let built = [];
  let failed = [];
  for (let language of languages) {
    let language_code = property_get(language, "language_code");
    let searchable = await app_search_language_searchable(language_code);
    if (searchable) {
      continue;
    }
    console.log("building " + language_code);
    try {
      let result = await bible_search_language_upload(language_code);
      let words = property_get(result, "words");
      console.log("built " + language_code + " words " + words);
      built.push({
        language_code,
        words,
      });
    } catch (e) {
      let reason = String(e && e.message).slice(0, 300);
      console.log("failed " + language_code + " " + reason);
      failed.push({
        language_code,
        reason,
      });
    }
  }
  let r = {
    built,
    failed,
  };
  return r;
}
