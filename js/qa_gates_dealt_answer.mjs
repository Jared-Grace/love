import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gates_dealt } from "./qa_gates_dealt.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gates_dealt_answer(c) {
  "Deals one written-down set of gates and says how big each share came out, which gates reached nobody, and which reached more than one";
  "The two lists are almost always empty and are the reason this exists. How big the shares are is the saving; whether every gate was dealt exactly once is whether the suite is still asking everything it says it asks";
  let names = property_get(c, "gates");
  let costs = property_get(c, "costs");
  let count = property_get(c, "count");
  let gates = [];
  for (let f_name of names) {
    gates.push({
      name: f_name,
    });
  }
  let shares = qa_gates_dealt(gates, costs, count);
  let sizes = [];
  let seen = {};
  for (let share of shares) {
    sizes.push(share.length);
    for (let gate of share) {
      let f_name = property_get(gate, "name");
      let already = seen[f_name];
      seen[f_name] = equal(already, undefined) ? 1 : already + 1;
    }
  }
  let missing = [];
  let twice = [];
  for (let f_name of names) {
    let times = seen[f_name];
    if (equal(times, undefined)) {
      missing.push(f_name);
    }
    if (not_equal(times, undefined) && greater_than(times, 1)) {
      twice.push(f_name);
    }
  }
  let r = {
    sizes,
    missing,
    twice,
  };
  return r;
}
