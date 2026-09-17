import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_subtitles_path } from "./lyric_video_document_subtitles_path.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_pictures_present } from "./lyric_video_pictures_present.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { path_stale_is } from "./path_stale_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_write } from "./lyric_video_document_write.mjs";
export async function lyric_video_stale_write(
  path_audio,
  path_document,
  path_output,
) {
  arguments_assert(arguments, 3);
  ("$plain path_audio");
  ("$plain path_document");
  ("$plain path_output");
  ("Makes a lyric video from a recording and its timing document, only when there is no video at that path or the video is older than something it was made from, and says whether it made one and which pictures it was still waiting for.");
  ("★ THIS IS THE ONE RENDER BOTH A PSALM AND A SONG GO THROUGH. They differ only in where the recording is found and what the video is called; everything after that - the subtitle file, the pictures, the date check, the render itself - is the same steps, so it is written once and each kind only works out its own two paths.");
  ("★ IT IS BY DATE AND NEVER BY WHETHER THE FILE IS THERE, WHICH IS WHAT MAKES THE PICTURES ARRIVE ON THEIR OWN. A document can name scenes nobody has drawn yet, so the video that can be made today is the words over black. The moment somebody draws them the drawings are newer than the video, this says so, and the same command run again renders with the pictures - and a word moved by hand makes the document newer in just the same way.");
  ("A drawing that has not been made yet cannot make the video old, because it never contributed anything to what is on the disk. So only the drawings actually present are counted, which is the same list that gets rendered, asked once and used for both.");
  let document = await file_read_json(path_document);
  let path_subtitles = await lyric_video_document_subtitles_path(path_document);
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
