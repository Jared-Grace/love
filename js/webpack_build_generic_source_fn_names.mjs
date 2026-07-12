import { app_context_initialize } from "./app_context_initialize.mjs";
export function webpack_build_generic_source_fn_names(f_name) {
  let r = [f_name, app_context_initialize.name];
  return r;
}
