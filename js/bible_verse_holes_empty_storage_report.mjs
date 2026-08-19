import { equal_not } from "./equal_not.mjs";
import { bible_verse_holes_empty_folders } from "./bible_verse_holes_empty_folders.mjs";
import { bible_folders_at_once } from "./bible_folders_at_once.mjs";
import { ebible_bible_folder_storage_books_first_page } from "./ebible_bible_folder_storage_books_first_page.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_verse_holes_empty_storage_report() {
  "Asks storage what it actually holds for every bible the hole record found empty, and sorts them into the two things they turn out to be.";
  "THE RECORD CAN SAY A BIBLE ANSWERED FOR NOTHING AND CANNOT SAY WHY, and the two reasons want opposite work. A folder holding no files at all was never uploaded, or is spelled here differently from how it was uploaded, and the repair is in this repo. A folder holding other books is a real translation that genuinely does not include the book that was measured, and there is nothing at all to repair - what it needs is for the record to be allowed to say so.";
  "IT READS NAMES RATHER THAN DOWNLOADING ANYTHING, which is why it can answer for a bible holding one short letter nobody would have thought to ask about. A run of guesses at named books cannot, and reads such a bible as holding nothing.";
  "ONE REQUEST PER BIBLE, a few bibles at a time, for the same reason the measuring is bounded. This asks somebody else's server, and the way to make a wide sweep lie is to send it all at once.";
  "IT REACHES THE NETWORK AND SO IT IS A COMMAND SOMEBODY RUNS, never a gate. The gate refuses; this explains.";
  let folders = await bible_verse_holes_empty_folders();
  async function lambda(bible_folder) {
    let listed =
      await ebible_bible_folder_storage_books_first_page(bible_folder);
    return listed;
  }
  let at_once = bible_folders_at_once();
  let each = await list_map_limited_async(folders, lambda, at_once);
  function lambda2(listed) {
    let count = property_get(listed, "files");
    let none = equal(count, 0);
    return none;
  }
  let nothing_uploaded = list_filter(each, lambda2);
  function lambda3(listed) {
    let count = property_get(listed, "files");
    let some = equal_not(count, 0);
    return some;
  }
  let holds_books = list_filter(each, lambda3);
  let r = {
    asked: list_size(folders),
    nothing_uploaded,
    holds_books,
  };
  return r;
}
