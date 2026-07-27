export function qa_gates_named(names) {
  "The gates answering to the names given, picked out of the list of gates there are.";
  "Picking from a closed list is not the same as running whatever a caller names, and the difference is the whole of why this is safe to hand a name to. Nothing outside the gate list can be reached through here however the names are spelled, so the worst a wrong name can do is be refused - which it is, by name, rather than quietly answering with fewer gates than were asked for.";
  let gates = qa_gates();
  let picked = [];
  for (let name of names) {
    function named_is(gate) {
      let same = equal(gate.name, name);
      return same;
    }
    let gate = list_find_try(gates, named_is);
    assert_json(gate, {
      hint: "this is not the name of a gate - would you like to check the spelling against the gate list?",
      name,
    });
    list_add(picked, gate);
  }
  return picked;
}
