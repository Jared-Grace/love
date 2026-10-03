import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { baselines_unwatched } from "./baselines_unwatched.mjs";
import { text_suffix_change } from "./text_suffix_change.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function baselines_unwatched_excused() {
  "Every ratchet record the repo-wide gate never opens whose one gate has already been let off standing in the gate lists, so the record goes unread for a reason somebody argued for out loud.";
  "★ THE TWO QUESTIONS HAVE ONE ANSWER AND IT IS WRITTEN IN ONE PLACE. A ratchet is unwatched because the gate that opens its record does not run, and a gate that does not run is either an accident or a decision argued for out loud. The arguing already happens next door, in the let-off list the wiring gate keeps - name, reason, and three checks that refuse a reason which has stopped being true. A second hand-written list here would hold the same decision in different words, and two spellings of one decision are free to come to disagree: the gate goes back in the list and one excuse is withdrawn while the other sits there letting a record go unread. So no name is typed here at all, and withdrawing the let-off next door turns both gates red together.";
  "★ THE JOIN IS BY NAME AND NOT BY WHAT A GATE REACHES, BECAUSE REACHING WAS TRIED AND IT ANSWERED EVERYTHING. Walking each excused gate for the record paths it can reach was written out and measured on 2026-10-02: it excused all eighty-eight of the repo's ratchet records, from eight let-offs. A gate reaches a shared helper, the helper reaches another, and a walk deep enough to find the one record a gate was built around has long since found every other one. Subtracting that answer would have left this gate unable to report anything at all - a check that cannot disagree, wearing the shape of a check that passes.";
  "The naming is the join this repo already runs on: one stem wears _baseline_path for where the record is kept, _baseline_write for what rewrites it, and _gate_run for what reads it. So the stem is taken off the record's name and the gate's ending put on, and that name is looked for among the let-offs.";
  "A RECORD WHOSE GATE IS SPELLED SOME OTHER WAY IS NOT EXCUSED, AND THAT IS THE SAFE DIRECTION TO FAIL IN. The join misses, nothing is subtracted, and this gate stays red naming the record - which is a person being asked a question they can answer. The other direction would be a record going quietly unread because two names happened to agree.";
  arguments_assert(arguments, 0);
  let exempt = functions_gate_run_unwired_exempt();
  let gates = list_map_property(exempt, "name");
  let unwatched = await baselines_unwatched();
  function excused_is(baseline_path_fn) {
    let gate = text_suffix_change(
      baseline_path_fn,
      "_baseline_path",
      "_gate_run",
    );
    let let_off = list_includes(gates, gate);
    return let_off;
  }
  let excused = list_filter(unwatched, excused_is);
  return excused;
}
