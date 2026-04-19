import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_read_curried(file_path) {
  let r2 = async function file_read_curried_result() {
    let r = await file_read(file_path);
    return r;
  };
  return r2;
}
