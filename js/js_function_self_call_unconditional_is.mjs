import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_call_argument_names } from "./js_call_argument_names.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
export function js_function_self_call_unconditional_is(declaration) {
  "Whether a function calls itself at its own top level, passing along the very things it was handed. Nothing above such a statement can stop it and nothing about the next call differs, so it goes round forever.";
  "This is the shape of a typo, not of recursion: one word of a callee name meant to be another. Real recursion always differs somewhere - it sits under a test, or it changes something on the way in - so all three conditions have to hold together before anything is said.";
  "It is a smell rather than a proof. An earlier statement could put something new inside a list that is passed on by the same name, and that call would end. No such function exists here today, and the day one is written is the day to weigh this again.";
  let name = js_function_declaration_name(declaration);
  let params = js_function_declaration_params_names(declaration);
  let statements = js_function_declaration_statements_doing(declaration);
  for (let statement of statements) {
    let call = js_statement_call_any_get(statement);
    if (equal(call, null)) {
      continue;
    }
    let callee = js_call_callee_name_try(call);
    if (equal_not(callee, name)) {
      continue;
    }
    let args = js_call_argument_names(call);
    if (equal(args, null)) {
      continue;
    }
    let same = lists_equal_pair(args, params);
    if (same) {
      return true;
    }
  }
  return false;
}
