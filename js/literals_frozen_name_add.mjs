import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_string } from "./js_string.mjs";
import { property_get } from "./property_get.mjs";
import { js_declare_unique_ast } from "./js_declare_unique_ast.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_add } from "./list_add.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_body_list_declaration_index } from "./js_body_list_declaration_index.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { literals_frozen_record_new } from "./literals_frozen_record_new.mjs";
export async function literals_frozen_name_add(name) {
  "Names one function in the frozen list and records what it says today, which is the whole of promising never to move a word that has left this repo.";
  "It was two steps done by hand, and the gates that ask for it named only the second. The list is written out in a file, so adding to it meant opening that file, copying the shape of the line above, and inventing a binding name nothing else had taken; then running the recorder, which reads the list and writes down what each name on it says. Run the recorder first and it answers that it added nothing, because a name not on the list yet has nothing for it to read.";
  "Somebody followed that advice on 2026-08-14 and had to read three functions to find the missing step. The hint says both steps now, and this says them in one word.";
  "The name is checked against the functions that exist before anything is written, so the list cannot come to hold a word nothing answers to - a failure that would otherwise wait until the next time anybody ran the list, and arrive as a file that will not open.";
  "Naming a function already on the list changes nothing and says so, so running this twice is the same as running it once.";
  "What it cannot write is the paragraph saying why the word escaped. Every entry in that list has one, and it is the part a reader needs and the part no rule can compose - so the line lands where the next paragraph belongs, and writing that paragraph is left where it was, with the person who knows.";
  "It commits nothing, so the added line lands in a commit of your own alongside whatever else you were doing.";
  arguments_assert(arguments, 1);
  await function_exists_assert(name);
  let names = literals_frozen_names();
  let already = list_includes(names, name);
  if (already) {
    let known = {
      name,
      added: false,
      names: list_size(names),
    };
    return known;
  }
  let f_name = fn_name("literals_frozen_names");
  function lambda(ast) {
    let elements = js_array_expression_only_elements(ast);
    ("The word is put into a string that was parsed empty rather than into one built out of the name, so nothing handed to this command can arrive as code. It is the same move the string builder itself makes, and it is what lets this be approved once instead of at every use.");
    let call = js_parse_expression(
      text_combine_multiple([fn_name("fn_name"), '("")']),
    );
    let argument = js_string(name);
    let call_arguments = property_get(call, "arguments");
    call_arguments[0] = argument;
    let made = js_declare_unique_ast(ast, "spelled", call);
    let declare = property_get(made, "declare");
    let unique = property_get(made, "unique");
    let identifier = js_identifier_expression(unique);
    list_add(elements, identifier);
    let body = js_flo_body(ast);
    let at = js_body_list_declaration_index(body);
    body.splice(at, 0, declare);
  }
  await function_transform_auto(f_name, lambda);
  ("Recording follows in the same breath, because the two halves are one promise and a list naming a word nothing has read is a promise nobody is keeping. It is also what the gates check, so stopping halfway would leave them exactly as red as before.");
  let recorded = await literals_frozen_record_new();
  let report = {
    name,
    added: true,
    recorded,
  };
  return report;
}
