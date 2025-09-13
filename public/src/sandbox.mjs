import { file_name_json } from "./file_name_json.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "urdgvu";
  let list = await ebible_chapter_codes(bible_folder);
  async function lambda(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    async function lambda2(v) {
      let verse_number = object_property_get(v, "verse_number");
      let file_name = file_name_json(verse_number);
      list_join_slash_forward(["bible", bible_folder, chapter_code, file_name]);
    }
    await each_async(verses, lambda2);
  }
  await each_async(list, lambda);
}
