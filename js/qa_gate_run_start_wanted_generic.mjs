import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function qa_gate_run_start_wanted_generic(flight) {
  "Whether a whole-repo judging is worth starting, given what is already going and how full the machine is";
  "Separated from the asking so that it can be answered from written-down numbers. Its neighbour goes and looks, which takes a moment and gives a different answer every time it is asked - that is the right shape for a Claude at a prompt and the wrong one for a question anybody wants to check";
  "Two reasons to say no and they are not the same reason. Another judging already going means a second one makes both slower and neither of them new; a full machine means a judging would crawl however alone it is. Either is enough on its own";
  "A share counts as much as a run. A judging spreads itself over several processes and the one that started them is not always the one still holding a processor, so counting only the starters would read a machine full of shares as quiet";
  let runs = property_get(flight, "runs");
  let shards = property_get(flight, "shards");
  let crowded = property_get(flight, "crowded");
  let going = add(runs, shards);
  let already = greater_than(going, 0);
  if (already) {
    return false;
  }
  if (crowded) {
    return false;
  }
  return true;
}
