import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_function_work_none_is(declaration) {
  "Whether a function takes nothing and calls nothing. Such a function can only be handing back a fixed value, or doing nothing at all - there is no third thing left for it to be.";
  "This is asked when looking for the same work under two names, and it is asked in order to leave these out. Two functions that hand back the same fixed value are not one function written twice: the slash that divides two numbers and the slash that separates two words are the same character and two different ideas, and where a value belongs is a separate question from whether a job is duplicated. An empty body is left out for the same reason - two functions that do nothing are alike in doing nothing, which says nothing about either.";
  let params = js_function_declaration_params_names(declaration);
  let takes_something = list_empty_not_is(params);
  if (takes_something) {
    return false;
  }
  let free = js_function_declaration_free_names(declaration);
  let none = list_empty_is(free);
  return none;
}
