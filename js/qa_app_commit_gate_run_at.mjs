import { qa_commit_named_at } from "./qa_commit_named_at.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function qa_app_commit_gate_run_at(search, commit) {
  "Whether one app is sound at one commit: every gate that was red there, sorted into the ones that reach what this app ships and the ones that cannot";
  "One app is what gets deployed, and a break in another app cannot travel into this app's bundle - so a whole-repo verdict answers a question nobody asked and holds a ready deploy for work that could never affect it. Measured on one afternoon: five aborts of a prod fix, none of them able to reach the app being shipped.";
  "Which gates are set aside is DERIVED and never declared. A gate's own complaint names the functions it is complaining about; the app's bundle reach names what it carries; a complaint whose names are all outside that reach is a complaint about something else. Nothing here holds a list of which gates matter to which app, because such a list is a judgment that can be wrong in silence and would need revisiting every time a gate or an app changed.";
  "A red gate that named no function counts as reaching this app. It may well be about somewhere else, but nothing here can show that, and the direction to be wrong in is the one that stops a deploy rather than the one that lets a break through.";
  "The commit is judged once for the whole repo and every app's answer is then a matter of looking, so the second app to ask pays nothing.";
  let at = await qa_commit_named_at(commit);
  let judged = property_get(at, "judged");
  let failed = property_get(judged, "failed");
  let named = property_get(judged, "named");
  let reach = await qa_app_reachable_names(search);
  let blocking = [];
  let elsewhere = [];
  for (let gate of failed) {
    let names = property_get_or_null(named, gate);
    let unnamed = null_is(names);
    if (unnamed) {
      ("red with nothing said about it, so nothing here can place it - counted against this app on purpose");
      list_add(blocking, {
        gate,
        why: "named no function, so it cannot be placed",
        names: [],
      });
      continue;
    }
    let mine = list_intersection(names, reach);
    let none = list_empty_is(mine);
    if (none) {
      let carried = list_includes(reach, gate);
      list_add(elsewhere, {
        gate,
        names,
        gate_itself_shipped: carried,
      });
      continue;
    }
    list_add(blocking, {
      gate,
      why: "names something this app ships",
      names: mine,
    });
  }
  let clear = list_empty_is(blocking);
  let r = {
    app: search,
    commit,
    reach: reach.length,
    deployable: clear,
    blocking,
    elsewhere,
  };
  return r;
}
