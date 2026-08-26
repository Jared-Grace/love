import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_named } from "./commits_message_alias_named.mjs";
import { property_get } from "./property_get.mjs";
import { commits_message_alias_baseline_path } from "./commits_message_alias_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function commits_message_alias_baseline_write() {
  "Rewrite the record of the commits messaged with an alias key, from what the history carries right now. For shrinking it - never for blessing a new one, which the growth check below refuses.";
  "GROWTH IS REFUSED HERE EVEN THOUGH THE OFFENCE CANNOT BE REPAIRED, and the two facts sit together on purpose. The way a commit came to be messaged with an alias key was that the name travelled in as an argument and so never passed the door that refuses shorthand; that door has since been put in front of the by-name commit itself, so a new one is no longer possible to write. A new name arriving here therefore does not mean somebody typed a short word - it means the door has come off, and the repair is the door, not the record.";
  arguments_assert(arguments, 0);
  let told = await commits_message_alias_named();
  let known = property_get(told, "offenders");
  let path = commits_message_alias_baseline_path();
  let f_name = fn_name("function_name_full_assert");
  let f_name2 = fn_name("ai_git_command_generic");
  let hint = text_combine_multiple([
    "a commit is messaged with an alias key that was not messaged with one before - a commit message cannot be changed, so recording it is the only thing left to do about the commit itself, but it must not be done until it is known how the word got past ",
    f_name,
    " in ",
    f_name2,
    ", because that is the door and a new name here says it is open",
  ]);
  await baseline_known_growth_assert(known, path, hint);
  let r = await baseline_known_write(known, path);
  return r;
}
