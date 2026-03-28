import { command_line_node_scripts } from "../../../love/public/src/command_line_node_scripts.mjs";
export async function command_line_node_r(f_name, args) {
  const script_name = "g";
  await command_line_node_scripts(script_name, f_name, args);
}
