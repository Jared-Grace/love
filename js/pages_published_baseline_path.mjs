export function pages_published_baseline_path() {
  "Where the record of the addresses this repo has published keeps them. Reading it, rewriting it, and refusing a change to it are separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = "data/pages_published_baseline.json";
  return path;
}
