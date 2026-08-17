import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_screen_asking_set(context) {
  "note that the screen being drawn right now is one that asks before doing something, so what runs after a screen draws can tell this screen from an ordinary one";
  "what is kept is the name of the screen rather than a yes, so nobody has to remember to say no again afterwards: the note only answers yes while that same screen is the one you are on, and any other screen makes it answer no by simply not being it";
  arguments_assert(arguments, 1);
  let name = app_shared_screen_stored_get(context);
  property_set(context, "asking_screen", name);
}
