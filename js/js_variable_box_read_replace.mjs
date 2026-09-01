import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_variable_box_read_replace(node, name_held, name) {
  arguments_assert(arguments, 3);
  ("$plain name_held");
  ("the word the record is written under.");
  ("$plain name");
  ("the word the entry inside the record is filed under, which is the word the local used to be written under.");
  ("Puts one reading of a plain local in its place: where the word stood, a reading of that word's entry out of the record now stands.");
  ("IT IS THE SAME VALUE AT THE SAME MOMENT. A plain local read where it stands hands back whatever was last written into it; the entry read where it stands hands back whatever was last written into it. Nothing about when it happens moves, because the reading is put exactly where the word was.");
  let got = js_parse_expression(
    text_combine_multiple([fn_name("property_get"), '(holder, "field")']),
  );
  let arguments_got = property_get(got, "arguments");
  let value = js_identifier_expression(name_held);
  property_set(arguments_got, 0, value);
  let value2 = js_expression_string(name);
  property_set(arguments_got, 1, value2);
  object_replace(node, got);
}
