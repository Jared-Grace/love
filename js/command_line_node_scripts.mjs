import { log_keep } from "./log_keep.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function command_line_node_scripts(script_name, f_name, args) {
  let result = list_join_space(args);
  let stdout = await command_line_stdout(
    text_combine_multiple([
      "node scripts/",
      script_name,
      ".mjs ",
      f_name,
      " ",
      result,
    ]),
  );
  log_keep(command_line_node_scripts.name, stdout);
}
