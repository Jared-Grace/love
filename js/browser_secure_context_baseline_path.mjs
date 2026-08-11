export function browser_secure_context_baseline_path() {
  "Where the ratchet on reaching for the browser's https-only things keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/browser_secure_context_baseline.json";
  return path;
}
