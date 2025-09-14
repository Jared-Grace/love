import { ebible_version_download } from "./ebible_version_download.mjs";
import { ebible_verses_upload_name } from "./ebible_verses_upload_name.mjs";
import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { object_merge } from "./object_merge.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function ebible_verses_upload(bible_folder) {
  await ebible_version_download(bible_folder);
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      let verse_number = object_property_get(v, "verse_number");
      let joined2 = ebible_verses_upload_name(chapter_code, verse_number);
      let verse = object_merge(
        {
          bible_folder,
          chapter_code,
        },
        v,
      );
      await ebible_firebase_upload(bible_folder, joined2, verse);
    }
    let mapped = list_map(verses, lambda);
    await list_wait(mapped);
  }
}
