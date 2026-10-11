import { round } from "./round.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
export async function audio_levels_tenths_from(path_audio, seconds_from) {
  "$plain path_audio";
  "$plain seconds_from";
  "How loud a sound file is, a tenth of a second at a time, from one second to the end - each reading the second it starts at and its loudness in decibels. It writes nothing.";
  "IT EXISTS FOR THE ENDING OF A SONG, where a fade written into the file can start before the last word is sung. Finding that means reading the last few seconds in small steps and laying them beside the last word heard, and the same ffmpeg line was being typed by hand for every song.";
  "THE SECONDS ARE COUNTED FROM THE START OF THE FILE, not from where the reading began. Skipping ahead before reading restarts ffmpeg's clock at zero, so the skip is added back on, and a reading can be laid straight against a time heard in the song.";
  "THE SOUND IS RESAMPLED FIRST so that one tenth of a second is always the same count of samples, whatever rate the file was made at; resampling does not change how loud it is.";
  arguments_assert(arguments, 2);
  let from = Number.parseFloat(seconds_from);
  let key = "lavfi.astats.Overall.RMS_level";
  let filter_text = text_combine_multiple([
    "aresample=48000,asetnsamples=4800,astats=metadata=1:reset=1,ametadata=print:key=",
    key,
    ":file=-",
  ]);
  let v = String(from);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-ss",
    v,
    "-i",
    path_audio,
    "-af",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_metadata_numbers(printed_text, key);
  function lambda(item) {
    let n = multiply(item.second + from, 10);
    let top = round(n);
    let second = divide(top, 10);
    let r = {
      second,
      reading: item.reading,
    };
    return r;
  }
  let shifted = readings.map(lambda);
  return shifted;
}
