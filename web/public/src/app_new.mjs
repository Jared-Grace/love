import { app_name_main } from "./app_name_main.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_new } from "./function_new.mjs";
import { html_new } from "./html_new.mjs";
import { marker } from "./marker.mjs";
export async function app_new(name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  let combined = app_name_main(name);
  await function_new(a_name);
  await function_new(combined);
  await html_new(name);
}
