import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_is } from "./object_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
export function app_code_expression_name_is(item) {
  arguments_assert(arguments, 1);
  ("whether a part of an expression shape is a name still to be read, as ",
    fn_name("app_code_expression_name"),
    " makes one");
  let o = object_is(item);
  if (o) {
    let named =
      property_exists(item, "name") && property_exists_not(item, "operator");
    return named;
  }
  return false;
}
