import { child_output_wait_code } from "./child_output_wait_code.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function child_output_wait(child, program, words) {
  "Reads everything an already-started program printed and answers what it said on the ordinary channel.";
  "The program has already been started by the time this is asked, so nothing here chooses what runs. That is what makes it shareable: a function that picks the program from what it is handed is a launcher and belongs on the list of functions whose arguments name what to run, while one handed a program already running cannot name anything at all.";
  "The name and the words are taken only to word the complaint, so the reader of a failure sees the command as it was actually run rather than having to reconstruct it.";
  "A command that failed throws, and the error carries what was printed on both channels, because a run that quietly did nothing looks exactly like one that worked.";
  "The listening itself is done next door and only the verdict is here. Not every caller agrees that finishing on anything but nothing is a failure - a search that found nothing finishes on one and has answered - so which endings are faults had to become the part that differs while the reading stayed one thing.";
  let heard = await child_output_wait_code(child);
  let code = heard.code;
  let out = heard.out;
  if (not_equal(code, 0)) {
    let said = heard.said;
    let listed = words.join(" ");
    let message = text_combine_multiple([
      program,
      " ",
      listed,
      " exited with code ",
      code,
      "\n\nSTDOUT:\n",
      out,
      "\n\nSTDERR:\n",
      said,
    ]);
    throw new Error(message);
  }
  ("What was printed is text already - it starts empty and only ever grows by text - so writing it into a fresh piece of text changes nothing. It is written out anyway because the listening hands back a record built inside a promise, beside the running program itself, and a reader working only from names cannot tell which part of that record this is; text written fresh says so where it leaves.");
  let text = `${out}`;
  return text;
}
