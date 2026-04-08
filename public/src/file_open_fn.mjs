import { file_open } from "../../../love/public/src/file_open.mjs";
export async function file_open_fn(f_path) {
  return await file_open(f_path);
}
