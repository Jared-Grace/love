import { arguments_assert } from "./arguments_assert.mjs";
import { machine_meminfo_bytes_or_null } from "./machine_meminfo_bytes_or_null.mjs";
export async function machine_memory_free_bytes_or_null() {
  "How much memory on this machine nobody is using at all, in bytes, or nothing at all if this machine will not say.";
  "★ IT IS THE ONE FIGURE THAT CANNOT BE OPTIMISTIC, AND THAT IS THE ONLY REASON TO HAVE IT. Every other memory reading is an estimate of what could be got back if something were given up - a cached copy dropped, a page pushed out to the overflow store - and an estimate can be wrong in the direction that gets a program killed. This one counts memory that is held by nothing and would be handed over with nothing given up in exchange. It is therefore always smaller than the true room and never larger, which makes it useless as an answer and exact as a floor.";
  "★ IT IS A FLOOR UNDER ANOTHER READING AND NOT A SIZING FIGURE ON ITS OWN. Sizing off this alone turns most of the machine invisible, which is the mistake the available reading exists to correct - see the prose there for the measurement. What it is for is the opposite mistake: a cautious reading that has arrived at a number smaller than what is lying unused cannot be right, whatever it was cautious about.";
  "★ IT IS READ AT THE MOMENT IT IS ASKED AND MUST NOT BE REMEMBERED, for the same reason the available reading must not be: about ten of us share this one machine and none of us says what it is about to take.";
  arguments_assert(arguments, 0);
  let bytes = await machine_meminfo_bytes_or_null("MemFree:");
  return bytes;
}
