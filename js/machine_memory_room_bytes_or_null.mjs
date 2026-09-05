import { arguments_assert } from "./arguments_assert.mjs";
import { machine_memory_room_capped_bytes_or_null } from "./machine_memory_room_capped_bytes_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { machine_memory_free_bytes_or_null } from "./machine_memory_free_bytes_or_null.mjs";
import { less_than } from "./less_than.mjs";
export async function machine_memory_room_bytes_or_null() {
  "How much room this machine honestly has for something large to start in, in bytes, or nothing at all if this machine will not say.";
  "★ IT IS THE CAPPED READING RAISED BACK UP TO WHAT IS ACTUALLY UNUSED, AND THE FLOOR IS THE PART THAT NEEDED FINDING. The cap holds the available figure down to what is left of the overflow store, which is right at the wall and wrong away from it, because free overflow is a lagging figure. Overflow is only given back when the process that owned the pages ends or the pages are touched again, so after one squeeze it stays low for as long as those processes keep running - and the cap then goes on describing a machine that has already recovered. Measured 2026-09-05 on this machine: two readings a few seconds apart had unused rise by one and a half gigabytes while free overflow moved by half a megabyte, and the capped answer was five and nine tenths gigabytes while ten and seven tenths lay unused. A number smaller than what is lying unused cannot be the room, whatever it was being cautious about.";
  "★ THE FLOOR CANNOT OVERSTATE, WHICH IS WHY IT IS SAFE TO RAISE AN ANSWER WITH IT. Unused memory is held by nothing and is given away with nothing given up in exchange, so a caller that fits inside it cannot push the machine towards the overflow store by starting. That is the whole argument: it is not that unused is a better estimate than the cap, it is that it is not an estimate at all.";
  "★ IT STILL SEES THE WALL, BECAUSE AT THE WALL THERE IS NOTHING UNUSED. The floor lifts an answer only on a machine with memory going spare, and a machine at the wall is exactly the one with none - the kernel holds unused down to its own watermark. So the day this was written to guard against, when free overflow had fallen to two hundred and twenty eight kilobytes and a share was killed, is a day the floor would have raised nothing.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, and the floor is skipped rather than guessed at: where the capped reading is missing there is no answer at all, and where only the unused figure is missing the capped reading stands alone.";
  arguments_assert(arguments, 0);
  let capped = await machine_memory_room_capped_bytes_or_null();
  if (null_is(capped)) {
    let unread = null;
    return unread;
  }
  let free = await machine_memory_free_bytes_or_null();
  if (null_is(free)) {
    return capped;
  }
  let capped_below_free = less_than(capped, free);
  if (capped_below_free) {
    return free;
  }
  return capped;
}
