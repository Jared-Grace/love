import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { psalms_verse_places_or_null } from "./psalms_verse_places_or_null.mjs";
import { list_unique } from "./list_unique.mjs";
import { psalms_verse_keys_unsung_spans } from "./psalms_verse_keys_unsung_spans.mjs";
export function giveaway_psalms_songs_rows_verses_unsung(
  rows,
  verse_last_by_chapter,
) {
  arguments_assert(arguments, 2);
  ("$plain rows");
  ("$plain verse_last_by_chapter");
  ("How much of each psalm the sung rows of a giveaway record actually cover, chapter by chapter - the chapter, how many verses it has, how many of these rows sing part of it, and the runs of it nothing sings - judged against a set of chapter lengths handed in.");
  ("★ UNTIL THIS EXISTED THE ONLY QUESTION THAT COULD BE ASKED OF A BOX WAS WHETHER ANYTHING IN IT WAS SUNG AT ALL. That is what holds the silent chapters back, and it is a question with two answers where the real one has a hundred and fifty: a psalm sung except for one verse and a psalm with one verse sung are the same answer to it. So nothing could say which held-back box is nearly finished, and the one fact that decides what to record next, and what may go out first, was not in the repo.");
  ("★ CHAPTERS WITH NOTHING MISSING ARE LISTED TOO, AND THAT IS NOT PADDING. A list of only the faulty ones is empty when every psalm is whole and empty when the judging has quietly stopped working, and those are the two cases a reader most needs told apart. Listing every chapter that has any singing makes the answer say how many it looked at in the same breath as what it found, and it is also the half of the answer somebody choosing which psalm to give away first is actually asking for.");
  ("★ THE CHAPTER LENGTHS ARE HANDED IN RATHER THAN FETCHED, FOR THE REASON ITS NEIGHBOUR GIVES. How many verses a psalm has is in the text of the psalm and not in the name of any file, and a fetch waits on a machine somewhere else, so a judging that fetched could not be run from a written case at all. Taking the lengths as an argument is what lets a case name a chapter, a length and a row and watch the gap come back.");
  ("A chapter whose length was not handed in is named rather than guessed at, because the gap in a chapter of unknown length is unknowable and a guess would print a wrong answer in the shape of a right one.");
  ("The rows are not filtered by what kind of thing they hold. The reading admits only a sung psalm's own file name, so a picture or a text of a psalm is passed over by itself, and a lyric video of a song covers exactly the verses its song covers, so counting one twice changes no answer.");
  ("A name the reading refuses is passed over silently, as its neighbour passes it over, because the walk that writes this record admits only names that same reading accepts. A name it reads but whose ends are not places in a chapter is named instead, because that one would be a chapter judged on less singing than it has rather than a row skipped.");
  let places_by_chapter = {};
  let songs_by_chapter = {};
  let chapters_found = [];
  let chapters_unknown = [];
  let names_unread = [];
  for (let row of rows) {
    let read = psalms_song_file_read_or_null(row.file_name);
    if (equal(read, null)) {
      continue;
    }
    let chapter_verse_last = verse_last_by_chapter[read.chapter];
    let unknown_is = equal(chapter_verse_last, undefined);
    if (unknown_is) {
      list_add(chapters_unknown, read.chapter);
      continue;
    }
    let whole_is = equal(read.verse_first, null);
    let verse_first = whole_is ? "1" : read.verse_first;
    let verse_last = whole_is ? String(chapter_verse_last) : read.verse_last;
    let places = psalms_verse_places_or_null(verse_first, verse_last);
    if (equal(places, null)) {
      list_add(names_unread, row.file_name);
      continue;
    }
    let held = places_by_chapter[read.chapter];
    if (equal(held, undefined)) {
      places_by_chapter[read.chapter] = [];
      songs_by_chapter[read.chapter] = 0;
      list_add(chapters_found, read.chapter);
    }
    songs_by_chapter[read.chapter] = songs_by_chapter[read.chapter] + 1;
    list_add(places_by_chapter[read.chapter], places);
  }
  let chapters_sorted = list_unique(chapters_found);
  function lambda(chapter_left, chapter_right) {
    let difference = subtract(chapter_left, chapter_right);
    return difference;
  }
  chapters_sorted.sort(lambda);
  let chapters = [];
  for (let chapter of chapters_sorted) {
    let verse_last2 = verse_last_by_chapter[chapter];
    let missing = psalms_verse_keys_unsung_spans(
      places_by_chapter[chapter],
      verse_last2,
    );
    let one = {
      chapter: chapter,
      verse_last: verse_last2,
      songs: songs_by_chapter[chapter],
      missing: missing,
    };
    list_add(chapters, one);
  }
  let report = {
    chapters: chapters,
    chapters_unknown: list_unique(chapters_unknown),
    names_unread: names_unread,
  };
  return report;
}
