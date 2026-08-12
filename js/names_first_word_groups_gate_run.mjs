import { property_exists_not } from "./property_exists_not.mjs";
import { property_equals } from "./property_equals.mjs";
import { fn_name } from "./fn_name.mjs";
import { names_first_word_groups } from "./names_first_word_groups.mjs";
import { assert_message } from "./assert_message.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
export function names_first_word_groups_gate_run() {
  ("the four things ",
    fn_name("names_first_word_groups"),
    " promises, asked of one made-up list of names. run: node scripts/ai.mjs ",
    fn_name("names_first_word_groups_gate_run"));
  ("made up rather than taken from anywhere real, because a real list holds the cases it happens to have today and this has to hold the ones that decide the rule. the reason it is worth holding at all is that the rule REPLACED remembering: what used to be one typed line per name is now a count, so a count that quietly changed its mind would file things silently rather than fail");
  let names = ["day_one", "day_two", "day_three", "gospel_share", "study"];
  let minimum = 2;
  let groups = names_first_word_groups(names, minimum);
  let grouped = property_equals(groups, "day_one", "day");
  assert_message(grouped, "names sharing a first word are grouped under it");
  let members = object_property_names(groups).length;
  let all_three = equal(members, 3);
  assert_message(
    all_three,
    "EVERY name sharing that word is in the group, not just the first one met",
  );
  let b = property_exists_not(groups, "gospel_share");
  assert_message(
    b,
    "a first word only one name has is no group - a heading saying what the name said",
  );
  let b2 = property_exists_not(groups, "study");
  assert_message(
    b2,
    "a name with no separator is a whole word and joins nothing",
  );
  let minimum_high = 4;
  let groups_high = names_first_word_groups(names, minimum_high);
  let none = equal(object_property_names(groups_high).length, 0);
  assert_message(
    none,
    "the minimum is obeyed - three names do not make a group of four",
  );
  let r = {
    groups,
  };
  return r;
}
