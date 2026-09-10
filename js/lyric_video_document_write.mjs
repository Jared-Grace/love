import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_faults_write } from "./lyric_video_document_faults_write.mjs";
import { lyric_video_subtitles_text } from "./lyric_video_subtitles_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_pictures_present } from "./lyric_video_pictures_present.mjs";
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
  "Makes a lyric video from a song and an authored document of its lines: writes the subtitle file, then renders the video, and says which of the pictures it was asked for were not there to draw.";
  "The subtitle file is kept rather than thrown away once the video is made. It is the one place the timing is readable, so a line that came in half a second early is nudged there and the video re-rendered, instead of the whole document being reasoned about again.";
  "WHERE THE SUBTITLE FILE GOES IS ASKED FOR RATHER THAN INVENTED FROM THE VIDEO'S NAME. The tool reads that path inside an instruction whose parts are divided by colons, so a name carrying one is read as two instructions and the render fails saying something about an unknown filter. A name that is safe is the caller's to choose, and choosing it for them is how a path with a colon in it gets built without anybody deciding to.";
  "THE PICTURES COME OUT OF THE SAME DOCUMENT AS THE LINES AND THE SIZES. What is shown behind a psalm is an authored decision of exactly the kind this document already holds - which line is sung when, how large the words are, what the footer says - so it belongs beside them and not in a second file that could go missing on its own or disagree with the first.";
  "★ A PICTURE THE DOCUMENT ASKS FOR THAT NOBODY HAS DRAWN YET IS LEFT OUT AND NAMED, RATHER THAN ENDING THE RENDER. Scenes are written down long before they are drawn, so the ordinary state of a timed psalm is a document naming pictures that are not on the disk. Opening one of those as an input ends the run complaining about a file, and the psalm gets no video at all - when the words over black, which is what this made for months before there were pictures, is a finished thing. Which ones were left out comes back with the answer, so whatever asked for the video can say it is a words-on-black one and which drawings it is still waiting for.";
  let document = await file_read_json(path_document);
  await lyric_video_document_faults_write(document, path_output);
  let subtitles = lyric_video_subtitles_text(document);
  await file_overwrite(path_subtitles, subtitles);
  let asked = lyric_video_document_pictures(document);
  let drawn = await lyric_video_pictures_present(asked);
  let ran = await lyric_video_write(
    path_audio,
    path_subtitles,
    path_output,
    document.width,
    document.height,
    drawn.present,
  );
  let r = {
    ran,
    pictures: drawn.present,
    pictures_missing: drawn.missing,
  };
  return r;
}
