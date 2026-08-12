import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function ebible_verse_browser_try(
  bible_folder,
  chapter_code,
  verse_number,
) {
  "One verse of one bible, or nothing where that bible does not have it.";
  "Not every bible this repo ships holds every verse. Amharic is missing Luke 1:2 through 1:5 and Chinese is missing one of the same chapter, and there is no reason to think those are the only holes - they were found by counting how many verses a measurement managed to read, which nobody was looking at.";
  "Asking for a verse that is not there is an error, and an error thrown here reaches a page before it has drawn anything. So a reader who chose Amharic beside English got no verse in either language and a stack trace where the reading should have been - the language with the hole in it took down the languages without one.";
  "A verse that is missing is a fact about what was uploaded rather than a thing that went wrong, so it is answered rather than thrown. What to show in its place is for whoever asked to decide, because only they know what else is on the page.";
  async function lambda() {
    let verse = await ebible_verse_browser(
      bible_folder,
      chapter_code,
      verse_number,
    );
    return verse;
  }
  let found = await catch_null_async(lambda);
  return found;
}
