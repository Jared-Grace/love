import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_version } from "./lyric_video_documents_version.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { psalms_songs_folder_passages } from "./psalms_songs_folder_passages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { not } from "./not.mjs";
import { lyric_video_recording_video_path_or_null } from "./lyric_video_recording_video_path_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_video_name } from "./lyric_video_document_video_name.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_recording_video_path_chosen } from "./lyric_video_recording_video_path_chosen.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_videos_paths(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Where the lyric video of each sung psalm in a folder of downloaded songs is, filed under the recording it was made from, together with which of those were found by the note their render left rather than by name, the songs that have no timing document, the ones whose video has not been made, and the ones nothing here can ask about at all.");
  ("★ IT IS FILED UNDER THE RECORDING BECAUSE A VIDEO HAS TO BE GIVEN AWAY UNDER THE SAME MARK AS THE SONG IT IS OF, AND THE TWO SIDES NUMBER THE RECORDINGS DIFFERENTLY. The giveaway tells one singing of a psalm from another by where it stands in that passage's own list of recordings; the videos tell them apart by a mark worked out over a set that leaves out the recordings somebody edited. So the two marks are not the same word for the same file, and a video row built from either numbering on its own would hand a listener a wav and an mp4 that look like different singings. The recording's own path is the one thing both walks hold and neither invents, so it is what the answer is keyed by and nothing has to be worked out twice.");
  ("★ EVERY SINGING IS ASKED FOR SEPARATELY, NOT EVERY PASSAGE, because a psalm sung five times has five videos and the point of having sung it five times is to have all five. A passage would be the obvious key and would quietly keep whichever video was found last.");
  ("★ WHAT IS NOT THERE IS NAMED RATHER THAN LEFT OUT, in three kinds: a song nobody has timed yet, a song that is timed but whose video has not been rendered, and a song the two walks above do not hand over in the first place. All three are perfectly ordinary states of this folder rather than faults, and all three are invisible in a map of what was found - a walk cannot report its own silence, so the caller is handed it. Measured on 2026-10-15 there were two hundred and thirty-eight videos on the disk against five hundred and twenty-six recordings, so what is missing is most of it and a caller that could not see that would read a short answer as a complete one.");
  ("★ THE TRANSLATION IS READ OFF THE DOCUMENTS RATHER THAN ASKED FOR, for the same reason the record this feeds does not ask for it: there is one right answer, so taking it as an argument would only make a wrong one possible. What a video is called is then grown by the same function that named it when it was rendered, so the two spellings cannot drift - and the day they would have, the file is simply not found and nothing says why.");
  ("★ THE THIRD KIND IS THE ONE THIS WALK COULD NOT SEE ABOUT ITSELF, AND IT IS FOUND BY ASKING THE GIVEAWAY'S OWN WALK WHAT IT HOLDS AND SUBTRACTING. The two walks above refuse a recording that came out of an editing session, because a timing document is addressed by chapter alone and two singings of one chapter would fight over it. The giveaway has no such limit and walks the folder its own way, so it holds recordings these two never offer - and a recording never offered cannot be reported as untimed or as unrendered either, because both of those are answers about something that was asked about. So it was absent rather than missing, which is the one state a caller cannot tell from complete. Measured on 2026-10-16 the giveaway's walk held five hundred and thirty-seven recordings against this walk's five hundred and nineteen, and among the eighteen were both recordings of Psalm 131 - the only two there are - so that psalm's two finished videos were unreachable and nothing said so.");
  ("★ BOTH THE GROWN NAME AND THE RENDER'S OWN NOTE ARE ASKED, AND WHERE THEY DISAGREE THE LENGTH DECIDES - NEITHER ONE WINS BY ORDER. Both sides have been caught lying here. A grown name hands out whatever file now answers to a name a recording used to have, which gave Psalm 134 a video twelve seconds shorter than itself and Psalm 119 verses 129 to 136 one fourteen seconds shorter. A note records the render that wrote it and not the latest one, so a second render that left no note strands it on a superseded file, which on 2026-10-19 was true of four of the fourteen notes. Asking in a fixed order picks one of those two faults and cannot see the other, so the choice is handed to the one thing neither side invents.");
  ("★ ASKING BOTH COSTS ALMOST NOTHING BECAUSE ALMOST NOTHING HAS A NOTE. The notes began long after nearly every video here was rendered, so for most recordings the note lookup finds nothing and the grown name is the whole answer, exactly as before. The two files are only measured where a note and a name point at different files, which on the folder measured was four rows out of five hundred and sixty-four.");
  ("★ THE NOTE IS THE ONLY THING THAT EVER WORKS FOR AN EDITED RECORDING. The grown name is built from the timing document and the mark saying which singing of the passage this is, and an edited recording's mark is not the mark its video was rendered under - Psalm 131's videos are named for the un-edited numbering the editing replaced. That is not a thing a cleverer name can fix: what an edited file was made from lives inside its editing session and in no name at all, so the join has to be written down by whoever knows it, which is the render.");
  ("★ A NOTE IS KEYED BY THE RECORDING'S OWN FILE NAME, SO RENAMING A RECORDING STILL LOSES ITS NOTE. Asking both sides fixes which answer wins; it does not make the note survive a rename, and nothing here can. What it does buy is that a wrong join can be put right afterwards by writing a new note, which before this was impossible whenever the old name still found some file.");
  ("★ A RECORDING ITS NOTE ANSWERS FOR IS NEVER REPORTED AS UNTIMED, EVEN WHERE ITS TIMING DOCUMENT HAS GONE. Nothing can be rendered without timings, so a note is standing proof that the timings existed; a document missing now means it was renamed or moved since, which is a question about the documents and not about this song's video. Listed as untimed it would send somebody off to time a passage that is already sung, timed and rendered.");
  ("★ A RECORDING RESCUED BY ITS NOTE LEAVES THE UNREACHABLE LIST RATHER THAN APPEARING IN BOTH, BECAUSE THAT LIST IS READ AS WORK OUTSTANDING. Kept in both it would be reported as a song with no video while its video was being handed out beside it, and a reader clearing the list would go looking for something already found. What is lost by moving it is the knowledge that the two walks above still cannot see it, and that is recoverable from the notes list, which names exactly the rows neither walk could reach by name.");
  ("Recovering the join afterwards from the sound itself was tried on 2026-10-18 and does work - fifteen hundred comparisons of loudness over eighteen recordings, every true pair separated from every wrong one - but it answers with a likelihood and a threshold somebody has to choose. Length turned out to answer exactly instead: the renderer in use writes the video to the recording's own length, so a true pair agrees in every digit and no threshold is wanted.");
  ("A video on the disk that no recording claims is not reached by this and is not meant to be. Those are renders of recordings that have since been renamed - a cut that became the plain take, a second version - and the file plays perfectly while being a superseded cut of a song that is now given away under another name. Walking the disk from that end is a different question and is asked as one, by the command that joins the unclaimed videos to recordings by length.");
  let version = await lyric_video_documents_version();
  let chapters = await psalms_songs_folder_chapters(folder_audio);
  let parts = await psalms_songs_folder_parts(folder_audio);
  let wanted = [];
  for (let song of chapters) {
    let path_passage = lyric_video_bible_document_path(
      version,
      "PSA",
      song.chapter,
    );
    list_add(wanted, {
      path_passage: path_passage,
      mark: song.mark,
      path_audio: song.path_audio,
    });
  }
  for (let song of parts) {
    let path_passage = lyric_video_bible_part_document_path(
      version,
      "PSA",
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    list_add(wanted, {
      path_passage: path_passage,
      mark: song.mark,
      path_audio: song.path_audio,
    });
  }
  let passages = await psalms_songs_folder_passages(folder_audio);
  let reached = list_map_property(wanted, "path_audio");
  let paths = {};
  let noted = [];
  let unreachable = [];
  for (let song of passages) {
    let missed_is = list_includes_not(reached, song.path_audio);
    if (not(missed_is)) {
      continue;
    }
    let path_noted = await lyric_video_recording_video_path_or_null(
      song.path_audio,
    );
    let absent_is = null_is(path_noted);
    if (absent_is) {
      list_add(unreachable, song.path_audio);
      continue;
    }
    property_set(paths, song.path_audio, path_noted);
    list_add(noted, song.path_audio);
  }
  let untimed = [];
  let unrendered = [];
  for (let one of wanted) {
    let path_document = lyric_video_recording_document_path(
      one.path_passage,
      one.mark,
    );
    let timed_is = await file_exists(path_document);
    let path_grown = null;
    let path_named = null;
    if (timed_is) {
      let document = await file_read_json(path_document);
      let name_video = lyric_video_document_video_name(
        document,
        version,
        one.mark,
      );
      let folder_song = await path_dirname(one.path_audio);
      path_grown = path_join([folder_song, name_video]);
      let rendered_is = await file_exists(path_grown);
      if (rendered_is) {
        path_named = path_grown;
      }
    }
    let path_video = await lyric_video_recording_video_path_chosen(
      one.path_audio,
      path_named,
    );
    let chosen_absent_is = null_is(path_video);
    if (chosen_absent_is) {
      if (timed_is) {
        list_add(unrendered, path_grown);
      } else {
        list_add(untimed, one.path_audio);
      }
      continue;
    }
    property_set(paths, one.path_audio, path_video);
    let named_is = equal(path_video, path_named);
    if (not(named_is)) {
      list_add(noted, one.path_audio);
    }
  }
  let answer = {
    songs: list_size(wanted),
    paths: paths,
    noted: noted,
    untimed: untimed,
    unrendered: unrendered,
    unreachable: unreachable,
  };
  return answer;
}
