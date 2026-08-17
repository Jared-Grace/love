import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_lift_refusal_rows } from "./function_lift_refusal_rows.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_lift_refusal_rows() {
  arguments_assert(arguments, 0);
  ("Across every function standing over the ceiling, each function written inside one of them and the reasons it is still written there. The function it sits in is carried on every row.");
  ("Only the oversize ones are asked, because a closure inside a function already under the ceiling is nobody's problem. That also keeps this the same population the work lists are drawn from, so a count taken here can be set beside a count taken there.");
  ("A function that cannot be read at all is stepped over rather than stopping the walk, the same way the work lists step over one. A reading of the whole repo that any single unreadable file can end is a reading nobody can rely on getting an answer from.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let name of named) {
    async function lambda() {
      let read = await function_lift_refusal_rows(name);
      return read;
    }
    let read = await catch_null_async(lambda);
    let missing = null_is(read);
    if (missing) {
      continue;
    }
    for (let row of read) {
      let nested = property_get(row, "name");
      let size = property_get(row, "size");
      let reasons = property_get(row, "reasons");
      list_add(rows, {
        name,
        nested,
        size,
        reasons,
      });
    }
  }
  return rows;
}
