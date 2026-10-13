import { arguments_assert } from "./arguments_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { subtract } from "./subtract.mjs";
export async function audio_left_channel_difference_db(path_stereo, path_mono) {
  arguments_assert(arguments, 2);
  ("$plain path_stereo");
  ("$plain path_mono");
  ("Takes the left side of a two-sided recording, takes a one-sided recording away from it, and answers how loud what is left over is, in decibels.");
  ("★ THIS IS THE ANSWER TO WHETHER TWO RECORDINGS ARE THE SAME SINGING WHEN NO HASH CAN BE TAKEN. An editing session stores the sound it imported at its own sample rate and split into one file per side, so no two files of one singing ever agree byte for byte and no sum over their bytes can be compared. What does survive both of those changes is the sound itself: take one away from the other and a pair that is one singing cancels down to almost nothing, while a pair that is two singings stays as loud as music.");
  ("★ SIDE AGAINST SIDE, NEVER A FLATTENED PAIR AGAINST ONE SIDE. Folding the two sides of the stereo file into one and taking a single side away from that leaves half of the music behind on purpose, because the two sides were never the same signal. Measured, that mistake put a pair known to be one singing at -22.5 dB and a pair known to be two at -12.0 dB - ten decibels apart, which decides nothing. Side against side put the same two pairs 36 dB apart. The flattened form looks like it works, and is wrong by 26 dB.");
  ("★ THE NUMBER THIS ANSWERS MEANS NOTHING ON ITS OWN. Minus forty-eight decibels is unreadable until a pair known to be one singing has been run through this same function and a pair known to be two has as well. So a caller deciding anything from this must run both of its controls through here in the same batch and read the three numbers together. This function deliberately does not hold a threshold, because a threshold would be exactly the constant that pretends the controls are unnecessary.");
  ("Both sides are brought to one sample rate before the subtraction, because a subtraction between two rates is not defined and the player would resample one of them by whatever rule it felt like, silently changing the number this answers.");
  ("The reading grows as the recording plays and only the last one is the whole of it, the same way the loudness reader works: every earlier reading is a whole-file figure for a file that has not finished yet. It refuses an empty answer rather than handing one back, because a measurement that produced no readings at all looks exactly like a perfect cancellation, which is the one wrong answer that would be believed.");
  let filter_text =
    "[0:a]channelsplit=channel_layout=stereo:channels=FL,aformat=sample_fmts=fltp:sample_rates=48000[a];[1:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=mono[b];[a][b]amerge=inputs=2,pan=mono|c0=c0-c1,astats=metadata=1:reset=0,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-";
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_stereo,
    "-i",
    path_mono,
    "-filter_complex",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_metadata_numbers(
    printed_text,
    "lavfi.astats.Overall.RMS_level",
  );
  if (equal(readings.length, 0)) {
    error(
      "taking one recording away from the other answered no readings at all",
    );
  }
  let last_reading = readings[subtract(readings.length, 1)];
  let db = last_reading.reading;
  return db;
}
