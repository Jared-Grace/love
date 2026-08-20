import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { ebible_readaloud_published_is } from "./ebible_readaloud_published_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function ebible_readaloud_bible_folders() {
  "Every bible this repo ships whose verses are cut apart by eBible's read-aloud edition - the set every question about read-aloud is actually about.";
  "Not every shipped bible. Which ones eBible publishes a read-aloud edition of at all is asked next door, one bible at a time, and the reason it is not every one is written out there; this is that same question asked of the whole shipped list at once.";
  "Kept as its own name because most read-aloud questions are about the whole set and would otherwise each have to remember to ask. A walk over some narrower list - the offered bibles, say - filters that list with the one-bible question instead, and gets the same answer without going through here.";
  let shipped = ebible_bible_folders_sorted();
  let bible_folders = list_filter(shipped, ebible_readaloud_published_is);
  return bible_folders;
}
