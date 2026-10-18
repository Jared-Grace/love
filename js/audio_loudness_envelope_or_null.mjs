import { arguments_assert } from "./arguments_assert.mjs";
import { audio_loudness_envelope } from "./audio_loudness_envelope.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function audio_loudness_envelope_or_null(path_media) {
  arguments_assert(arguments, 1);
  ("$plain path_media");
  ("How loud a media file gets over time, or nothing at all if the meter could not read it.");
  ("★ IT EXISTS SO THAT A WALK OVER A FOLDER IS NOT ENDED BY ITS FIRST SILENT FILE. The meter is right to refuse a file with no sound in it, and a caller measuring one file it was handed deserves that refusal; a caller measuring everything in a folder of downloads is standing in front of screen captures and silent clips, and for it the refusal is an ordinary answer about one file rather than a reason to stop. Which of the two a caller is deciding is the caller's to say, which is why both doors exist and neither is the other wearing a flag.");
  ("Nothing is said about why the meter refused, because there is nothing a caller could do differently with the reason: a file with no sound and a file the meter choked on are both files this cannot answer about.");
  async function audio_loudness_envelope_or_null_measure() {
    let measured = await audio_loudness_envelope(path_media);
    return measured;
  }
  let envelope = await catch_null_async(
    audio_loudness_envelope_or_null_measure,
  );
  return envelope;
}
