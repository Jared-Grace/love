import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { string_tokens } from "../../../love/public/src/string_tokens.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verse_tokens(
  bible_folder,
  chapter_code,
  verse_number,
) {
  marker("1");
  let v = await ebible_verse(bible_folder, chapter_code, verse_number);
  let text = object_property_get(v, "text");
  let tokens_matches = string_tokens(text, {});
  return tokens_matches;
}
