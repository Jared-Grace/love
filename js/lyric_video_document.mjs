import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document(passage, credit, duration, lines) {
  "$plain passage";
  "$plain credit";
  "$plain duration";
  "$plain lines";
  "Gathers a passage, its translation's terms, how long the sound runs and the lines already timed into the one document a lyric video is rendered from.";
  "★ THE THREE LETTERING SIZES ARE WRITTEN OUT RATHER THAN LEFT TO THE RENDERER, because a person changing one of them is the commonest thing to want next, and a number sitting in the document is the shortest way to change it.";
  "★ WHERE THE TIMES CAME FROM IS DELIBERATELY NOT ASKED HERE, AND THAT IS WHAT LETS ONE RENDERER SERVE BOTH KINDS OF RECORDING. A song's lines are placed by two readings of the recording set against each other and corrected by ear only where those disagree; a spoken chapter's lines are measured exactly, because each one was recorded into its own file and its length is simply read off it. Those are opposite ways of arriving at a number and the same kind of number once arrived at, so the difference belongs in whoever works them out and nowhere past that.";
  arguments_assert(arguments, 4);
  let document = {
    passage,
    credit,
    duration,
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 64,
    lines,
  };
  return document;
}
