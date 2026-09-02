import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { multiply } from "./multiply.mjs";
export function machine_meminfo_bytes_or_null(line_start) {
  "$plain line_start";
  "Whichever of the memory figures this machine keeps about itself is asked for, in bytes, or nothing at all if this machine will not say.";
  "The whole beginning of the line is what is asked for, colon and all, rather than the bare word before it. Several of the names this file holds begin with the letters of another one, so a reader given the bare word would answer about whichever line came first and never say it had done so.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, BECAUSE IT EXISTS TO BE DIVIDED BY AND COMPARED AGAINST. A reader that returned a plausible number when it had not actually read one would let a caller start twice the work the machine can hold and find out by being killed. Nothing is a value a caller has to make a decision about; a wrong number is not.";
  "★ IT IS READ AT THE MOMENT IT IS ASKED AND MUST NOT BE REMEMBERED. About ten of us share this one machine and none of us says what we are about to take, so these figures move by gigabytes inside an hour. A reading kept from earlier is a reading about a machine that is no longer there.";
  arguments_assert(arguments, 1);
  let text = null;
  try {
    text = readFileSync("/proc/meminfo", "utf8");
  } catch {
    let unread = null;
    return unread;
  }
  let lines = text.split("\n");
  function named_is(meminfo_line) {
    let found = meminfo_line.startsWith(line_start);
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
