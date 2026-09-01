import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_holder_field_arguments_set } from "./js_call_holder_field_arguments_set.mjs";
import { property_set } from "./property_set.mjs";
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
  ("WHICH RECORD AND WHICH ENTRY IS ASKED FOR BY NAME, the same name the reading side asks, so the two cannot come to fill those two places differently. What is left here is the third place, which is the whole of what a writing has and a reading has not.");
  let right = property_get(node, "right");
  let f_name = fn_name("property_set");
  let code_expression = text_combine_multiple([
    f_name,
    '(holder, "field", value)',
  ]);
  let written = js_parse_expression(code_expression);
  let arguments_written = js_call_holder_field_arguments_set(
    written,
    name_held,
    name,
  );
  property_set(arguments_written, 2, right);
  object_replace(node, written);
}
