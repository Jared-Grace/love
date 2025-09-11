import { html_parse_list_to } from "./html_parse_list_to.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse } from "./html_parse.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { folder_read } from "./folder_read.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let file_path = await ebible_version_download(bible_folder);
  let files = folder_read(file_path);
  let joined = path_join([file_path, "index.htm"]);
  let contents = await file_read(joined);
  let root = await html_parse(contents);
  let bl = html_parse_find(root, ".bookList");
  let query = html_parse_find(bl, ".oo");
  let list = html_parse_list_to(query);
  return list;
  marker("1");
}
