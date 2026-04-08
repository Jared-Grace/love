import { file_open } from "../../../love/public/src/file_open.mjs";
export async function file_open_fn(f_path_get) {
  f_path_get();
  let r = await file_open(f_path);
  return r;
}
