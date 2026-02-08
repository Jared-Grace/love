import { list_new } from "../../../love/public/src/list_new.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function lists_to_news(bible_folders) {
  let mapped = list_map(bible_folders, list_new);
  return mapped;
}
