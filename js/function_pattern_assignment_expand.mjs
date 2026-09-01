import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_object_pattern_assignments_expand } from "./js_object_pattern_assignments_expand.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_pattern_assignment_expand(f_name) {
  arguments_assert(arguments, 1);
  ("Writes out, one line at a time, every place the named function takes a record apart straight into words that already stand for something.");
  ("ON ITS OWN IT CHANGES NOTHING ABOUT WHAT THE FUNCTION DOES. It is the step that comes before keeping one of those words in a record, which is in turn the step that comes before cutting the lines around it out. Each of the three is worth nothing by itself and the three together are how a function too long to read in one sitting gets shorter.");
  ("IT THROWS WHEN THERE WAS NOTHING TO WRITE OUT, because being asked to do this to a function that has none of that shape means whoever asked was looking at a different function, and a quiet answer of nothing done would let them carry on believing they had changed it.");
  ("It canonicalizes afterwards because the lines it writes call a function the file may never have needed before.");
  function lambda(ast) {
    let expanded = js_object_pattern_assignments_expand(ast, "record");
    let found = list_empty_not_is(expanded);
    true_is_assert_json(found, {
      f_name,
      hint: "this function takes no record apart straight into words that already stand for something, so there was nothing here to write out a line at a time",
    });
  }
  await function_transform(f_name, lambda);
  let r = await function_auto(f_name);
  return r;
}
