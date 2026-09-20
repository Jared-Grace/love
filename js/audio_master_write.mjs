import { audio_peak_decibels } from "./audio_peak_decibels.mjs";
import { audio_master_compressor_ratio } from "./audio_master_compressor_ratio.mjs";
import { audio_master_compressor_text } from "./audio_master_compressor_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { audio_master_target_loudness } from "./audio_master_target_loudness.mjs";
import { ffmpeg_loudness_integrated } from "./ffmpeg_loudness_integrated.mjs";
import { subtract } from "./subtract.mjs";
import { audio_master_limiter_text } from "./audio_master_limiter_text.mjs";
import { audio_master_filter_text } from "./audio_master_filter_text.mjs";
import { ffmpeg_filter_complex_write } from "./ffmpeg_filter_complex_write.mjs";
export async function audio_master_write(path_in, path_out) {
  "$plain path_in";
  "$plain path_out";
  "read a finished recording, bring it up to the loudness a song should sit at without letting anything go over the ceiling, and save that as a new recording";
  "IT MEASURES BEFORE IT DECIDES. The recording is listened to as a whole to find how loud it already is, and the gain is the distance from there to where it should sit. A gain chosen without measuring is right only for the recording it was chosen on, so the same number applied to the next song makes that one quiet or makes it distort, and neither fault is visible from inside the run.";
  "THE LOUDNESS IS AIMED AT RATHER THAN ADDED TO, which is what lets one function serve every song. A quiet recording gets a lot and a loud one gets a little and both come out at the same place, so the caller never has to know anything about the recording it is handing over.";
  "IT DOES ONLY THE LOUDNESS AND DELIBERATELY NOT THE BALANCE. A standing lean to one side is a fault of the session that made the mix, it happens to one recording rather than to songs in general, and the repair for it costs a split and a join that a sound recording should not pay. The one that does both is next door and a caller wanting both should ask for that.";
  "★ IT SQUEEZES BEFORE IT HOLDS, AND THE HOLDING IS ONLY A CATCH. A limiter on its own holds every instant above the ceiling to one level, so the very top of a song arrives flat and one loud instant no longer stands above a slightly quieter one. Squeezing that span into the room under the ceiling first keeps the order between them, and leaves the holding step with almost nothing to do. Measured on one song, the squeezing had to be worked out from the recording rather than set once, because how hard to squeeze depends entirely on how far the loudest instant sits above where it is allowed to land.";
  "It answers what it measured and what it decided rather than only where it wrote, because the gain is the one number that says whether the recording handed in was already near where it should be or nowhere near it, and that is not recoverable from the file afterwards.";
  let target_loudness = audio_master_target_loudness();
  let loudness_before = await ffmpeg_loudness_integrated(path_in);
  let decibels_gain = subtract(target_loudness, loudness_before);
  let decibels_peak = await audio_peak_decibels(path_in);
  let compressor_ratio = audio_master_compressor_ratio(
    decibels_peak,
    decibels_gain,
  );
  let text_compressor = audio_master_compressor_text(
    decibels_peak,
    decibels_gain,
  );
  let text_limiter = audio_master_limiter_text(decibels_gain);
  let text_tail = text_combine(text_compressor, text_limiter);
  let filter_text = audio_master_filter_text(text_tail);
  await ffmpeg_filter_complex_write(path_in, filter_text, path_out);
  let r = {
    path_out,
    loudness_before,
    decibels_gain,
    decibels_peak,
    compressor_ratio,
  };
  return r;
}
