import { data_app_current_set } from "../../../love/public/src/data_app_current_set.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_open_app(f_name) {
  marker("1");
  let a_name = app_name_main(f_name);
  let v = await function_open(a_name);
  await data_app_current_set(f_name);
  return v;
}
