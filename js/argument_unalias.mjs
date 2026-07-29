import { argument_alias_group } from "./argument_alias_group.mjs";
import { argument_alias_words } from "./argument_alias_words.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { assert_json } from "./assert_json.mjs";
import { or } from "./or.mjs";
export function argument_unalias(group_name, word) {
  "The full value a word stands for, whether it arrived short or spelled out.";
  "It is the same courtesy a fn name already receives, moved to the argument. Somebody who knows the group types one letter; somebody who does not, or who wants the line to read plainly later, types the whole word - and neither has to know which of the two the code prefers, because there is no preference.";
  "A word belonging to no group is refused rather than passed along. Falling through to a default would turn a typo into a silent choice of the other behaviour, which is the worst kind of wrong: it does something, so nobody looks.";
  let group = argument_alias_group(group_name);
  let short = property_exists(group, word);
  if (short) {
    let full = property_get(group, word);
    return full;
  }
  let shorts = properties_get(group);
  let values = [];
  for (let s of shorts) {
    let value = property_get(group, s);
    values.push(value);
  }
  let spelled = list_includes(values, word);
  let known = or(short, spelled);
  let words = argument_alias_words(group_name);
  let accepted = list_join_comma(words);
  assert_json(known, {
    hint: "this is not one of the words this argument accepts - the accepted spellings are listed here, short ones first",
    group_name,
    word,
    accepted,
  });
  return word;
}
