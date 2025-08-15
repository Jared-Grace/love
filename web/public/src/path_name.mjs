import path from "path";
export function path_name(file_path) {
  const name = path.parse(file_path).name;
  return name;
}
