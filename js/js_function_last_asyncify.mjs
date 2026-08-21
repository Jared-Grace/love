import { list_difference } from "./list_difference.mjs";
import { list_add } from "./list_add.mjs";
import { js_await_add_inner } from "./js_await_add_inner.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { each_async } from "./each_async.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { equal } from "./equal.mjs";
import { js_flo } from "./js_flo.mjs";
import { not } from "./not.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export async function js_function_last_asyncify(
  stack,
  async_is,
  ast,
  functions,
  visited,
) {
  "Marks the function a piece of work is standing in as one that waits, and where that function is the one the file is named for, goes on to open every function that calls it and do the same inside each of them.";
  "Waiting spreads outwards and there is no end to it short of the callers. A call that has to be waited for makes the function holding it a waiting one; a call to that function then has to be waited for in turn, in files nobody opened. So marking one function is never the whole of the job, and this is the step that goes and finds the rest of it.";
  "Only the function the file is named for spreads. One written inside another is marked and stopped at, because nothing outside the file can name it, so there is nobody upward to tell.";
  "The list of names already opened is handed in rather than kept here, and a name goes on that list before its callers are walked rather than after. Two functions that call each other would otherwise send each other round for ever.";
  "Nothing at all happens when the function is already marked. That is what lets the spreading run back over ground it has covered and stop, and it is why the same list of callers can be walked from several directions without being opened twice.";
  let f = js_stack_last_function(stack);
  let property_name = "async";
  let async = property_get(f, property_name);
  if (async_is && not(async)) {
    property_set(f, property_name, true);
    let declaration = js_flo(ast);
    if (equal(f, declaration)) {
      let name = js_function_declaration_name(declaration);
      let value = property_get(functions, name);
      property_set(value, property_name, true);
      let result = await data_identifiers_search(name);
      let properties = properties_get(result);
      let difference = list_difference(properties, visited);
      async function lambda(f_name) {
        async function lambda2(ast_inner) {
          list_add(visited, f_name);
          let v = await js_await_add_inner(functions, ast_inner, visited);
          return v;
        }
        await function_transform(f_name, lambda2);
      }
      await each_async(difference, lambda);
    }
  }
}
