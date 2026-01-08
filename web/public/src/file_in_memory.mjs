import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_in_memory(f_path) {
  marker("1");
  async function lambda2() {}
  let contents = await file_read(f_path);
  let after = lambda2(contents);
  let result = await file_overwrite(f_path, after);
}
