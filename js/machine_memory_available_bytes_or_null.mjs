import { arguments_assert } from "./arguments_assert.mjs";
import { machine_meminfo_bytes_or_null } from "./machine_meminfo_bytes_or_null.mjs";
export function machine_memory_available_bytes_or_null() {
  "How much memory a program starting now could actually be given, or nothing at all if this machine will not say.";
  "★ AVAILABLE AND UNUSED ARE DIFFERENT NUMBERS AND ONLY THE FIRST ONE ANSWERS THE QUESTION. What a machine calls unused counts only memory nobody has touched, and most of what is reclaimable is being held as a copy of files read earlier - that memory is handed straight over to whoever asks for it. Measured here at the same moment, unused read 4972 megabytes and available read 7401. Sizing anything off the smaller of those turns half the machine invisible.";
  "★ IT ANSWERS WITH NOTHING RATHER THAN WITH A GUESS, BECAUSE IT EXISTS TO BE DIVIDED BY. A reader that returned a plausible number when it had not actually read one would let a caller start twice the work the machine can hold and find out by being killed. Nothing is a value a caller has to make a decision about; a wrong number is not.";
  "★ IT IS READ AT THE MOMENT IT IS ASKED AND MUST NOT BE REMEMBERED. About ten of us share this one machine and none of us says what we are about to take, so this figure moved between 2 and 7.4 gigabytes inside one hour. A reading kept from earlier is a reading about a machine that is no longer there.";
  "★ AND IT DOES NOT SEE THE WALL COMING. This figure counts memory the machine believes it could reclaim, and part of that belief is that pages can be pushed out to the overflow store - so it stays large right up to the moment that store is empty. Whoever is deciding there is room to start something large wants the free overflow beside this, never this alone.";
  arguments_assert(arguments, 0);
  let bytes = machine_meminfo_bytes_or_null("MemAvailable:");
  return bytes;
}
