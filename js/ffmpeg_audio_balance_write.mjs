import { subtract } from "./subtract.mjs";
import { audio_balance_differences } from "./audio_balance_differences.mjs";
import { audio_balance_curve } from "./audio_balance_curve.mjs";
import { audio_balance_volume_expression } from "./audio_balance_volume_expression.mjs";
import { ffmpeg_loudness_integrated } from "./ffmpeg_loudness_integrated.mjs";
import { audio_master_limiter_text } from "./audio_master_limiter_text.mjs";
import { audio_balance_filter_text } from "./audio_balance_filter_text.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_audio_balance_write(path_in, path_out) {
  "$plain path_in";
  "$plain path_out";
  "read a stereo recording, take out the standing lean to one side, bring it up to the loudness it should sit at, and save that as a new recording";
  "IT IS FOR THE FAULT NOBODY CAN NAME. A mix that leans has no error in it and nothing reports it: it plays, it measures fine on the meters that get looked at, and on headphones it sits off to one side. What it comes from is somewhere in the session that made it, and finding that is the real repair - this is the one that can be made from the finished recording alone, so say plainly that it treats the symptom.";
  "IT MEASURES BEFORE IT DECIDES, THREE TIMES, and none of the three can be guessed. Each side is listened to on its own to find the lean, and the pair is listened to as a whole to find how far the loudness is from where it should be. A gain chosen without measuring is right only for the recording it was chosen on.";
  "THE LOUDNESS IS AIMED AT RATHER THAN ADDED TO. What goes into the limiter is the distance from the target, so a quiet recording gets a lot and a loud one gets a little and both come out at the same place.";
  "IT WRITES SOMEWHERE NEW rather than over what it read, because a program reading and writing one file at once has already destroyed the thing it is halfway through reading.";
  "It says yes in advance to overwriting, because ffmpeg otherwise asks that question on the terminal and waits for an answer that is never coming.";
  "The new recording is written in plain uncompressed samples at twenty-four bits, because this is a master rather than a delivery - whatever it is squeezed into afterwards should be squeezed from something that lost nothing here.";
  let target_loudness = -10;
  let differences = await audio_balance_differences(path_in);
  let curve_found = audio_balance_curve(differences);
  let expression_left = audio_balance_volume_expression(
    curve_found.seconds,
    curve_found.decibels_left,
    curve_found.step_seconds,
  );
  let expression_right = audio_balance_volume_expression(
    curve_found.seconds,
    curve_found.decibels_right,
    curve_found.step_seconds,
  );
  let loudness_before = await ffmpeg_loudness_integrated(path_in);
  let decibels_gain = subtract(target_loudness, loudness_before);
  let text_tail = audio_master_limiter_text(decibels_gain);
  let filter_text = audio_balance_filter_text(
    expression_left,
    expression_right,
    text_tail,
  );
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_in,
    "-filter_complex",
    filter_text,
    "-map",
    "[out]",
    "-c:a",
    "pcm_s24le",
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  let r = {
    path_out,
    loudness_before,
    decibels_gain,
    curve: curve_found,
  };
  return r;
}
