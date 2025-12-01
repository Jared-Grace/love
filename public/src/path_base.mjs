export function path_base(file_path) {
  const parts = file_path.split(/[/\\]/);
  const filename = parts.pop();
  return filename;
}
