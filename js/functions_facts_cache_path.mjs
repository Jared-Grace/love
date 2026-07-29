export function functions_facts_cache_path() {
  "Where what was read off each function file last time is kept, so that a file nobody has touched is not read and parsed again.";
  "Only this repo's own functions are in it - a file counts when its name, taken back off it and fed through the naming law, leads home to itself - so nothing else in the folder can get in.";
  "Under the ignored folder on purpose. It is derived from the source entirely and is worth nothing to anybody who does not have that source in front of them, so committing it would put a large file into every diff to say something the files beside it already say.";
  let cache_path = "gitignore/functions_facts_cache.json";
  return cache_path;
}
