import { file_read } from "../../../love/public/src/file_read.mjs";
export function file_read_curried(file_path) {
  let c = async function file_read_curried_result() {
    return await file_read(file_path);
  };
  return c;
}
