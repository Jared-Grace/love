import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lag_enough } from "./lyric_timing_lag_enough.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
export function lyric_timing_lag_said(measured, count) {
  arguments_assert(arguments, 2);
  ("$plain measured");
  ("$plain count");
  ("What to tell somebody who has just finished a run of sounds: their lag if the run was good enough to have one, and what to do about it if it was not.");
  ("A RUN IS ONLY GOOD ENOUGH IF NEARLY ALL OF THE SOUNDS WERE ANSWERED. The arithmetic will hand back a lag from two presses as readily as from ten, and it will look exactly the same - a number, in seconds, to two places. What separates them is how much of the run stands behind it, and that is why the count comes back beside the answer rather than being thrown away once the middle has been taken. Where the line falls is not decided here, because the screen has to decide the same thing about the same run and the two answers must be one answer.");
  ("MISSING SOME IS SAID AS SOMETHING TO DO AGAIN, NOT AS SOMETHING DONE WRONG. Sounds get missed because a phone was on silent, because somebody was still finding the button, or because a room was noisy - and all three are fixed by going again rather than by being told off. Nothing is written into the lag box in that case, because a half-answered run replacing a working number is worse than leaving the working number alone.");
  ("THE NUMBER IS OFFERED AS A PLACE TO START AND SAID TO BE ONE. What this measures is somebody reacting to a sound they could not see coming. Tapping a song is a little quicker than that, because the words of the next line are in front of them and the phrase they are listening to is audibly ending - so the true lag on a song sits somewhere below what comes out of here. Saying so is the difference between a starting point and a wrong answer, and it costs one sentence.");
  let heard = measured.heard;
  let enough = lyric_timing_lag_enough(measured, count);
  let counted = heard + " of the " + count + " sounds";
  let ask =
    "Only " +
    counted +
    " were answered, so nothing has been written into the lag box. Would another go, somewhere quiet, be easier?";
  let seconds = enough ? number_hundredths_rounded(measured.lag) : 0;
  let told =
    "You press " +
    seconds +
    " seconds after a sound, from " +
    counted +
    ". That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let said = enough ? told : ask;
  return said;
}
