import { path_base } from "../../../love/public/src/path_base.mjs";
export function path_name(file_path) {
  const filename = path_base(file_path);
  let v = filename.lastIndexOf(".");
  const name = filename.includes(".") ? filename.slice(0, v) : filename;
  return name;
}
