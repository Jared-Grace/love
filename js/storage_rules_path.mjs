export function storage_rules_path() {
  "Where the file store's permission rules are kept in this repo.";
  "The name is fixed by the store's own configuration file, which points at it, so it is spelled once here rather than at each reader.";
  let r = "storage.rules";
  return r;
}
