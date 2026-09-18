import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_calls_walk_unwaited(walkers, ast) {
  arguments_assert(arguments, 2);
  ("Every call in this file that hands a job which has to be waited for to a walk that cannot wait for it.");
  ("★ THE GATE NEXT DOOR CANNOT SEE THIS SHAPE, WHICH IS WHY THIS ONE EXISTS. The reading of calls nobody waits for looks at the name being called, and a job handed over as an argument is never called by its name in the file it is written in. So the walk calls it, receives a promise, and the loop carries straight on. Nothing is waiting anywhere, and nothing throws.");
  ("What it costs was measured on 2026-09-18: the reply parser's own test walked its eighteen cases this way, so it handed back success before a single one had answered and its failures arrived afterwards as rejections outside every caller's catch. It had been wrong for eleven days, and the reason nobody heard was that it could not fail.");
  ("A job held for a moment on purpose is not this. Handing a list of them to something that waits for them all is the concurrent shape the repo writes deliberately, and it goes through a mapping rather than a walk, so it never reaches this reading.");
  let async_named = [];
  let declarations = js_list_type(ast, "FunctionDeclaration");
  for (let visited of declarations) {
    let declaration = property_get(visited, "node");
    let async_is = property_get(declaration, "async");
    if (not(async_is)) {
      continue;
    }
    let id = property_get(declaration, "id");
    if (not(id)) {
      continue;
    }
    let name = property_get(id, "name");
    list_add(async_named, name);
  }
  let unwaited = [];
  let calls = js_list_type(ast, "CallExpression");
  for (let visited of calls) {
    let call = property_get(visited, "node");
    let callee = property_get(call, "callee");
    let callee_is = js_node_type_is(callee, "Identifier");
    if (not(callee_is)) {
      continue;
    }
    let callee_name = property_get(callee, "name");
    let walker_is = list_includes(walkers, callee_name);
    if (not(walker_is)) {
      continue;
    }
    let args = property_get(call, "arguments");
    for (let arg of args) {
      let named_is = js_node_type_is(arg, "Identifier");
      let arrow_is = js_node_type_is(arg, "ArrowFunctionExpression");
      let expression_is = js_node_type_is(arg, "FunctionExpression");
      let written_is = arrow_is || expression_is;
      let async_is = written_is ? property_get(arg, "async") : false;
      let item = property_get(arg, "name");
      let name_async_is = named_is ? list_includes(async_named, item) : false;
      let handed_is = async_is || name_async_is;
      if (handed_is) {
        let code = js_unparse(call);
        list_add(unwaited, code);
      }
    }
  }
  return unwaited;
}
