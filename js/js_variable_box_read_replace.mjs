import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_holder_field_arguments_set } from "./js_call_holder_field_arguments_set.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_variable_box_read_replace(node, name_held, name) {
  arguments_assert(arguments, 3);
  ("$plain name_held");
  ("the word the record is written under.");
  ("$plain name");
  ("the word the entry inside the record is filed under, which is the word the local used to be written under.");
  ("Puts one reading of a plain local in its place: where the word stood, a reading of that word's entry out of the record now stands.");
  ("IT IS THE SAME VALUE AT THE SAME MOMENT. A plain local read where it stands hands back whatever was last written into it; the entry read where it stands hands back whatever was last written into it. Nothing about when it happens moves, because the reading is put exactly where the word was.");
  ("WHICH RECORD AND WHICH ENTRY IS ASKED FOR BY NAME, because the writing side has to fill those same two places with those same two words and the two must never come to disagree.");
  let f_name = fn_name("property_get");
  let code_expression = text_combine_multiple([f_name, '(holder, "field")']);
  let got = js_parse_expression(code_expression);
  js_call_holder_field_arguments_set(got, name_held, name);
  object_replace(node, got);
}
