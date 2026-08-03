import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_statement_stopping_types } from "./js_statement_stopping_types.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function js_unreachable_statements(ast) {
  "Every line of work in this file that sits under a line which always leaves, and so never runs.";
  "Nothing goes wrong when this code is run, which is the whole difficulty with it - it costs nothing, breaks nothing, and reads exactly like work being done. A guard written under a return is care taken that nobody receives; an old way of doing the job parked under the new one is two answers to the same question with no sign of which one is live.";
  "Prose is not counted, because a sentence written under a return is a note about the parking rather than work that failed to happen, and counting it would bury the lines that matter under the lines that explain them.";
  "A function written under a return is not counted either, and for a different reason: it really is reached. A declared function is lifted to the top of the block before anything in the block runs, so its position under the return says nothing about whether it is used.";
  let stopping = js_statement_stopping_types();
  let dead = [];
  let blocks = js_list_type(ast, "BlockStatement");
  for (let visited of blocks) {
    let statements = property_path_get_2(visited, "node", "body");
    let stopped = false;
    for (let statement of statements) {
      if (stopped) {
        let hoisted = js_node_type_is(statement, "FunctionDeclaration");
        if (hoisted) {
          continue;
        }
        let work_is = js_statement_work_is(statement);
        if (work_is) {
          list_add(dead, statement);
        }
        continue;
      }
      let type = js_node_type(statement);
      stopped = list_includes(stopping, type);
    }
  }
  return dead;
}
