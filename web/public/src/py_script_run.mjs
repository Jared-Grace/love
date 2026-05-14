import { command_line } from "../../../love/public/src/command_line.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
export async function py_script_run(script_name, concated) {
  let v = py_script_run_cmd(script_name);
  let concated2 = list_concat([v], concated);
  let joined = list_join_space(concated2);
  log(py_script_run.name, {
    joined,
  });
  let stdout = await command_line(joined);
}
