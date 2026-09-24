import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { path_basename } from "./path_basename.mjs";
export async function git_history_paths_moved_alive(folder, paths) {
  "$plain folder";
  "Which of these paths - each one tracked once and not tracked now - were moved rather than deleted, and still live on under the name they were moved to.";
  "★ A MOVED FILE'S PAST IS ITS OWN PAST, NOT A FORGOTTEN ONE. When src/ became js/ every file there took a new name in one commit, and every old name went dead at the present. Read by weight alone, each old name looks like a large forgotten file, and a purge built from that reading erases the early history of files that are alive today. The human asked on 2026-09-24 that this history stay, and a rule that only lives in someone's memory is the rule the next purge breaks, so it is read off the history here instead.";
  "A path counts as moved when the commit that last deleted it also added its new name: either git itself pairs the two as a rename, or a file with the same name was added in that same commit. The second half is not a nicety. git pairs a rename only while the contents stay half alike, and the src to js move reformatted files as it moved them, so sandbox and app_g_main went across unpaired - measured on the history as it stood before the 2026-09-22 purge.";
  "The new name is followed on while it is itself dead, because a file can move more than once, and the path counts only if that walk ends on a name the present tracks. A file moved and later deleted in its new place was deleted, and its old name is as forgotten as the new one.";
  "Each deleting commit is read once however many paths it deleted, since one move commit covers thousands of files.";
  arguments_assert(arguments, 2);
  let head_text = await git_folder_run(folder, [
    "ls-tree",
    "-r",
    "--name-only",
    "HEAD",
  ]);
  let lines = text_split_newline(head_text);
  let alive = new Set(lines);
  let deleter_by_path = new Map();
  let moves_by_commit = new Map();
  async function deleter(path) {
    if (deleter_by_path.has(path)) {
      let r = deleter_by_path.get(path);
      return r;
    }
    let out = await git_folder_run(folder, [
      "log",
      "-1",
      "--format=%H",
      "--diff-filter=D",
      "--",
      path,
    ]);
    let commit = text_trim(out);
    deleter_by_path.set(path, commit);
    return commit;
  }
  async function moves(commit) {
    if (moves_by_commit.has(commit)) {
      let r2 = moves_by_commit.get(commit);
      return r2;
    }
    let out = await git_folder_run(folder, [
      "show",
      "-M",
      "--format=",
      "--name-status",
      commit,
    ]);
    let renamed = new Map();
    let added_by_name = new Map();
    for (let line of text_split_newline(out)) {
      let parts = line.split("\t");
      let status = parts[0];
      if (status.startsWith("R")) {
        renamed.set(parts[1], parts[2]);
      }
      if (equal(status, "A")) {
        let name = await path_basename(parts[1]);
        let list = added_by_name.get(name) || [];
        list.push(parts[1]);
        added_by_name.set(name, list);
      }
    }
    let m = {
      renamed,
      added_by_name,
    };
    moves_by_commit.set(commit, m);
    return m;
  }
  async function moved_to(path) {
    let commit = await deleter(path);
    if (equal(commit, "")) {
      return null;
    }
    let m = await moves(commit);
    if (m.renamed.has(path)) {
      let r3 = m.renamed.get(path);
      return r3;
    }
    let name = await path_basename(path);
    let added = m.added_by_name.get(name) || [];
    for (let candidate of added) {
      if (alive.has(candidate)) {
        return candidate;
      }
    }
    if (equal(added.length, 1)) {
      let r4 = added[0];
      return r4;
    }
    return null;
  }
  let steps_most = 10;
  let moved = [];
  for (let path of paths) {
    let at = path;
    for (let step = 0; less_than(step, steps_most); step++) {
      at = await moved_to(at);
      if (equal(at, null) || alive.has(at)) {
        break;
      }
    }
    if (not_equal(at, null) && alive.has(at)) {
      moved.push(path);
    }
  }
  return moved;
}
