import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_whole_chapter_parts } from "./giveaway_psalms_songs_whole_chapter_parts.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_passage_code_chapter_code } from "./giveaway_passage_code_chapter_code.mjs";
import { list_includes } from "./list_includes.mjs";
import { path_extension } from "./path_extension.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_move } from "./file_move.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { giveaway_psalms_record_write } from "./giveaway_psalms_record_write.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_songs_whole_chapter_parts_rename(
  folder_audio,
) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Renames every recording whose verse range covers the whole of its chapter to the shorter name that says the same thing, and refreshes the giveaway record afterwards.");
  ("★ THE REPAIR WAS ALWAYS A RENAME ON SOMEBODY'S DISK, AND THIS IS THAT RENAME MADE INTO A COMMAND. The check next door says the fault and refuses to mend it, for a stated reason: teaching the naming to fold a full span down to a bare chapter would hide the duplicate rather than end it, because two files would then share one passage code and fight silently over which take number each one got. So the file is what is wrong. It had been mended by hand twice, which is twice that the set was found by reading a gate's output and copied into a shell by eye; the set is exactly what the check already hands back, so nothing needed to be typed at all.");
  ("★ THE SHORTER NAME IS SPELLED OUT OF WHAT THE READING UNDERSTOOD, AND NOT CUT OUT OF THE NAME THAT IS THERE. Cutting the range out of the old name would keep whatever else that name happened to carry - a space where this disk now writes an underscore, the word Psalms, an editing mark - and would make this a second rule for what these files are called, kept in step with the first by hand. The reading already holds the whole rule, so the chapter and the take number are taken from it and the name is written afresh in the one spelling the folder uses. The ending is the only thing carried over, because a recording may be a wav or an mp3 and nothing about the fault says which.");
  ("★ A NAME ALREADY TAKEN IS STEPPED PAST RATHER THAN WRITTEN OVER, AND THE NEXT FREE COUNTER IS WHAT MAKES IT A BRAND NEW NAME. Psalm 67 is the case that proves it is needed: Psalm_67.wav already sits in the folder, a shorter and different singing of the same whole chapter, so the file called Psalm_67_1-7.wav cannot simply lose its range. The counter in round brackets is how this disk already tells two recordings of one passage apart, so the search walks up from the take the old name claimed until it finds a counter nothing holds. Which take number a recording ends up with decides its published address, so stepping up never disturbs a name that is already spelled - the recording that was there keeps the number it had, and the arriving one takes the next.");
  ("★ A CHAPTER THAT HAS ALREADY GONE OUT IS REFUSED, BECAUSE A PUBLISHED ADDRESS MAY NEVER MOVE. The published name of a recording is worked out from where its file stands among its passage's own files, so renaming one raw recording can renumber the takes after it - which is harmless while nothing has been uploaded and permanent damage afterwards, since the host serves a file under its uploaded name forever. The record's own writer refuses a save that would move a public name, but it refuses after the files on the disk have already moved, and nothing puts those back. So the question is asked here as well, per chapter, before the first file is touched.");
  ("★ AN EDITED RECORDING IS REFUSED RATHER THAN RENAMED, BECAUSE ITS SHORTER NAME CANNOT BE SPELLED FROM ITS OWN. A file whose name ends in the editing mark says which chapter it holds but nothing about which recording it was made from, and the reading says so in its own words: dropping the mark names a real file that is a different singing, and it is wrong that way for three of the edited recordings on this disk. So an offending name wearing the mark is handed back for a person to settle, and the rest are mended.");
  ("The record is refreshed in the same breath, and only when something actually moved. A record naming files that are no longer there is the loud half of the fault the disk check reports, and leaving a window where it is true means whoever runs the next command gets a wrong answer for a reason nobody wrote down. Refreshing when nothing moved would write the same bytes back and make a commit out of nothing.");
  ("Nothing is deleted and nothing is written over - the move refuses a destination that exists, and is checked against the folder beforehand as well, so the worst a wrong run costs is renaming a file back.");
  function file_name_spell(chapter_number, take_number, ending) {
    let first_is = equal(take_number, 0);
    let counted = first_is ? "" : " (" + take_number + ")";
    let name = "Psalm_" + chapter_number + counted + ending;
    return name;
  }
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let found = await giveaway_psalms_songs_whole_chapter_parts(rows);
  let chapters_uploaded = await giveaway_psalms_chapters_uploaded();
  let renamed = [];
  let refused = [];
  for (let one of found) {
    let read = psalms_song_file_read_or_null(one.file_name);
    if (read.session_is) {
      let edited = {
        file_name: one.file_name,
        why: "this is an edited recording, and what it was edited from is written nowhere in its name, so the shorter name cannot be spelled for it here",
      };
      list_add(refused, edited);
      continue;
    }
    let chapter_code = giveaway_passage_code_chapter_code(one.passage_code);
    let out_is = list_includes(chapters_uploaded, chapter_code);
    if (out_is) {
      let public_already = {
        file_name: one.file_name,
        why:
          "the box for " +
          chapter_code +
          " has already been given away, and renaming the recording now could move an address somebody holds",
      };
      list_add(refused, public_already);
      continue;
    }
    let ending = path_extension(one.file_name);
    let take_number = read.take;
    let file_name_after = "";
    let path_after = "";
    while (text_empty_is(file_name_after)) {
      let candidate = file_name_spell(one.chapter, take_number, ending);
      let candidate_path = path_join([folder_audio, candidate]);
      let taken_is = await file_exists(candidate_path);
      if (taken_is) {
        take_number = take_number + 1;
        continue;
      }
      file_name_after = candidate;
      path_after = candidate_path;
    }
    let path_before = path_join([folder_audio, one.file_name]);
    await file_move(path_before, path_after);
    let moved = {
      file_name: one.file_name,
      file_name_after: file_name_after,
      passage_code: one.passage_code,
    };
    list_add(renamed, moved);
  }
  let moved_is = list_empty_not_is(renamed);
  let rows_after = moved_is
    ? await giveaway_psalms_record_write(folder_audio)
    : rows;
  let r = {
    found: list_size(found),
    renamed: renamed,
    refused: refused,
    rows: list_size(rows_after),
  };
  return r;
}
