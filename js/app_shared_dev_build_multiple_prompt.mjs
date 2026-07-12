import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { app_shared_dev_build_multiple } from "./app_shared_dev_build_multiple.mjs";
export async function app_shared_dev_build_multiple_prompt(app_names_comma) {
  let app_names = text_split_comma_dot(app_names_comma);
  let r = await app_shared_dev_build_multiple(app_names);
  return r;
}
