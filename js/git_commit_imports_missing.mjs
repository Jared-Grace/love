import { arguments_assert } from "./arguments_assert.mjs";
import { git_here_run_lines } from "./git_here_run_lines.mjs";
import { set_new } from "./set_new.mjs";
import { text_split } from "./text_split.mjs";
import { list_last } from "./list_last.mjs";
import { set_add } from "./set_add.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { git_commit_file_imports_relative } from "./git_commit_file_imports_relative.mjs";
import { list_add } from "./list_add.mjs";
export async function git_commit_imports_missing(commit) {
  "$plain commit";
  "Whether one commit holds every file its own files import: the ones that name a file the same commit has not got, which is a commit no app can be built from";
  "A commit is meant to be a whole state, and mostly is, because someone finished a change and then saved it. It is not always. Where a change spans two files and the save lands between them, the commit keeps half of it - each file valid on its own, the fault only in what they say about each other. Nothing else in the repo asks this, so such a commit sits in the history looking exactly like a good one until something tries to build from it.";
  "It cost nine deployments to find one by hand. Every one of them died the same way, half an hour in, reporting the app as broken - and the app was fine. Seven chapters of the picture Bible were named by a lookup that was saved before they were written.";
  "The reading is in two passes because the exact way is far too slow and the fast way is not exact. Fifteen thousand files cannot each be fetched from the history and parsed. So a plain text scan names every file that so much as spells a relative path, which is quick and catches everything real along with a handful of impostors - code quoted inside a test's fixtures reads identically to code. Only the few files that named something absent are then fetched and parsed properly, and the impostors fall away there. Exact, and it costs a second.";
  "It is basenames that are compared rather than whole paths, because every one of these imports is a sibling and so says the same thing twice. A day when that stops being true is a day this wants rewriting rather than patching.";
  "Both passes ask git for a list and get text back. Splitting that text into lines is asked for by name rather than written out at each pass, so the two passes cannot come to disagree about what an empty line means.";
  arguments_assert(arguments, 1);
  let asked_present = ["ls-tree", "-r", "--name-only", commit, "js/"];
  let present_paths = await git_here_run_lines(asked_present);
  let present = set_new();
  for (let present_path of present_paths) {
    let list = text_split(present_path, "/");
    let present_name = list_last(list);
    set_add(present, present_name);
  }
  let pattern = "\\./[A-Za-z0-9_]+\\.mjs";
  let asked_named = ["grep", "-o", "-E", pattern, commit, "--", "js/"];
  let named_rows = await git_here_run_lines(asked_named);
  let suspects = set_new();
  for (let named_row of named_rows) {
    let parts = text_split_colon(named_row);
    let holder = parts[1];
    let list2 = text_split(parts[2], "/");
    let named = list_last(list2);
    let held = set_includes(present, named);
    if (not(held)) {
      set_add(suspects, holder);
    }
  }
  let missing = [];
  for (let suspect of suspects) {
    let paths = await git_commit_file_imports_relative(commit, suspect);
    for (let path of paths) {
      let list3 = text_split(path, "/");
      let named = list_last(list3);
      let held = set_includes(present, named);
      if (not(held)) {
        let one = {
          file: suspect,
          names: named,
        };
        list_add(missing, one);
      }
    }
  }
  let r = {
    commit,
    files: present_paths.length,
    suspects: suspects.size,
    count: missing.length,
    missing,
  };
  return r;
}
