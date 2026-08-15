import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { text_tab } from "./text_tab.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
export async function git_history_url_head_matches(url, commit) {
  "$plain url";
  "$plain commit";
  "Asks one address what commit its main branch is standing on, and whether that is the commit it was expected to be standing on.";
  "Asked because a push that did not happen looks exactly like one that did. Git answers a refused force-push on a protected branch with a failure this repo's runner may or may not surface, and every push afterwards succeeds against the addresses that did take it - so the only way to know an address moved is to ask that address. This happened: a rewrite went to one of two addresses and the other sat on the old history while everything reported fine.";
  "Reads the address and writes nothing to it.";
  arguments_assert(arguments, 2);
  let printed = await git_folder_run(".", [
    "ls-remote",
    url,
    "refs/heads/main",
  ]);
  let item = text_trim(printed);
  let s = text_tab();
  let found = text_split_first(item, s);
  let matches = equal(found, commit);
  let r = {
    url,
    found,
    matches,
  };
  return r;
}
