import { processes_sleep_loop_stopped } from "./processes_sleep_loop_stopped.mjs";
import { process_end } from "./process_end.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function processes_sleep_loop_stopped_end() {
  "Ends every loop that has been waiting by sleeping for longer than a wait can honestly last, and says which ones went.";
  "Which ones those are is asked next door, so the list can be read before this is run. All that happens here is the ending.";
  "Its neighbour deliberately ends nothing, and that was right while the only thing known about such a loop was that it looked stuck: a shell belongs to a session that is still there behind it. What changed is that the waiting was shown to be unreachable rather than merely long - a pattern handed to pgrep sits in the waiting shell's own command line, so the loop finds itself every pass and the condition it waits on can never go false. Ending one is then a fact about the shell rather than a judgment about somebody's work, and it hands their session back the call it has been blocked on.";
  "Nothing is lost by it. The loop is the only thing killed; whatever it was waiting for finished long ago or died long ago, and either way the waiting was never going to notice.";
  let stopped = await processes_sleep_loop_stopped();
  let ended = [];
  for (let row of stopped) {
    let pid = property_get(row, "pid");
    let gone = process_end(pid);
    if (gone) {
      list_add(ended, pid);
    }
  }
  return ended;
}
