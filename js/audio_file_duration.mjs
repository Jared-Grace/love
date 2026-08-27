import { ffprobe_words_run } from "./ffprobe_words_run.mjs";
export async function audio_file_duration(path_audio) {
  "$plain path_audio";
  "Answers how many seconds long a sound file is, naming the file by its path.";
  "THE PATH IS HANDED OVER AS ONE WORD, which is the whole reason this exists beside the older reader. That one builds a line of text and lets it be split back into words, so a song whose name holds a space is asked about under half its name and the answer is that there is no such file. Here nothing is joined, so nothing has to be taken apart again.";
  "It asks the prober for the length rather than reading it out of the player's complaint. The older reader runs the player with no instruction of what to make, waits for it to fail, and digs the length out of the failure - so a run that failed for a different reason answers with nothing and looks the same as a file with no sound in it. Asking the prober a question it is meant to answer gets a number on the ordinary channel and a real failure stays a failure.";
  let words = [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    path_audio,
  ];
  let printed = await ffprobe_words_run(words);
  let v = printed.trim();
  let seconds = parseFloat(v);
  return seconds;
}
