import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_variable_box_write_replace(node, name_held, name) {
  arguments_assert(arguments, 3);
  ("$plain name_held");
  ("the word the record is written under.");
  ("$plain name");
  ("the word the entry inside the record is filed under, which is the word the local used to be written under.");
  ("Puts one writing of a plain local in its place: where the word was written into, a writing of that word's entry into the record now stands, carrying the very same right-hand side.");
  ("THE RIGHT-HAND SIDE IS MOVED RATHER THAN COPIED, so whatever it does it still does once, in the same place, before anything lands.");
  ("IT IS ONLY EVER ASKED OF A WRITING THAT STANDS ON A LINE OF ITS OWN AND REPLACES RATHER THAN ADDS, because a call hands back nothing to pass on and reads nothing of what was there. The reading in front of this one is what refuses every other shape.");
  let right = property_get(node, "right");
  let written = js_parse_expression(
    text_combine_multiple([
      fn_name("property_set"),
      '(holder, "field", value)',
    ]),
  );
  let arguments_written = property_get(written, "arguments");
  let value = js_identifier_expression(name_held);
  property_set(arguments_written, 0, value);
  let value2 = js_expression_string(name);
  property_set(arguments_written, 1, value2);
  property_set(arguments_written, 2, right);
  object_replace(node, written);
}
