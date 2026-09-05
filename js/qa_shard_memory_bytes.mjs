import { arguments_assert } from "./arguments_assert.mjs";
import { gigabyte_bytes } from "./gigabyte_bytes.mjs";
import { multiply } from "./multiply.mjs";
export function qa_shard_memory_bytes() {
  "How much memory one share of a judging is expected to hold while it runs.";
  "★ IT IS THE TOP OF WHAT WAS MEASURED AND NOT THE MIDDLE, BECAUSE THE TWO MISTAKES COST DIFFERENTLY. Measured 2026-09-05, the three shares of one judging held one and eight tenths, two and six tenths, and two and nine tenths of a gigabyte. Guessing high only makes a judging take fewer shares and so run slower; guessing low walks the machine into the wall, and the kernel then kills a share outright - which loses the whole judging, because a killed share cannot say which gates it asked, so nothing is written down and the record stays exactly as stale as it was. Slower is recoverable and killed is not, so this is the measured top rounded up to a whole gigabyte.";
  "★ THE READING IS A FLOOR AND NOT A TOTAL. What a share reports is the peak of its own process and not of any child it starts, so a gate that spawns workers holds more than its share ever says. That is a second reason to round up rather than to fit closely: the number this is derived from cannot overstate a share and can understate one.";
  "★ IT IS A MEASUREMENT AND WILL GO OUT OF DATE. What a share holds is whatever the gates it happens to be given hold, so this is the figure for the gates as they stood on the day above, not a property of a share. It went out of date once already: three days earlier the same shares topped out at one and seven tenths, so the gates grew by two thirds in three days and the old figure would now be walking the machine at the wall. Every judging prints what its shares held, so the fresh reading is in the last run's own output and nothing has to be set up to take it. If judgings start being killed again on a machine this said had room, read those lines before changing anything else.";
  arguments_assert(arguments, 0);
  let a_gigabyte = gigabyte_bytes();
  let bytes = multiply(3, a_gigabyte);
  return bytes;
}
