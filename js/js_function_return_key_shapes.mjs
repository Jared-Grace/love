import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
import { not } from "./not.mjs";
import { js_object_expression_key_names } from "./js_object_expression_key_names.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_function_return_key_shapes(function_node) {
  arguments_assert(arguments, 1);
  ("$plain function_node");
  ("The different sets of keys this function can answer with, each written as its key names joined by commas, with nothing said twice.");
  ("ONE SHAPE MEANS EVERY WAY OUT AGREES; two or more mean a caller receives different words depending on which way out was taken, and cannot know which. A caller asking for a key that only one of the shapes carries reads nothing at all on the other paths - not an error, not a warning, just a missing value travelling on until it means something wrong somewhere else.");
  ("Returns that hand back something other than a readable object literal are not counted, so a function answering with an object on one path and with nothing on another is left alone. Answering with nothing is a thing a caller can test for and usually does; answering with the same object under a different word is not.");
  let returns = js_function_returns_own(function_node);
  let shapes = [];
  for (let one of returns) {
    let object_node = js_return_object_expression_try(one, function_node);
    if (not(object_node)) {
      continue;
    }
    let names = js_object_expression_key_names(object_node);
    if (not(names)) {
      continue;
    }
    let shape = list_join_comma(names);
    list_add(shapes, shape);
  }
  let r = list_unique(shapes);
  return r;
}
