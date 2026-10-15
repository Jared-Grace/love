import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { path_basename } from "./path_basename.mjs";
import { giveaway_song_mark } from "./giveaway_song_mark.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_index_async } from "./list_map_index_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { psalms_songs_folder_passages } from "./psalms_songs_folder_passages.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { giveaway_psalms_paintings_rows } from "./giveaway_psalms_paintings_rows.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { giveaway_psalms_rows_uploaded_unmoved_assert } from "./giveaway_psalms_rows_uploaded_unmoved_assert.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function giveaway_psalms_record_write(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Read every sung psalm out of a folder, every lyric video made from one of those recordings, and every painting the lyric videos use, and write down for each file the name it has on this disk beside the name it will be given away under.");
  ("★ IT IS WRITTEN DOWN BECAUSE THE DISK NAME CAN MOVE AND THE GIVEN-AWAY NAME CANNOT. The number that tells one singing of a psalm from another is the number in round brackets that the browser put there, and the browser was counting downloads, not songs - fetch the set again and a different file can land on the same number. The given-away name is built from that number, and once it has been published it is the address somebody bookmarked and the only words a music player will show. So the pairing is settled once, here, and kept; working it out again at the moment of uploading would let a re-download quietly move a published name onto a different song.");
  ("★ THE SONGS AND THE PICTURES GO IN ONE RECORD, BECAUSE THE ONE THING THE RECORD HAS TO PROVE IS SOMETHING TWO RECORDS COULD NOT PROVE ABOUT EACH OTHER. Nothing may be given away under a name something else is already using, and that is a question about every file at once; a songs file and a pictures file could each be perfect and still collide. What makes two files tempting is that the song half reads a folder outside the repo which may not be on a given machine, so a run that cannot see the recordings cannot write the picture rows either. That is the right way round. A record is a frozen thing that outlives the run that made it, and a half-written record that looks whole is worse than a run that stops and says the folder is missing.");
  ("★ TWO FILES LANDING ON ONE GIVEN-AWAY NAME IS REFUSED RATHER THAN WRITTEN. Uploading is the step that cannot be taken back, and two files sharing a name do not collide loudly there - the second simply replaces the first and the record still looks complete. The check belongs on this side of the upload, where it is a failure somebody reads instead of a song nobody can find.");
  ("★ THE TRANSLATION IS NOT ASKED FOR, BECAUSE THE REPO ALREADY KNOWS IT. Every one of the three hundred and eighty-four lyric video documents on this disk names its text as bsb, which is the Berean Standard Bible, and the folder that bible is kept in is spelled engbsb. The folder spelling is what goes in the name rather than the shorter bsb, so that the word in a song's name and the name of the box holding that bible's words are the same word, and somebody joining the singing to the text has nothing to look up. Taking the translation as an argument would make a wrong answer possible where there is only one right one.");
  ("★ THE WALK IT ASKS IS ITS OWN, AND IT USED TO BORROW THE LYRIC VIDEOS' TWO WALKS INSTEAD. Those two refuse a recording that came out of an editing session, and rightly: a timing document is addressed by translation, book and chapter alone, so two singings of one chapter would land on one address and the second would take the first one's corrected times away. Giving content away has no such limit - a passage may hold as many recordings as exist and they are told apart by the mark at the end of the name - but the limit came along with the reader, and nine edited recordings were left out of the giveaway by a rule that was never about it. Among them were the only recordings that exist of Psalm 131 and of Psalm 136, so two psalms were missing from the giveaway altogether and the record looked complete.");
  ("The one walk also removed the two routes to a passage code that used to be here, one for a whole chapter and one for a part. The code is all this writer wants of a recording, both routes ended at it, and once it is in hand nothing below needs to know which kind it came from. The rows are sorted by the given-away name rather than left in the order the folder was read, because the order a folder is read in is not promised and a record that reshuffles between writings reads as a change when nothing changed.");
  ("The disk name is kept without its folder. The folder is what was handed in, so storing it again would write this machine's own layout into a record about which songs exist, and the record would go stale the day the folder moved rather than the day the songs changed.");
  ("★ THE PICTURE ROWS KEEP A PATH AND THE SONG ROWS DO NOT, AND THAT IS THE SAME RULE RATHER THAN TWO. A song's folder was handed in, so every song is in it and naming it again on each row would be storing the caller's own argument back. A painting is not: the two thousand crops sit one folder to a timing document, under gitignore, and which folder a crop is in is a fact the walk discovered rather than a fact anybody handed over. So a picture row without its path cannot be found again, and a song row with its path says only what the caller already knew. Both rows store exactly what could not be worked out from somewhere else. A video is rendered beside the recording it was made from, so it is in the handed-in folder too and keeps no path either.");
  ("Which files the pictures are is not asked for the way the songs are. The song half takes its folder because a recording can be anywhere; the picture half takes nothing, because the timing documents are in the repo and say for themselves which crops they use.");
  ("★ WHICH SONG OF A PASSAGE A FILE IS COMES FROM WHERE IT STANDS IN ITS PASSAGE'S OWN LIST, NOT FROM THE NUMBER ON ITS NAME, AND THAT IS WHY THE SONGS ARE GATHERED BY PASSAGE BEFORE ANYTHING IS NAMED. Two files in the downloads folder are `Psalm 150.wav` and `Psalm_150.wav` - one space apart - and both read as take nought, so a name built from the take number would have published two different singings of Psalm 150 under one name. The gathering keeps each passage's songs in the order the folder walk put them, which is take order, so the places run with the singing rather than against it. Nothing is sorted before the gathering, so the places do not depend on a sort holding equal items in the order it found them.");
  ("★ EVERY PIECE THE GIVEN-AWAY NAME IS BUILT FROM IS KEPT BESIDE IT, AND THE FIRST VERSION OF THIS KEPT ONLY THE TWO NAMES. The reason given then was that the pieces are all readable back out of the name, so storing them would only be a second place for them to disagree with it. That reason was wrong twice over. It is wrong as a fact: a name is cut into words at the underscores, and two of the fifteen hundred and twenty-eight translation folders on this disk have an underscore inside them - fra_fob and knv-fly_river - so the number of words does not say which word is which, and only today's single translation makes the name look readable. It is wrong as an argument: a second place to disagree is precisely what a gate needs, because with the name alone there is nothing to check it against. The pieces are what the naming function was called with, so the gate can call that function again and insist it still spells the same name - which is how a later change to the naming rule becomes a failure somebody reads instead of a silent rename of files that are already published.");
  ("All five pieces are written on every row even though a song's translation, kind and ending are the same on all of them today. A header saying them once would make the gate hold its own copy of the writer's three constants, and that is a second place for them to disagree with no gate behind it. That is also what let the pictures join without changing a row, and the videos after them: the kind and the ending differ row by row now, and a header would have had to be unpicked into one.");
  ("★ A VIDEO IS NAMED BESIDE THE SONG IT IS OF AND CARRIES THAT SONG'S OWN MARK, WHICH IS THE WHOLE REASON THE VIDEOS ARE BUILT HERE AND NOT IN A WALK OF THEIR OWN. The mark is the only word that says which singing of a psalm a file is, and the two sides count the recordings differently: this record counts them by where each stands in its passage's own list, while a video is addressed by a mark worked out over a set that leaves the edited recordings out - five hundred and nine recordings against this walk's five hundred and twenty-six, measured on 2026-10-15. So a video row numbered by its own side would have handed a listener PSA110_engbsb_song_take2 and PSA110_engbsb_lyric_video_take2 that are two different singings, and nothing anywhere would have said so. The recording's own path is the one thing both walks hold and neither invents, so the video is looked up by it and takes the mark the song beside it already has.");
  ("A recording whose video has not been rendered yet simply has no video row, and that is most of them: two hundred videos answered for five hundred and twenty-six recordings when this was written. The record says what exists rather than what is intended, because a row is a promise that a file can be handed over.");
  ("★ A NAME INSIDE A BOX THAT HAS ALREADY GONE OUT MAY NOT MOVE, AND THIS IS THE ONLY PLACE THAT CAN BE REFUSED. Which singing of a psalm a file is comes from where it stands in the walk of the folder, so one new recording landing ahead of an older one renames every take after it. That is harmless while nothing has been given away and permanent the day a box is public. A gate could not hold this line: a gate runs after the commit, by which time the record on disk is the rewritten one and the names it replaced are only in git. The one moment at which both versions are in hand is the moment before the writing, so the refusal stands here, beside the clash check, and reads nothing but the two records - no network, which would fail open on exactly the machine that knows least.");
  let bible_folder = "engbsb";
  let kind = "song";
  let ending = ".wav";
  let kind_video = "lyric_video";
  let ending_video = ".mp4";
  let videos = await giveaway_psalms_videos_paths(folder_audio);
  function row_make(passage_code, file_name, kind_row, mark, ending_row) {
    let name_published = giveaway_passage_file_name(
      passage_code,
      bible_folder,
      kind_row,
      mark,
      ending_row,
    );
    let row = {
      file_name: file_name,
      passage_code: passage_code,
      bible_folder: bible_folder,
      kind: kind_row,
      mark: mark,
      ending: ending_row,
      name_published: name_published,
    };
    return row;
  }
  async function rows_build(found, place) {
    let passage_code = found.passage_code;
    let file_name = await path_basename(found.path_audio);
    let mark = giveaway_song_mark(place);
    let row_song = row_make(passage_code, file_name, kind, mark, ending);
    let rows_of_song = [row_song];
    let path_video = property_get_or_null(videos.paths, found.path_audio);
    let rendered_is = null_not_is(path_video);
    if (rendered_is) {
      let file_name_video = await path_basename(path_video);
      let row_video = row_make(
        passage_code,
        file_name_video,
        kind_video,
        mark,
        ending_video,
      );
      list_add(rows_of_song, row_video);
    }
    return rows_of_song;
  }
  async function passage_rows(group) {
    let rows_of_passage = await list_map_index_async(group.items, rows_build);
    let rows_flat = list_concat_multiple(rows_of_passage);
    return rows_flat;
  }
  let founds = await psalms_songs_folder_passages(folder_audio);
  let groups = list_group_by_property(founds, "passage_code");
  let grouped_rows = await list_map_async(groups, passage_rows);
  let folder_rows = list_concat_multiple(grouped_rows);
  let held = await giveaway_psalms_paintings_rows();
  let rows = list_concat_multiple([folder_rows, held.rows]);
  list_sort_text_property(rows, "name_published");
  let clashes = list_duplicates_by_property(rows, "name_published");
  list_empty_is_assert_json(clashes, {
    hint: "two files would be given away under one name",
  });
  let path = giveaway_psalms_record_path();
  await giveaway_psalms_rows_uploaded_unmoved_assert(rows);
  await file_overwrite_json(path, rows);
  return rows;
}
