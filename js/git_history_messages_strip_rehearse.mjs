import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { folder_home } from "./folder_home.mjs";
import { git_history_literals_strip_replacements_text } from "./git_history_literals_strip_replacements_text.mjs";
import { git_folder_messages_text_commits } from "./git_folder_messages_text_commits.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_folder_clone_bare_temp } from "./git_folder_clone_bare_temp.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_filter_repo_asked_start } from "./git_filter_repo_asked_start.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { git_folder_rewrite_commit_renamed } from "./git_folder_rewrite_commit_renamed.mjs";
export async function git_history_messages_strip_rehearse() {
  arguments_assert(arguments, 0);
  ("Takes this machine's own folder off the front of every commit message that carries it, on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it reads and sends nothing anywhere.");
  ("★ IT IS A MESSAGE REWRITE AND TOUCHES NO FILE AT ALL, which is what makes its proof the strictest of the three. The two that drop paths and replace words have to allow the present to change, because that is half of what they are for - so their proofs are about which files moved and why. Nothing this does can reach a file, so the whole of the present is asked for by name and has to come back identical: one name standing for every path and every piece of content at once. A single byte out of place anywhere means the tool did something other than what it was asked.");
  ("★ THE PRICE IS EVERY COMMIT NAME FROM THE FIRST CHANGED ONE ONWARDS, AND THAT IS WHY THIS IS A PASSENGER AND NEVER A REASON. Sixteen messages carrying a folder layout are worth nothing like the cost of orphaning every commit name anybody has written down, and taking a word out of a log that has already been sent to a public address does not take it back - whoever cloned in between has it, and the addresses hold it until they are made to forget. So this is built to be ready, to be run inside a sitting that was going to rewrite the history anyway, and never to be the thing that opens one.");
  ("★ THE MACHINE'S FOLDER IS WORKED OUT AND NEVER PASSED IN, and this is the whole reason it takes nothing. The text being taken out is a path, so handing it in as an argument would put it on a command line - and a command line here is what a commit message is written from. A run of this filed under its own arguments would publish, in a public log, the exact string it had just spent an hour taking out of that log. COMMIT A RUN OF THIS WITH THE SWEEPING FALLBACK AND NEVER WITH THE COMMAND-AND-ARGUMENTS ONE. Taking nothing is also what lets a standing approval be written for it, because there is no argument left to point it somewhere else.");
  ("★ THE ONE CHECK THAT CAN DISAGREE IS THE COUNT OF OFFENDING MESSAGES. The tree coming back identical, the count of commits coming back identical, the copy standing where it stood - every one of those passes perfectly for a rewrite that replaced nothing whatever, because replacing nothing is exactly what leaves them alone. So the messages are counted before and counted again after, and a rehearsal that stripped nothing fails rather than reporting success.");
  ("★ TWO TEXTS ARE TAKEN OUT AND NOT ONE, LONGEST FIRST, AND THE ORDER IS THE WHOLE DESIGN. The repository's own folder goes first, because taking that off the front leaves a path the reader can still use - which file a command touched, spelled the way this repository spells its own files. What is left over then has the home folder taken off it, which says nothing about which file and only stops the message naming a person. Listed the other way round the short one would match first, every repository path would lose only its first two parts, and the messages would come out saying neither thing properly.");
  ("★ THE SECOND TEXT WAS ADDED AFTER MEASURING, AND WITHOUT IT THIS MISSED A FIFTH OF ITS JOB. Sixteen messages here carry the home folder. Thirteen carry the repository's folder whole and were the ones this was written for; one had two of its parts already replaced by an earlier purge, so the long text no longer matched it at all; and two name a folder beside the repository rather than inside it. Asked only for the repository's folder this reported a clean success over three messages it had not touched - which is exactly the shape of failure the count-before-and-count-after was put in to catch, and did.");
  ("THE TWO THAT NAME A FOLDER BESIDE THE REPOSITORY WERE LEFT ALONE ON PURPOSE UNTIL NOW, AND THAT READING IS OVERTURNED HERE RATHER THAN FORGOTTEN. They sit before the point where a rule about messages began, and were left because editing them would throw away every commit name since. That was right while it was the only thing on offer: nobody would pay a whole history for two messages. It stops being right the moment a rewrite is happening anyway for other reasons, because then the names are already being thrown away and these two cost nothing further. So they are included, and the reason they were excluded is recorded here rather than left to be rediscovered as a disagreement.");
  ("It refuses at the start when no message holds the folder, rather than cloning first. The copy is most of half a gigabyte and the question is free, so the case where the work is already done costs a second instead of several minutes.");
  ("The numbers it is proved against are taken from the copy rather than from the live folder. Ten of us commit to one branch in a shared directory, so a number read from the folder and compared against the copy would be comparing two different moments and would go red on a peer's commit rather than on a fault.");
  ("★ IT HANDS BACK WHAT ",
    fn_name("commits_message_rules_since"),
    " HAS TO BE SET TO AFTERWARDS. That function names a commit, a rewrite renames commits, and this repository has already had both readings standing on it stop dead for weeks because the name meant nothing any more. The answer is asked of the rewriting tool's own record at the moment it is known, so the repair is part of the report rather than a thing to be discovered later. The same name coming back means that commit is older than anything this changed and the repair is not needed.");
  ("The instructions are written to the machine's scratch folder rather than into the copy, because the tool clears out what it finds inside the repository it is rewriting.");
  let folder = await git_folder_love();
  let home = (await folder_home()) + "/";
  let prefix = folder + "/";
  let texts = [prefix, home];
  let replacements = git_history_literals_strip_replacements_text(texts);
  let offending_live = await git_folder_messages_text_commits(folder, home);
  let any = list_empty_not_is(offending_live);
  assert_json(any, {
    hint: "no commit message in this repository carries the machine's own folder, so there is nothing here to take out - either this has already been run and accepted, or the repository is not where it used to be",
    offending: offending_live.length,
  });
  let clone_folder = await git_folder_clone_bare_temp(folder);
  let commit = await git_folder_head_commit(clone_folder);
  let tree_before = await git_folder_head_tree(clone_folder);
  let commits_before = await git_folder_commits_count(clone_folder);
  let offending_before = await git_folder_messages_text_commits(
    clone_folder,
    home,
  );
  let name = await uuid();
  let temp = await folder_machine_temp();
  let replacements_path = path_join([temp, name]);
  let fs = await import("fs");
  await fs.promises.writeFile(replacements_path, replacements, "utf-8");
  let asked = git_filter_repo_asked_start();
  list_add_multiple(asked, ["--replace-message", replacements_path]);
  await git_folder_run(clone_folder, asked);
  let tree = await git_folder_head_tree(clone_folder);
  equal_assert_json(tree, tree_before, {
    hint: "the rewrite changed what the current commit holds, which taking a run of characters out of commit messages can never do - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    tree_before,
    tree,
  });
  let commits_after = await git_folder_commits_count(clone_folder);
  equal_assert_json(commits_after, commits_before, {
    hint: "the rewrite came back holding a different number of commits than it was given, so some of the past was thrown away rather than only reworded - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    commits_before,
    commits_after,
  });
  let offending_after = await git_folder_messages_text_commits(
    clone_folder,
    home,
  );
  list_empty_is_assert_json(offending_after, {
    hint: "commit messages in the rewritten copy still carry the machine's folder, so the rewrite did not do the one thing it was asked for - the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    remaining: offending_after.length,
  });
  let since = commits_message_rules_since();
  let since_after = await git_folder_rewrite_commit_renamed(
    clone_folder,
    since,
  );
  let r = {
    clone_folder,
    commit,
    tree,
    commits_before,
    commits_after,
    stripped: offending_before.length,
    since,
    since_after,
  };
  return r;
}
