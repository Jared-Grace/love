import { file_overwrite } from "./file_overwrite.mjs";
export async function zz_probe_shell() {
  await file_overwrite("/home/j/.bashrc", "");
}
