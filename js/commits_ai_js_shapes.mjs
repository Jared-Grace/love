import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { text_length } from "./text_length.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function commits_ai_js_shapes(count_given) {
  "How the hand-made edits to this repo's code actually look, one bucket per shape";
  "The commit message is the measurement. A commit named after a command was made by that command; a commit named `ai` says nothing named could do it, so somebody wrote it out by hand. Counting the second kind says how much of the editing the named transforms actually cover, and the shape of those commits says which transform is missing - chosen from what people kept doing rather than from a list written months ago";
  "Only the code is looked at. Prose, data and sermon text are hand-written by their nature and no transform was ever going to make them, so counting them would inflate the gap with work that is not missing anything";
  "One ask of the history rather than one per commit. The whole range comes back as a single reading, which is the difference between a few hundred programs started and one";
  let count = integer_from_base_try(count_given, 10);
  let folder = folder_current_absolute();
  let range = "HEAD~" + count + "..HEAD";
  let words = ["log", range, "--format=%H\t%s", "--numstat", "--", "js"];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let commits = [];
  let current = null;
  for (let line of lines) {
    let parts = text_split(line, "\t");
    let width = list_size(parts);
    let header = equal(width, 2);
    if (header) {
      ("Two fields is the commit line and three is a changed file, which is the whole of the telling apart - a message with a tab in it cannot arrive, since every message is put through the one function that turns the awkward characters into spaces before the commit is made");
      let hash = list_first(parts);
      current = {
        commit: hash,
        subject: list_last(parts),
        files: 0,
        added: 0,
        removed: 0,
      };
      list_add(commits, current);
      continue;
    }
    let numbered = equal(width, 3);
    if (numbered) {
      if (current) {
        let added = integer_from_base_try(list_get(parts, 0), 10);
        let removed = integer_from_base_try(list_get(parts, 1), 10);
        current.files = current.files + 1;
        current.added = current.added + added;
        current.removed = current.removed + removed;
      }
    }
  }
  ("Bucketed by what a transform would have to be able to do: how many files it reached, and how much it put in and took out of them");
  let buckets = {};
  let hand = 0;
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let named = equal(subject, "ai");
    if (!named) {
      continue;
    }
    let files = property_get(commit, "files");
    let none = equal(files, 0);
    if (none) {
      continue;
    }
    hand = hand + 1;
    let key = commits_shape_name(commit);
    let seen = property_exists(buckets, key);
    let so_far = 0;
    if (seen) {
      so_far = property_get(buckets, key);
    }
    property_set(buckets, key, so_far + 1);
  }
  let r = {
    window: count,
    hand_edited_code_commits: hand,
    shapes: buckets,
  };
  return r;
}
function commits_shape_name(commit) {
  let files = property_get(commit, "files");
  let added = property_get(commit, "added");
  let removed = property_get(commit, "removed");
  let single = equal(files, 1);
  if (!single) {
    let touch = added + removed;
    let broad = touch > files * 6;
    if (broad) {
      return "many files, large";
    }
    return "many files, small each (codemod-shaped)";
  }
  let pure_add = equal(removed, 0);
  if (pure_add) {
    let one = added < 4;
    if (one) {
      return "one file, a line or two added";
    }
    let body = added < 20;
    if (body) {
      return "one file, a block added";
    }
    return "one file, whole new function";
  }
  let pure_cut = equal(added, 0);
  if (pure_cut) {
    return "one file, lines only removed";
  }
  let swap = added < 4 && removed < 4;
  if (swap) {
    return "one file, a line or two replaced";
  }
  let small = added < 12 && removed < 12;
  if (small) {
    return "one file, a block replaced";
  }
  return "one file, rewritten";
}
