import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_subtitles_text } from "./lyric_video_subtitles_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { lyric_video_write } from "./lyric_video_write.mjs";
export async function lyric_video_document_write(
  path_audio,
  path_document,
  path_subtitles,
  path_output,
) {
  "$plain path_audio";
  "$plain path_document";
  "$plain path_subtitles";
  "$plain path_output";
  "Makes a lyric video from a song and an authored document of its lines: writes the subtitle file, then renders the video.";
  "The subtitle file is kept rather than thrown away once the video is made. It is the one place the timing is readable, so a line that came in half a second early is nudged there and the video re-rendered, instead of the whole document being reasoned about again.";
  "WHERE THE SUBTITLE FILE GOES IS ASKED FOR RATHER THAN INVENTED FROM THE VIDEO'S NAME. The tool reads that path inside an instruction whose parts are divided by colons, so a name carrying one is read as two instructions and the render fails saying something about an unknown filter. A name that is safe is the caller's to choose, and choosing it for them is how a path with a colon in it gets built without anybody deciding to.";
  let document = await file_read_json(path_document);
  let subtitles = lyric_video_subtitles_text(document);
  await file_overwrite(path_subtitles, subtitles);
  let ran = await lyric_video_write(
    path_audio,
    path_subtitles,
    path_output,
    document.width,
    document.height,
  );
  return ran;
}
