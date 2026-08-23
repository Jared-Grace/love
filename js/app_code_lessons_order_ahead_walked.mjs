import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_order_ahead } from "./app_code_lessons_order_ahead.mjs";
import { app_code_lessons_order_rounds } from "./app_code_lessons_order_rounds.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_to } from "./list_sort_text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lessons_order_ahead_walked() {
  arguments_assert(arguments, 0);
  ("Every lesson standing ahead of its own difficulty, named and nothing else, and how many lessons were opened to say so.");
  ("The reading beside this one hands over how far out of place each lesson is, which is what a person wants when they are deciding what to move. A ratchet wants the opposite: whether a lesson is out of place at all. The distance moves whenever any other lesson moves, so a gate holding distances would go red on a lesson nobody touched; being out of place or not is a fact about the lesson and the ones after it, and it only changes when the order does.");
  ("A lesson appearing here that did not before is the thing the gate refuses. Appending a one-operator lesson to the end of the course puts every harder lesson before it out of place, and that reads as a false alarm right up until you notice it is exactly the fault being looked for.");
  ("The count is how many lessons carrying code were reached, not how many were wrong. A run that built no lessons at all would find nothing out of place, which is what a clean course looks like too, so the number of lessons actually opened is what tells the two apart.");
  let rounds = app_code_lessons_order_rounds();
  let told = app_code_lessons_order_ahead(rounds);
  let walked = property_get(told, "solving");
  let ahead = property_get(told, "ahead");
  function id_of(entry) {
    "a lesson out of place, named the way the course names it";
    let id = property_get(entry, "id");
    return id;
  }
  let offenders = list_map(ahead, id_of);
  list_sort_text_to(offenders);
  let r = {
    walked,
    offenders,
  };
  return r;
}
