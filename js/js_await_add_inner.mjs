import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_await } from "./js_await.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { not } from "./not.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
export async function js_await_add_inner(functions, ast, visited) {
  "Puts the word await in front of every call in this tree to a function the given table says waits, and makes the function holding such a call wait as well.";
  "The table is handed in rather than read here, so this can be run against a table of a few made-up entries. The list of names already seen is handed in for the same reason: making one function wait sends the step out to the files that call it, and a name on the list is one that walk has already been through.";
  async function call_await(v) {
    let node = property_get(v, "node");
    async function called_await(name) {
      "A name the table says nothing about is a function this step knows nothing";
      "about, and a call it must leave exactly as it stands.";
      let unknown_is = property_exists_not(functions, name);
      if (unknown_is) {
        return;
      }
      let waits_is = property_path_get_2(functions, name, "async");
      if (not(waits_is)) {
        return;
      }
      ("The word is only allowed inside a function that waits, so the function");
      ("holding this call is made to wait first, and the files calling that one are");
      ("opened so their calls get the word as well.");
      let stack = property_get(v, "stack");
      await js_function_last_asyncify(stack, waits_is, ast, functions, visited);
      let above = list_get_end_1(stack);
      let awaited_is = js_node_type_is(above, "AwaitExpression");
      if (awaited_is) {
        return;
      }
      ("The call is copied before it is wrapped. The wrapper is written over the");
      ("very node it holds, so a wrapper built around the node itself would hold");
      ("itself, and reading it would never reach an end.");
      let copy = object_copy(node);
      let awaited = js_await(copy);
      object_replace(node, awaited);
    }
    await js_call_function_if(node, called_await);
  }
  await js_visit_type_each_async(ast, "CallExpression", call_await);
}
