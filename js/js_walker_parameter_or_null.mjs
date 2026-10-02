import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_list_type_own } from "./js_list_type_own.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_walker_parameter_or_null(ast) {
  arguments_assert(arguments, 1);
  ("The parameter this file's function calls from inside a loop, or nothing when there is none - which is what tells a walker apart from a function that merely takes a job to do later.");
  ("★ A WALKER IS READ OFF THE CODE AND NEVER LISTED BY HAND. Asked as 'any function that takes a lambda', the reading named 259 places across the repo and nearly every one was a click handler, where handing over a job nobody waits for is the whole design. Asked this way it named 28. A list typed out somewhere would also have had to be kept in step with the repo by a person, and a walker missing from it is a fault nobody ever hears about.");
  ("A function that is already async is passed over, because it can wait for what it calls and the fault this reading exists to find cannot happen in one.");
  ("★ ONLY THE CALLS THE LOOP ITSELF MAKES COUNT, NOT THE ONES MERELY WRITTEN INSIDE IT. A row of buttons is built in a loop, and the job each button does is written down right there and handed over; the loop hands it over and goes on, and what calls it is a finger on a screen, later and perhaps never. Reading every call written anywhere under the loop called those handing-over places walkers, which is exactly the click handler this reading narrowed itself to leave out - it had been narrowed by asking where a lambda was called rather than by asking who calls it, and a handler written in a loop slipped back through the same hole.");
  let statements = property_get(ast, "body");
  let params = [];
  for (let statement of statements) {
    let exported_is = js_node_type_is(statement, "ExportNamedDeclaration");
    let declaration = exported_is
      ? property_get(statement, "declaration")
      : statement;
    if (not(declaration)) {
      continue;
    }
    let function_seen_is = js_node_type_is(declaration, "FunctionDeclaration");
    if (not(function_seen_is)) {
      continue;
    }
    let async_is = property_get(declaration, "async");
    if (async_is) {
      continue;
    }
    let declared = property_get(declaration, "params");
    for (let param of declared) {
      let named_is = js_node_type_is(param, "Identifier");
      if (named_is) {
        let name = property_get(param, "name");
        list_add(params, name);
      }
    }
  }
  let loop_types = [
    "ForOfStatement",
    "ForInStatement",
    "ForStatement",
    "WhileStatement",
    "DoWhileStatement",
  ];
  for (let loop_type of loop_types) {
    let loops = js_list_type(ast, loop_type);
    for (let visited of loops) {
      let loop = property_get(visited, "node");
      let calls = js_list_type_own(loop, "CallExpression");
      for (let call_visited of calls) {
        let callee = property_path_get_2(call_visited, "node", "callee");
        let callee_is = js_node_type_is(callee, "Identifier");
        if (not(callee_is)) {
          continue;
        }
        let callee_name = property_get(callee, "name");
        let param_is = list_includes(params, callee_name);
        if (param_is) {
          return callee_name;
        }
      }
    }
  }
  let none = null;
  return none;
}
