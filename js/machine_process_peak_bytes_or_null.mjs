import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { multiply } from "./multiply.mjs";
export async function machine_process_peak_bytes_or_null() {
  "The most memory this very process has held at any moment since it started, in bytes, or nothing at all if this machine will not say.";
  "★ IT IS THE HIGH WATER MARK AND NOT WHAT IS HELD NOW, WHICH IS THE WHOLE REASON FOR IT. What a process holds at the moment it is asked is the wrong number for deciding how many of it a machine can carry: the answer wanted is how big it ever got, because that is the moment the machine either had the room or killed it. Asking a process how much it holds while it is finishing tells you about a process that has already let go of everything.";
  "★ IT CAN ONLY BE ASKED FROM INSIDE THE PROCESS IT IS ABOUT, AND THAT IS NOT A LIMITATION TO BE ROUTED AROUND. A watcher outside would have to keep looking and would see the peak only if it happened to look at the moment of it; the machine has been keeping this number all along and hands it over exactly. A share of a judging that wants to say how much it held says it before it ends, from where it stands.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, BECAUSE IT EXISTS TO BE DIVIDED BY. Whoever asks this is sizing how much work a machine can be given at once, and a plausible invented number would let them start twice what fits and find out by being killed. Nothing is a value a caller has to make a decision about; a wrong number is not.";
  "★ ONLY THIS MACHINE'S KIND KEEPS SUCH A NUMBER, AND ELSEWHERE THE ANSWER IS SIMPLY NOTHING. There is no second way of asking to fall back on and none is attempted, because a second way would answer a slightly different question and nothing in what comes back would say which of the two had answered.";
  arguments_assert(arguments, 0);
  let text = null;
  try {
    let fs = await import("fs");
    text = fs.readFileSync("/proc/self/status", "utf-8");
  } catch {
    let unread = null;
    return unread;
  }
  let lines = text.split("\n");
  function peak_line_is(status_line) {
    let found = status_line.startsWith("VmHWM:");
    return found;
  }
  let named_line = lines.find(peak_line_is);
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
