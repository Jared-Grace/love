import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_read_curried(file_path) {
  return async function file_read_curried_result() {
    return await file_read(file_path);
  };
}
