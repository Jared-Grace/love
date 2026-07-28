import { cpu_count } from "./cpu_count.mjs";
import { load_average_recent } from "./load_average_recent.mjs";
import { subtract } from "./subtract.mjs";
import { half } from "./half.mjs";
import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function qa_shard_count() {
  "How many runs of the frozen copy to ask at once, given what else this machine is already doing";
  "One process answers one question at a time, so asking every gate of a single process leaves every processor but one idle. Measured gate by gate, the gates share nothing with each other - each one took the same time alone in its own process as it did in one process alongside all the others - so dividing them across processes gives up nothing when there is a processor free to take the share";
  "What it must not do is take a share of a machine that is already full, and a fixed number does exactly that. Several of us work in this one folder, so several of these runs happen at once, and a fixed seven shares means seven processes each - measured at a load of forty-three with twenty-three of these processes running, where the whole run took six minutes against the one minute it takes on a quiet machine. Dividing the work made one run faster and all of them together slower, which is the wrong trade on a shared machine";
  "So the share count is what is actually free: the processors, less what is already running. On a quiet machine that is half of them and the run is fast; on a full one it falls to a single share, which is exactly the undivided run this replaced, so the worst case is no worse than before it existed rather than seven times heavier";
  "The ceiling stays at half. Past that the shares stopped getting faster even with the machine to themselves - six and eight came out the same within noise on twelve processors - so the spare capacity is better left to whoever else is working";
  let cores = await cpu_count();
  let busy = await load_average_recent();
  let free = subtract(cores, busy);
  let whole = floor(free);
  let shared = half(cores);
  let ceiling = floor(shared);
  let plenty = greater_than(whole, ceiling);
  if (plenty) {
    return ceiling;
  }
  let alone = less_than(whole, 1);
  if (alone) {
    let one = 1;
    return one;
  }
  return whole;
}
