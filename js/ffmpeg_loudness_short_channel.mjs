import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
export async function ffmpeg_loudness_short_channel(path_in, channel_name) {
  "$plain path_in";
  "$plain channel_name";
  "listen to one side of a stereo recording on its own and answer how loud it was, moment by moment, all the way through";
  "LOUDNESS HERE IS THE WEIGHTED KIND AND NOT THE ARITHMETIC KIND, because the question being asked is what a person hears. Plain averages of the sample values weigh a deep hum the same as the voice on top of it, and two sides can measure equal that way while one of them plainly sounds louder. The weighting used here is the broadcast one, which discounts what the ear discounts.";
  "IT IS THE SHORT-TERM READING RATHER THAN THE WHOLE-FILE ONE. A single number for a whole recording can be level while one side leans left for the first minute and right for the rest, and that is exactly the fault this was built to find: the average said the mix was almost balanced and the mix was audibly not.";
  "ONE SIDE AT A TIME IS DELIBERATE. Folding the chosen side down to a single channel first means the meter is asked about that side alone, and the two answers can then be laid against each other. Measuring both in one pass would put two readings under one name and there would be no way to tell which side each belonged to.";
  let filter_text = text_combine_multiple([
    "pan=mono|c0=",
    channel_name,
    ",ebur128=metadata=1,ametadata=print:key=lavfi.r128.S:file=-",
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_in,
    "-af",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_metadata_numbers(printed_text, "lavfi.r128.S");
  return readings;
}
