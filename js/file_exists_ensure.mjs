import { file_write } from "./file_write.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function file_exists_ensure(file_path) {
  let n = await file_exists_not(file_path);
  if (n) {
    let r = await file_write(file_path, "");
  }
}
