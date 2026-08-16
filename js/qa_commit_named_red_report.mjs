import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { number_is } from "./number_is.mjs";
import { null_is } from "./null_is.mjs";
export async function qa_commit_named_red_report() {
  "Which gates are red as of the last commit anybody judged - the commit itself, how far behind the folder it has fallen, and the gates it named. Asks no gates, so it costs about a second.";
  "It is the question a reader actually has, and until now the only way to answer it was to run every gate again and wait a quarter of an hour. Measured 2026-08-16: a red gate was found by trying to ship, which is the most expensive way there is to be told.";
  "Its sibling asks the opposite question - which judged commit is sound enough to ship from - and so keeps only the green ones. The reds are the entries that reading throws away, and they are the whole of this answer.";
  "The freshest judged commit is taken whatever colour it came out, because a green one is an answer too: it says nothing was red as of then. Keeping only the red entries would find a red commit from days ago and present it as today.";
  "How far behind is said alongside and is the whole of how much to trust this. A judgement several hundred commits back is about code nobody is running, and the reader has to be able to see that rather than be told a number with no age on it.";
  let report = await qa_commit_named_report();
  let head = property_get(report, "head");
  let looked = property_get(report, "looked");
  ("An entry naming a commit this folder no longer holds has nothing for its distance, so it cannot be placed against the others and is left out rather than sorted as though it were nearest.");
  function placed_is(one) {
    let counted = property_get_or_null(one, "behind");
    let b = number_is(counted);
    return b;
  }
  let placed = list_filter(looked, placed_is);
  function behind_of(one) {
    let counted = property_get_or_null(one, "behind");
    return counted;
  }
  list_sort_number_mapper(placed, behind_of);
  let newest = list_get_or_null(placed, 0);
  ("A record holding nothing about any commit this folder still has answers with the folder's own commit and no judgement, rather than throwing. Having judged nothing yet is the ordinary state of a thing that has just begun, and it is also what a reader sees on a machine where the record was cleared.");
  let nothing = null_is(newest);
  if (nothing) {
    let empty = {
      head,
      commit: null,
      behind: null,
      green: null,
      red: [],
    };
    return empty;
  }
  let r = {
    head,
    commit: property_get(newest, "commit"),
    behind: property_get(newest, "behind"),
    green: property_get(newest, "green"),
    red: property_get_or_null(newest, "failed"),
  };
  return r;
}
