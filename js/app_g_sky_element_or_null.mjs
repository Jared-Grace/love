import { fn_name } from "./fn_name.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_g_sky_element_or_null() {
  "the element the sky tint is painted on, or null while no map has rendered one yet";
  ("there is one of these at a time and it is not passed around - the element is made by a map refresh and stashed globally by ",
    fn_name("app_g_sky_set"),
    ", so anything that wants to repaint or drift the sky has to come and ask for it rather than being handed it");
  ("asking before the first refresh is ordinary, not an error, which is why the answer is null instead of a throw: a conversation can begin and end without the map ever having been drawn, and each caller simply has nothing to paint");
  let bag = global_function_initialize(app_g_sky_set, {});
  let element = property_get_or_null(bag, "element");
  return element;
}
