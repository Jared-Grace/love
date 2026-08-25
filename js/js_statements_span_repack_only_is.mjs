import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_statement_prose_is } from "./js_statement_prose_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_statements_span_repack_only_is(span, tail) {
  "Whether a run of lines would come out as a piece that holds no work - every name it hands back lifted out of a record with the getter, and at most one line doing anything besides.";
  "THE CUT ALREADY ASKS THIS AND ONLY AFTER IT HAS WRITTEN. Its reading is asked of a finished function, so the run has to be pulled out, the piece parsed, the answer read, and the whole thing put back when the answer is no. Anything wanting to know beforehand - whether to offer a run at all - cannot reach that reading, and so offers runs that come out and go straight back in. Five of these places were worked by hand on 2026-08-25 and four of the five were undone for exactly this.";
  "IT IS THE RUN'S OWN LINES THAT ARE ASKED, WHICH IS THE SHAPE THE OTHER FIVE READINGS BESIDE IT TAKE. What the piece would hand back is what the run brings into being that the lines behind it still read, and there is already a reading for that; a name handed back is lifted when the line binding it sets it from a call to the getter.";
  "IT MAY HOLD A GOOD RUN BACK AND IT MAY NEVER WAVE A BAD ONE ON, the same one-sidedness the reading about silent wrongs is held to. So a line it cannot recognise is counted as work rather than as lifting, which can only ever make a run look busier than it is - and a run that looks busy is offered, which is what happens today anyway.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 2);
  let outputs = js_statements_span_outputs(span, tail);
  let handed = list_size(outputs);
  let few_is = less_than(handed, 2);
  if (few_is) {
    return false;
  }
  let getter = fn_name("property_get");
  let lifted = 0;
  let made = 0;
  for (let statement of span) {
    let prose_is = js_statement_prose_is(statement);
    if (prose_is) {
      continue;
    }
    let bound_is = js_node_type_is(statement, "VariableDeclaration");
    if (bound_is) {
      let declarations = property_get(statement, "declarations");
      let left = list_size(declarations);
      let alone_is = equal(left, 1);
      if (alone_is) {
        let declarator = list_first(declarations);
        let id = property_get(declarator, "id");
        let name = property_or_null(id, "name");
        let source = property_or_null(declarator, "init");
        let handed_is = list_includes(outputs, name);
        let unpack_is = js_call_callee_name_equal(source, getter);
        if (handed_is && unpack_is) {
          lifted = add(lifted, 1);
          continue;
        }
      }
    }
    made = add(made, 1);
  }
  let empty_is = equal(lifted, 0);
  if (empty_is) {
    return false;
  }
  let mixed_is = greater_than(made, 1);
  if (mixed_is) {
    return false;
  }
  return true;
}
