import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { object_merge } from "./object_merge.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { marker } from "./marker.mjs";
import { list_wait } from "./list_wait.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "urdgvu";
  let list = await ebible_chapter_codes(bible_folder);
  async function lambda(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    async function lambda2(v) {
      log(v);
      let verse_number = object_property_get(v, "verse_number");
      let file_name = file_name_json(verse_number);
      let destination = list_join_slash_forward([
        "bible",
        bible_folder,
        chapter_code,
        file_name,
      ]);
      let merged = object_merge(
        {
          bible_folder,
          chapter_code,
        },
        v,
      );
      const object = {
        verse: merged,
      };
      await firebase_upload_object(object, destination);
      log(destination);
    }
    function lambda3(item) {}
    let mapped = list_map(list2, lambda3);
    await list_wait(verses, lambda2);
  }
  await each_async(list, lambda);
}
