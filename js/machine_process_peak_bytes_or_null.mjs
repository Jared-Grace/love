import { arguments_assert } from "./arguments_assert.mjs";
import { machine_file_figure_bytes_or_null } from "./machine_file_figure_bytes_or_null.mjs";
export async function machine_process_peak_bytes_or_null() {
  "The most memory this very process has held at any moment since it started, in bytes, or nothing at all if this machine will not say.";
  "★ IT IS THE HIGH WATER MARK AND NOT WHAT IS HELD NOW, WHICH IS THE WHOLE REASON FOR IT. What a process holds at the moment it is asked is the wrong number for deciding how many of it a machine can carry: the answer wanted is how big it ever got, because that is the moment the machine either had the room or killed it. Asking a process how much it holds while it is finishing tells you about a process that has already let go of everything.";
  "★ IT IS THE PROCESS ITSELF AND NOT ITS CHILDREN. A process that starts others is not charged for what they hold, so where a caller wants the footprint of a whole piece of work this is a floor under it and not the total. Whoever is sizing off it should round up rather than fit closely.";
  "★ IT CAN ONLY BE ASKED FROM INSIDE THE PROCESS IT IS ABOUT, AND THAT IS NOT A LIMITATION TO BE ROUTED AROUND. A watcher outside would have to keep looking and would see the peak only if it happened to look at the moment of it; the machine has been keeping this number all along and hands it over exactly. A share of a judging that wants to say how much it held says it before it ends, from where it stands.";
  "★ ONLY THIS MACHINE'S KIND KEEPS SUCH A NUMBER, AND ELSEWHERE THE ANSWER IS SIMPLY NOTHING. There is no second way of asking to fall back on and none is attempted, because a second way would answer a slightly different question and nothing in what comes back would say which of the two had answered.";
  arguments_assert(arguments, 0);
  let bytes = await machine_file_figure_bytes_or_null(
    "/proc/self/status",
    "VmHWM:",
  );
  return bytes;
}
