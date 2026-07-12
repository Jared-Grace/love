export function file_path_safe_to(fp) {
  let safe = encodeURIComponent(fp);
  return safe;
}
