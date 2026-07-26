export function memory_symbols_baseline_path() {
  "Where the memory-symbol ratchet keeps the names already written down. Reading it, rewriting it and comparing against it are separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/memory_symbols_baseline.json";
  return path;
}
