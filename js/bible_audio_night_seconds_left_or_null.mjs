import { divide_floor } from "./divide_floor.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { date_now } from "./date_now.mjs";
import { not } from "./not.mjs";
export function bible_audio_night_seconds_left_or_null() {
  "How many seconds are left of the night this recording may run in, or nothing at all if it is not night, in which case no deadline is asked for.";
  "★ THE NIGHT IS ELEVEN AT NIGHT UNTIL NINE IN THE MORNING BECAUSE THAT IS WHEN NOBODY IS AT THIS KEYBOARD. Recording holds several cores and several gigabytes for hours at a stretch on a machine shared with the person using it, and on 2026-08-28 that ended with the kernel killing their browser and their editor. Moving the work to the hours they are asleep does not make the machine any bigger; it makes what gets killed something nobody was looking at.";
  "★ A RUN STARTED IN THE DAY IS NOT GIVEN A DEADLINE AT ALL, WHICH IS WHY THIS ANSWERS WITH NOTHING RATHER THAN WITH ZERO. Someone recording a chapter at noon asked for that chapter and is watching it, so there is nothing to stop them for. Zero would read as a deadline that has already passed and would refuse every chapter they asked for while reporting that it had done what it was told.";
  "★ THE DEADLINE STOPS THE NEXT CHAPTER AND NEVER THE ONE IN HAND. A chapter is written piece by piece, so cutting one off leaves a folder holding part of it, and a folder that exists counts as recorded and is never asked for again. Nine in the morning is therefore when the last chapter starts finishing, not when recording stops, and the overrun is one chapter long.";
  arguments_assert(arguments, 0);
  let at = date_now();
  let opens_hour = 23;
  let closes_hour = 9;
  let a = at.getHours();
  let late = greater_than_equal(a, opens_hour);
  let a2 = at.getHours();
  let early = less_than(a2, closes_hour);
  let inside = late || early;
  if (not(inside)) {
    let daytime = null;
    return daytime;
  }
  let closes = date_now();
  closes.setHours(closes_hour, 0, 0, 0);
  if (late) {
    closes.setDate(closes.getDate() + 1);
  }
  let left2 = closes.getTime();
  let right = at.getTime();
  let left = subtract(left2, right);
  let seconds = divide_floor(left, 1000);
  return seconds;
}
