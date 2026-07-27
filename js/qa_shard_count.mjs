import { cpu_count } from "./cpu_count.mjs";
import { half } from "./half.mjs";
import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_shard_count() {
  "How many runs of the frozen copy to ask at once";
  "One process answers one question at a time, so asking every gate of a single process leaves every processor but one idle. Measured gate by gate, the gates share nothing with each other - each one took the same time alone in its own process as it did in one process alongside all the others - so dividing them across processes gives up nothing, and the wait becomes the slowest share rather than the sum of every gate";
  "Half the processors, not all of them. More shares does not keep getting faster: measured on twelve processors, six shares and eight shares came out the same within noise, and every share added past that made each one slower than it was alone, so the extra work bought nothing. Half also leaves the machine usable, which matters because several of us are working in this folder at the same time and one whole-machine run would stall all of them";
  let cores = await cpu_count();
  let shared = half(cores);
  let whole = floor(shared);
  let alone = less_than(whole, 1);
  if (alone) {
    let one = 1;
    return one;
  }
  return whole;
}
