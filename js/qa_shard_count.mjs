import { cpu_count } from "./cpu_count.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_shard_count() {
  "How many runs of the frozen copy to ask at once";
  "One process answers one question at a time, so asking every gate of a single process leaves every processor but one idle. Measured gate by gate, the gates share nothing with each other - a run of all of them in one process took the same time each of them took alone - so splitting them across processes gives up nothing, and the wait becomes the slowest share rather than the sum of every gate";
  "Two processors are left alone, because several of us work in this folder at once and one of us should not take the whole machine";
  let cores = await cpu_count();
  let spare = subtract(cores, 2);
  let alone = less_than(spare, 1);
  if (alone) {
    let r = 1;
    return r;
  }
  return spare;
}
