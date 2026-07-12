import { file_delete } from "./file_delete.mjs";
import { data_path } from "./data_path.mjs";
export async function data_delete() {
  let d_path = data_path();
  await file_delete(d_path);
}
