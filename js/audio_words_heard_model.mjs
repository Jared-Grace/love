import { arguments_assert } from "./arguments_assert.mjs";
export function audio_words_heard_model() {
  "Which size of the transcriber to listen with.";
  "★ THE SMALL ONE IS ENOUGH BECAUSE ITS ANSWER IS ONLY EVER COMPARED WITH WORDS ALREADY WRITTEN DOWN. Nothing here reads the transcript as prose; it is matched word for word against a text the caller already has, so a mishearing costs one word of a match rate rather than a wrong line on a screen. Measured on a sung psalm it matched nine hundred and sixty eight thousandths of the right words and a hundred and ninety one thousandths of a different psalm's, which is all the separation the check needs.";
  "The larger sizes cost several times the minutes and were not measured to be worth them for this job. A caller that finds a song this one cannot follow should raise the size here rather than at the call, so every song is heard by the same listener and their match rates stay comparable.";
  arguments_assert(arguments, 0);
  let model = "small";
  return model;
}
