import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_reading_changed_queue } from "./bible_audio_reading_changed_queue.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
export async function bible_audio_repair_queue(bible_folder) {
  "$plain bible_folder";
  "The chapters of a recorded bible whose sound needs making again, because the reading of the day it was spoken says something the reading now does not - a word left silent, or a word said differently.";
  "★ THE TEST IS THAT THE RECORDING SAYS SOMETHING WRONG, NOT THAT IT WENT SILENT. Silence was only ever the half of that which was easy to see: a name the old reading had never heard of came back with no sounds at all, while a name it held a wrong answer for came back sounding wrong, which is not silence and went unnoticed. Measured on the fifth of September 2026 that was 507 chapters caught against 1086 at fault, so more than half the broken recordings were being called good.";
  "★ THE SMALL WORDS ARE BROKEN TOO, WHICH IS WHY THE WIDER HALF IS NOT A MATTER OF TASTE. A reading that cannot sound out a name has no first sound for the word before it to read, so the rule that says the before a vowel and the before a consonant fired on nothing and fired wrongly. Counted over every chapter, that is 208 thes and 616 tos said wrongly - each one of them beside a name, and every single one of them right in the reading as it is now.";
  "★ IT FINDS ITS OWN SET, WHICH IS THE WHOLE REASON IT IS A COMMAND AND NOT A LIST. A pass over a thousand chapters does not fit in one night, so the same question gets asked again the next night and the night after. A list handed in would name chapters already done and spend a night doing them twice; asked afresh, a chapter that has been recorded again holds newer sound and simply is not in the answer any more.";
  "★ THE SILENT HALF IS OFFERED FIRST BECAUSE IT IS THE WORSE FAULT. A chapter missing a word outright says less than it should; a chapter saying a name wrongly says the wrong thing but says it all. A night that runs out part way through then spends itself on the worse half, which is the only ordering that makes a partial pass worth as much as it can be.";
  "★ ASKING COSTS ABOUT EIGHT MINUTES, BECAUSE EVERY CHAPTER IS NOW READ TWICE. That is paid once a night against a window of nine hours, and it buys the only question that can tell a mended chapter from a broken one - the older asking read each chapter once and could not see a name said wrongly at all.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_reading_changed_queue(bible_folder, "");
  if (not(reported)) {
    return null;
  }
  let dropped = property_get(reported, "queue_dropped");
  let changed = property_get(reported, "queue_changed_only");
  let queue = list_concat(dropped, changed);
  let wider = {
    ...reported,
    queue,
  };
  return wider;
}
