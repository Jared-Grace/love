import { list_add } from "./list_add.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { not } from "./not.mjs";
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
  function red_is(one, gate) {
    let failed = property_get_or_null(one, "failed");
    let none = list_empty_is_or_null(failed);
    if (none) {
      return false;
    }
    let inside = list_includes(failed, gate);
    return inside;
  }
  function gate_since(gate) {
    let judged = 0;
    let oldest = newest;
    let running = true;
    for (let one of placed) {
      let still = red_is(one, gate);
      let stopped = not(still);
      if (stopped) {
        running = false;
      }
      if (running) {
        judged = judged + 1;
        oldest = one;
      }
    }
    let since = {
      gate,
      judged,
      commit: property_get(oldest, "commit"),
      behind: property_get(oldest, "behind"),
    };
    return since;
  }
  let unnamed = list_empty_is_or_null(red);
  let names = [];
  if (not(unnamed)) {
    for (let gate of red) {
      list_add(names, gate);
    }
  }
  let gates = list_map(names, gate_since);
  function judged_of(one) {
    let judged = property_get(one, "judged");
    return judged;
  }
  list_sort_number_mapper(gates, judged_of);
  let r = {
    head,
    commit: property_get(newest, "commit"),
    judged: list_size(placed),
    gates,
  };
  return r;
}
