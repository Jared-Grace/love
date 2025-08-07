import { function_imports_missing } from "./function_imports_missing.mjs";

export async function function_imports_missing_add(f_name) {
  let missing_imports = await function_imports_missing(f_name)
  console.log(missing_imports);
}
