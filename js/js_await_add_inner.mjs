import { property_get } from "./property_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { not } from "./not.mjs";
import { js_scopes_enclosing_binding_names } from "./js_scopes_enclosing_binding_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_await } from "./js_await.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
export async function js_await_add_inner(functions, ast, visited) {
  "Puts the word await in front of every call in this tree to a function the given table says waits, and makes the function holding such a call wait as well.";
  "The table is handed in rather than read here, so this can be run against a table of a few made-up entries. The list of names already seen is handed in for the same reason: making one function wait sends the step out to the files that call it, and a name on the list is one that walk has already been through.";
  async function call_await(v) {
    let node = property_get(v, "node");
    async function called_await(called_name) {
      "A name the table says nothing about is a function this step knows nothing";
      "about, and a call it must leave exactly as it stands.";
      let unknown_is = property_exists_not(functions, called_name);
      if (unknown_is) {
        return;
      }
      let waits_is = property_path_get_2(functions, called_name, "async");
      if (not(waits_is)) {
        return;
      }
      let stack = property_get(v, "stack");
      ("A name a scope around this call binds is not the repo function of that name");
      ("at all - it is a parameter, a variable, or a function written inside this");
      ("one - and the table was asked by the name alone, so what it said is about the");
      ("repo function and says nothing whatever about the local one. Given the word");
      ("here, the function holding the call would be made to wait, and would hand");
      ("back a promise where it used to hand back an answer, to every caller it has.");
      ("An import is not such a binding, which is the one case where the name does");
      ("mean what the table was asked about.");
      let bound = js_scopes_enclosing_binding_names(stack, node);
      let local_is = list_includes(bound, called_name);
      if (local_is) {
        return;
      }
      ("The word is only allowed inside a function that waits, so the function");
      ("holding this call is made to wait first, and the files calling that one are");
      ("opened so their calls get the word as well.");
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
    let callee = property_get(node, "callee");
    let b = js_identifier_is(callee);
    if (not(b)) {
      return;
    }
    let name = property_get(callee, "name");
    if (set_includes_not(known, name)) {
      return;
    }
    await called_await(name);
  }
  ("The repo's function names are read once for the whole tree. Asking for them");
  ("at every call read every repository's folder again each time - nineteen");
  ("calls in a short function cost nineteen folder reads, and that was most of");
  ("what this step took. Nothing in the tree's walk adds a function file, so one");
  ("reading answers every call the same way the repeated ones did.");
  let names = await functions_names();
  let known = new Set(names);
  await js_visit_type_each_async(ast, "CallExpression", call_await);
}
