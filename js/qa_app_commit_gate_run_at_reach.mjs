import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
import { qa_commit_named_at } from "./qa_commit_named_at.mjs";
import { qa_gates_named_listed } from "./qa_gates_named_listed.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function qa_app_commit_gate_run_at_reach(search, commit, reach) {
  "Whether one app is sound at one commit, for a caller who already knows what that app ships: every gate that was red there, sorted into the ones that reach it and the ones that cannot";
  "This is its neighbour with the one slow fetch taken out and handed in instead. What an app ships does not depend on WHICH commit is being asked about - the asking reads the folder as it stands - so a caller walking a range of commits was fetching the same answer once per commit and getting the same answer every time.";
  "Measured 2026-08-25: that fetch takes about thirty-two seconds, and a lookup over twenty-eight judged commits spent about fifteen minutes, nearly all of it here. The function that spends it promises about a second in its own prose. Asked once and handed down, the same lookup is one fetch.";
  "Taking the reach as an argument rather than remembering it is deliberate: a remembered answer would have to know when the folder had moved under it, and the caller that walks a range already knows it is one walk over one folder.";
  let at = await qa_commit_named_at(commit);
  let judged = property_get(at, "judged");
  let remembered = property_get(at, "remembered");
  ("Whether the judging was written down is carried through rather than dropped here, because being sound and being on record are two different things and only one of them is asked about below. Sending reads the record, not this answer, so a caller handed soundness alone can build out of a commit and put the pieces where the sending reads from, and the sending will then refuse pieces this very run found sound - and refuse every other app's with them, because they all go out in one act.");
  let green = property_get(judged, "green");
  let failed = property_get(judged, "failed");
  let named = property_get(judged, "named");
  ("what each gate said is kept beside what was read out of it, so the offenders it wrote down are read here too - most of them are apps, pages, files and translations rather than functions, and read for functions alone they name nobody");
  let said = property_get_or_null(judged, "said");
  let listed = qa_gates_named_listed(named, said);
  ("The sorting itself is pure and lives on its own, where it can be asked a question without a commit being judged first. Every fault found in it so far was found by hand on a real afternoon, because reaching it meant spending fourteen minutes here.");
  let sorted = qa_app_gates_sorted(green, failed, listed, reach);
  let blocking = property_get(sorted, "blocking");
  let elsewhere = property_get(sorted, "elsewhere");
  let clear = list_empty_is(blocking);
  let r = {
    app: search,
    commit,
    remembered,
    moved: property_get(at, "moved"),
    filed: property_get(at, "filed"),
    reach: reach.length,
    deployable: clear,
    blocking,
    elsewhere,
  };
  return r;
}
