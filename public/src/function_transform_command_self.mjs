import { function_transform_command } from "./function_transform_command.mjs";
export async function function_transform_command_self(
  f_name,
  transformer_name,
) {
  return await function_transform_command(f_name, transformer_name);
}
