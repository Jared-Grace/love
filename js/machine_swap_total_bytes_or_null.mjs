import { arguments_assert } from "./arguments_assert.mjs";
import { machine_meminfo_bytes_or_null } from "./machine_meminfo_bytes_or_null.mjs";
export async function machine_swap_total_bytes_or_null() {
  "How large this machine's overflow store is altogether, free or not, or nothing at all if this machine will not say.";
  "★ IT EXISTS TO TELL AN EMPTY OVERFLOW STORE APART FROM A MACHINE THAT HAS NONE. Free overflow reads zero in both cases, and the two mean opposite things: on a machine with an overflow store, nothing left out there is the wall itself; on a machine without one, it is simply a fact about a store that was never there and says nothing whatever about room. A caller that reads only the free figure treats every swapless machine as permanently at the wall.";
  arguments_assert(arguments, 0);
  let bytes = await machine_meminfo_bytes_or_null("SwapTotal:");
  return bytes;
}
