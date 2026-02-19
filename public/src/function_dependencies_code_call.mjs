import { function_dependencies_code_call_multiple } from "../../../love/public/src/function_dependencies_code_call_multiple.mjs";
export async function function_dependencies_code_call(f_name) {
  const f_names = [f_name];
  let r = await function_dependencies_code_call_multiple(
    f_name,
    f_names,
    js_code_call_statement,
  );
  return r;
}
