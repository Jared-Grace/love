import { app_shared_context_initialize } from "./app_shared_context_initialize.mjs";
export function webpack_build_generic_source_fn_names(f_name) {
  let r = [f_name, app_shared_context_initialize.name];
  return r;
}
