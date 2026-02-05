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
  let tokens_matches = string_tokens(input, dictionary);
  return tokens_matches;
}
