export function storage_browser_direct_baseline_path() {
  "Where the ratchet on files speaking straight to the browser's stores keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/storage_browser_direct_baseline.json";
  return path;
}
