import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
export function js_call_holder_field_arguments_set(call, name_held, name) {
  arguments_assert(arguments, 3);
  ("$plain name_held");
  ("the word the record is written under.");
  ("$plain name");
  ("the word the entry inside the record is filed under, which is the word the local used to be written under.");
  ("Writes the record and the entry into the first two places of a call being built, and hands back that call's list of arguments so anything owed a third can put it there.");
  ("★ THE TWO SIDES OF BOXING A LOCAL FILL THESE TWO ARGUMENTS THE SAME WAY. Reading builds a getting and writing builds a setting, and the two differ only in the name of the call and in the value the setting carries after these - which record, and which entry inside it, is the one thing both have to agree about exactly. Said twice they can be changed once: the day the record is addressed differently, whichever of the two was not remembered goes on reading a name the other stopped writing.");
  ("THE ARGUMENTS ARE HANDED BACK RATHER THAN THE CALL, because the only thing a caller still has to do to them is put something in a further place, and the call itself is already in that caller's hand.");
  let arguments_call = property_get(call, "arguments");
  let value = js_identifier_expression(name_held);
  property_set(arguments_call, 0, value);
  let value2 = js_expression_string(name);
  property_set(arguments_call, 1, value2);
  return arguments_call;
}
