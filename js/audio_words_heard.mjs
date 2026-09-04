import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { audio_words_heard_model } from "./audio_words_heard_model.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export async function audio_words_heard(path_audio) {
  "$plain path_audio";
  "Every word a recording sounds like it says, to a listener that was never shown its words, each with the second it begins and the second it ends.";
  "★ IT IS TOLD NOTHING ON PURPOSE, AND THAT IS THE WHOLE VALUE OF IT. Its twin lays a known text onto the sound and so can never disagree with that text, and the confidence the twin reports is worked out by the same model whose confusion is the thing in doubt. This one has no text to agree with, so how much of what it heard matches what is written is a judgement neither the aligner nor its score can make.";
  "★ THE TIMES THAT COME BACK ARE FOR COMPARING, NOT FOR PLACING. Measured against known times on a sung psalm they run about four tenths of a second early and remain about a quarter of a second out once that shift is taken off, where the aligner is inside a tenth. So a caller should take its lines from the aligner and use these to ask whether the aligner was right - where two independent readings of one line disagree by more than about a third of a second, one of them is wrong.";
  "It hears the whole file in one call because there is nothing to divide: a transcriber decides for itself where one stretch of speech ends, and a caller that cut the file into pieces first would be handing it a decision it makes better than they can.";
  arguments_assert(arguments, 1);
  let model = audio_words_heard_model();
  let args = {
    audio: path_audio,
    model: model,
  };
  let reported = await py_script_speech_json_report(
    fn_name("audio_words_heard"),
    args,
  );
  if (equal(reported, null)) {
    return null;
  }
  let words = property_get(reported, "words");
  return words;
}
