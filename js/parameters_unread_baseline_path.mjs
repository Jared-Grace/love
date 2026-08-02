export function parameters_unread_baseline_path() {
  "Where the unread-parameter ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let v = "data/parameters_unread_baseline.json";
  return v;
}
