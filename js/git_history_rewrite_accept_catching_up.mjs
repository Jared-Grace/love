import { text_words_start_removed_unless_binary } from "./text_words_start_removed_unless_binary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_history_folder_strip_texts } from "./git_history_folder_strip_texts.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { git_history_bundle_write } from "./git_history_bundle_write.mjs";
import { text_words_start_removed } from "./text_words_start_removed.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
import { git_folder_run_input } from "./git_folder_run_input.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { git_history_push_forced } from "./git_history_push_forced.mjs";
export async function git_history_rewrite_accept_catching_up(
  folder,
  rehearsed,
  words_text,
  bundle_path,
) {
  "$plain folder";
  "$plain words_text";
  "$plain bundle_path";
  arguments_assert(arguments, 4);
  ("Takes a rehearsed rewrite and moves the branch onto it while everyone else goes on committing - the commits made since the rehearsal was taken are laid on top of the rewritten past, and the branch is moved only if nobody committed in the moment between.");
  ("do NOT grant. It forces every address it writes to onto a new history, the same as the accepting step it stands beside.");
  ("★ WHY NOBODY HAS TO STOP. The accepting step beside this one refuses a rehearsal the present has moved on from, and on a machine where a rehearsal takes over an hour and ten of us commit to one branch, that means everyone stopping for the whole hour. This one asks something narrower first: does the rewritten present hold exactly the files the real present holds? When it does - and it does once the present has been cleaned of the words beforehand - every commit made since the rehearsal can be laid on the rewritten past unchanged, with only its parent and its message told again, because its files never held anything the rewrite takes out.");
  ("★ THE WORKING FILES ARE NEVER TOUCHED. The branch is moved and nothing else: because the old and new tips hold the same files, whatever anybody has half-written stays exactly where it is, which is the loss the other accepting step has to refuse a busy folder over.");
  ("★ A COMMIT THAT LANDS IN THE MOMENT BETWEEN IS REFUSED, NOT LOST. The branch is moved by naming the commit it was expected to stand on, so git refuses the move if anyone committed after the catching up - and it is caught up again and tried again. The other way round, a peer whose commit comes just after the move is refused by git the same way, and their work waits in the folder for their next commit. Nobody's commit can land on the old past.");
  ("★ A COMMIT THAT PUTS A WORD BACK IS REFUSED. Its files would be carried onto the new past unchanged, so it is checked first; the way on is to take the word out, commit, and rehearse again.");
  ("Copies of the repository laid out for the gates are left alone, and nothing unreferenced is thrown away at once - a gate may be running in one of those copies, and dropping objects out from under a process that is writing them is how a repository gets damaged. The old past leaves this machine's disk when those copies next move on and the ordinary clean-up comes round; it has already left every address it is sent to.");
  let words = text_split_comma(words_text);
  let strip_texts = await git_history_folder_strip_texts(folder);
  async function line(command_words) {
    let out = await git_folder_run(folder, command_words);
    let t = text_trim(out);
    return t;
  }
  async function lines(command_words) {
    let out = await git_folder_run(folder, command_words);
    let all = text_split_newline(out);
    let kept = list_filter(all, text_empty_not_is);
    return kept;
  }
  let from = rehearsed.commit;
  let tree_from = await line(["rev-parse", from + "^{tree}"]);
  equal_assert_json(tree_from, rehearsed.tree, {
    hint: text_combine_multiple([
      "the rewrite changes files in the present, so the branch cannot be moved without touching the working files - take the words out of those files first (",
      fn_name("file_words_start_removed"),
      "), commit, and rehearse again",
    ]),
    changed: rehearsed.changed,
    clone_folder: rehearsed.clone_folder,
  });
  let bundle = await git_history_bundle_write(folder, bundle_path);
  let holding_ref = "refs/history_rewrite/main";
  await git_folder_run(folder, [
    "fetch",
    rehearsed.clone_folder,
    "+main:" + holding_ref,
  ]);
  let tip = await line(["rev-parse", holding_ref]);
  let mapped = {};
  mapped[from] = tip;
  let dropped = rehearsed.paths;
  function message_told(message) {
    let result = message;
    for (let s of strip_texts) {
      result = result.split(s).join("");
    }
    result = text_words_start_removed(result, words);
    return result;
  }
  async function commit_laid(c) {
    let parents = await lines(["rev-list", "--parents", "-n", "1", c]);
    let parts = parents[0].split(" ");
    let single = equal(parts.length, 2);
    assert_json(single, {
      hint: "a commit made since the rehearsal does not have exactly one parent, and only a straight line can be laid onto the rewritten past - nothing has moved",
      commit: c,
    });
    let parent = parts[1];
    let paths = await lines([
      "diff-tree",
      "-r",
      "--no-commit-id",
      "--name-only",
      "--diff-filter=ACMRT",
      parent,
      c,
    ]);
    function dropped_is(path) {
      let d = list_includes(dropped, path);
      return d;
    }
    let returned = list_filter(paths, dropped_is);
    list_empty_is_assert_json(returned, {
      hint: "a commit made since the rehearsal brings back a file the rewrite takes out of the past - nothing has moved; delete it, commit, and rehearse again",
      commit: c,
      returned,
    });
    let worded = [];
    for (let path of paths) {
      let content = await git_folder_run(folder, ["show", c + ":" + path]);
      let cleaned = text_words_start_removed_unless_binary(content, words);
      let b = equal(cleaned, content);
      if (not(b)) {
        worded.push(path);
      }
    }
    list_empty_is_assert_json(worded, {
      hint: text_combine_multiple([
        "a commit made since the rehearsal puts a named word back into these files - nothing has moved; take it out (",
        fn_name("file_words_start_removed"),
        "), commit, and rehearse again",
      ]),
      commit: c,
      worded,
    });
    let raw = await git_folder_run(folder, ["cat-file", "commit", c]);
    let split_at = raw.indexOf("\n\n");
    let header = raw.slice(0, split_at);
    let message = raw.slice(split_at + 2);
    let parent_line = "\nparent " + parent + "\n";
    let header_padded = header + "\n";
    let found = header_padded.includes(parent_line);
    assert_json(found, {
      hint: "a commit's own record does not name the parent git reports for it - nothing has moved",
      commit: c,
    });
    let header_new = header_padded
      .replace(parent_line, "\nparent " + mapped[parent] + "\n")
      .slice(0, -1);
    let raw_new = header_new + "\n\n" + message_told(message);
    let out = await git_folder_run_input(
      folder,
      ["hash-object", "-t", "commit", "-w", "--stdin"],
      raw_new,
    );
    mapped[c] = text_trim(out);
  }
  let tries = 0;
  let laid = 0;
  let head = null;
  let moved = false;
  while (not(moved)) {
    tries = tries + 1;
    let patient = less_than_equal(tries, 20);
    assert_json(patient, {
      hint: "the branch kept moving every time it was caught up - nothing has moved; try again when the folder is quieter",
      tries,
    });
    head = await line(["rev-parse", "refs/heads/main"]);
    async function lambda() {
      await git_folder_run(folder, ["merge-base", "--is-ancestor", from, head]);
    }
    let descends = await catch_error_text_or_null_async(lambda);
    equal_assert_json(descends, null, {
      hint: "the branch no longer stands on the commit the rehearsal was taken at - somebody moved it backwards or sideways, so nothing has moved",
      from,
      head,
    });
    let since = await lines(["rev-list", "--reverse", from + ".." + head]);
    for (let c of since) {
      await commit_laid(c);
      laid = laid + 1;
    }
    let head_new = mapped[head];
    async function lambda2() {
      await git_folder_run(folder, [
        "update-ref",
        "-m",
        "history rewrite",
        "refs/heads/main",
        head_new,
        head,
      ]);
    }
    let refused = await catch_error_text_or_null_async(lambda2);
    moved = equal(refused, null);
    from = head;
  }
  let tree_before = await line(["rev-parse", head + "^{tree}"]);
  let tree_after = await line(["rev-parse", "refs/heads/main^{tree}"]);
  equal_assert_json(tree_after, tree_before, {
    hint: "the branch was moved onto a commit holding different files from the one it left, which laying commits on unchanged should never do - the undo bundle named below restores it, and nothing has been sent anywhere yet",
    bundle_path,
  });
  await git_folder_run(folder, ["update-ref", "-d", holding_ref]);
  let sent = null;
  async function pushed_forced() {
    sent = await git_history_push_forced(folder);
  }
  let trouble = await catch_error_text_or_null_async(pushed_forced);
  await git_folder_run(folder, ["reflog", "expire", "--expire=now", "--all"]);
  let r = {
    bundle,
    head_before: head,
    head_after: mapped[head],
    laid,
    tries,
    sent,
    trouble,
  };
  return r;
}
