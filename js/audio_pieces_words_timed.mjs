import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { property_get } from "./property_get.mjs";
export async function audio_pieces_words_timed(pieces) {
  "$plain pieces";
  "Every word of each recording with the second it begins and the second it ends inside its own file.";
  "★ THE WORDS ARE HANDED IN, SO NOTHING HAS TO BE HEARD CORRECTLY FOR THIS TO ANSWER. This is forced alignment and not transcription: the reader below is only asked how likely each letter is at each moment, and the words already known are laid onto those moments by the one path that keeps them in order. That is why it can place a genealogy full of names no reader has met, where a transcriber would be at its worst.";
  "★ EVERY PIECE OF A CHAPTER GOES OVER IN ONE CALL BECAUSE THE READER COSTS THREE SECONDS TO WAKE AND ALMOST NOTHING TO USE. Asked one piece at a time a chapter pays that waking twenty times over, which is most of the whole cost. So this takes a list and never a single piece, even where the caller has one.";
  "★ WHAT COMES BACK CARRIES A CONFIDENCE, AND A CALLER THAT MEANS TO TRUST THESE TIMES HAS TO READ IT. An aligner is never given the chance to say no: handed the words of a different recording it lays them onto the sound anyway and reports times that look exactly like right ones. Measured across a chapter, a piece against its own words scored between eighty eight and ninety eight hundredths and a piece against its neighbour's words scored between fifteen and seventy three, so the two are told apart by a number and not by looking.";
  arguments_assert(arguments, 1);
  let args = {
    pieces: pieces,
  };
  let reported = await py_script_speech_json_report("audio_words_timed", args);
  if (equal(reported, null)) {
    return null;
  }
  let timed = property_get(reported, "pieces");
  return timed;
}
