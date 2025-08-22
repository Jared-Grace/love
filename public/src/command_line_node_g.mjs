import { log_keep } from "./log_keep.mjs";
import { command_line } from "./command_line.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function command_line_node_g(f_name, args) {
  let result = list_join_space(args);
  let output = await command_line("node g.mjs " + f_name + " " + result);
  log_keep(output);
}
