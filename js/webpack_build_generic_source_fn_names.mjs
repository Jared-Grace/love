import { fn_name } from "./fn_name.mjs";
export function webpack_build_generic_source_fn_names(f_name) {
  "The two functions a bundle is built from - the one it was asked for, and the setting up of the shared context every app needs before it.";
  let f_name2 = fn_name("app_shared_context_initialize");
  let r = [f_name, f_name2];
  return r;
}
