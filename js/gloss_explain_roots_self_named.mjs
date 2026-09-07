import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_named_one_word_is } from "./gloss_root_named_one_word_is.mjs";
export function gloss_explain_roots_self_named(explain) {
  "Every root a gloss explanation names in the one shape that opens by quoting the word and says it is another quoted word, with answers that cannot be Cebuano dropped.";
  "★ THIS SHAPE IS THE AMBIGUOUS ONE AND IT IS PULLED OUT SO THAT THE AMBIGUITY HAS ONE ADDRESS. Built on X and from X say where a word came from and mean nothing else. Word is X says the two are the same thing, and the store uses it for both senses - Akong is ako names a root, Kaniya is him gives an English meaning. No test on X alone tells those apart, so anything that ever tries to has to be able to name the shape it is arguing about.";
  "It is read only at the very start of the explanation, because that is the one place the first quoted word is certainly the word being explained. Later in a sentence the same shape is ordinary prose about something else.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  arguments_assert(arguments, 1);
  let self_pattern = new RegExp(
    "^\\s*['‘\"][^'’\"]+['’\"] is ['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let read = text_regex_first_groups(explain, self_pattern);
  let r = list_filter(read, gloss_root_named_one_word_is);
  return r;
}
