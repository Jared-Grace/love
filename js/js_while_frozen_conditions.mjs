import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_pure_read_names } from "./js_pure_read_names.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_escape_statements_is } from "./js_escape_statements_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_while_frozen_conditions(ast) {
  arguments_assert(arguments, 1);
  ("The loops in this code that can never stop, because what they wait for is settled");
  ("before they start");
  ("The repo's ordinary tidying pulls a piece of an expression out into a name above");
  ("it. Everywhere else that changes nothing, because the piece is read once either");
  ("way. A loop's condition is read once each time round, so lifting it out asks the");
  ("question once and then waits forever for an answer that was taken before the work");
  ("that would have changed it. The code reads well, parses, and passes review; the");
  ("only sign is that something never comes back. It has happened here once, and it");
  ("stopped every gate run in the repo rather than one.");
  ("A loop is offered only when never stopping can be shown rather than suspected.");
  ("The condition must read at least one name and be built entirely of parts that");
  ("only read, so its answer is settled by those names alone. None of those names may");
  ("be written to inside the loop. And nothing inside may break, return or throw, any");
  ("of which would let the loop end while the condition still says go on.");
  ("Each of those is a reason to stay quiet rather than to speak, so a loop this");
  ("cannot prove stuck is passed over in silence. That is the right way round: a");
  ("missed one leaves the repo where it already was, while a wrongly named one sends");
  ("somebody to read working code.");
  let frozen = [];
  function lambda(v) {
    let loop = property_get(v, "node");
    let test = property_get(loop, "test");
    let body = property_get(loop, "body");
    let names = js_pure_read_names(test);
    let read_only_is = not(names);
    if (read_only_is) {
      return;
    }
    let waits_on_something = greater_than(names.length, 0);
    if (not(waits_on_something)) {
      return;
    }
    let escapes = js_escape_statements_is(body);
    if (escapes) {
      return;
    }
    let written = js_assigned_names(body);
    let changed = list_intersect(names, written);
    let stuck = list_empty_is(changed);
    if (not(stuck)) {
      return;
    }
    let code = js_unparse(test);
    let told = {
      condition: code,
      names,
    };
    list_add(frozen, told);
  }
  js_visit_types(ast, ["WhileStatement", "DoWhileStatement"], lambda);
  return frozen;
}
