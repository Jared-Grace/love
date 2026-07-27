import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { multiply } from "./multiply.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { qa_tree_stale_minutes } from "./qa_tree_stale_minutes.mjs";
export async function qa_tree_untouched_is(folder) {
  "Whether this frozen copy has been left alone long enough to be nobody's.";
  "It asks the copy itself rather than asking who owns it, and that is the point: a copy is written from nothing every time its owner asks the gate anything, so one written recently is one somebody is using, whoever they turn out to be.";
  "This is the floor under the owner check, not a repeat of it. Which conversations are still going is read from the transcripts of one repo, while the copies from every repo sit together in the one folder in memory - so somebody working in a neighbouring repo is alive and invisible, and taking their copy while they read it is the one way this could give a wrong answer instead of merely costing a copy. Asking the copy closes that, because it needs to know nothing about who made it.";
  "A copy that has gone missing counts as untouched: there is nothing left to take, and saying so keeps the caller from having to tell the two cases apart.";
  let modified = await path_modified_ms(folder);
  if (equal(modified, null)) {
    return true;
  }
  let minutes = qa_tree_stale_minutes();
  let idle = date_milliseconds_since(modified);
  let allowed = multiply(minutes, 60000);
  let untouched = greater_than(idle, allowed);
  return untouched;
}
