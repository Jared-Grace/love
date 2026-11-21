import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_verse_set } from "./app_shared_bible_title_verse_set.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { app_bible_record_camera } from "./app_bible_record_camera.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export async function app_bible_record_home(context) {
  "The verse being read, chosen the way the sermons app chooses it, with a button under each passage to record it being read aloud.";
  "The passages are the gospel game's, the same cut the sermons app shows, so a passage recorded here is the passage preached there.";
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_sermons_download,
    app_bible_record,
  );
  let passages = property_get(r, "passages");
  let chapter_code = property_get(r, "chapter_code");
  let screen = property_get(r, "r");
  await app_shared_bible_title_verse_set(screen);
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let verse_numbers = property_get(passage, "verse_numbers");
    async function record() {
      await app_bible_record_camera(chapter_code, verse_numbers);
    }
    app_shared_button_wide(p, "Record this passage", record);
  }
}
