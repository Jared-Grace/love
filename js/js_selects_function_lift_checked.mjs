import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_function_lift_reading } from "./js_selects_function_lift_reading.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { list_concat } from "./list_concat.mjs";
export async function js_selects_function_lift_checked(
  ast,
  selects,
  refusals_read,
) {
  "The one function a selector picked, refused unless the way of moving it says it can be moved, and the pieces every move then needs: the function itself, the name it goes by, the names it wrote to and reached out of itself for, what its new parameters come to, whether it waits, and its body.";
  "The two moves that leave a line behind open with these same ten lines and differ in one of them - which report of refusals they ask. So the reader is what they hand over, and everything else is shared rather than written twice.";
  "The refusals are asked here rather than by the caller so that no move can begin without them. Written out at each site it is a step somebody can leave out, and leaving it out moves a function that was refused for a reason nothing afterwards would catch.";
  "What it reached out of itself only to read does not come back. It is already inside the parameters, and a caller handed it as well would have a second name for the same thing and no way to tell which one a later line meant.";
  arguments_assert(arguments, 3);
  let reading = await js_selects_function_lift_reading(ast, selects);
  let declaration = property_get(reading, "declaration");
  let refusals = await refusals_read(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let closed = property_get(reading, "closed");
  let written_closed = property_get(reading, "written_closed");
  list_empty_is_assert_json(refusals, {
    name_old,
  });
  let param_names = property_list_map(
    declaration,
    "params",
    js_identifier_name_try,
  );
  let passed = list_concat(param_names, closed);
  let async_is = property_get(declaration, "async");
  let block = property_get(declaration, "body");
  let r = {
    declaration,
    name_old,
    written_closed,
    passed,
    async_is,
    block,
  };
  return r;
}
