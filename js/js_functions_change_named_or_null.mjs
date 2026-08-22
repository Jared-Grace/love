import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_statements_change_named } from "./js_statements_change_named.mjs";
import { js_unparse_multiple } from "./js_unparse_multiple.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_functions_change_named_or_null(before, after) {
  "What happened inside one nested function that stayed where it was and kept its name - or nothing at all, where the two statements handed in are not that.";
  "IT IS WHAT KEEPS THE LARGEST BUCKET FROM MEANING NOTHING. Comparing only the lines a function is written out of, every edit anywhere inside a function nested in it shows up as that one line having changed, and one statement replaced was more than half of everything found - a name covering both a genuine one-line swap and an arbitrarily large rewrite three levels down. Going in one level names the real edit instead, and the going in repeats for as long as the change keeps sitting inside a function.";
  "A CHANGED HEADER IS ITS OWN ANSWER. Where the body came back identical and the two are still written differently, what moved was the line the function opens with - its parameters, or its being awaited - and that is a command somebody can write, which an edit somewhere inside would have hidden.";
  "THE NAME OF THE FUNCTION MUST MATCH. Two differently named functions standing at the same place is one function taken out and another put in, whatever their bodies say, and reading it as an edit to a single function would invent a history that did not happen.";
  arguments_assert(arguments, 2);
  let kind = "FunctionDeclaration";
  let before_is = js_node_type_is(before, kind);
  let after_is = js_node_type_is(after, kind);
  let both = before_is && after_is;
  if (not(both)) {
    return null;
  }
  let name_before = js_function_declaration_name(before);
  let name_after = js_function_declaration_name(after);
  let named_same = equal(name_before, name_after);
  if (not(named_same)) {
    return null;
  }
  let body_before = js_function_declaration_to_block_body(before);
  let body_after = js_function_declaration_to_block_body(after);
  let texts_before = js_unparse_multiple(body_before);
  let texts_after = js_unparse_multiple(body_after);
  let body_same = lists_equal_pair(texts_before, texts_after);
  if (body_same) {
    let r = "a nested function's header changed";
    return r;
  }
  let inner = js_statements_change_named(body_before, body_after);
  let named = text_combine("in a nested function, ", inner);
  return named;
}
