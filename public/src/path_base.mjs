export function path_base(file_path) {
  let parts = file_path.split(/[/\\]/);
  let filename = parts.pop();
  return filename;
}
