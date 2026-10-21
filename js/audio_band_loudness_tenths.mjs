import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_exists } from "./file_exists.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
export async function audio_band_loudness_tenths(
  path_audio,
  seconds_start,
  seconds_length,
  hertz_center,
  hertz_width,
) {
  arguments_assert(arguments, 5);
  ("$plain path_audio");
  ("$plain seconds_start");
  ("$plain seconds_length");
  ("$plain hertz_center");
  ("$plain hertz_width");
  ("How loud one band of pitches is in a stretch of a wav, or of the sound of an mp4 - the loudness of each tenth of a second in decibels below full scale, with the second it was taken at.");
  ("★ IT DECIDES FOR ITSELF WHAT FFMPEG MAY DO, so no argument can make it do anything else, and that is what lets it be granted. ffmpeg on its own can write any file it is told to and has filters that write files too, so a rule for ffmpeg covers all of that. Here the program, every option and every filter are spelled below; what comes in is one file to read and four numbers.");
  ("THE NUMBERS ARE PLAIN DIGITS WITH AT MOST ONE POINT, checked before anything runs. They are joined into the filter text, and a filter graph treats a colon, a comma, a semicolon or a bracket as structure - a number allowed to hold one could add a filter. Digits and one point cannot.");
  ("THE FILE IS A WHOLE PATH ENDING IN .wav OR .mp4, THAT EXISTS, AND IS READ IN THE FORMAT ITS ENDING NAMES, FROM DISK ONLY. Starting from the root, it cannot be read as an option. Forcing the reader means ffmpeg does not guess what the file holds, so a playlist renamed to end in .wav or .mp4 is refused as a broken file rather than followed; allowing only the file protocol means nothing named inside a file can be fetched from anywhere else.");
  ("THE SOUND IS RESAMPLED TO 44100 A SECOND FIRST, so 4410 samples is a tenth of a second whatever rate the file was made at - a video's sound is often 48000.");
  ("The output is the null one, which writes nothing, and the readings come back on the output channel because the metadata printer is pointed at a lone dash - the same route the other loudness readers take.");
  let whole = text_starts_with(path_audio, "/");
  assert_json(whole, {
    hint: "only a whole path from the root is read, so nothing handed in can be read as an option",
    path_audio,
  });
  let format = null;
  if (text_ends_with(path_audio, ".wav")) {
    format = "wav";
  }
  if (text_ends_with(path_audio, ".mp4")) {
    format = "mp4";
  }
  let b = not_equal(format, null);
  assert_json(b, {
    hint: "only a .wav or .mp4 file is measured",
    path_audio,
  });
  let exists = await file_exists(path_audio);
  assert_json(exists, {
    hint: "there is no file at this path",
    path_audio,
  });
  let numbers = [seconds_start, seconds_length, hertz_center, hertz_width];
  for (let n of numbers) {
    let plain = /^[0-9]+(\.[0-9]+)?$/.test(n);
    assert_json(plain, {
      hint: "each number must be plain digits with at most one point, so it cannot add anything to the filters",
      n,
    });
  }
  let filter_text = text_combine_multiple([
    "aresample=44100,bandpass=f=",
    hertz_center,
    ":width_type=h:w=",
    hertz_width,
    ",asetnsamples=4410,astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-",
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-ss",
    seconds_start,
    "-t",
    seconds_length,
    "-protocol_whitelist",
    "file",
    "-f",
    format,
    "-i",
    path_audio,
    "-vn",
    "-af",
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
  return readings;
}
