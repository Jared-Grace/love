import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { lyric_video_part_lines_text } from "./lyric_video_part_lines_text.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { lyric_video_part_document_draft } from "./lyric_video_part_document_draft.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_psalms_part_documents_stale_redraft(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Draws again every stanza or half psalm document whose lines are no longer the lines the printing hands back, and says which those were, which already matched, and which were left alone because a person had timed them.");
  ("★ A DOCUMENT GOES STALE WITHOUT ANYTHING TOUCHING IT, WHICH IS WHY THIS FINDS ITS OWN SET RATHER THAN BEING HANDED ONE. The lines are copied out of the printing when the document is drafted and never read again, so a change to where a verse is cut leaves the old lines sitting there. Measured 2026-10-02: teaching the piece rule that a semicolon ends a piece moved the end of Psalm 104 14-24b back one line, and five documents went on holding a line their recording does not sing. Nothing went red, and the only way it showed was a video whose last words are sung by nobody.");
  ("★ IT WRITES OVER A MACHINE'S WORK AND NEVER OVER A PERSON'S. Somebody who sat through a song and moved each line onto its beat cannot have that redone by command, so a document holding their times is named and left exactly as it is - a stale line in one of those is a thing for a person to look at, and drawing it again would throw away the evening that is the expensive half of the document. What it will happily draw over is a flat spread and its own earlier listening, both of which cost a command to make again.");
  ("It compares the words and not the count, because the fault it is looking for moves a cut rather than adding a line. A passage that lost a line at one end and gained one at the other counts the same both ways and is wrong in two places.");
  ("A document that is not there at all is not this command's business and is passed over, because drafting a missing one is already a command of its own and a second answer to the same question would drift from the first.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_parts(folder_audio);
  let book_code = "PSA";
  let redrawn = [];
  let matching = [];
  let hand = [];
  let refused = [];
  for (let song of songs) {
    let passage = song.chapter + ":" + song.verse_first + "-" + song.verse_last;
    let named = lyric_video_song_recording_named(passage, song.mark);
    let path_passage = lyric_video_bible_part_document_path(
      version,
      book_code,
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    let path_document = lyric_video_recording_document_path(
      path_passage,
      song.mark,
    );
    let there = await file_exists(path_document);
    if (not(there)) {
      continue;
    }
    let printed = await lyric_video_part_lines_text(
      version,
      book_code,
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    if (null_is(printed)) {
      list_add(refused, {
        passage: named,
        went_wrong: "the printing answers nothing for this address",
      });
      continue;
    }
    let document = await file_read_json(path_document);
    function text_of(line) {
      let text = property_get(line, "text");
      return text;
    }
    let held = list_map(document.lines, text_of);
    let stale = json_equal_not(held, printed);
    if (not(stale)) {
      list_add(matching, named);
      continue;
    }
    let timed = lyric_video_document_times_hand_is(document);
    if (timed) {
      list_add(hand, named);
      continue;
    }
    await lyric_video_part_document_draft(
      {
        version,
        book_code,
        chapter_number: song.chapter,
        verse_first: song.verse_first,
        verse_last: song.verse_last,
      },
      song.path_audio,
      path_document,
    );
    list_add(redrawn, named);
  }
  let r = {
    songs: list_size(songs),
    redrawn: redrawn,
    matching: list_size(matching),
    hand: hand,
    refused: refused,
  };
  return r;
}
