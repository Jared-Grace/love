import { each_async } from "./each_async.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
export async function ebible_index_upload(bible_folder) {
  let list = await ebible_chapter_codes(bible_folder);
  async function lambda(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    async function lambda2(v) {
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
    }
    let mapped = list_map(verses, lambda2);
    await list_wait(mapped);
  }
  await each_async(list, lambda);
}
