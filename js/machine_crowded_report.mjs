import { arguments_assert } from "./arguments_assert.mjs";
import { cpu_count } from "./cpu_count.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { machine_swap_free_bytes_or_null } from "./machine_swap_free_bytes_or_null.mjs";
import { gigabyte_bytes } from "./gigabyte_bytes.mjs";
import { greater_than } from "./greater_than.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { or } from "./or.mjs";
export async function machine_crowded_report() {
  "How full this machine is right now - how many processors it has, how much work they are being asked for, how much of the overflow store is left - and whether either of those means there is no room for another big run.";
  "★ HOW FULL THE MACHINE IS ASKS WHAT IS LEFT OF THE OVERFLOW STORE AND NOT ONLY WHAT THE PROCESSORS ARE DOING, BECAUSE THE WAY A BIG RUN ACTUALLY ENDS IS A PIECE OF IT BEING KILLED. Each share of a judging was measured holding between 0.8 and 1.7 gigabytes, so seven of them is about eight, and several judgings at once take this machine to the wall. A killed share cannot say which gates it asked, which makes the whole judging unanswered, which means nothing is written down - and a record with nothing written in it is stale, which is the one condition that lets the next judging start however full the machine is. The loop feeds itself and no verdict gets filed by anything but luck.";
  "A gigabyte of free overflow is the floor because the fall through it is not gradual. Measured 2026-09-02 this figure went from 3.8 gigabytes to 228 kilobytes while the count of processors busy barely moved, and a judging wanting eight gigabytes has no business starting anywhere near that.";
  "★ THE TWO REASONS THE MACHINE IS FULL TRAVEL OUT SEPARATELY AS WELL AS JOINED, BECAUSE ONE OF THEM CAN BE OVERRULED AND THE OTHER CANNOT. Busy processors make a big run slow, and slow is a price a caller is allowed to decide to pay - the rule that a stale record wants judging whatever else is happening exists exactly to let it. No overflow left makes the run dead, and there is no caller who wants that: it does not come back late, it comes back with nothing and leaves the record as stale as it found it. A joined answer cannot tell those apart, so whoever is deciding to overrule gets both figures rather than their sum.";
  "This says nothing about what is running. Whether the machine is full and what is filling it are two readings taken from different places, and a caller usually wants both - but they go stale at different rates and one of them is about this machine while the other is about this repo, so they are asked for separately and joined by whoever wants them joined.";
  arguments_assert(arguments, 0);
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
    cores,
    load,
    swap,
    busy,
    starved,
    crowded,
  };
  return r;
}
