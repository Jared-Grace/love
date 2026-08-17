import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
export function app_shared_screen_asking_is(context) {
  "whether the screen you are on is one that asks before doing something a reader cannot take back";
  "an asking screen offers exactly two answers and nothing else, so whatever an app adds to the foot of every screen has to hear no here - a third full-width button under the two is one more thing to weigh at the one moment the reader was asked to weigh two";
  arguments_assert(arguments, 1);
  let asked = property_get_or_null(context, "asking_screen");
  let name = app_shared_screen_stored_get(context);
  let asking = equal(asked, name);
  return asking;
}
