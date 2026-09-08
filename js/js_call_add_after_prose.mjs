import { js_call_add_generic } from "./js_call_add_generic.mjs";
import { js_flo_body_add_after_prose } from "./js_flo_body_add_after_prose.mjs";
export async function js_call_add_after_prose(ast, f_name) {
  "Adds a call to the named function at the top of the exported function's work, under whatever the function says about itself.";
  "The twin that adds first puts the call above the account and above the count of arguments, which is the wrong place for everything except the account itself. Both places already had a body-adder; only the first of them had a call-adder, so adding a check to a function that explains itself meant choosing between the wrong place and no command at all.";
  await js_call_add_generic(ast, f_name, js_flo_body_add_after_prose);
}
