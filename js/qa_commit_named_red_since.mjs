import { qa_commit_named_red_since_r } from "./qa_commit_named_red_since_r.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_commit_looked_nearest_first } from "./qa_commit_looked_nearest_first.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
export async function qa_commit_named_red_since() {
  "How long each gate that is red right now has been red - the run of judged commits it has failed without a break, and the oldest commit in that run. Asks no gates, so it costs about a second.";
  "The reading one name along says which gates are red and stops there, and a reader looking at thirty of them has no way to tell the one somebody broke an hour ago from the one that has been red for a thousand commits. Those two want opposite things done about them: the fresh one is somebody's work in flight and is worth naming to them, the old one is a standing decision nobody has taken.";
  "Freshest breakage first, because that is the one still cheap to fix and the one whose cause is still on the screen of whoever caused it. The long-standing ones sort to the end together, which is also where they belong in a reader's attention.";
  "A run is counted in judged commits rather than in the commits between them, because the record only has an opinion about the ones somebody ran the gates on. A gate green at the second newest judgement and red at the newest has a run of one however many hundred commits sit in the gap.";
  let report = await qa_commit_named_report();
  let head = property_get(report, "head");
  let looked = property_get(report, "looked");
  let placed = qa_commit_looked_nearest_first(looked);
  let newest = list_get_or_null(placed, 0);
  ("A record holding nothing about any commit this folder still has answers with the folder's own commit and no gates, rather than throwing. Having judged nothing yet is the ordinary state of a thing that has just begun.");
  let nothing = null_is(newest);
  if (nothing) {
    let empty = {
      head,
      commit: null,
      judged: 0,
      gates: [],
    };
    return empty;
  }
  let red = property_get_or_null(newest, "failed");
  let r = qa_commit_named_red_since_r(newest, placed, red, head);
  return r;
}
