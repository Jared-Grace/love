import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_e2e_release_walk } from "./calendar_e2e_release_walk.mjs";
export function app_release_walks() {
  arguments_assert(arguments, 0);
  ("Each app that has a browser walk to pass before it is released, by the app's name, with the walk: a function taking nothing that throws unless every step passed. An app not named here is released on its gates alone.");
  let r = {
    calendar: calendar_e2e_release_walk,
  };
  return r;
}
