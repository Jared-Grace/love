export function data_facts_cache_path() {
  "Where what was read off each file last time is kept, so that a file nobody has touched is not read and parsed again.";
  "Under the ignored folder on purpose. It is derived from the source entirely and is worth nothing to anybody who does not have that source in front of them, so committing it would put a large file into every diff to say something the files beside it already say.";
  let cache_path = "gitignore/data_facts_cache.json";
  return cache_path;
}
