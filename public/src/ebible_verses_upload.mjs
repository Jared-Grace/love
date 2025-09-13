import { ebible_firebase_folder } from "./ebible_firebase_folder.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function ebible_verses_upload(bible_folder) {
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      let verse_number = object_property_get(v, "verse_number");
      let file_name = file_name_json(verse_number);
      let joined = ebible_firebase_folder(bible_folder);
      let joined2 = list_join_slash_forward([joined, chapter_code]);
      let destination = list_join_slash_forward([joined2, file_name]);
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
    let mapped = list_map(verses, lambda);
    await list_wait(mapped);
  }
}
