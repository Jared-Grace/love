import { list_new } from "./list_new.mjs";
import { list_map } from "./list_map.mjs";
export function lists_to_news(bible_folders) {
  let mapped = list_map(bible_folders, list_new);
  return mapped;
}
