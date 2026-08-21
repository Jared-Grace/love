import { property_get } from "./property_get.mjs";
import { g_arc_steps } from "./g_arc_steps.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { list_shared_run_longest } from "./list_shared_run_longest.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { less_than } from "./less_than.mjs";
export function g_arcs_shared_steps(written) {
  "For every pair of people written for one chapter, the longest stretch of the arc they were both given - the same openers answered by the same passages, back to back and in the same order. Longest first.";
  "THE PROMPT ALREADY FORBIDS THIS AND NOTHING MEASURED IT. Each person is written by a call that is told the others exist and told not to write another version of one of them, and every one of those calls is looking at the same chapter, the same ten passages and the same six openers. So the same scene gets written twice not out of carelessness but because it is the obvious scene, and both copies read correctly on their own - which is exactly the kind of fault a reader finds and a machine was never asked to.";
  "IT MEASURES SHAPE AND NEVER WORDS, so it says nothing about how anybody writes. Two people may sound completely different and still have been walked through the same three moves; that is the repeat worth catching, and it is the one a reader has to hold two whole arcs in mind to see.";
  "A LONG RUN IS A FINDING AND NEVER A VERDICT. Some agreement is unavoidable and correct - there are six openers and ten passages, and one passage is plainly the answer to one kind of trouble, so two people meeting the same trouble should be answered the same way. What the number is for is noticing when the agreement stops being one turn and becomes a scene.";
  "The pairs come back sorted with the longest first, because a reader looks at the top of a ranking and the rest of the list is the evidence that the top is the top.";
  let people = [];
  for (let entry of written) {
    let index = property_get(entry, "index");
    let arc = property_get(entry, "arc");
    let steps = g_arc_steps(arc);
    list_add(people, {
      index,
      steps,
    });
  }
  let pairs = [];
  let count = list_size(people);
  for (let a = 0; less_than(a, count); a++) {
    for (let b = add(a, 1); less_than(b, count); b++) {
      let person_a = list_get(people, a);
      let person_b = list_get(people, b);
      let steps_a = property_get(person_a, "steps");
      let steps_b = property_get(person_b, "steps");
      let shared = list_shared_run_longest(steps_a, steps_b);
      list_add(pairs, {
        index_a: property_get(person_a, "index"),
        index_b: property_get(person_b, "index"),
        turns: list_size(shared),
        steps: shared,
      });
    }
  }
  function pair_turns(pair) {
    let turns = property_get(pair, "turns");
    return turns;
  }
  list_sort_number_mapper_reverse(pairs, pair_turns);
  return pairs;
}
