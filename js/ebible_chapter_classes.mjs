import { ebible_chapter_main_parsed } from "./ebible_chapter_main_parsed.mjs";
import { property_get } from "./property_get.mjs";
import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_descendants_classes } from "./html_parse_descendants_classes.mjs";
export async function ebible_chapter_classes(bible_folder, chapter_code) {
  let opened = await ebible_chapter_main_parsed(bible_folder, chapter_code);
  let d = property_get(opened, "d");
  let main = property_get(opened, "main");
  let classes = html_parse_descendants_classes(main, d);
  let dictionary = html_parse_classes_preview(main, d, classes);
  let v = {
    dictionary,
    classes,
  };
  return v;
}
