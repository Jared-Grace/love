import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function machine_memory_available_bytes_or_null() {
  "How much memory a program starting now could actually be given, or nothing at all if this machine will not say.";
  "★ AVAILABLE AND UNUSED ARE DIFFERENT NUMBERS AND ONLY THE FIRST ONE ANSWERS THE QUESTION. What a machine calls unused counts only memory nobody has touched, and most of what is reclaimable is being held as a copy of files read earlier - that memory is handed straight over to whoever asks for it. Measured here at the same moment, unused read 4972 megabytes and available read 7401. Sizing anything off the smaller of those turns half the machine invisible.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, BECAUSE IT EXISTS TO BE DIVIDED BY. A reader that returned a plausible number when it had not actually read one would let a caller start twice the work the machine can hold and find out by being killed. Nothing is a value a caller has to make a decision about; a wrong number is not.";
  "★ IT IS READ AT THE MOMENT IT IS ASKED AND MUST NOT BE REMEMBERED. About ten of us share this one machine and none of us says what we are about to take, so this figure moved between 2 and 7.4 gigabytes inside one hour. A reading kept from earlier is a reading about a machine that is no longer there.";
  arguments_assert(arguments, 0);
  let text = null;
  try {
    text = readFileSync("/proc/meminfo", "utf8");
  } catch {
    let unread = null;
    return unread;
  }
  let lines = text.split("\n");
  function available_is(line) {
    let found = line.startsWith("MemAvailable:");
    return found;
  }
  let line = lines.find(available_is);
  if (not(line)) {
    let unnamed = null;
    return unnamed;
  }
  let after = line.split(":")[1];
  let counted = after.trim().split(" ")[0];
  let kilobytes = Number(counted);
  let bytes = multiply(kilobytes, 1024);
  return bytes;
}
