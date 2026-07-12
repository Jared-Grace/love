import { file_read } from "./file_read.mjs";
export function file_read_curried(file_path) {
  let c = async function file_read_curried_result() {
    let r = await file_read(file_path);
    return r;
  };
  return c;
}
