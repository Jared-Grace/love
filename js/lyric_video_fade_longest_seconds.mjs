import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_fade_longest_seconds() {
  "The longest a sung word takes to change colour, in seconds.";
  "★ IT IS THE LONGEST AND NOT THE LENGTH, because a word lit for less time than this is faded over only as long as it is lit - a centred fade on a shorter word would begin fading out before it had finished fading in, and the two changes would fight.";
  "★ TWO PLACES NEED IT AND ONLY ONE OF THEM DRAWS ANYTHING. The subtitle writer uses it to fade; a command that lengthens how long a word stays lit uses it to work out when the colour has really finished changing, which is later than the word is done by half of this. Spelled twice, a change to the fade would quietly stop that command telling the truth about what it had done.";
  arguments_assert(arguments, 0);
  let seconds = 0.3;
  return seconds;
}
