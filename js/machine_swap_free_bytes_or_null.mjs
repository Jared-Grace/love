import { arguments_assert } from "./arguments_assert.mjs";
import { machine_meminfo_bytes_or_null } from "./machine_meminfo_bytes_or_null.mjs";
export function machine_swap_free_bytes_or_null() {
  "How much of this machine's overflow store is still free, or nothing at all if this machine will not say.";
  "★ THIS IS THE READING THAT SEES THE WALL, AND THE ONE BESIDE IT IS NOT. What a machine says is available counts memory it believes it could reclaim, and most of that belief is that pages can be pushed out to the overflow store - so while there is still room out there, available stays large right up to the moment there is none. Measured 2026-09-02 on this machine: available read fifteen and a half gigabytes while free overflow had fallen from three point eight gigabytes to two hundred and twenty eight kilobytes, and the next thing that happened was the machine killing a share of a judging outright.";
  "So a caller deciding whether there is room to start something large wants both figures and must not take the first one alone. The one that moved is the one that was about to run out.";
  arguments_assert(arguments, 0);
  let bytes = machine_meminfo_bytes_or_null("SwapFree:");
  return bytes;
}
