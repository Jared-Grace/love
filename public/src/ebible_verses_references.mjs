import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verses_references(bible_folder, chapter_code) {
  marker("1");
  let v = await ebible_verses(bible_folder, chapter_code);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code2,
    books,
    verse_numbers,
  );
  return v;
}
