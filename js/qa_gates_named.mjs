import { qa_gates } from "./qa_gates.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gates_named(names) {
  "The gates answering to the names given, picked out of the list of gates there are.";
  "Picking from a closed list is not the same as running whatever a caller names, and that difference is the whole of why a name is safe to hand in here. Nothing outside the gate list can be reached through this however a name is spelled, so the worst a wrong one can do is be refused - which it is, by name, rather than quietly answering with fewer gates than were asked for.";
  let gates = qa_gates();
  let picked = [];
  for (let name of names) {
    function named_is(one) {
      let same = equal(one.name, name);
      return same;
    }
    let matching = list_filter(gates, named_is);
    let asked = {
      hint: "this is not the name of a gate - would you like to check the spelling against the gate list?",
      name,
    };
    let gate = list_single_message(matching, asked);
    list_add(picked, gate);
  }
  return picked;
}
