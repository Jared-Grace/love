import { cpu_count } from "./cpu_count.mjs";
import { half } from "./half.mjs";
import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_shard_count() {
  "How many runs of the frozen copy to ask at once: half this machine's processors, since only one of these runs is ever going at a time";
  "One process answers one question at a time, so asking every gate of a single process leaves every processor but one idle. Measured gate by gate, the gates share nothing with each other - each one took the same time alone in its own process as it did in one process alongside all the others - so dividing them across processes gives up nothing when there is a processor free to take the share";
  "What it must not do is take a share of a machine that is already full, and a fixed number does exactly that. Several of us work in this one folder, so several of these runs used to happen at once, and a fixed seven shares meant seven processes each - measured at a load of forty-three with twenty-three of these processes running, where the whole run took six minutes against the one minute it takes on a quiet machine. Dividing the work made one run faster and all of them together slower, which is the wrong trade on a shared machine";
  "That is why this used to ask what was already running and take only what was left. It no longer asks, and the reason is that the thing it was defending against cannot happen any more: these runs are taken one at a time now, so the load it was reading was mostly its own kind, and backing away from it meant backing away from itself";
  "The two together made a circle. A second run found the processors full and took a single share, an undivided run lasts long enough for a third to find the same, and the number that was supposed to protect the machine was the thing keeping every run on it slow. Taking turns broke the circle; reading the load afterwards only kept paying for it";
  "Measured 2026-08-11, one run alone on twelve processors: it read the load left over from the run before it and took two shares, and asking the gates took eight and a half minutes - five sixths of the whole run. There was nothing on the machine to be polite to";
  "Half the processors is the whole of the politeness now, and it is enough. It was always the ceiling, chosen because past it the shares stopped getting faster even with the machine to themselves - six and eight came out the same within noise on twelve processors. So this leaves half the machine to whoever else is working, always, and no longer leaves them the other half as well";
  let cores = await cpu_count();
  let shared = half(cores);
  let ceiling = floor(shared);
  let alone = less_than(ceiling, 1);
  if (alone) {
    let one = 1;
    return one;
  }
  return ceiling;
}
