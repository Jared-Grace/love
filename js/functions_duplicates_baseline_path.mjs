export function functions_duplicates_baseline_path() {
  "Where the duplicate ratchet keeps the names that already had a twin when the rule was written. Reading it, rewriting it and refusing to grow it are three separate functions, so the name of the file is spelled once here rather than once in each of them.";
  let path = "data/functions_duplicates_baseline.json";
  return path;
}
