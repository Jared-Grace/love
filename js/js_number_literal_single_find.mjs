import { js_literal_single_find_generic } from "./js_literal_single_find_generic.mjs";
import { number_is } from "./number_is.mjs";
export function js_number_literal_single_find(ast) {
  "The one number a function has written into it, which is how a selector says where.";
  "This is where most values written into code actually live. A number sitting in a body says nothing about why it is that number, and it is the sort of value that turns out to want to be two numbers far more often than anyone expects when they write it.";
  let sort_name = "number";
  let only = js_literal_single_find_generic(ast, number_is, sort_name);
  return only;
}
