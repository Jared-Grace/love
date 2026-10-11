import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { songs_folder_recordings } from "./songs_folder_recordings.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { list_unique } from "./list_unique.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { path_base } from "./path_base.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
export async function psalms_songs_folder_channel_compare(
  folder_audio,
  channel_id,
) {
  arguments_assert(arguments, 2);
  ("$plain folder_audio");
  ("$plain channel_id");
  ("Every sung psalm in a folder of recordings set beside every video on a channel that sings the same verses, one row per passage, highest psalm first - with the passages that have more recordings than public videos listed again on their own at the top.");
  ("★ THE ROWS ARE KEYED BY THE VERSES AS A TITLE SPELLS THEM, NOT BY A PASSAGE CODE. A code spelled from a half verse loses its range - 145:13b-21 comes out as PSA145_013 - while a title keeps it, so keying on the title's own spelling is what lets both halves of Psalm 145 find their videos.");
  ("★ IT MATCHES PASSAGES, NOT RECORDINGS. Nothing anywhere writes down which recording a video was made from, so a passage with three recordings and three public videos reads as done even if two videos were made from one take. A short row is certain; a full row is only likely.");
  ("A whole-chapter recording is spelled as the whole chapter's verses, first to last, because that is how its video is titled; and a title naming no verses at all - the earliest uploads - is read as the whole chapter too.");
  let recordings = await songs_folder_recordings(
    folder_audio,
    psalms_song_file_read_or_null,
  );
  function lambda(r) {
    let r2 = r.read.chapter;
    return r2;
  }
  let list = recordings.map(lambda);
  let chapters = list_unique(list);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  let rows_by_passage = {};
  function row_get(chapter, passage) {
    let row = rows_by_passage[passage];
    if (equal(row, undefined)) {
      row = {
        passage,
        chapter,
        recordings: [],
        videos: [],
        public: 0,
      };
      rows_by_passage[passage] = row;
    }
    return row;
  }
  for (let recording of recordings) {
    let read = recording.read;
    let whole_is = equal(read.verse_first, null);
    let first = whole_is ? "1" : read.verse_first;
    let last = whole_is
      ? String(verse_last_by_chapter[read.chapter])
      : read.verse_last;
    let passage = read.chapter + ":" + first + "-" + last;
    let row = row_get(read.chapter, passage);
    let filename = path_base(recording.path_audio);
    row.recordings.push(filename);
  }
  let videos = await youtube_channel_uploads_all(channel_id);
  let title_shape = new RegExp("^Psalms? (\\d+)(?::(\\S+))?[ ,]");
  for (let video of videos) {
    let found = video.title.match(title_shape);
    if (equal(found, null)) {
      continue;
    }
    let chapter = Number(found[1]);
    let verses = found[2];
    if (equal(verses, undefined)) {
      let verse_last = verse_last_by_chapter[chapter];
      if (equal(verse_last, undefined)) {
        continue;
      }
      verses = "1-" + verse_last;
    }
    let passage = chapter + ":" + verses;
    let row = row_get(chapter, passage);
    row.videos.push({
      video_id: video.video_id,
      title: video.title,
      privacy: video.privacy,
    });
    if (equal(video.privacy, "public")) {
      row.public = row.public + 1;
    }
  }
  let rows = Object.values(rows_by_passage);
  function lambda2(one, other) {
    if (not_equal(one.chapter, other.chapter)) {
      let difference = subtract(other.chapter, one.chapter);
      return difference;
    }
    let r3 = less_than(one.passage, other.passage) ? -1 : 1;
    return r3;
  }
  rows.sort(lambda2);
  function lambda3(row) {
    let g = greater_than(row.recordings.length, row.public);
    return g;
  }
  let short = rows.filter(lambda3);
  function lambda4(row) {
    let r4 = row.passage + " " + row.recordings.length + " > " + row.public;
    return r4;
  }
  let shortfall = short.map(lambda4);
  let compared = {
    shortfall,
    rows,
  };
  return compared;
}
