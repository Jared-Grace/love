import { app_bible_record_screens } from "./app_bible_record_screens.mjs";
import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { app_bible_sermons_start } from "./app_bible_sermons_start.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { app_bible_record_home } from "./app_bible_record_home.mjs";
export async function app_bible_record(context) {
  "Record yourself reading a passage of the Bible aloud, with its words laid over the video. The passages are the ones the gospel game preaches from, chosen the same way the sermons app chooses them.";
  "Only chapters with passages are offered, because a chapter nobody has cut into passages has nothing to record yet.";
  let screens = app_bible_record_screens();
  let key_chapters = app_shared_bible_chapters_offered_key();
  property_set(context, key_chapters, app_bible_sermons_chapters);
  await app_bible_sermons_start();
  await app_shared_bible_initialize(
    context,
    app_bible_record,
    screens,
    app_bible_record_home,
  );
}
