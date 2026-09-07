import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function gloss_explain_roots_opening_named(explain) {
  "Whatever a gloss explanation quotes before it says anything else, handed back exactly as it was written and judged by nothing.";
  "★ THIS IS THE ONE EXTRACTOR OF THE FIVE THAT DROPS NOTHING, AND THE REASON IS THAT IT HAS NOTHING TO DROP IT BY. The other four are found by a word the sentence spells out - root, built on, is, from - so the wording itself says a root is being named and a shape floor is all that is left to apply. This one is found by position alone. An explanation opening with a quotation may be naming the root it will then build on, or repeating the word it is about, or quoting the affix, and the sentence says which by nothing a pattern can see.";
  ("So the judgment is somewhere else on purpose. ",
    fn_name("gloss_root_named_reversed_is"),
    " takes the word as well and answers it, and it needs the word, which is exactly why this wording could not be read at all until a reader existed that had one. Filtering here would mean answering the question twice and in two places, which is the arrangement that lets two readings of one thing quietly come apart.");
  ("It is asked last of the five because it is the weakest. The other four are the writer saying what they are doing; this is a reader inferring it from where a quotation mark fell.");
  ("$plain explain");
  ("the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.");
  arguments_assert(arguments, 1);
  let opening_pattern = new RegExp(
    "^\\s*['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let read = text_regex_first_groups(explain, opening_pattern);
  return read;
}
