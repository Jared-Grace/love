import { html_parse_classes_preview } from "./html_parse_classes_preview.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  let { d, root } = await html_parse_read(joined);
  let main = html_parse_find(root, ".main");
  let include = ["m", "b", "pmo", "q", "q2", "f"];
  let dictionary = html_parse_classes_preview(main, d, include);
  let exclude = [
    "chapterlabel",
    "copyright",
    "footnote",
    "ft",
    "mt",
    "notebackref",
    "notemark",
    "popup",
    "r",
    "s",
    "s2",
    "tnav",
    "verse",
  ];
  return dictionary;
}
