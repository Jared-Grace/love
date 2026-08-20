import { arguments_assert } from "./arguments_assert.mjs";
import { js_value_expression } from "./js_value_expression.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_object_expression_value_set(object, value) {
  "Puts a plain value back onto the page in the place a written record stands, so a record read out of a program, worked on, and handed back arrives as words on the page again.";
  "The whole record is written afresh rather than the one entry that changed. A record only gets here at all by having been read off the page in full, so there is nothing in it that writing it out again could lose - and picking one entry out to change would mean matching up two spellings of the same thing entry by entry, which is a second reading and a second chance to be wrong.";
  "It changes the record standing on the page rather than handing back a new one, because what stands around it - the name it is written under, the call it is handed to - is holding on to that very record and would go on holding the old one.";
  arguments_assert(arguments, 2);
  let written = js_value_expression(value);
  let properties = property_get(written, "properties");
  property_set(object, "properties", properties);
}
