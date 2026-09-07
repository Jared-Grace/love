import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_named_cebuano_shaped_is } from "./gloss_root_named_cebuano_shaped_is.mjs";
export function gloss_explain_roots_from_named(explain) {
  "Every root a gloss explanation names in the wording that gives a meaning and then says the word comes from a quoted word, with answers that cannot be Cebuano dropped.";
  "Like the built on wording this says where a word came from and nothing else, so a spelling test does not belong here either. It is asked last of the four because from is an ordinary English word that turns up inside sentences doing other work, so a match on it is the weakest evidence of the four that a root is being named at all.";
  "It has its own address for the same reason the others do - so a reader over all the wordings can ask which one answered rather than infer it from a count.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  arguments_assert(arguments, 1);
  let from_pattern = new RegExp(
    "from\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let read = text_regex_first_groups(explain, from_pattern);
  let r = list_filter(read, gloss_root_named_cebuano_shaped_is);
  return r;
}
