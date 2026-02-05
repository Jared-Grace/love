import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_delete() {
  let d_path = data_path();
  await file_delete(d_path);
}
