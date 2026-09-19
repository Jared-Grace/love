import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_filter_complex_write(
  path_in,
  filter_text,
  path_out,
) {
  "$plain path_in";
  "$plain filter_text";
  "$plain path_out";
  "read a recording, run the given picture of what should happen to the sound over it, and save the result as a new recording";
  "THE PICTURE IS HANDED IN AND NEVER DECIDED HERE, because what a master does to a song and what a repair does to a lean are different decisions that happen to be carried out the same way. Spelling either one here would force the other to copy the carrying-out, and two copies of a writing step drift apart without anything going wrong loudly enough to notice.";
  "IT WRITES SOMEWHERE NEW rather than over what it read, because a program reading and writing one file at once has already destroyed the thing it is halfway through reading.";
  "It says yes in advance to overwriting, because ffmpeg otherwise asks that question on the terminal and waits for an answer that is never coming.";
  "The new recording is written in plain uncompressed samples at twenty-four bits, because this is a master rather than a delivery - whatever it is squeezed into afterwards should be squeezed from something that lost nothing here.";
  "The picture is expected to end at a stream named out, which is the one name both ends have to agree on for anything to be saved at all.";
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
  let r = await ffmpeg_words_run(command_words);
  return r;
}
