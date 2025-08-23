import { data_set } from "./data_set.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_open } from "./function_open.mjs";
import { marker } from "./marker.mjs";
export async function function_open_app(f_name) {
  marker("1");
  let a_name = app_name_prefixed(f_name);
  let v = await function_open(a_name);
  async function lambda(previous) {}
  await data_set(lambda, property_name);
  return v;
}
