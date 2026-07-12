import { property_get } from "./property_get.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_chapter_classes(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let v2 = await html_parse_read(joined);
  let root = property_get(v2, "root");
  let d = property_get(v2, "d");
  let main = html_parse_find(root, ".main");
  let classes = html_parse_descendants_classes(main, d);
  let dictionary = html_parse_classes_preview(main, d, classes);
  let v = {
    dictionary,
    classes,
  };
  return v;
}
