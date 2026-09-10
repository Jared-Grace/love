import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_video_name } from "./lyric_video_document_video_name.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_pictures_present } from "./lyric_video_pictures_present.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { path_stale_is } from "./path_stale_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_write } from "./lyric_video_document_write.mjs";
export async function lyric_video_song_video_stale_write(
  version,
  path_audio,
  path_document,
  take,
) {
  arguments_assert(arguments, 4);
  ("$plain version");
  ("$plain path_audio");
  ("$plain path_document");
  ("$plain take");
  ("Makes the lyric video of one recording beside the recording itself, and only when there is no video there or the video is older than something it was made from.");
  ("★ THIS IS THE ONE TO CALL FROM ANYTHING THAT WALKS A FOLDER OF SONGS. Rendering a psalm is minutes of the machine's whole attention, so a folder asked for twice would spend all of that again to arrive at the files already sitting there. Asking whether anything it was made from has moved costs a date off each piece, and the pieces are few: the song, the document the words and their moments come out of, and each drawing standing behind them.");
  ("★ IT IS BY DATE AND NEVER BY WHETHER THE FILE IS THERE, WHICH IS WHAT MAKES THE PICTURES ARRIVE ON THEIR OWN. Most of these psalms are timed and have their scenes written down while nobody has drawn them yet, so the video that can be made today is the words over black. The moment somebody draws them the drawings are newer than the video, this says so, and the same command run again renders the psalm with its pictures - with nobody having to remember which psalms were waiting on what.");
  ("★ WHICH SINGING THIS IS COMES IN FROM THE CALLER RATHER THAN BEING READ BACK OFF EITHER PATH. The caller has just read the song's own file name and knows the answer exactly; working it out again here would mean guessing it from a document address, and a document that somebody has renamed or moved would then quietly hand one arrangement another one's name. It is only needed for what the video is called, because that is the one thing that has to differ between two singings of the same words.");
  ("A drawing that has not been made yet cannot make the video old, because it never contributed anything to what is on the disk. So only the drawings actually present are counted, which is the same list that gets rendered, asked once and used for both.");
  ("The subtitle file is named after the timing document rather than after the passage, because the document's own name is already the one thing that tells a whole chapter, a part of one, and one singing from another apart. Named after the passage, two halves of one chapter would write over each other's workings-out, and the two renders would have to be kept from ever running at once for a reason nobody could see in either of them.");
  let document = await file_read_json(path_document);
  let name_video = lyric_video_document_video_name(document, version, take);
  let folder_audio = await path_dirname(path_audio);
  let path_output = path_join([folder_audio, name_video]);
  let name_document = await path_basename(path_document);
  let stem = text_without_ending(name_document, ".json");
  let path_subtitles = folder_gitignore_join(stem + ".ass");
  let asked = lyric_video_document_pictures(document);
  let drawn = await lyric_video_pictures_present(asked);
  function picture_path(picture) {
    let p = picture.path;
    return p;
  }
  let paths_source = list_map(drawn.present, picture_path);
  list_add_multiple(paths_source, [path_audio, path_document]);
  let stale = await path_stale_is(path_output, paths_source);
  let pictures = list_size(drawn.present);
  if (not(stale)) {
    let kept = {
      path_output,
      wrote: false,
      pictures,
      pictures_missing: drawn.missing,
    };
    return kept;
  }
  await lyric_video_document_write(
    path_audio,
    path_document,
    path_subtitles,
    path_output,
  );
  let r = {
    path_output,
    wrote: true,
    pictures,
    pictures_missing: drawn.missing,
  };
  return r;
}
