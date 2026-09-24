import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function git_folder_messages_text_commits(folder, text) {
  "$plain folder";
  "$plain text";
  arguments_assert(arguments, 2);
  ("Every commit whose message holds a given run of characters, across every branch the repository knows about, asked for exactly as it is spelled rather than as a pattern.");
  ("★ IT IS THE ONE READING IN A MESSAGE REWRITE THAT CAN COME BACK DISAGREEING. Everything else such a rehearsal proves - the same tree, the same content under every name, the same number of commits - passes perfectly for a rewrite that replaced nothing whatever, because replacing nothing is precisely what leaves all of those standing. Asked once before and once after, this is the only question whose answer differs depending on whether the work was actually done, and without it a rehearsal would report success over a spelling the repository never used.");
  ("IT IS ASKED FOR EXACTLY AS SPELLED, and that is not tidiness. The thing worth finding in a message here is a path, and a path read as a pattern asks for something wider than itself: every separator in it would stand for any character at all, so a message that merely resembled the path would be counted, and the check that is meant to disagree would stop being able to.");
  ("Every branch is asked rather than the one being stood on, because a message rewrite touches all of them and a count taken from one would call the job finished while another still held the text.");
  let printed = await git_folder_run(folder, [
    "log",
    "--all",
    "--format=%H",
    "--fixed-strings",
    "--grep=" + text,
  ]);
  let commits = [];
  for (let line of text_split_newline(printed)) {
    let blank = text_empty_is(line);
    if (blank) {
      continue;
    }
    list_add(commits, line);
  }
  return commits;
}
