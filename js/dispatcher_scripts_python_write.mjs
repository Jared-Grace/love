import { python_code_dispatcher_scripts } from "./python_code_dispatcher_scripts.mjs";
import { dispatcher_scripts_python_path } from "./dispatcher_scripts_python_path.mjs";
import { file_write } from "./file_write.mjs";
export async function dispatcher_scripts_python_write() {
  "regenerate the python mirror of dispatcher_scripts from its JS source of truth";
  let code = python_code_dispatcher_scripts();
  await file_write(dispatcher_scripts_python_path(), code);
  return { written: dispatcher_scripts_python_path() };
}
