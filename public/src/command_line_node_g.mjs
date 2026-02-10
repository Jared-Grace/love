import { property_get } from "../../../love/public/src/property_get.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
export async function command_line_node_g(f_name, args) {
  let result = list_join_space(args);
  let output = await command_line(
    "node scripts/g.mjs " + f_name + " " + result,
  );
  let stdout = property_get(output, "stdout");
  log_keep(stdout);
}
