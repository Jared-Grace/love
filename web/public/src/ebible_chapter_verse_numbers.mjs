import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { roman_to_integer } from "../../../love/public/src/roman_to_integer.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_parse_read } from "../../../love/public/src/html_parse_read.mjs";
import { ebible_version_download_path_combine } from "../../../love/public/src/ebible_version_download_path_combine.mjs";
export async function ebible_chapter_verse_numbers(bible_folder, chapter_code) {
  let chapter_path = ebible_version_download_path_combine(
    bible_folder,
    chapter_code,
  );
  let v2 = await html_parse_read(chapter_path);
  let root = object_property_get(v2, "root");
  let d = object_property_get(v2, "d");
  let main = html_parse_find(root, ".main");
  let list = html_parse_find_list_to(main, ".verse");
  let verse_numbers = list_map(list, lambda2);
  function lambda2(item) {
    let t = html_parse_text(d, item);
    const name = "id";
    let id = html_parse_attr(d, item, name);
    let without = text_prefix_without(id, "V");
    let i = roman_to_integer(without);
    let n = whitespace_normalize(t);
    let v = {
      number: i,
      name: n,
    };
    return v;
  }
  let v3 = {
    d,
    main,
    verse_numbers,
  };
  return v3;
}
