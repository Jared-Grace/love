import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function app_route(a_name) {
  "$plain a_name";
  arguments_assert(arguments, 1);
  ("The address an app is served at, from the root of the site. Its short name is its address, so the one place that turns the name into the address is here.");
  ("The front page is the site's own root rather than a page named after it.");
  if (equal(a_name, "index")) {
    let r2 = "/";
    return r2;
  }
  let r = "/" + a_name;
  return r;
}
