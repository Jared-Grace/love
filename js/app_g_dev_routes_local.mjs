import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_routes_clearing } from "./app_g_dev_routes_clearing.mjs";
import { property_get } from "./property_get.mjs";
import { object_assign } from "./object_assign.mjs";
import { localhost_is } from "./localhost_is.mjs";
export function app_g_dev_routes_local(r4, hru, div_map) {
  arguments_assert(arguments, 3);
  let r2 = app_g_dev_routes_clearing(r4, hru, div_map);
  let clearing = property_get(r2, "clearing");
  let routes = property_get(r2, "routes");
  let design = property_get(r2, "design");
  object_assign(routes, clearing);
  let local = localhost_is();
  let r = {
    routes,
    design,
    local,
  };
  return r;
}
