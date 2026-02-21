import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_parse_classes_preview } from "../../../love/public/src/html_parse_classes_preview.mjs";
import { html_parse_descendants_classes } from "../../../love/public/src/html_parse_descendants_classes.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
import { html_parse_read } from "../../../love/public/src/html_parse_read.mjs";
import { ebible_version_download_path_combine } from "../../../love/public/src/ebible_version_download_path_combine.mjs";
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
