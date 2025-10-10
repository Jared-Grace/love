import { function_name_prefix_without } from "../../../love/public/src/function_name_prefix_without.mjs";
export function function_name_prefix_without_app_fn(context, fn) {
  let { app_fn } = context;
  let self = function_name_prefix_without(fn, app_fn);
  return self;
}
