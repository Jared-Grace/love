import { fn_name } from "./fn_name.mjs";
import { processes_dispatcher_report } from "./processes_dispatcher_report.mjs";
import { processes_runaway_alive_seconds } from "./processes_runaway_alive_seconds.mjs";
import { processes_runaway_share } from "./processes_runaway_share.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { and } from "./and.mjs";
export async function processes_runaway() {
  "The processes of this repo that have been alive a long time and spent most of that life using a processor - which together mean stuck, not busy.";
  ("Only ever a list, never an ending. What to do about one of these is a judgment: the work it was doing may be worth waiting for, and ending it throws that away. So this says what it found and leaves the deciding to whoever reads it - ",
    fn_name("process_end"),
    " takes one by number when the answer is yes.");
  ("A whole class of these went unseen for four days, at seven tenths of a processor the entire time, tripling how long every command took for everybody sharing the machine. One kind of them is now cleaned up on its own, but that was the kind we happened to find; this is the net under the ones we have not.");
  let rows = await processes_dispatcher_report();
  let alive_least = processes_runaway_alive_seconds();
  let share_least = processes_runaway_share();
  let stuck = [];
  for (let row of rows) {
    let alive_seconds = property_get(row, "alive_seconds");
    let share = property_get(row, "share");
    let long_lived = greater_than(alive_seconds, alive_least);
    let hard_working = greater_than(share, share_least);
    let both = and(long_lived, hard_working);
    if (both) {
      list_add(stuck, row);
    }
  }
  return stuck;
}
