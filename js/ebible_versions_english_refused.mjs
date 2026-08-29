import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_full_web_family_not } from "./ebible_versions_english_full_web_family_not.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_versions_english_refused() {
  arguments_assert(arguments, 0);
  ("the complete English translations sitting on this disk that a reader is never offered.");
  ("What is on the disk against what is handed out, and the difference is what the licence question turned away. Both gates over that question need it: one to prove the check still refuses something, the other to prove the door that hands out the list is still asking.");
  ("An empty answer is not a fault. It says every English translation here happens to be one this repo may ship, which means the refusing half of the check went untested on this run - and the gates say so rather than passing quietly.");
  let all = await ebible_versions_english_full_web_family_not();
  let choices = await ebible_versions_english_choices();
  function refused_is(bible_folder) {
    let missing = list_includes_not(choices, bible_folder);
    return missing;
  }
  let refused = list_filter(all, refused_is);
  return refused;
}
