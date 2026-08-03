import { js_duplicate_elements_size } from "./js_duplicate_elements_size.mjs";
import { functions_duplicate_elements } from "./functions_duplicate_elements.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_duplicate_elements_gate_run() {
  "Gate: no ordered register in this repo holds one name twice.";
  "The quieter half of the check next door over records. A record given one name twice throws the first entry away; a register given one name twice keeps both, and whatever reads it does that one thing twice and says nothing about having done so - green both times, and the only cost looking exactly like the whole run being a little slow.";
  "It is the way work goes wrong here rather than a way somebody writes badly. Somebody writes a unit and somebody else notices it is not registered, and the two of them register it seconds apart. Both edits are right, both land, and what is left is a register longer than the set of things it stands for. That happened, on the register the whole-repo gate keeps of its own members, which is where this started.";
  "Held to zero rather than to a baseline because it read clean across every function here the day it was written, once the number below it was set from what the repo actually holds.";
  let size = js_duplicate_elements_size();
  let offenders = await functions_duplicate_elements(size);
  list_empty_is_assert_json(offenders, {
    hint: "these registers hold the same name more than once, so whatever reads them does that one thing more than once - would you like to take out every mention after the first?",
  });
  let r = {
    offenders: offenders.length,
  };
  return r;
}
