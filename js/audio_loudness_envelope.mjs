import { arguments_assert } from "./arguments_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { audio_loudness_silence_floor } from "./audio_loudness_silence_floor.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function audio_loudness_envelope(path_media) {
  arguments_assert(arguments, 1);
  ("$plain path_media");
  ("The shape of how loud a recording is over time, as one number per tenth of a second, so that two files holding the same singing can be recognised as the same singing by their sound rather than by their names.");
  ("★ THIS IS WHAT LETS A VIDEO BE JOINED BACK TO THE RECORDING IT WAS MADE FROM WHEN NO NAME SAYS SO. A name is grown from a mark that moves when a recording is edited, so a recording that has been edited since its video was rendered carries a name that no longer points at it, and the join is lost. The sound is not lost: the video holds the recording's own singing. Measured this way both sides answer the same shape and the pairing can be proved from content.");
  ("★ IT IS A SHAPE AND NOT THE SOUND, WHICH IS THE ONLY REASON THE COMPARISON WORKS AT ALL. A video's sound has been through a lossy encoding and a lift at the front, so sample for sample it is not the recording and a subtraction of the two says nothing. How loud it is from moment to moment survives all of that, because none of those changes moves a syllable in time.");
  ("EVERYTHING IS FLATTENED TO ONE CHANNEL AT A LOW RATE BEFORE ANYTHING IS MEASURED. One side is a song file and the other is the sound inside a video, and the two need not share a sample rate or a number of channels; brought to the same low mono rate first, the readings are comparable, and the measuring is quick because almost all the samples have been thrown away.");
  ("THE READINGS ARRIVE ON THE OUTPUT CHANNEL BY NAMING A SINGLE DASH AS THE FILE TO WRITE THEM TO, which is the same route the whole-file loudness reading takes. Everything the tool normally says about what it heard goes to the error channel, where the runner here cannot reach it.");
  ("It refuses an empty answer rather than handing back nothing, because a measurement that produced no readings looks exactly like a recording with no sound in it, and an empty shape correlates with everything.");
  let instruction =
    "aresample=8000,aformat=channel_layouts=mono,asetnsamples=800,astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-";
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_media,
    "-af",
    instruction,
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
    error("the loudness meter answered no readings at all for this recording");
  }
  let floor = audio_loudness_silence_floor();
  let shape = [];
  for (let reading of readings) {
    let said = reading.reading;
    let number_is = Number.isFinite(said);
    let held = number_is ? said : floor;
    let quieter_is = less_than(held, floor);
    let kept = quieter_is ? floor : held;
    list_add(shape, kept);
  }
  return shape;
}
