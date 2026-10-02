import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { baseline_paths_names } from "./baseline_paths_names.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function baselines_unwatched_excused() {
  "Every ratchet record that nothing in the repo-wide gate opens because the one gate that reads it has already been let off standing in the gate lists, with the reason written where that let-off is.";
  "★ THE TWO QUESTIONS HAVE ONE ANSWER AND THERE MUST ONLY BE ONE PLACE IT IS WRITTEN. A ratchet is unwatched because the gate that opens its record does not run, and a gate that does not run is either an accident or a decision somebody argued for out loud. The arguing already happens next door, in the let-off list the wiring gate keeps - name, reason, and three checks that refuse a reason which has stopped being true. A second hand-written list here would hold the same decision in different words, and two spellings of one decision are free to come to disagree: the gate goes back in the list and one excuse is withdrawn while the other sits there letting a record go unread.";
  "So no name is typed here at all. Each gate the wiring list excuses is walked for what it reaches, and a ratchet record it reaches is excused for exactly as long as that gate's own let-off stands. Withdraw the let-off and both gates go red together, which is the behaviour somebody withdrawing it would expect and the behaviour two lists could not have given.";
  "★ A GATE LET OFF FOR A REASON THAT HAS NOTHING TO DO WITH ITS RECORD STILL EXCUSES THAT RECORD, AND THAT IS RIGHT RATHER THAN A LEAK. The reasons in that list are mostly that the subject cannot survive the frozen copy a commit is judged in, and that the same question is asked instead at a sending, of the pieces about to go out. A record opened at a sending is opened; it is simply not opened by the gate that runs on every commit, which is the only thing the reading above it can see. What would be a leak is a record nothing opens anywhere, and that is still caught, because a gate nobody runs at all has no reason written for it and the wiring gate refuses it.";
  "The walk is per excused gate rather than one walk of the whole repo, because what is wanted is which gate reaches which record and a single walk would only say that something somewhere does.";
  arguments_assert(arguments, 0);
  let exempt = functions_gate_run_unwired_exempt();
  let gates = list_map_property(exempt, "name");
  let path_names = await baseline_paths_names();
  let excused = [];
  for (let gate of gates) {
    let reachable = await function_reachable_names(gate);
    let read = list_intersection(path_names, reachable);
    list_add_multiple(excused, read);
  }
  let once = list_unique(excused);
  return once;
}
