import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { git_folder_head_paths_holding } from "./git_folder_head_paths_holding.mjs";
import { git_folder_head_path_blobs } from "./git_folder_head_path_blobs.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { git_history_folder_strip_texts } from "./git_history_folder_strip_texts.mjs";
import { git_history_literals_strip_replacements_text } from "./git_history_literals_strip_replacements_text.mjs";
import { list_last } from "./list_last.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { git_folder_clone_bare_temp } from "./git_folder_clone_bare_temp.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_folder_messages_text_commits } from "./git_folder_messages_text_commits.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_filter_repo_asked_start } from "./git_filter_repo_asked_start.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { git_folder_history_paths_commits_count } from "./git_folder_history_paths_commits_count.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { git_folder_rewrite_commit_renamed } from "./git_folder_rewrite_commit_renamed.mjs";
export async function git_history_purge_rehearse(
  folder,
  words_text,
  paths_text,
) {
  "$plain folder";
  "$plain words_text";
  "$plain paths_text";
  "Does the whole of a purge on a copy nobody is using, and proves the result before anybody is asked to accept it: named files taken out of the past, and named words taken out of everything that is left, in one pass. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ THERE IS A THIRD HALF NOW, AND IT IS HERE FOR THE SAME REASON THE OTHER TWO ARE TOGETHER. A commit message is neither a file's contents nor a file's name, so both of the other passes walk straight past it: a message can go on naming a folder on somebody's disk, and a file it names, long after the file itself has been taken out of every commit. It costs almost nothing to add - a message rewrite reads no blob - and it cannot be run cheaply on its own afterwards, because a second pass would have to prove itself against a past the first one has already replaced. Which texts come off and in what order is ",
    fn_name("git_history_folder_strip_texts"),
    "'s to say, and what it hands back is used here and in the command that does only this half, so the two cannot drift.");
  ("★ THE MESSAGE INSTRUCTIONS ARE A SEPARATE FILE FROM THE CONTENT ONES, AND THE STRIPS COME FIRST IN IT. Separate because a folder path taken out of a message should not be taken out of a file that has a reason to hold one - the two questions only looked like one question while the same file was handed to both. First because a word replacement landing inside a path breaks the path into something the strip no longer matches: that has already happened once here, where an earlier purge left a message reading a machine path with two of its parts replaced, and a strip written for the whole path walked past it.");
  ("★ IT RENAMES THE COMMIT ",
    fn_name("commits_message_rules_since"),
    " POINTS AT, AND HANDS BACK WHAT TO SET IT TO. That function names a commit to say where the rules about messages begin, and the messages this strips reach back before it. When that happens the old name means nothing afterwards, both readings standing on it stop with the tool calling the range invalid - a stop and not a verdict, and taken for one for weeks the last time. The new name is read out of the rewriting tool's own record while it is still known. The same value back means no repair is needed.");
  ("★ NEITHER HALF FINISHES THE JOB ALONE, AND THAT IS THE WHOLE REASON THIS EXISTS. Taking the words out rewrites what is inside a file and leaves the file, standing in the past under the name the words were in - a file emptied of every mention of a thing is still listed, by that thing's name, in every walk of the history. Dropping the path takes the file and its name together and cannot touch a word in a file that has to go on existing, nor a word in a commit message. Run either on its own and what is left over is exactly the part nobody would think to look for, because the part that was looked for is gone.");
  ("They are asked for in one pass rather than in two runs, and that is not a saving of time so much as of nerve. The expensive half of this reads every version of every file the repository has ever held; on the repository it was written for that is seventy minutes, and two of those is an afternoon in which nobody else can commit. More than that: two runs means two rewrites to accept, and the second one stands on a history the first one has already replaced, so the proof that the present survived has to be taken twice against two different pasts. One pass has one present and one proof.");
  ("THE PRESENT IS ALLOWED TO CHANGE, in exactly the way the word half allows it. A word in the past is usually a word in the present too, so demanding an untouched present would demand that every file be cleaned by hand first. What is proved instead is narrower and stronger: not one file was added or taken away, and every file whose content moved is a file that already held one of the words. Dropping the paths cannot widen that, because a path the present still holds is refused before anything begins.");
  ("The list the changes are proved against is gathered before the copy is taken and from the live folder, so the proof cannot be read off its own answer. It is gathered by plain runs of letters, which is deliberately wider than the rule being proved, so that a file which changed and is not on it is a real fault rather than a gap in the question.");
  ("THE NAMED FILES ARE PROVED ABSENT FROM THE WHOLE PAST RATHER THAN TRUSTED TO BE. That is the one proof here that costs its own walk of the history, and it is worth it: it is the only reading that would catch a path named in a spelling the repository never used, which is the mistake this is easiest to make - a file list typed from memory, one name wrong, and the rewrite reports success over a file that is still there.");
  ("WHAT IS LEFT HOLDING A WORD AFTERWARDS IS HANDED BACK RATHER THAN REFUSED, because some of it is meant to be. A word is taken out where it stands on its own, and the letters of a short word sit inside longer innocent names that must not move - so the copy is asked the wider question again at the end and the answer is a list for a person to read, which is the one judgement here that cannot be made by a rule.");
  ("The instructions are written to the machine's scratch folder rather than into the copy. The tool clears out what it finds inside the repository it is rewriting, so a file left in there is a file that may not be there when it is read.");
  arguments_assert(arguments, 3);
  let words = text_split_comma(words_text);
  let any_words = list_empty_not_is(words);
  assert_json(any_words, {
    hint: "no words were named to take out of the history - would you like to pass them as one comma-joined word?",
    words_text,
  });
  let paths = text_split_comma(paths_text);
  let any_paths = list_empty_not_is(paths);
  assert_json(any_paths, {
    hint: "no files were named to take out of the history - this is the command for doing both halves at once, so naming only words means reaching for the word-replacing one instead",
    paths_text,
  });
  let replacements = git_history_texts_replacements_text(words);
  let holding = await git_folder_head_paths_holding(folder, words);
  let blobs_before = await git_folder_head_path_blobs(folder);
  function tracked_still_is(path) {
    let held = blobs_before[path];
    return held;
  }
  let alive = list_filter(paths, tracked_still_is);
  list_empty_is_assert_json(alive, {
    hint: "these paths are still tracked by the current commit, so dropping them would take live files out of the present - would you like to name only paths the present no longer holds?",
    alive,
  });
  let strip_texts = await git_history_folder_strip_texts(folder);
  let strips = git_history_literals_strip_replacements_text(strip_texts);
  let messages_replacements = strips + "\n" + replacements;
  let home = list_last(strip_texts);
  let commits_before = await git_folder_commits_count(folder);
  let clone_folder = await git_folder_clone_bare_temp(folder);
  let commit = await git_folder_head_commit(clone_folder);
  let messages_before = await git_folder_messages_text_commits(
    clone_folder,
    home,
  );
  let name = await uuid();
  let temp = await folder_machine_temp();
  let replacements_path = path_join([temp, name]);
  let messages_name = await uuid();
  let messages_path = path_join([temp, messages_name]);
  let fs = await import("fs");
  await fs.promises.writeFile(replacements_path, replacements, "utf-8");
  await fs.promises.writeFile(messages_path, messages_replacements, "utf-8");
  let asked = git_filter_repo_asked_start();
  list_add_multiple(asked, ["--invert-paths"]);
  for (let path of paths) {
    list_add_multiple(asked, ["--path", path]);
  }
  list_add_multiple(asked, [
    "--replace-text",
    replacements_path,
    "--replace-message",
    messages_path,
  ]);
  await git_folder_run(clone_folder, asked);
  let blobs_after = await git_folder_head_path_blobs(clone_folder);
  let paths_before = properties_get(blobs_before);
  let paths_after = properties_get(blobs_after);
  let known = list_unique_set(paths_after);
  let gone = list_set_difference(paths_before, known);
  list_empty_is_assert_json(gone, {
    hint: "the rewrite took files out of the current commit, which neither taking words out of them nor dropping paths the present does not hold can ever do - the copy is left in place to look at, and nothing has been sent anywhere",
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
  let touching = await git_folder_history_paths_commits_count(
    clone_folder,
    paths,
  );
  equal_assert_json(touching, 0, {
    hint: "commits in the rewritten past still touch the files that were named for dropping, so at least one of those names is spelled differently from the way the repository spells it - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    paths,
  });
  let tree = await git_folder_head_tree(clone_folder);
  let commits_after = await git_folder_commits_count(clone_folder);
  equal_assert_json(commits_after, commits_before, {
    hint: "the rewrite came back holding a different number of commits than it was given, so some of the past was thrown away rather than only changed - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    commits_before,
    commits_after,
  });
  let messages_after = await git_folder_messages_text_commits(
    clone_folder,
    home,
  );
  list_empty_is_assert_json(messages_after, {
    hint: "commit messages in the rewritten copy still name a folder on this machine, so the message half of the pass did not do what it was asked - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    remaining: messages_after.length,
  });
  let since = commits_message_rules_since();
  let since_after = await git_folder_rewrite_commit_renamed(
    clone_folder,
    since,
  );
  let remaining = await git_folder_head_paths_holding(clone_folder, words);
  let r = {
    clone_folder,
    words,
    paths,
    commit,
    tree,
    commits_before,
    commits_after,
    holding,
    changed,
    remaining,
    messages_stripped: messages_before.length,
    since,
    since_after,
  };
  return r;
}
