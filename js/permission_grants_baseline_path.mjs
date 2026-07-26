export function permission_grants_baseline_path() {
  "where the grant ratchet keeps the standing grants that already failed the check when it was written. reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/permission_grants_baseline.json";
  return path;
}
