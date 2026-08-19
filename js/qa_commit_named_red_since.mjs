import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named_red_since_r } from "./qa_commit_named_red_since_r.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
export async function qa_commit_named_red_since() {
  "How long each gate that is red right now has been red - the run of judged commits it has failed without a break, and the oldest commit in that run. Asks no gates, so it costs about a second.";
  "The reading one name along says which gates are red and stops there, and a reader looking at thirty of them has no way to tell the one somebody broke an hour ago from the one that has been red for a thousand commits. Those two want opposite things done about them: the fresh one is somebody's work in flight and is worth naming to them, the old one is a standing decision nobody has taken.";
  "Freshest breakage first, because that is the one still cheap to fix and the one whose cause is still on the screen of whoever caused it. The long-standing ones sort to the end together, which is also where they belong in a reader's attention.";
  "A run is counted in judged commits rather than in the commits between them, because the record only has an opinion about the ones somebody ran the gates on. A gate green at the second newest judgement and red at the newest has a run of one however many hundred commits sit in the gap.";
  let report = await qa_commit_named_report();
  let r22 = qa_commit_named_report_newest(report);
  let nothing2 = property_get(r22, "nothing");
  let newest2 = property_get(r22, "newest");
  let placed2 = property_get(r22, "placed");
  let head2 = property_get(r22, "head");
  let r3 = {
    nothing: nothing2,
    newest: newest2,
    placed: placed2,
    head: head2,
  };
  let r2 = r3;
  let head = property_get(r2, "head");
  let placed = property_get(r2, "placed");
  let newest = property_get(r2, "newest");
  let nothing = property_get(r2, "nothing");
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
