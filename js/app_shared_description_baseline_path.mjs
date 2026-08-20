export function app_shared_description_baseline_path() {
  "Where the record of apps saying nothing about themselves is kept. Reading it, rewriting it, and refusing a change to it are separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/given/baselines/app_shared_description_baseline.json";
  return path;
}
