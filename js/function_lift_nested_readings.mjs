import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { or } from "./or.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_nested_readings(ast, nested) {
  "Of the functions written inside one function, those the plain lift would actually move, each with the reading that says so.";
  "The reading travels back beside the function because it was already asked for to decide this, and whatever ranks these next wants the very same reading. Handing back the names alone would have it asked for a second time, and the asking is the expensive part.";
  "Two things are turned down here, and they are the two the lift itself refuses: a function handed on somewhere as a value rather than called, which leaves nowhere to put what it must now be given, and one that writes to something it reached out for, where a parameter would only ever be a copy.";
  arguments_assert(arguments, 2);
  let readings = [];
  for (let declaration of nested) {
    let reading = await js_function_nested_lift_reading(ast, declaration);
    let passed_is = property_list_empty_not_is(reading, "stray_at");
    let writes_is = property_list_empty_not_is(reading, "written_closed");
    let refused_is = or(passed_is, writes_is);
    if (refused_is) {
      continue;
    }
    let taken = {
      declaration,
      reading,
    };
    list_add(readings, taken);
  }
  return readings;
}
