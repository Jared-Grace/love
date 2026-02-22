import { vite_run_build_generic } from "../../../love/public/src/vite_run_build_generic.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
export async function vite_run_build_command(lib_entry, name) {
  let c = await vite_run_build_generic(command_transform, lib_entry, name);
  return c;
  function command_transform(command_parts) {
    list_insert(command_parts, 1, "build");
  }
}
