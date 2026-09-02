import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { git_message_word_shorthand_is } from "./git_message_word_shorthand_is.mjs";
import { git_call_message } from "./git_call_message.mjs";
export async function git_hook_commit_msg_verdict(f_path) {
  "$plain f_path";
  "Reads the message a commit is about to be made under and says whether git should refuse it.";
  "This is the last door, and it stands where the others cannot. Every commit the repo makes for itself is worded by one function that spells shorthand out, so a message naming a key can only be written by somebody typing git at a terminal directly - and no amount of care inside the repo reaches that. Git will ask this about every commit however it was started, which is the one place that covers the case the code cannot.";
  "Only the first line is read, and only its first word. A message is the name of a command and then what it was run on, so the word is the whole of what can be shorthand; the rest are arguments and are already repo content.";
  "NOTHING HERE THROWS TO MEAN NO. The answer travels as a plain reading that the hook looks at, so that a fault in getting the answer and a decision to refuse cannot arrive looking the same. A file that is not there is not a refusal.";
  arguments_assert(arguments, 1);
  let text = await file_read_try(f_path);
  let missing = null_is(text);
  if (missing) {
    let unread = {
      refuse: false,
      reason: "there is no message file at that place to read",
    };
    return unread;
  }
  let lines = text_split_newline(text);
  let subject = list_first(lines);
  let words = text_split_space(subject);
  let word = list_first(words);
  let shorthand = await git_message_word_shorthand_is(word);
  let spelled = await git_call_message(word, []);
  let r = {
    refuse: shorthand,
    word,
    spelled,
    reason:
      "a commit message names the command that made the change, and its first word here is a shorthand key rather than a command name - a key can be repointed with one command, and every commit already carrying it then reads as a record of a change made by whatever it points at today. Write the message with the full name shown as spelled, or with the bare hand made word where no named command made the change",
  };
  return r;
}
