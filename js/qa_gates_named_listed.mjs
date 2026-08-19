import { qa_gate_said_listed } from "./qa_gate_said_listed.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { null_is } from "./null_is.mjs";
export function qa_gates_named_listed(named, spoke) {
  "$plain named";
  "$plain spoke";
  "Everything each red gate named at one commit - the functions read out of its words, and the offenders read out of the record it threw, gathered gate by gate. Read-only, pure.";
  "The two readers see different halves and neither sees the whole. A gate complaining in English names functions and nothing else; a gate throwing a record names apps, pages, files, translations, lessons - and no function at all. Read by only the first, ten of twelve red gates in one recorded run came back naming nobody, and a gate naming nobody cannot be shown to be about somewhere else, so every one of them held every app out of a deployment.";
  "It is worked out at reading time rather than written into the record, and that is the whole reason it is cheap. What each gate SAID is already kept beside what was read out of it, precisely so a later reader can read it again - so this reaches every commit ever judged the moment it exists, and not one of them has to be judged again. Judging one costs a quarter of an hour.";
  "The stored lists are never added to in place. They belong to the record the caller is holding, and a reader that grew them would leave the record on disk disagreeing with itself the next time anything asked.";
  "A commit judged before the saying was kept has none, and is handed back exactly what it already held. Nothing is guessed at from a reading alone.";
  let gathered = {};
  for (let gate of object_property_names(named)) {
    let names = property_get(named, gate);
    let grown = [];
    list_add_multiple(grown, names);
    property_set(gathered, gate, grown);
  }
  let unspoken = null_is(spoke);
  if (unspoken) {
    return gathered;
  }
  for (let gate of object_property_names(spoke)) {
    let said = property_get(spoke, gate);
    let listed = qa_gate_said_listed(said);
    let held = property_get_or_null(gathered, gate);
    if (null_is(held)) {
      held = [];
      property_set(gathered, gate, held);
    }
    for (let name of listed) {
      list_add_unique(held, name);
    }
  }
  return gathered;
}
