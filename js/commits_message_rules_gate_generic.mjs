import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function commits_message_rules_gate_generic(told, hint_opening) {
  "$plain hint_opening";
  "The half of a commit-message gate that is the same whichever rule is being watched - unpack what the reading walked and what it caught, finish the advice with the sentence about how far back the reading goes, and throw if anything was caught.";
  "THE SENTENCE ABOUT HOW FAR BACK IS ADDED HERE RATHER THAN WRITTEN AT EACH GATE, because it is the same warning either way and it names a function. Written twice, the day that place is moved one gate says where the reading now starts and the other says where it used to.";
  "WHAT THE GATE IS ABOUT STAYS AT THE GATE. The opening of the advice is the one thing that differs - which rule was broken and which command would not have broken it - so it is handed in whole rather than assembled from parts named here, and no gate has to fit its words to a shape somebody else chose.";
  "It takes what the reading already answered rather than the reading itself, because a gate is the thing that names its own reader, and a caller that could not see which reading it was judging would be a gate that could not be read.";
  arguments_assert(arguments, 2);
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let since = commits_message_rules_since();
  let f_name = fn_name("commits_message_rules_since");
  let hint = text_combine_multiple([
    hint_opening,
    "Nothing before ",
    since,
    " is read, and moving that place forward in ",
    f_name,
    " is not the repair",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
