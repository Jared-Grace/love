import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { list_add } from "./list_add.mjs";
export async function example_files_command_core_add(command_name, core_name) {
  arguments_assert(arguments, 2);
  ("Writes one pairing into the register that says which hermetic core proves which whole-repo command, so a command can be given a worked example without anybody opening that register by hand.");
  ("THE REGISTER WAS THE LAST HAND EDIT LEFT IN EXAMPLING A WHOLE-REPO COMMAND. Every other step is already a command - the core is promoted by name, the example is promoted by name and run before it is kept, the group is placed by a transform - and then the two-column table between them was opened in an editor and a row typed into it. A table that only ever grows by one row of two names is a command, not a document.");
  ("BOTH NAMES ARE CHECKED TO BE FUNCTIONS BEFORE THE ROW IS WRITTEN, because the register is imported by the runner that reads the whole corpus. A row naming nothing does not fail its own example, it fails every example there is.");
  ("Appended rather than placed after a chosen row, because a lookup table is read by name and no part of it is an order.");
  await function_exists_assert_json(
    command_name,
    "the register says which core proves a command, so what is named there has to be a command",
  );
  await function_exists_assert_json(
    core_name,
    "the register says which core proves a command, so what is named there has to be a core",
  );
  let cores = example_files_command_cores();
  let names = list_map(cores, name_get);
  let includes = list_includes(names, command_name);
  equal_assert_json(includes, false, {
    hint: "this command already has a core in the register, and a second row for it would never be reached",
    command_name,
    core_name,
  });
  let register_name = fn_name("example_files_command_cores");
  await function_transform(register_name, row_add);
  let checked = await function_auto_checked(register_name);
  return checked;
  function name_get(core) {
    let name = property_get(core, "name");
    return name;
  }
  function row_add(ast) {
    "The row is written as code and read back rather than built node by node, because one of its two halves is a call and the other is a plain name, and saying that in text is how the register itself says it.";
    "The list is reached through the name the register hands back rather than through a word typed here, so the register renaming what it holds cannot leave this pointing at nothing.";
    let code = text_combine_multiple([
      text_combine_multiple(["let row = { name: ", fn_name("fn_name"), '("']),
      command_name,
      '"), core: ',
      core_name,
      " };",
    ]);
    let statement = js_parse_statement_module(code);
    let row = js_node_value_get(statement);
    let list_name = js_return_name(ast);
    let declaration = js_find_declaration_named(ast, list_name);
    let list = js_node_value_get(declaration);
    let elements = property_get(list, "elements");
    list_add(elements, row);
  }
}
