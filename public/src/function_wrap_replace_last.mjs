import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_replace_last(f_name, f_name_wrapped) {
  let r = await function_wrap(f_name, f_name_wrapped);
  return r;
}
