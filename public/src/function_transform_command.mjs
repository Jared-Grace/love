import { function_transform } from "./function_transform.mjs";
export async function function_transform_command(f_name, lambda$ast) {
  return await function_transform(f_name, lambda$ast);
}
