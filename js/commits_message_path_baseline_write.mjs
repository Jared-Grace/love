import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_path_named } from "./commits_message_path_named.mjs";
import { property_get } from "./property_get.mjs";
import { commits_message_path_baseline_path } from "./commits_message_path_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function commits_message_path_baseline_write() {
  "Rewrite the record of the commits messaged with a path reaching out of this repo, from what the history carries right now. For shrinking it - never for blessing a new one, which the growth check below refuses.";
  "THE RECORD IS EMPTY AND THIS IS HOW IT STAYS EMPTY. Growth being refused means the only way a commit gets written down here is by hand, deliberately, after somebody has looked at how it was written - which is the whole of what was missing when the sibling rule went red for good with five commits nobody had accounted for.";
  arguments_assert(arguments, 0);
  let told = await commits_message_path_named();
  let known = property_get(told, "offenders");
  let path = commits_message_path_baseline_path();
  let f_name = fn_name("ai_git");
  let hint = text_combine_multiple([
    "a commit message carries a path reaching out of this repo that was not recorded before - the message cannot be changed, so find out what wrote it and stop that, and take ",
    f_name,
    " where the real argument cannot be written publicly, before recording anything here",
  ]);
  await baseline_known_growth_assert(known, path, hint);
  let r = await baseline_known_write(known, path);
  return r;
}
