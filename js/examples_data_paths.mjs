import { folder_public_join } from "./folder_public_join.mjs";
export function examples_data_paths() {
  "Where the corpus JSON the client app fetches is kept — prod and dev, one copy each. Written in one place and checked in another, so the two would say different things the moment either spelled a path itself.";
  let out = folder_public_join("examples_data.json");
  let out_dev = folder_public_join("dev/examples_data.json");
  let paths = [out, out_dev];
  return paths;
}
