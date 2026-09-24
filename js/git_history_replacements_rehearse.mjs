import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_folder_head_paths_holding } from "./git_folder_head_paths_holding.mjs";
import { git_folder_head_path_blobs } from "./git_folder_head_path_blobs.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { git_folder_clone_bare_temp } from "./git_folder_clone_bare_temp.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_filter_repo_asked_start } from "./git_filter_repo_asked_start.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function git_history_replacements_rehearse(
  folder,
  replacements,
  words,
) {
  "$plain folder";
  "$plain replacements";
  "Runs one already-written set of rewriting instructions over everything a repository has ever held, on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "★ THE INSTRUCTIONS ARE HANDED IN RATHER THAN BUILT HERE, WHICH IS THE WHOLE REASON THIS STANDS ON ITS OWN. Two callers want the same proof over different instructions: one takes a list of words out where each begins a word, the other puts an innocent word in their place wherever their letters stand. Everything after the instructions are written is identical between them - the copy, the counts, the four refusals, the list of what still holds a word at the end - and written twice it would be two things to keep in step, where the half that drifted would be a refusal quietly weakened in one of them.";
  "The words are handed in beside the instructions because the proof needs them and cannot read them back out of the instructions. They say which files are allowed to move: a file whose content changed that never held one of them means the rewrite did something other than what it was asked.";
  "COMMIT MESSAGES ARE REWRITTEN IN THE SAME PASS AND BY THE SAME INSTRUCTIONS. A message is the half everybody forgets, because nothing about a file listing shows it - a body of work moved out of a repository leaves its name behind in forty subjects that no path drop touches. The instructions are one text handed to both halves of the tool, so the two can never come to disagree.";
  "THE PRESENT IS ALLOWED TO CHANGE HERE, and this is the one thing it does differently from its path-dropping neighbour. A word in the past is usually a word in the present too, so demanding an untouched present would demand that every file be cleaned by hand first, which is the work this was built to stop doing. What is proved instead is narrower and stronger: not one file was added or taken away, and every file whose content moved is a file that already held one of the words.";
  "The list it is proved against is gathered before the copy is taken and from the live folder, so the proof cannot be read off its own answer.";
  "WHAT IS LEFT HOLDING A WORD AFTERWARDS IS HANDED BACK RATHER THAN REFUSED, because some of it is meant to be. A word is asked for by a rule, and a rule has edges - so the copy is asked the question again at the end and the answer is a list for a person to read, which is the one judgement here that cannot be made by a rule. That list is also the only thing that can disagree: a rewrite which replaced nothing at all comes back with the same trees, the same blobs and the same number of commits as one which did the whole job.";
  "The instructions are written to the machine's scratch folder rather than into the copy. The tool clears out what it finds inside the repository it is rewriting, so a file left in there is a file that may not be there when it is read.";
  "Where the copy is made and why is the copying function's own business, and its reasons are written down there rather than repeated here.";
  arguments_assert(arguments, 3);
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named for the rewrite to be proved against - would you like to pass the same words the instructions were built from?",
    replacements,
  });
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
    hint: "the rewrite took files out of the current commit, which rewriting words inside them can never do - the copy is left in place to look at, and nothing has been sent anywhere",
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
  equal_assert_json(commits_after, commits_before, {
    hint: "the rewrite came back holding a different number of commits than it was given, so some of the past was thrown away rather than only changed - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    commits_before,
    commits_after,
  });
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
