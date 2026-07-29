import { argument_alias_group } from "./argument_alias_group.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_add } from "./list_add.mjs";
export function argument_alias_words(group_name) {
  "Every word a group accepts - the short spellings and the full values they stand for.";
  "This is what an error message needs. Telling somebody their word was not recognised without saying what would have been leaves them guessing at a set only the code can see, and the guess is usually the same wrong word again.";
  "Short spellings come first because the full values are already readable, so a reader scanning the list meets the part they could not have worked out on their own.";
  let group = argument_alias_group(group_name);
  let shorts = properties_get(group);
  let words = [];
  for (let short of shorts) {
    list_add(words, short);
  }
  for (let short of shorts) {
    let full = property_get(group, short);
    list_add_if_not_includes(words, full);
  }
  return words;
}
