import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_folder } from "./giveaway_bible_folder.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { giveaway_psalms_chapter_text_files } from "./giveaway_psalms_chapter_text_files.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { list_add } from "./list_add.mjs";
import { text_size } from "./text_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_texts_report() {
  arguments_assert(arguments, 0);
  ("Whether every box on the psalms shelf can actually produce the words of its psalm, asked of all of them at once: which boxes could not be told, which hold a psalm the translation does not have, and which would hand over an empty file.");
  ("★ THE WORDS ARE THE ONE KIND OF FILE IN A BOX THAT EXISTS NOWHERE UNTIL THE MOMENT OF HANDING OVER, SO THEY ARE THE ONE KIND NOBODY HAS EVER ASKED THE WHOLE SHELF ABOUT. Every recording is a file on a disk and every picture is a file in this repository, and both have a report that walks them. The three text files of a psalm are made when they are asked for and kept nowhere, which is right - a copy on disk is a second version of the psalm that can fall behind the first - but it means the only thing that has ever made them is an upload, one box at a time, with the shelf already going up.");
  ("★ THE FAILURE THIS CATCHES STOPS AN UPLOAD HALFWAY ALONG THE SHELF, WITH SOME PSALMS PUBLISHED AND SOME NOT. The function that makes the files refuses rather than returns when it cannot read a psalm, which is correct - an empty file published under a name that can never be changed is the one mistake this whole arrangement exists to avoid - but a refusal arriving in the middle of ninety boxes leaves the shelf in a state nobody chose. The same argument already built the check on the sentence under a box: asked here instead, the whole shelf answers at once and before anything has left this machine.");
  ("★ BEING UNREACHABLE IS THE COMMON ANSWER AND IT MEANS NOTHING IS WRONG WITH THE PSALM, WHICH IS WHY IT IS SAID SEPARATELY FROM BEING ABSENT. A hundred bibles were once recorded as holding no readable verse of Luke 1 and twenty eight of them read in full when asked again the same morning. So a box named here for being unreachable is a reason to ask again in a minute, and a box named here for being absent is a reason to go and look at what the translation actually holds.");
  ("It asks for the words down the same path the handing over will, so what passes here is the thing that will run then, and it asks why only of a box that failed - which is two readings of the store for a fault and one for a psalm that is fine.");
  ("It takes no argument and finds its own boxes from the written record, so it can be asked at any time by anybody with no decision to make first. Nothing is written, nothing is uploaded, and nothing on the disk is touched.");
  let bible_folder = giveaway_bible_folder();
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let unreachable = [];
  let absent = [];
  let empty = [];
  let readable = 0;
  for (let item of items) {
    async function lambda() {
      let made = await giveaway_psalms_chapter_text_files(item.chapter);
      return made;
    }
    let files = await catch_null_async(lambda);
    let failed = null_is(files);
    if (failed) {
      let outcome = await ebible_chapter_verses_storage_outcome(
        bible_folder,
        item.chapter_code,
      );
      if (outcome.absent) {
        list_add(absent, item.chapter_code);
        console.log(item.identifier + "  the translation holds no such psalm");
        continue;
      }
      list_add(unreachable, item.chapter_code);
      console.log(item.identifier + "  could not be told");
      continue;
    }
    readable = readable + 1;
    for (let file of files) {
      let size = text_size(file.text);
      let nothing = equal(size, 0);
      if (nothing) {
        list_add(empty, file.file_name);
        console.log(item.identifier + "  " + file.file_name + "  empty");
      }
    }
  }
  let none_unreachable = list_empty_is(unreachable);
  let none_absent = list_empty_is(absent);
  let none_empty = list_empty_is(empty);
  let every_box_can = none_unreachable && none_absent && none_empty;
  console.log(
    "boxes: " +
      list_size(items) +
      "  words readable: " +
      readable +
      "  could not be told: " +
      list_size(unreachable) +
      "  not in the translation: " +
      list_size(absent) +
      "  empty files: " +
      list_size(empty),
  );
  let report = {
    every_box_can,
    boxes: list_size(items),
    readable,
    unreachable,
    absent,
    empty,
  };
  return report;
}
