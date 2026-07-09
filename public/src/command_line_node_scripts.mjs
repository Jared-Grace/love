import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function command_line_node_scripts(script_name, f_name, args) {
  let result = list_join_space(args);
  let output = await command_line(
    text_combine_multiple([
      "node scripts/",
      script_name,
      ".mjs ",
      f_name,
      " ",
      result,
    ]),
  );
  let stdout = property_get(output, "stdout");
  log_keep(command_line_node_scripts.name, stdout);
}
