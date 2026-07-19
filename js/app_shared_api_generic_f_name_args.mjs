import { list_to } from "./list_to.mjs";
export function app_shared_api_generic_f_name_args(f_name, args) {
  let args_list = list_to(args);
  let v = {
    f_name: f_name,
    args: args_list,
  };
  return v;
}
