import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_screen_characters_max() {
  "How many letters of a passage will stand on one screen at the lettering size a lyric video uses.";
  "★ THE NUMBER WAS READ OFF RENDERED FRAMES RATHER THAN WORKED OUT FROM THE SIZES. A hundred and twenty four letters filled eight lines of the twenty third psalm and a hundred and forty filled ten lines of the eleventh of Chronicles, where the tenth line stood over the passage's name at the foot. So nine lines is the room there is, letters run about thirteen to a line at their widest, and a hundred and ten is nine lines with the margin left in. Working it out instead would need the width of a letter in a particular typeface at a particular weight, which is the one thing a count of letters was chosen to avoid needing.";
  "★ IT IS ONE NUMBER FOR EVERY VIDEO BECAUSE THE LETTERING IS ONE SIZE FOR EVERY VIDEO. Should a video ever ask for its own size, this becomes a question about that document rather than a fact about all of them, and it should be asked of the document instead.";
  arguments_assert(arguments, 0);
  let characters_max = 110;
  return characters_max;
}
