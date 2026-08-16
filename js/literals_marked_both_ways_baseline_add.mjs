import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { literals_marked_both_ways_baseline_path } from "./literals_marked_both_ways_baseline_path.mjs";
import { literals_marked_both_ways_names } from "./literals_marked_both_ways_names.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function literals_marked_both_ways_baseline_add(names_comma) {
  "Record NAMED words that are honestly marked both frozen and as a reference, and leave every other such word still failing.";
  "The whole-file twin takes everything the repo carries right now, and what this record holds is a mixture. Some words wear both markers because somebody made a mistake, and those have to stay red until one marker is deleted. Others wear both because the same spelling honestly names two different things - a word already sitting in a folder on a shared bucket, beside the function whose name that folder was once copied from. Absorbing the whole set treats the two alike, and afterwards nothing tells the mistake from the coincidence.";
  "A word only clears if it is failing right now and is not already recorded, both of which the shared adder refuses on, so a typed word cannot quietly become a permanent line for something the repo does not do.";
  arguments_assert(arguments, 1);
  let names = text_split_comma(names_comma);
  let path = literals_marked_both_ways_baseline_path();
  let offending = await literals_marked_both_ways_names();
  let r = await baseline_known_add(names, path, offending);
  return r;
}
