import { qa_gate_runs_in_flight_row } from "./qa_gate_runs_in_flight_row.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { processes_dispatcher_report } from "./processes_dispatcher_report.mjs";
import { fn_name } from "./fn_name.mjs";
import { null_is } from "./null_is.mjs";
import { or } from "./or.mjs";
import { cpu_count } from "./cpu_count.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { machine_swap_free_bytes_or_null } from "./machine_swap_free_bytes_or_null.mjs";
import { gigabyte_bytes } from "./gigabyte_bytes.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
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
  ("★ HOW FULL THE MACHINE IS NOW ASKS WHAT IS LEFT OF THE OVERFLOW STORE AND NOT ONLY WHAT THE PROCESSORS ARE DOING, BECAUSE THE WAY THIS ACTUALLY ENDS IS A SHARE BEING KILLED. Each share was measured holding between 0.8 and 1.7 gigabytes, so seven of them is about eight, and several judgings at once take this machine to the wall. A killed share cannot say which gates it asked, which makes the whole judging unanswered, which means nothing is written down - and a record with nothing written in it is stale, which is the one condition that lets the next judging start however full the machine is. The loop feeds itself and no verdict gets filed by anything but luck.");
  ("A gigabyte of free overflow is the floor because the fall through it is not gradual. Measured 2026-09-02 this figure went from 3.8 gigabytes to 228 kilobytes while the count of processors busy barely moved, and a judging wanting eight gigabytes has no business starting anywhere near that.");
  ("★ THE TWO REASONS THE MACHINE IS FULL TRAVEL OUT SEPARATELY AS WELL AS JOINED, BECAUSE ONE OF THEM CAN BE OVERRULED AND THE OTHER CANNOT. Busy processors make a judging slow, and slow is a price a caller is allowed to decide to pay - the rule that a stale record wants judging whatever else is happening exists exactly to let it. No overflow left makes a judging dead, and there is no caller who wants that: it does not come back late, it comes back with nothing and leaves the record as stale as it found it. A joined answer cannot tell those apart, so whoever is deciding to overrule gets both figures rather than their sum.");
  arguments_assert(arguments, 0);
  let running = await processes_dispatcher_report();
  let shards = [];
  let runs = [];
  qa_gate_runs_in_flight_row(running, shards, runs);
  let cores = await cpu_count();
  let load = machine_load_average();
  let swap = await machine_swap_free_bytes_or_null();
  let a_gigabyte = gigabyte_bytes();
  let busy = greater_than(load, cores);
  let starved = false;
  if (null_is(swap)) {
    ("A machine that will not say how much overflow is left is not called starved on that account, because a reading nobody took is not a reading of nothing.");
  } else {
    starved = less_than(swap, a_gigabyte);
  }
  let crowded = or(busy, starved);
  let r = {
    runs: list_size(runs),
    shards: list_size(shards),
    cores,
    load,
    swap,
    busy,
    starved,
    crowded,
  };
  return r;
}
