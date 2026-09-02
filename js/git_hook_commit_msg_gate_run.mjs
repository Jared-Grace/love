import { arguments_assert } from "./arguments_assert.mjs";
import { git_hook_commit_msg_text } from "./git_hook_commit_msg_text.mjs";
import { git_hook_commit_msg_folders } from "./git_hook_commit_msg_folders.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { not } from "./not.mjs";
import { git_hook_commit_msg_path } from "./git_hook_commit_msg_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { equal } from "./equal.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
import { git_message_word_shorthand_is } from "./git_message_word_shorthand_is.mjs";
import { git_message_word_shorthand_cases } from "./git_message_word_shorthand_cases.mjs";
export async function git_hook_commit_msg_gate_run() {
  "Gate: every repository still carries the commit message hook, byte for byte as the code writes it, and the reading it asks still tells a shorthand key from a command name.";
  "BOTH HALVES ARE NEEDED AND NEITHER COVERS THE OTHER. A hook can sit in place, identical to the original, and decide nothing at all - the reading behind it renamed, or come to answer everything the same way - and a file comparison would call that healthy. A hook that reads correctly and is not installed anywhere refuses nothing. So the copies are compared and the reading is put to known words.";
  "A FILE THAT CANNOT BE READ COUNTS AS DRIFT RATHER THAN AS A FAULT, because the answer wanted is the same either way: write it again.";
  "A folder that is not a checkout is passed over, the same way the installer passes it over, so the two cannot disagree about what was supposed to be there.";
  arguments_assert(arguments, 0);
  let expected = git_hook_commit_msg_text();
  let folders = await git_hook_commit_msg_folders();
  async function each_folder(folder) {
    let hooks = path_join([folder, ".git", "hooks"]);
    let repo = await folder_exists(hooks);
    if (not(repo)) {
      return null;
    }
    let p = git_hook_commit_msg_path(folder);
    let actual = await file_read_try(p);
    let fresh = equal(actual, expected);
    if (fresh) {
      return null;
    }
    return p;
  }
  let checked = await list_map_unordered_async(folders, each_folder);
  let stale = list_filter_null_not_is(checked);
  let f_name = fn_name("git_hook_commit_msg_write");
  list_empty_is_assert_json(stale, {
    hint: text_combine(
      "the commit message hook is missing or has drifted from what the code writes, at the places listed - install every copy again with ",
      f_name,
    ),
  });
  async function each_case(c) {
    let word = property_get(c, "word");
    let shorthand = property_get(c, "shorthand");
    let answered = await git_message_word_shorthand_is(word);
    let agrees = equal(answered, shorthand);
    if (agrees) {
      return null;
    }
    return c;
  }
  let cases = git_message_word_shorthand_cases();
  let judged = await list_map_unordered_async(cases, each_case);
  let wrong = list_filter_null_not_is(judged);
  list_empty_is_assert_json(wrong, {
    hint: "the hook is installed but the reading behind it no longer tells a shorthand key from a command name, so it is refusing the wrong commits or refusing none - the words it disagreed about are listed with what each should have been",
    wrong,
  });
  let r = {
    folders: folders.length,
    cases: cases.length,
  };
  return r;
}
