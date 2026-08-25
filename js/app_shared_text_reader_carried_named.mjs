import { app_shared_text_reader_door_arrivals } from "./app_shared_text_reader_door_arrivals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_literal_text_deep_is } from "./js_literal_text_deep_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_carried_named(f_name_app) {
  "$plain f_name_app";
  "Every place inside one app where words go onto the page having been typed somewhere other than the door they leave by, named by the function they leave from and written out as the code that hands them over.";
  "THE COUNT NEXT DOOR SAYS HOW MANY THERE ARE AND THIS SAYS WHICH. A door whose words were all carried in was walked up to and could not be read, so the count of what was found there means nothing on its own; the only way to learn whether those words were ever offered in another language is to go where they were typed, and that needs their names rather than their number.";
  "IT HANDS BACK THE CODE AS WRITTEN RATHER THAN A VERDICT ABOUT IT. What stands at the door is a name, or a reach into a record, or a call - and which of those were already sayings is a question about the place the name leads to, not about the door. Answering it here would be guessing from the far end of the wire.";
  "It walks the same doors and turns aside at the same screens as the count, because both ask the same function for their arrivals rather than each opening the app for itself. Read side by side, the two cannot be about different apps.";
  arguments_assert(arguments, 1);
  let read = await app_shared_text_reader_door_arrivals(f_name_app);
  let arrivals = property_get(read, "arrivals");
  let carried = [];
  for (let arrival of arrivals) {
    let argument = property_get(arrival, "argument");
    let absent = null_is(argument);
    if (absent) {
      continue;
    }
    let written = js_literal_text_deep_is(argument);
    if (written) {
      continue;
    }
    let f_name = property_get(arrival, "f_name");
    let door = property_get(arrival, "door");
    let code = js_unparse(argument);
    list_add(carried, {
      f_name,
      door,
      code,
    });
  }
  return carried;
}
