import { function_imports_missing } from "./function_imports_missing.mjs";

export async function function_imports_missing_add(f_name) {
  let {imports_missing,parsed} = await function_imports_missing(f_name)
  console.log(parsed);
}
