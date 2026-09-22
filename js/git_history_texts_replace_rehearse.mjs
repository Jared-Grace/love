import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { git_folder_head_paths_holding } from "./git_folder_head_paths_holding.mjs";
import { git_folder_head_path_blobs } from "./git_folder_head_path_blobs.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { git_folder_clone_bare_temp } from "./git_folder_clone_bare_temp.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
export async function git_history_texts_replace_rehearse(folder, words_text) {
  "$plain folder";
  "$plain words_text";
  "Does the whole of a word purge on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "The safe half of the job, and the half worth having on its own. It is the neighbour of the one that drops whole paths, for the case that path dropping cannot reach: a word sitting inside a file that has to go on existing. A path drop refuses a live path for exactly that reason, and until this existed the answer was to do it by hand.";
  "COMMIT MESSAGES ARE PURGED IN THE SAME PASS AND WITH THE SAME WORDS. A message is the half everybody forgets, because nothing about a file listing shows it - a body of work moved out of a repository leaves its name behind in forty subjects that no path drop touches. The words are the same words, so the instructions are written once and handed to both halves of the tool, and the two can never come to disagree.";
  "THE PRESENT IS ALLOWED TO CHANGE HERE, and this is the one thing it does differently from its path-dropping neighbour. A word in the past is usually a word in the present too, so demanding an untouched present would demand that every file be cleaned by hand first, which is the work this was built to stop doing. What is proved instead is narrower and stronger: not one file was added or taken away, and every file whose content moved is a file that already held one of the words. A rewrite that touched anything else is refused.";
  "The list it is proved against is gathered before the copy is taken and from the live folder, so the proof cannot be read off its own answer.";
  "WHAT IS LEFT HOLDING A WORD AFTERWARDS IS HANDED BACK RATHER THAN REFUSED, because some of it is meant to be. A word is taken out where it stands on its own, and the letters of a short word sit inside longer innocent names that must not move - so the copy is asked the wider question again at the end and the answer is a list for a person to read, which is the one judgement here that cannot be made by a rule.";
  "The instructions are written to the machine's scratch folder rather than into the copy. The tool clears out what it finds inside the repository it is rewriting, so a file left in there is a file that may not be there when it is read.";
  "Where the copy is made and why is the copying function's own business, and its reasons are written down there rather than repeated here.";
  arguments_assert(arguments, 2);
  let words = text_split_comma(words_text);
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named to take out of the history - would you like to pass them as one comma-joined word?",
    words_text,
  });
  let replacements = git_history_texts_replacements_text(words);
  let holding = await git_folder_head_paths_holding(folder, words);
  let blobs_before = await git_folder_head_path_blobs(folder);
  let commits_before = await git_folder_commits_count(folder);
  let clone_folder = await git_folder_clone_bare_temp(folder);
  let commit = await git_folder_head_commit(clone_folder);
  let name = await uuid();
  let temp = await folder_machine_temp();
  let replacements_path = path_join([temp, name]);
  let fs = await import("fs");
  await fs.promises.writeFile(replacements_path, replacements, "utf-8");
  let asked = git_filter_repo_asked_start();
  list_add_multiple(asked, [
    "--replace-text",
    replacements_path,
    "--replace-message",
    replacements_path,
  ]);
  await git_folder_run(clone_folder, asked);
  let blobs_after = await git_folder_head_path_blobs(clone_folder);
  let paths_before = properties_get(blobs_before);
  let paths_after = properties_get(blobs_after);
  let known = list_unique_set(paths_after);
  let gone = list_set_difference(paths_before, known);
  list_empty_is_assert_json(gone, {
    hint: "the rewrite took files out of the current commit, which taking words out of them can never do - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    gone,
  });
  let known2 = list_unique_set(paths_before);
  let arrived = list_set_difference(paths_after, known2);
  list_empty_is_assert_json(arrived, {
    hint: "the rewrite put files into the current commit that were not there before - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    arrived,
  });
  function moved_is(path) {
    let before = blobs_before[path];
    let after = blobs_after[path];
    let same = equal(before, after);
    let n = not(same);
    return n;
  }
  let changed = list_filter(paths_before, moved_is);
  let known3 = list_unique_set(holding);
  let stray = list_set_difference(changed, known3);
  list_empty_is_assert_json(stray, {
    hint: "the rewrite changed files that never held any of the named words, so it did something other than what it was asked - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    words,
    stray,
  });
  let tree = await git_folder_head_tree(clone_folder);
  let commits_after = await git_folder_commits_count(clone_folder);
  let remaining = await git_folder_head_paths_holding(clone_folder, words);
  let r = {
    clone_folder,
    words,
    commit,
    tree,
    commits_before,
    commits_after,
    holding,
    changed,
    remaining,
  };
  return r;
}
