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
  "It answers what it measured and what it decided rather than only where it wrote, because the gain is the one number that says whether the recording handed in was already near where it should be or nowhere near it, and that is not recoverable from the file afterwards.";
  let target_loudness = audio_master_target_loudness();
  let loudness_before = await ffmpeg_loudness_integrated(path_in);
  let decibels_gain = subtract(target_loudness, loudness_before);
  let text_tail = audio_master_limiter_text(decibels_gain);
  let filter_text = audio_master_filter_text(text_tail);
  await ffmpeg_filter_complex_write(path_in, filter_text, path_out);
  let r = {
    path_out,
    loudness_before,
    decibels_gain,
  };
  return r;
}
