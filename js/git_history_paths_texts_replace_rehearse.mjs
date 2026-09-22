import { git_folder_history_paths_word_commits_count } from "./git_folder_history_paths_word_commits_count.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { git_history_paths_texts_callback } from "./git_history_paths_texts_callback.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { git_folder_head_path_blobs } from "./git_folder_head_path_blobs.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { git_folder_clone_bare_temp } from "./git_folder_clone_bare_temp.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { git_folder_head_paths_holding } from "./git_folder_head_paths_holding.mjs";
export async function git_history_paths_texts_replace_rehearse(
  folder,
  paths_text,
  words_text,
) {
  "$plain folder";
  "$plain paths_text";
  "$plain words_text";
  "Takes named words out of named files everywhere they have ever been, on a copy nobody is using, and proves before anybody is asked to accept it that nothing outside those files moved. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "★ THIS EXISTS BECAUSE A WORD CAN NEED TAKING OUT OF ONE FILE AND NEED LEAVING ALONE IN ANOTHER. The other command here asks for a word everywhere, which is right for a word that should not exist at all. It is wrong for a name that identifies somebody in the short list it sat alone in and is an ordinary word of the world in the long list next to it: asked for everywhere, it would gut a real vocabulary in every commit. What identified anybody was never the word - it was the shortness of the list holding it. So the file is what has to be named, and the word is only what to look for inside it.";
  "★ HEAD'S TREE MUST COME OUT UNCHANGED, AND THAT IS THE STRONGEST THING PROVED HERE. If a named word is still live in a named file, replacing it through the whole history replaces it in the present too, and the rewrite would quietly leave the marker text sitting in working code. Refusing on a changed tree turns that into a stop before anything is accepted. It also means the working copy has to be cleaned up first, by hand, in the ordinary way - the history rewrite is for the past, and asking it to do the present is how live code gets mangled.";
  "Nothing may be added and nothing may be dropped. A scoped replacement changes what is inside files and must never change which files there are, so a path present before and missing after, or the other way round, is a refusal rather than a note. The number of commits must not move either.";
  "★ EVERY FILE THAT CHANGED MUST BE ONE THAT WAS NAMED. This is the proof that the scoping held rather than the assumption that it did, and it is the one that would catch the mistake this whole command was built to avoid. It is asked of the present tree, which is where it can be asked cheaply and where an unnamed file being touched would show up the same way it would anywhere else.";
  arguments_assert(arguments, 3);
  let paths = text_split_comma(paths_text);
  let any_paths = list_empty_not_is(paths);
  assert_json(any_paths, {
    hint: "no files were named to take the words out of, and a scoped replacement naming no files would report success having changed nothing - would you like to name the files?",
    folder,
  });
  let words = text_split_comma(words_text);
  let any_words = list_empty_not_is(words);
  assert_json(any_words, {
    hint: "no words were named to take out of these files - would you like to name the words?",
    folder,
  });
  let replacements = git_history_texts_replacements_text(words);
  let callback = git_history_paths_texts_callback(paths);
  let commits_before = await git_folder_commits_count(folder);
  let blobs_before = await git_folder_head_path_blobs(folder);
  let tree_before = await git_folder_head_tree(folder);
  let clone_folder = await git_folder_clone_bare_temp(folder);
  let commit = await git_folder_head_commit(clone_folder);
  let name = await uuid();
  let temp = await folder_machine_temp();
  let replacements_path = path_join([temp, name]);
  let fs = await import("node:fs");
  await fs.promises.writeFile(replacements_path, replacements, "utf8");
  let asked = git_filter_repo_asked_start();
  list_add_multiple(asked, [
    "--replace-text",
    replacements_path,
    "--file-info-callback",
    callback,
  ]);
  await git_folder_run(clone_folder, asked);
  let blobs_after = await git_folder_head_path_blobs(clone_folder);
  let paths_before = properties_get(blobs_before);
  let paths_after = properties_get(blobs_after);
  let known = list_unique_set(paths_after);
  let gone = list_set_difference(paths_before, known);
  list_empty_is_assert_json(gone, {
    hint: "these files stood in the present before the replacement and are missing after it, and a replacement is only ever allowed to change what is inside a file",
    folder,
    commit,
  });
  let known2 = list_unique_set(paths_before);
  let arrived = list_set_difference(paths_after, known2);
  list_empty_is_assert_json(arrived, {
    hint: "these files were not in the present before the replacement and are there after it, and a replacement is only ever allowed to change what is inside a file",
    folder,
    commit,
  });
  function git_history_paths_texts_replace_rehearse_moved(path) {
    let before = blobs_before[path];
    let after = blobs_after[path];
    let same = equal(before, after);
    let moved = not(same);
    return moved;
  }
  let changed = list_filter(
    paths_before,
    git_history_paths_texts_replace_rehearse_moved,
  );
  let named = list_unique_set(paths);
  let stray = list_set_difference(changed, named);
  list_empty_is_assert_json(stray, {
    hint: "these files changed and nobody named them, so the replacement reached outside the files it was scoped to - this is the one thing this command exists to make impossible",
    folder,
    commit,
  });
  let tree_after = await git_folder_head_tree(clone_folder);
  equal_assert_json(tree_before, tree_after, {
    hint: "the present came out different from how it went in, which means one of these words is still live in one of these files - take it out of the working copy first and commit that, then rewrite the past",
    folder,
    commit,
  });
  let commits_after = await git_folder_commits_count(clone_folder);
  equal_assert_json(commits_before, commits_after, {
    hint: "the number of commits moved, and a replacement inside files is not allowed to add or drop one",
    folder,
    commit,
  });
  let before_counts = {};
  let after_counts = {};
  for (let word of words) {
    let was = await git_folder_history_paths_word_commits_count(
      folder,
      paths,
      word,
    );
    before_counts[word] = was;
    let now = await git_folder_history_paths_word_commits_count(
      clone_folder,
      paths,
      word,
    );
    after_counts[word] = now;
    let found = greater_than(was, 0);
    assert_json(found, {
      hint: "this word was never in these files anywhere in the past, so the rewrite had nothing to do - the word or the path is spelled a way this repository never used, and every other proof here passes for a rewrite that changed nothing",
      word,
      paths,
      folder,
    });
    equal_assert_json(now, 0, {
      hint: "this word is still in the past of these files after the rewrite, so the replacement did not reach everywhere it was asked to",
      word,
      paths,
      folder,
    });
  }
  let remaining = await git_folder_head_paths_holding(clone_folder, words);
  let r = {
    clone_folder,
    words,
    paths,
    commit,
    tree: tree_after,
    commits_before,
    commits_after,
    changed,
    before_counts,
    after_counts,
    remaining,
  };
  return r;
}
