import { ebible_verses_storage_browser_fresh } from "./ebible_verses_storage_browser_fresh.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { http_error_message_absent_is } from "./http_error_message_absent_is.mjs";
import { not } from "./not.mjs";
export async function ebible_chapter_verses_storage_outcome(
  bible_folder,
  chapter_code,
) {
  "$plain chapter_code";
  "$plain bible_folder";
  "What came of asking one bible for one chapter: the verses it holds there, or that it holds no such chapter, or that it could not be told.";
  "THREE ANSWERS RATHER THAN TWO, and the third is the whole reason this is not called a try. A chapter that is not there is a fact about a bible and worth writing down. An ask that never got an answer is a fact about a run, and writing it down as the first one puts a failure of this program into a record that reads as a property of somebody's bible.";
  "The verses themselves rather than their numbers, because what a verse says is the thing some callers are measuring. Asking for the numbers already meant downloading every word of the chapter and then dropping the words, so the reading that keeps them is the one underneath and the reading that counts them is a name along from it.";
  "AN ANSWER OF NOTHING IS NEVER RETURNED, because that is the shape the mistake was made in. Both failures answer with an empty list of verses and a word beside it saying which, so a caller reading only the verses gets the same emptiness it always did while a caller that wants to know may ask.";
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
    let held = {
      verses,
      absent: false,
      unreachable: false,
    };
    return held;
  }
  let message = property_get(caught, "message");
  let absent = http_error_message_absent_is(message);
  let unreachable = not(absent);
  let refused = {
    verses: [],
    absent,
    unreachable,
  };
  return refused;
}
