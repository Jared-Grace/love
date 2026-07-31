import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { property_get } from "./property_get.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
export async function ebible_chapter_main_parsed(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("a downloaded chapter opened for reading - the parser it was read with, and the one element the chapter's own text lives inside");
  ("three readers of a chapter opened with these same five lines: the one that lists what classes the page uses, the one that reads the verse numbers, and the one that reads the text. The whole root is handed back to none of them, so it stops here.");
  let chapter_path = ebible_version_download_path_combine(
    bible_folder,
    chapter_code,
  );
  let parsed = await html_parse_read(chapter_path);
  let root = property_get(parsed, "root");
  let d = property_get(parsed, "d");
  let main = html_parse_find(root, ".main");
  let r = {
    d,
    main,
  };
  return r;
}
