import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { path_join } from "./path_join.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { assert_json } from "./assert_json.mjs";
export async function git_folder_rewrite_commit_renamed(folder, commit) {
  "$plain folder";
  "$plain commit";
  arguments_assert(arguments, 2);
  ("What one commit ended up being called after a rewrite, read out of the record the rewriting tool leaves behind in the copy it rewrote.");
  ("★ A REWRITE RENAMES EVERY COMMIT FROM THE FIRST ONE IT CHANGED ONWARDS, AND ANYTHING STILL HOLDING AN OLD NAME QUIETLY STOPS MEANING ANYTHING. This repository has already paid for that: ",
    fn_name("commits_message_rules_since"),
    " names a commit to say where a rule about messages begins, a rewrite in September gave that day new names, and afterwards it named nothing at all. Both readings standing on it stopped with the tool calling the range invalid - which is a stop and not a verdict, and was taken for one for weeks. Asking at the moment of the rewrite turns that from something discovered later into something repaired the same afternoon.");
  ("THE TOOL'S OWN RECORD IS READ RATHER THAN THE NEW HISTORY SEARCHED. Two commits can carry the same day, the same message, the same content and the same author, and nothing in the result tells them apart; only the tool that did the renaming knows which one became which. A search would have to guess, and would guess most often exactly where the history is most repetitive.");
  ("A commit the rewrite did not change is listed as becoming itself, so the same answer means the name survived rather than meaning the question was not asked.");
  let path = path_join([folder, "filter-repo", "commit-map"]);
  let fs = await import("fs");
  let text = await fs.promises.readFile(path, "utf-8");
  let renamed = null;
  for (let line of text_split_newline(text)) {
    let parts = text_split_space(line);
    let pair = equal(parts.length, 2);
    if (not(pair)) {
      continue;
    }
    let named = equal(parts[0], commit);
    if (named) {
      renamed = parts[1];
    }
  }
  let found = not_equal(renamed, null);
  assert_json(found, {
    hint: "the rewriting tool's record of what became what does not mention this commit, so either the copy was rewritten by something else or the commit was never in it - the record read is named below",
    path,
    commit,
  });
  return renamed;
}
