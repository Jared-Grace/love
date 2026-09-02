import { arguments_assert } from "./arguments_assert.mjs";
import { machine_memory_available_bytes_or_null } from "./machine_memory_available_bytes_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { machine_swap_total_bytes_or_null } from "./machine_swap_total_bytes_or_null.mjs";
import { less_than } from "./less_than.mjs";
import { machine_swap_free_bytes_or_null } from "./machine_swap_free_bytes_or_null.mjs";
export async function machine_memory_room_bytes_or_null() {
  "How much room this machine honestly has for something large to start in, in bytes, or nothing at all if this machine will not say.";
  "★ IT IS THE LESSER OF WHAT THE MACHINE SAYS IS AVAILABLE AND WHAT IS LEFT OF THE OVERFLOW STORE, AND THAT IS THE WHOLE OF WHAT IT DOES. The available figure counts pages the machine believes it could reclaim, and most of that belief is that those pages can be pushed out to the overflow store - so once there is nowhere to push them, the available figure is describing room that cannot be reached. Measured 2026-09-02 on this machine: available read fifteen and a half gigabytes while free overflow had fallen to two hundred and twenty eight kilobytes, and the next thing that happened was the kernel killing a share of a judging. Taking the lesser is what makes the pair say the true thing that neither says alone.";
  "★ A MACHINE WITH NO OVERFLOW STORE AT ALL IS NOT AT THE WALL, AND THIS IS WHERE THAT IS DECIDED. Free overflow reads zero both when the store is exhausted and when there is no store, so the size of the store is asked as well: where there is none, the overflow reading is about nothing and the available figure stands alone. Without that question this would call every swapless machine permanently full and hand every caller the smallest answer it has forever.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS. A caller asks this to decide how much to start, and a made-up number would be worse than no number - the caller can fall back on something it knows, but it cannot tell a guess from a reading. Where the available figure is missing there is no answer at all; where only the overflow figures are missing, the available figure is still a real reading and is given.";
  arguments_assert(arguments, 0);
  let available = await machine_memory_available_bytes_or_null();
  if (null_is(available)) {
    let unread = null;
    return unread;
  }
  let swap_total = await machine_swap_total_bytes_or_null();
  if (null_is(swap_total)) {
    return available;
  }
  let swapless = less_than(swap_total, 1);
  if (swapless) {
    return available;
  }
  let swap_free = await machine_swap_free_bytes_or_null();
  if (null_is(swap_free)) {
    return available;
  }
  let overflow_smaller = less_than(swap_free, available);
  if (overflow_smaller) {
    return swap_free;
  }
  return available;
}
