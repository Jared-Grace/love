export function path_directory(p) {
  let i = p.lastIndexOf("/");
  if (i < 0) {
    return ".";
  }
  let dir = p.slice(0, i);
  return dir;
}
