import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
export function psalms_titles_chapters_verses(titles) {
  "What a pile of video names between them say has been sung: for each chapter of the Psalms named, how many videos name it and which of its verses they reach, together with the names that name no passage and the names that were used more than once.";
  "The three come back together because they are one reading of one pile. Counted apart, a name that names no passage is dropped from the first reading and a person is left believing the chapters account for everything, which is the mistake that hides a whole song nobody has filed anywhere.";
  arguments_assert(arguments, 1);
  let chapters = {};
  let unnamed = [];
  let repeated = [];
  let seen = {};
  for (let title of titles) {
    if (seen[title]) {
      repeated.push(title);
    }
    seen[title] = true;
    let passage = psalms_title_passage(title);
    if (equal(passage, null)) {
      unnamed.push(title);
      continue;
    }
    let chapter = passage.chapter;
    if (not(chapters[chapter])) {
      chapters[chapter] = {
        videos: 0,
        verses: {},
      };
    }
    let held = chapters[chapter];
    held.videos = held.videos + 1;
    let verse = passage.verse_first;
    while (less_than_equal(verse, passage.verse_last)) {
      held.verses[verse] = true;
      verse = verse + 1;
    }
  }
  let r = {
    chapters: chapters,
    unnamed: unnamed,
    repeated: repeated,
  };
  return r;
}
