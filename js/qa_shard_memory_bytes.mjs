import { arguments_assert } from "./arguments_assert.mjs";
import { gigabyte_bytes } from "./gigabyte_bytes.mjs";
import { multiply } from "./multiply.mjs";
export function qa_shard_memory_bytes() {
  "How much memory one share of a judging is expected to hold while it runs.";
  "★ IT IS THE TOP OF WHAT WAS MEASURED AND NOT THE MIDDLE, BECAUSE THE TWO MISTAKES COST DIFFERENTLY. Measured 2026-09-02, the shares of a judging held between eight tenths of a gigabyte and one and seven tenths each. Guessing high only makes a judging take fewer shares and so run slower; guessing low walks the machine into the wall, and the kernel then kills a share outright - which loses the whole judging, because a killed share cannot say which gates it asked, so nothing is written down and the record stays exactly as stale as it was. Slower is recoverable and killed is not, so this is the measured top rounded up to a whole gigabyte.";
  "★ IT IS A MEASUREMENT AND WILL GO OUT OF DATE. What a share holds is whatever the gates it happens to be given hold, so this is the figure for the gates as they stood on the day above, not a property of a share. If judgings start being killed again on a machine this said had room, measure a share afresh before changing anything else.";
  arguments_assert(arguments, 0);
  let a_gigabyte = gigabyte_bytes();
  let bytes = multiply(2, a_gigabyte);
  return bytes;
}
