import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { multiply } from "./multiply.mjs";
export async function machine_file_figure_bytes_or_null(path, line_start) {
  "$plain path";
  "one of the files this machine keeps about itself, named in full.";
  "$plain line_start";
  "the whole beginning of the line wanted out of it, colon and all.";
  "One figure out of one of the files this machine keeps about itself, in bytes, or nothing at all if this machine will not say.";
  "The machine writes these figures in kilobytes and says so at the end of each line, so the reading is multiplied on the way out and every caller gets bytes. A caller that had to remember which unit a particular file was written in would eventually forget, and the mistake is a factor of a thousand.";
  "★ THE WHOLE BEGINNING OF THE LINE IS ASKED FOR RATHER THAN THE BARE WORD BEFORE IT. Several of the names these files hold begin with the letters of another one, so a reader given the bare word would answer about whichever line came first and never say it had done so.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, BECAUSE IT EXISTS TO BE DIVIDED BY AND COMPARED AGAINST. A reader that returned a plausible number when it had not actually read one would let a caller start twice the work the machine can hold and find out by being killed. Nothing is a value a caller has to make a decision about; a wrong number is not. A machine that keeps no such file, and a file that holds no such line, both come back as the same nothing.";
  "★ IT IS READ AT THE MOMENT IT IS ASKED AND MUST NOT BE REMEMBERED. About ten of us share this one machine and none of us says what we are about to take, so these figures move by gigabytes inside an hour. A reading kept from earlier is a reading about a machine that is no longer there.";
  "★ THE MACHINE'S OWN FILE READER IS SENT FOR WHERE IT IS USED RATHER THAN NAMED AT THE TOP, AND THAT IS WHY EVERY CALLER OF THIS WAITS FOR ITS ANSWER. Promoting a draft carries the declaration over and re-works out its neighbours from the names it calls, so a line naming something outside this repo cannot survive the crossing - measured 2026-09-02 it was dropped in both the picked-out form and the whole-name one, the reader below then failed unbound, and the catch turned that into the same nothing this gives a machine that will not say. Sending for it inside the work is an ordinary piece of work rather than a line to be re-derived, so it comes through; the cost is that everything that asks this becomes something to be waited for.";
  arguments_assert(arguments, 2);
  let text = null;
  try {
    let fs = await import("fs");
    text = fs.readFileSync(path, "utf-8");
  } catch {
    let unread = null;
    return unread;
  }
  let lines = text.split("\n");
  function named_is(machine_line) {
    let found = machine_line.startsWith(line_start);
    return found;
  }
  let named_line = lines.find(named_is);
  if (not(named_line)) {
    let unnamed = null;
    return unnamed;
  }
  let after = named_line.split(":")[1];
  let counted = after.trim().split(" ")[0];
  let kilobytes = number_from_text(counted);
  let bytes = multiply(kilobytes, 1024);
  return bytes;
}
