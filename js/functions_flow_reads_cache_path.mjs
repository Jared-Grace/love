export function functions_flow_reads_cache_path() {
  "Where what the flow check read off each function last time is kept, so that a function nobody has touched is not walked again for every guarded edit.";
  "Under the ignored folder on purpose. It is derived from the source entirely, so committing it would put a large file into every diff to say something the files beside it already say.";
  let cache_path = "gitignore/functions_flow_reads_cache.json";
  return cache_path;
}
