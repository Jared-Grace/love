export function functions_granted_silent_baseline_path() {
  "Where the silent-granted-command ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/granted_silent_baseline.json";
  return path;
}
