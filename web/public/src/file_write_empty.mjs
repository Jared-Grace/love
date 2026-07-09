import { file_write } from "../../../love/public/src/file_write.mjs";
export async function file_write_empty(file_path) {
  let r = await file_write(file_path, "");
  return r;
}
