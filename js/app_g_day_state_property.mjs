import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_day_state_property(property_name) {
  arguments_assert(arguments, 1);
  ("One named part of the day session, read in one step.");
  ("The session is one thing held for the whole day, so anybody who wants a single");
  ("part of it has to fetch the whole session first and then reach in. That first");
  ("step is the same everywhere and the session it names is dropped straight away");
  ("almost every time.");
  let state = app_g_day_state();
  let value = property_get(state, property_name);
  return value;
}
