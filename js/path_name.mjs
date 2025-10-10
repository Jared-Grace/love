export function path_name(file_path) {
  const parts = file_path.split(/[/\\]/);
  const filename = parts.pop();
  let v = filename.lastIndexOf(".");
  const name = filename.includes(".") ? filename.slice(0, v) : filename;
  return name;
}
