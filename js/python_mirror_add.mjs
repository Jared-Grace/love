import { list_first_property } from "./list_first_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_string } from "./js_string.mjs";
import { list_first } from "./list_first.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_body_list_declaration_index } from "./js_body_list_declaration_index.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { list_add } from "./list_add.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function python_mirror_add(f_name, constant) {
  "$plain f_name";
  "$plain constant";
  arguments_assert(arguments, 2);
  ("Adds one more list to the register of lists the python guard is given a generated copy of. The function named here answers the list; the word named here is what the python side calls it.");
  ("The entry is the same three things every other one is, and one of them is worth saying out loud: the path is not written down. It is built from the function's own name, so the generated module is named after what it holds and cannot come to disagree with it.");
  ("The record is parsed from a fixed piece of code with nothing of the arguments in it, and the two arguments are then put in as a written word and as a name. So nothing handed to this command can arrive as code, which is what lets it be approved once rather than at every use.");
  ("It canonicalizes afterwards, which is what adds the import the new entry needs, and it commits nothing, so the entry lands in a commit of your own. Writing the generated module out is a separate step - ",
    fn_name("python_mirrors_write"),
    " - and until it runs the gate beside it is right to be red.");
  await function_exists_assert(f_name);
  function lambda(ast) {
    let code_expression = text_combine_multiple([
      '{constant: "", path: ',
      fn_name("text_combine_multiple"),
      '([".claude/hooks/", source.name, ".py"]), source: source}',
    ]);
    let record = js_parse_expression(code_expression);
    let properties = property_get(record, "properties");
    let constant_property = properties[0];
    let value = js_string(constant);
    property_set(constant_property, "value", value);
    let path_property = properties[1];
    let path_call = property_get(path_property, "value");
    let call_arguments = property_get(path_call, "arguments");
    let elements_piece = list_first_property(call_arguments, "elements");
    let member = elements_piece[1];
    let value2 = js_identifier_expression(f_name);
    property_set(member, "object", value2);
    let source_property = properties[2];
    let value3 = js_identifier_expression(f_name);
    property_set(source_property, "value", value3);
    let body = js_flo_body(ast);
    let at = js_body_list_declaration_index(body);
    let statement = body[at];
    let declarators = js_declaration_declarators_get(statement);
    let declarator = list_first(declarators);
    let init = js_declare_init_get(declarator);
    let elements = property_get(init, "elements");
    list_add(elements, record);
  }
  let target = fn_name("python_mirrors");
  let output = await function_transform_auto(target, lambda);
  return output;
}
