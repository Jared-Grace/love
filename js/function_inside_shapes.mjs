import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_statements_working } from "./js_function_declaration_statements_working.mjs";
import { js_node_copy } from "./js_node_copy.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
import { list_add } from "./list_add.mjs";
import { add_1 } from "./add_1.mjs";
import { greater_than } from "./greater_than.mjs";
export async function function_inside_shapes(f_name, size) {
  arguments_assert(arguments, 2);
  ("What the named function does in every run of work of this length, wherever the run starts - one shape to a run, its own name and its private names taken away.");
  ("The two neighbours over openings and endings ask a function for one shape each, which is what lets a whole repo be grouped by it. The cost is that they can only see a run touching an end. A run of four lines sitting in the middle of a long function touches neither, so a screen carrying the same four lines as another screen reads as two functions with nothing in common - and a long function is exactly where a run is most likely to be in the middle.");
  ("A function with less work in it than the run asked for has no run of this length and answers with nothing, the same way its neighbours do.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let working = js_function_declaration_statements_working(declaration);
  let personal = js_function_declaration_personal_names(declaration);
  let last = list_size_subtract(working, size);
  let shapes = [];
  let index = 0;
  while (true) {
    let past = greater_than(index, last);
    if (past) {
      break;
    }
    let run = list_slice_count(working, index, size);
    let copied = js_node_copy(run);
    let shape = js_statements_shape(copied, personal);
    list_add(shapes, shape);
    index = add_1(index);
  }
  return shapes;
}
