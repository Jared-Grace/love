import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_books_browser_or_node } from "./ebible_version_books_browser_or_node.mjs";
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
export async function ebible_version_books_remembered(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Every book one bible carries, asked for the first time it is wanted and remembered for the rest of the run.");
  ("THE ASKING IS THE SLOW HALF OF READING SCRIPTURE HERE, and it was being paid once per passage. Away from a browser the answer is a bible release fetched, unzipped and read off a disk; the reader that uses it says so itself, having measured one reference at twenty-two seconds with the words a fraction of that and the rest spent finding out which books the bible has.");
  ("WHICH BOOKS A BIBLE HAS DOES NOT CHANGE WHILE A PROGRAM RUNS, so asking twice can only ever get the same list back. That is the whole warrant for keeping it: this is not a guess that the answer is stable, it is a published release that was already on the disk by the time the second question was asked.");
  ("Measured 2026-08-26, the music page's gate asked twenty-two passages of seven bibles one at a time and took three minutes and forty-eight seconds, of which twenty-one seconds were spent computing and the rest waiting. Seven askings rather than twenty-two is the whole of the difference.");
  ("Nothing is handed out that a caller may spoil, so one list serves them all. Both things that read this list look names up in it and neither writes to it - the words of a passage are gathered from the chapter, not from here.");
  ("What the remembering is filed under is the name of the reader underneath rather than this function's own. That is the same choice the verse reader beside this one made, and for the same reason: the name says whose answers these are, filed under the argument they were asked with.");
  async function get() {
    let fetched = await ebible_version_books_browser_or_node(bible_folder);
    return fetched;
  }
  let books = await global_function_call_cache_async(
    ebible_version_books_browser_or_node,
    arguments,
    get,
  );
  return books;
}
