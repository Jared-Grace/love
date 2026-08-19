import { object_property_names } from "./object_property_names.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
import { psalms_titles_chapters_verses } from "./psalms_titles_chapters_verses.mjs";
import { psalms_chapter_verse_last } from "./psalms_chapter_verse_last.mjs";
export async function psalms_videos_coverage(playlist_id) {
  "Which verses of the Psalms have been sung and which have not, chapter by chapter, read off one youtube playlist of the singing and the Berean Standard Bible side by side.";
  "A verse counts as sung when a video names it or names a passage running through it, so a video covering four verses answers for all four. Verses a video names that the chapter does not have are kept separately rather than thrown away: those are the ones where the name is wrong, and a wrong name is the only thing here a person has to decide about.";
  arguments_assert(arguments, 1);
  let videos = await youtube_playlist_videos(playlist_id);
  let titles = [];
  for (let video of videos) {
    titles.push(video.title);
  }
  let read = psalms_titles_chapters_verses(titles);
  let chapters = [];
  let chapters_unsung = [];
  let chapter = 1;
  while (less_than_equal(chapter, 150)) {
    let held = read.chapters[chapter];
    if (not(held)) {
      chapters_unsung.push(chapter);
      chapter = chapter + 1;
      continue;
    }
    let verse_last = await psalms_chapter_verse_last(chapter);
    let missing = [];
    let verse = 1;
    while (less_than_equal(verse, verse_last)) {
      if (not(held.verses[verse])) {
        missing.push(verse);
      }
      verse = verse + 1;
    }
    let beyond = [];
    for (let named of object_property_names(held.verses)) {
      let number = Number(named);
      if (greater_than(number, verse_last)) {
        beyond.push(number);
      }
    }
    chapters.push({
      chapter: chapter,
      verse_last: verse_last,
      videos: held.videos,
      missing: missing,
      beyond: beyond,
    });
    chapter = chapter + 1;
  }
  let r = {
    playlist_id: playlist_id,
    videos_total: videos.length,
    chapters: chapters,
    chapters_unsung: chapters_unsung,
    titles_without_passage: read.unnamed,
    titles_repeated: read.repeated,
  };
  return r;
}
