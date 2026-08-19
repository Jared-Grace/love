import { ebible_verses_storage_browser_fresh } from "./ebible_verses_storage_browser_fresh.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { http_error_message_status_or_null } from "./http_error_message_status_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function ebible_chapter_verse_numbers_storage_outcome(
  bible_folder,
  chapter_code,
) {
  "$plain chapter_code";
  "$plain bible_folder";
  "What came of asking one bible for one chapter: the verse numbers it holds there, or that it holds no such chapter, or that it could not be told.";
  "One chapter is one small file, and it names every verse in it. So this asks what a bible has by downloading a single thing, where finding out by asking for each verse in turn would be a download per verse and finding out by listing the folder took four minutes for a bible.";
  "THREE ANSWERS RATHER THAN TWO, and the third is the whole reason this is not called a try. A chapter that is not there is a fact about a bible and worth writing down. An ask that never got an answer is a fact about a run, and writing it down as the first one puts a failure of this program into a record that reads as a property of somebody's bible. The two used to arrive here as the same throw and leave as the same nothing, and a wide sweep built on that wrote hundreds of gaps into a record that no gate refused and no reader could tell from real ones.";
  "NOT FOUND IS THE ONLY REFUSAL THAT COUNTS AS ABSENCE. It means the far end was reached, is working, and says there is no such thing there - which is exactly the fact wanted. Every other refusal is the far end saying it cannot serve this right now, and a server too busy to answer has said nothing at all about what it holds. So a five hundred and a dropped socket and a body that would not decompress are all one thing here: asked, and could not be told.";
  "AN ANSWER OF NOTHING IS NEVER RETURNED, because that is the shape the mistake was made in. Both failures answer with an empty list of verse numbers and a word beside it saying which, so a caller reading only the numbers gets the same emptiness it always did while a caller that wants to know may ask.";
  async function lambda() {
    let downloaded = await ebible_verses_storage_browser_fresh(
      bible_folder,
      chapter_code,
    );
    return downloaded;
  }
  let caught = await catch_message_async(lambda);
  let answered = property_get(caught, "ok");
  if (answered) {
    let verses = property_get(caught, "value");
    let property_name = verse_number_key();
    let verse_numbers = list_map_property(verses, property_name);
    let held = {
      verse_numbers,
      absent: false,
      unreachable: false,
    };
    return held;
  }
  let message = property_get(caught, "message");
  let status = http_error_message_status_or_null(message);
  let absent = equal(status, 404);
  let unreachable = not(absent);
  let refused = {
    verse_numbers: [],
    absent,
    unreachable,
  };
  return refused;
}
