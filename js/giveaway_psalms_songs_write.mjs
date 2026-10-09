import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { giveaway_song_mark } from "./giveaway_song_mark.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { list_map_index_async } from "./list_map_index_async.mjs";
import { psalms_songs_folder_passages } from "./psalms_songs_folder_passages.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function giveaway_psalms_songs_write(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Read every sung psalm out of a folder once and write down, for each one, the name it has on this disk beside the name it will be given away under.");
  ("★ IT IS WRITTEN DOWN BECAUSE THE DISK NAME CAN MOVE AND THE GIVEN-AWAY NAME CANNOT. The number that tells one singing of a psalm from another is the number in round brackets that the browser put there, and the browser was counting downloads, not songs - fetch the set again and a different file can land on the same number. The given-away name is built from that number, and once it has been published it is the address somebody bookmarked and the only words a music player will show. So the pairing is settled once, here, and kept; working it out again at the moment of uploading would let a re-download quietly move a published name onto a different song.");
  ("★ TWO RECORDINGS LANDING ON ONE GIVEN-AWAY NAME IS REFUSED RATHER THAN WRITTEN. Uploading is the step that cannot be taken back, and two files sharing a name do not collide loudly there - the second simply replaces the first and the record still looks complete. The check belongs on this side of the upload, where it is a failure somebody reads instead of a song nobody can find.");
  ("★ THE TRANSLATION IS NOT ASKED FOR, BECAUSE THE REPO ALREADY KNOWS IT. Every one of the three hundred and eighty-four lyric video documents on this disk names its text as bsb, which is the Berean Standard Bible, and the folder that bible is kept in is spelled engbsb. The folder spelling is what goes in the name rather than the shorter bsb, so that the word in a song's name and the name of the box holding that bible's words are the same word, and somebody joining the singing to the text has nothing to look up. Taking the translation as an argument would make a wrong answer possible where there is only one right one.");
  ("★ THE WALK IT ASKS IS ITS OWN, AND IT USED TO BORROW THE LYRIC VIDEOS' TWO WALKS INSTEAD. Those two refuse a recording that came out of an editing session, and rightly: a timing document is addressed by translation, book and chapter alone, so two singings of one chapter would land on one address and the second would take the first one's corrected times away. Giving content away has no such limit - a passage may hold as many recordings as exist and they are told apart by the mark at the end of the name - but the limit came along with the reader, and nine edited recordings were left out of the giveaway by a rule that was never about it. Among them were the only recordings that exist of Psalm 131 and of Psalm 136, so two psalms were missing from the giveaway altogether and the record looked complete.");
  ("The one walk also removed the two routes to a passage code that used to be here, one for a whole chapter and one for a part. The code is all this writer wants of a recording, both routes ended at it, and once it is in hand nothing below needs to know which kind it came from. The rows are sorted by the given-away name rather than left in the order the folder was read, because the order a folder is read in is not promised and a record that reshuffles between writings reads as a change when nothing changed.");
  ("The disk name is kept without its folder. The folder is what was handed in, so storing it again would write this machine's own layout into a record about which songs exist, and the record would go stale the day the folder moved rather than the day the songs changed.");
  ("★ WHICH SONG OF A PASSAGE A FILE IS COMES FROM WHERE IT STANDS IN ITS PASSAGE'S OWN LIST, NOT FROM THE NUMBER ON ITS NAME, AND THAT IS WHY THE SONGS ARE GATHERED BY PASSAGE BEFORE ANYTHING IS NAMED. Two files in the downloads folder are `Psalm 150.wav` and `Psalm_150.wav` - one space apart - and both read as take nought, so a name built from the take number would have published two different singings of Psalm 150 under one name. The gathering keeps each passage's songs in the order the folder walk put them, which is take order, so the places run with the singing rather than against it. Nothing is sorted before the gathering, so the places do not depend on a sort holding equal items in the order it found them.");
  ("★ EVERY PIECE THE GIVEN-AWAY NAME IS BUILT FROM IS KEPT BESIDE IT, AND THE FIRST VERSION OF THIS KEPT ONLY THE TWO NAMES. The reason given then was that the pieces are all readable back out of the name, so storing them would only be a second place for them to disagree with it. That reason was wrong twice over. It is wrong as a fact: a name is cut into words at the underscores, and two of the fifteen hundred and twenty-eight translation folders on this disk have an underscore inside them - fra_fob and knv-fly_river - so the number of words does not say which word is which, and only today's single translation makes the name look readable. It is wrong as an argument: a second place to disagree is precisely what a gate needs, because with the name alone there is nothing to check it against. The pieces are what the naming function was called with, so the gate can call that function again and insist it still spells the same name - which is how a later change to the naming rule becomes a failure somebody reads instead of a silent rename of files that are already published.");
  ("All five pieces are written on every row even though a song's translation, kind and ending are the same on all of them today. A header saying them once would make the gate hold its own copy of the writer's three constants, and that is a second place for them to disagree with no gate behind it. Rows that carry everything also stay right when this record grows to hold the lyric videos and the pictures, where the kind and the ending differ row by row.");
  let bible_folder = "engbsb";
  let kind = "song";
  let ending = ".wav";
  async function row_build(found, place) {
    let passage_code = found.passage_code;
    let file_name = await path_basename(found.path_audio);
    let mark = giveaway_song_mark(place);
    let name_published = giveaway_passage_file_name(
      passage_code,
      bible_folder,
      kind,
      mark,
      ending,
    );
    let row = {
      file_name: file_name,
      passage_code: passage_code,
      bible_folder: bible_folder,
      kind: kind,
      mark: mark,
      ending: ending,
      name_published: name_published,
    };
    return row;
  }
  async function passage_rows(group) {
    let rows_of_passage = await list_map_index_async(group.items, row_build);
    return rows_of_passage;
  }
  let founds = await psalms_songs_folder_passages(folder_audio);
  let groups = list_group_by_property(founds, "passage_code");
  let grouped_rows = await list_map_async(groups, passage_rows);
  let rows = list_concat_multiple(grouped_rows);
  list_sort_text_property(rows, "name_published");
  let clashes = list_duplicates_by_property(rows, "name_published");
  list_empty_is_assert_json(clashes, {
    hint: "two recordings would be given away under one name",
  });
  let path = giveaway_psalms_songs_path();
  await file_overwrite_json(path, rows);
  return rows;
}
