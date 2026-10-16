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
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_video_name } from "./lyric_video_document_video_name.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_videos_paths(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Where the lyric video of each sung psalm in a folder of downloaded songs is, filed under the recording it was made from, together with the songs that have no timing document, the ones whose video has not been made, and the ones this walk cannot ask about at all.");
  ("★ IT IS FILED UNDER THE RECORDING BECAUSE A VIDEO HAS TO BE GIVEN AWAY UNDER THE SAME MARK AS THE SONG IT IS OF, AND THE TWO SIDES NUMBER THE RECORDINGS DIFFERENTLY. The giveaway tells one singing of a psalm from another by where it stands in that passage's own list of recordings; the videos tell them apart by a mark worked out over a set that leaves out the recordings somebody edited. So the two marks are not the same word for the same file, and a video row built from either numbering on its own would hand a listener a wav and an mp4 that look like different singings. The recording's own path is the one thing both walks hold and neither invents, so it is what the answer is keyed by and nothing has to be worked out twice.");
  ("★ EVERY SINGING IS ASKED FOR SEPARATELY, NOT EVERY PASSAGE, because a psalm sung five times has five videos and the point of having sung it five times is to have all five. A passage would be the obvious key and would quietly keep whichever video was found last.");
  ("★ WHAT IS NOT THERE IS NAMED RATHER THAN LEFT OUT, in three kinds: a song nobody has timed yet, a song that is timed but whose video has not been rendered, and a song the two walks above do not hand over in the first place. All three are perfectly ordinary states of this folder rather than faults, and both are invisible in a map of what was found - a walk cannot report its own silence, so the caller is handed it. Measured on 2026-10-15 there were two hundred and thirty-eight videos on the disk against five hundred and twenty-six recordings, so what is missing is most of it and a caller that could not see that would read a short answer as a complete one.");
  ("★ THE TRANSLATION IS READ OFF THE DOCUMENTS RATHER THAN ASKED FOR, for the same reason the record this feeds does not ask for it: there is one right answer, so taking it as an argument would only make a wrong one possible. What a video is called is then grown by the same function that named it when it was rendered, so the two spellings cannot drift - and the day they would have, the file is simply not found and nothing says why.");
  ("★ THE THIRD KIND IS THE ONE THIS WALK COULD NOT SEE ABOUT ITSELF, AND IT IS FOUND BY ASKING THE GIVEAWAY'S OWN WALK WHAT IT HOLDS AND SUBTRACTING. The two walks above refuse a recording that came out of an editing session, because a timing document is addressed by chapter alone and two singings of one chapter would fight over it. The giveaway has no such limit and walks the folder its own way, so it holds recordings these two never offer - and a recording never offered cannot be reported as untimed or as unrendered either, because both of those are answers about something that was asked about. So it was absent rather than missing, which is the one state a caller cannot tell from complete. Measured on 2026-10-16 the giveaway's walk held five hundred and thirty-seven recordings against this walk's five hundred and nineteen, and among the eighteen were both recordings of Psalm 131 - the only two there are - so that psalm's two finished videos were unreachable and nothing said so.");
  ("★ THE EIGHTEEN ARE NAMED AND NOT REPAIRED HERE, BECAUSE WHICH VIDEO BELONGS TO AN EDITED RECORDING IS NOT WRITTEN ANYWHERE THIS CAN READ. A video is found by growing the name it ought to have from its timing document and the mark of the recording, and an edited recording's mark is not the mark its video was rendered under - Psalm 131's videos are named for the un-edited numbering the editing replaced. What an edited file was made from lives inside its editing session and in no name, so the join is a thing to be given rather than derived, and guessing it would publish a wav and an mp4 that are different singings under one mark.");
  ("A video on the disk that no recording claims is not reached by this and is not meant to be. Those are renders of recordings that have since been renamed - a cut that became the plain take, a second version - and the file plays perfectly while being a superseded cut of a song that is now given away under another name. Reaching them would need the disk walked from the other end, which is a different question and should be asked as one.");
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
  let unreachable = [];
  for (let song of passages) {
    let missed_is = list_includes_not(reached, song.path_audio);
    if (missed_is) {
      list_add(unreachable, song.path_audio);
    }
  }
  let paths = {};
  let untimed = [];
  let unrendered = [];
  for (let one of wanted) {
    let path_document = lyric_video_recording_document_path(
      one.path_passage,
      one.mark,
    );
    let timed_is = await file_exists(path_document);
    if (not(timed_is)) {
      list_add(untimed, one.path_audio);
      continue;
    }
    let document = await file_read_json(path_document);
    let name_video = lyric_video_document_video_name(
      document,
      version,
      one.mark,
    );
    let folder_song = await path_dirname(one.path_audio);
    let path_video = path_join([folder_song, name_video]);
    let rendered_is = await file_exists(path_video);
    if (not(rendered_is)) {
      list_add(unrendered, path_video);
      continue;
    }
    property_set(paths, one.path_audio, path_video);
  }
  let answer = {
    songs: list_size(wanted),
    paths: paths,
    untimed: untimed,
    unrendered: unrendered,
    unreachable: unreachable,
  };
  return answer;
}
