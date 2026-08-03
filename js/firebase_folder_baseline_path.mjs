export function firebase_folder_baseline_path() {
  "Where the bucket-folder ratchet keeps the sites the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/firebase_folder_baseline.json";
  return path;
}
