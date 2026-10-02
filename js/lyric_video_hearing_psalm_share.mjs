import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
export function lyric_video_hearing_psalm_share(hearing) {
  arguments_assert(arguments, 1);
  ("$plain hearing");
  ("Of the words a transcriber that was shown no words heard in a recording, the share that are words of the psalm the recording is filed under.");
  ("★ THIS IS THE QUESTION ABOUT THE PAIRING AND THE MATCH RATE IS NOT, WHICH IS WHY THE TWO ARE SEPARATE NUMBERS OVER THE SAME TWO COUNTS. The match rate divides by the words written, so it falls whenever the transcriber could not follow the singing - a held note, a voice under music, a verse with no words caught at all - and it falls for a recording of exactly the right psalm. This divides by the words heard instead, so what it asks is: of whatever did get through, how much of it belongs to this psalm. A recording of a different psalm can only answer low, however clearly it was sung, because the clearer it is the more foreign words come through.");
  ("★ MEASURED 2026-10-02, THE MATCH RATE CAN NO LONGER TELL THE TWO APART AND THIS CAN. Psalm 104 verses 1 to 4, third singing, had 71 words written, 25 heard and 22 of them the psalm's: a match rate of 0.31, which is inside the stretch the floor's own argument called empty, and a share of 0.88. A psalm deliberately checked against another psalm's singing scored 0.191 on the match rate, so the gap the floor was standing in the middle of is now about a tenth wide rather than six tenths. The share keeps the separation the match rate lost.");
  ("Nothing heard gives nothing back rather than a number, because no words heard is no evidence either way about which psalm was sung, and a share worked out from no words would read as the strongest possible accusation.");
  let heard = property_get(hearing, "words_heard");
  let matched = property_get(hearing, "words_matched");
  let counted = number_is(heard);
  if (not(counted)) {
    return null;
  }
  let silent = equal(heard, 0);
  if (silent) {
    return null;
  }
  let share = divide(matched, heard);
  return share;
}
