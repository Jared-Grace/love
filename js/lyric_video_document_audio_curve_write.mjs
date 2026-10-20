import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { number_is } from "./number_is.mjs";
import { lyric_video_audio_cut_end } from "./lyric_video_audio_cut_end.mjs";
import { lyric_video_audio_cut } from "./lyric_video_audio_cut.mjs";
import { lyric_video_audio_lift_curve } from "./lyric_video_audio_lift_curve.mjs";
export async function lyric_video_document_audio_curve_write(
  path_audio,
  path_document,
  path_audio_cut,
) {
  "$plain path_audio";
  "$plain path_document";
  "$plain path_audio_cut";
  "Writes the sound a lyric video's film will carry: the recording cut where the document says it begins and ends, with any rise in loudness the document asks for. It is what the render plays, and it can be written on its own so a change to the sound is heard before a whole film is made.";
  arguments_assert(arguments, 3);
  let document = await file_read_json(path_document);
  let seconds_cut = document.audio_from || 0;
  let lift = document.audio_lift;
  let path_cut = path_audio_cut;
  if (lift) {
    path_cut = path_audio_cut + ".unlifted.wav";
  }
  if (number_is(document.audio_to)) {
    await lyric_video_audio_cut_end(
      path_audio,
      seconds_cut,
      document.audio_to,
      path_cut,
    );
  } else {
    await lyric_video_audio_cut(path_audio, seconds_cut, path_cut);
  }
  if (lift) {
    let seconds_from = subtract(lift.from, seconds_cut);
    let seconds_to = subtract(lift.to, seconds_cut);
    await lyric_video_audio_lift_curve(
      path_cut,
      seconds_from,
      seconds_to,
      lift.decibels,
      lift.power,
      path_audio_cut,
    );
  }
  return path_audio_cut;
}
