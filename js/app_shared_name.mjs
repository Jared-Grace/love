import { app_shared_names } from "./app_shared_names.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_name(app_name) {
  "$plain app_name";
  "What an app is called where a person reads it: its name from the one list of names, or its own short name when it has not been given one.";
  let names = app_shared_names();
  let found = property_or_null(names, app_name);
  if (null_is(found)) {
    return app_name;
  }
  return found;
}
