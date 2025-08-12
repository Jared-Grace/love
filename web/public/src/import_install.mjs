import { file_read_json } from "./file_read_json.mjs";
export async function import_install(name) {
  return await file_read_json("package.json");
  await import(name);
}
