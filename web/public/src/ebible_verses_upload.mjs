import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function ebible_verses_upload(bible_folder) {
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      let verse_number = object_property_get(v, "verse_number");
      let joined2 = list_join_slash_forward([chapter_code, verse_number]);
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
      await ebible_firebase_upload(bible_folder, file_name, object);
    }
    let mapped = list_map(verses, lambda);
    await list_wait(mapped);
  }
}
