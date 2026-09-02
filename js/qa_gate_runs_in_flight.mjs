import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { processes_dispatcher_report } from "./processes_dispatcher_report.mjs";
import { machine_crowded_report } from "./machine_crowded_report.mjs";
import { list_size } from "./list_size.mjs";
import { object_merge } from "./object_merge.mjs";
export async function qa_gate_runs_in_flight() {
  "How many whole-repo judgings and how many of their shares are going right now, how full the machine is, and whether that adds up to no room for another one.";
  ("★ A JUDGING IS FOUND BY WHOSE CHILDREN THE SHARES ARE, NOT BY A WORD IN ITS OWN LINE, BECAUSE IT HAS NO WORD OF ITS OWN. This used to count a process as a judging only if its line held the gate runner's whole name, and measured 2026-09-02 that found none of them ever: the four going at that moment were started as ",
    fn_name("qa_commit_named_head"),
    " twice, as ",
    fn_name("qa_commit_named_auto"),
    " by the daemon, and as ",
    fn_name("qa_promoted_unjudged"),
    ", and not one of those words is the one being looked for. So it reported no runs at all beside twenty-one shares and a load of fifty-four, and the door it answers reads a machine with four judgings on it as a machine with none.");
  ("A list of the names that start one would have to be kept up to date by whoever adds the next name, which is the same as saying it would be wrong again. Whose child a share is cannot go out of date: a share is spawned by the judging that dealt it, so counting how many different processes the shares hang from counts the judgings exactly, whatever they were called.");
  ("The gate runner's own name is still looked for beside that, because somebody running the gates by hand in this very folder spawns no shares at all and is still a whole processor's worth of work. The judging's own name is looked for too, for the moment between a judging starting and its shares existing.");
  ("Nothing here can count itself. A process is only a share's parent once it has spawned shares, by which point it is judging rather than asking; and the two names looked for are neither of the names the door that asks this is started under.");
  ("How full the machine is has its own name and is asked for whole, because it is a reading about this machine rather than about this repo and the reasons behind it are long enough to bury the counting they sit beside. It arrives already joined the way it left, so what a caller reads here has not changed by a word.");
  arguments_assert(arguments, 0);
  let running = await processes_dispatcher_report();
  let shards = [];
  let runs = [];
  qa_gate_runs_in_flight_row(running, shards, runs);
  let full = await machine_crowded_report();
  let r = {
    runs: list_size(runs),
    shards: list_size(shards),
  };
  object_merge(r, full);
  return r;
}
