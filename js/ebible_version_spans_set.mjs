import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { text_searchable_spans_set } from "./text_searchable_spans_set.mjs";
export async function ebible_version_spans_set(bible_folder, words_least) {
  "$plain bible_folder";
  "$plain words_least";
  "Every run of a fixed number of neighbouring words in one whole translation, gathered so that any piece of writing can be asked whether it holds one of them.";
  "It is how a question about a licence is turned into a question a machine can answer. A licence forbidding derivatives forbids carrying the words of the translation; whether some file carries them is not a promise anybody can keep by remembering, and prose saying it does not is one edit away from being untrue with nothing to notice.";
  arguments_assert(arguments, 2);
  let searchable = await ebible_version_words_searchable(bible_folder);
  let set = text_searchable_spans_set(searchable, words_least);
  return set;
}
