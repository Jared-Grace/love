import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
import { qa_commit_named_at } from "./qa_commit_named_at.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function qa_app_commit_gate_run_at(search, commit) {
  "Whether one app is sound at one commit: every gate that was red there, sorted into the ones that reach what this app ships and the ones that cannot";
  "One app is what gets deployed, and a break in another app cannot travel into this app's bundle - so a whole-repo verdict answers a question nobody asked and holds a ready deploy for work that could never affect it. Measured on one afternoon: five aborts of a prod fix, none of them able to reach the app being shipped.";
  "Which gates are set aside is DERIVED and never declared. A gate's own complaint names the functions it is complaining about; the app's bundle reach names what it carries; a complaint whose names are all outside that reach is a complaint about something else. Nothing here holds a list of which gates matter to which app, because such a list is a judgment that can be wrong in silence and would need revisiting every time a gate or an app changed.";
  "A red gate that named no function counts as reaching this app. It may well be about somewhere else, but nothing here can show that, and the direction to be wrong in is the one that stops a deploy rather than the one that lets a break through.";
  "Naming nothing is one condition with two spellings, and both are counted. A gate absent from the record and a gate recorded with an empty list say the same thing, and since every red gate is recorded with a list, checking only for the absent one meant this rule had stopped applying to anything at all.";
  "The commit is judged once for the whole repo and every app's answer is then a matter of looking, so the second app to ask pays nothing.";
  let at = await qa_commit_named_at(commit);
  let judged = property_get(at, "judged");
  let remembered = property_get(at, "remembered");
  let failed = property_get(judged, "failed");
  let named = property_get(judged, "named");
  let reach = await qa_app_reachable_names(search);
  ("The sorting itself is pure and lives on its own, where it can be asked a question without a commit being judged first. Every fault found in it so far was found by hand on a real afternoon, because reaching it meant spending fourteen minutes here.");
  let sorted = qa_app_gates_sorted(failed, named, reach);
  let blocking = property_get(sorted, "blocking");
  let elsewhere = property_get(sorted, "elsewhere");
  let clear = list_empty_is(blocking);
  let r = {
    app: search,
    commit,
    remembered,
    reach: reach.length,
    deployable: clear,
    blocking,
    elsewhere,
  };
  return r;
}
