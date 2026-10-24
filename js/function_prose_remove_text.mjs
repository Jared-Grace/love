import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_get } from "./list_get.mjs";
import { js_prose_statement_remove } from "./js_prose_statement_remove.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_prose_remove_text(f_name, text_before) {
  "Takes one line out of what a function says about itself, naming a run of text inside the line rather than the line's number.";
  "The numbered one asks for a count, and a count is only right until a line above it moves. A run of the line's own text cannot point at the wrong line: it names exactly one line or the removal is refused, the same rule the command that changes a run inside a line keeps.";
  arguments_assert(arguments, 2);
  function lambda(ast) {
    let statements = js_prose_statement_nodes(ast);
    let found = [];
    let index = 0;
    for (let prose of statements) {
      let prose_said = property_path_get_2(prose, "expression", "value");
      if (text_includes(prose_said, text_before)) {
        list_add(found, index);
      }
      index = index + 1;
    }
    let lines = list_size(found);
    equal_assert_json(lines, 1, {
      f_name,
      text_before,
      lines,
      hint: "a removal asks for text that sits in exactly one line. None usually means the line is already gone or a character differs; more than one means a little more of the sentence will tell the lines apart",
    });
    let at = list_get(found, 0);
    js_prose_statement_remove(ast, at);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
