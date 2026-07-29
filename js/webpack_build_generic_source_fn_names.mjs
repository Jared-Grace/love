import { fn_name } from "./fn_name.mjs";
export function webpack_build_generic_source_fn_names(f_name) {
  let r = [f_name, fn_name("app_shared_context_initialize")];
  return r;
}
