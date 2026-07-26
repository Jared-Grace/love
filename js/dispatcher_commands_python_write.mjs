import { python_code_dispatcher_commands } from "./python_code_dispatcher_commands.mjs";
import { dispatcher_commands_python_path } from "./dispatcher_commands_python_path.mjs";
import { file_write } from "./file_write.mjs";
export async function dispatcher_commands_python_write() {
  "regenerate the python mirror of the fn-named dispatcher command list from its JS source of truth";
  let code = python_code_dispatcher_commands();
  let path = dispatcher_commands_python_path();
  await file_write(path, code);
  let written = {
    written: path,
  };
  return written;
}
