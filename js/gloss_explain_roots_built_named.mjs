import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_named_cebuano_shaped_is } from "./gloss_root_named_cebuano_shaped_is.mjs";
export function gloss_explain_roots_built_named(explain) {
  "Every root a gloss explanation names in the wording that says the word is built on a quoted word, with answers that cannot be Cebuano dropped.";
  "This wording says where a word came from and means nothing else, so a root it names that is not spelled inside its word is ordinary rather than suspect. Built on is exactly where a sound shift is expected and announced - katawhan from tawo, gipamatud-an from matuod - which is why no spelling test belongs here.";
  "It has its own address so that the reader over all the wordings can ask which one answered instead of guessing from how many roots came back. Two wordings returning the same number of roots is not the same as the same wording answering twice, and a reading that told them apart by counting would filter the wrong sentences.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  arguments_assert(arguments, 1);
  let built_pattern = new RegExp(
    "built on\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let read = text_regex_first_groups(explain, built_pattern);
  let r = list_filter(read, gloss_root_named_cebuano_shaped_is);
  return r;
}
