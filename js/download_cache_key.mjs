import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function download_cache_key(project_url, destination) {
  "what a saved copy is filed under: the place it came from, then the path within it. the place comes first so everything from one project sorts together, and including it at all is what stops two projects that happen to use the same path from reading each other's copies";
  let key = list_join_slash_forward([project_url, destination]);
  return key;
}
