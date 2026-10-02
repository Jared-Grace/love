import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_times_none_is } from "./lyric_video_document_times_none_is.mjs";
import { lyric_video_document_times_spread_is } from "./lyric_video_document_times_spread_is.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_document_times_hand_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether the moments in a timing document were put there by a person, and so must not be written over.");
  ("★ IT ASKS THREE QUESTIONS BECAUSE THERE ARE THREE WAYS OF NOT BEING SOMEBODY'S WORK, AND ONLY ONE OF THEM LEAVES A MARK. A document with no moments in it anywhere has plainly never been timed, and needs no mark to see that - there is nothing there to have been anybody's. A document still holding the flat spread it was drafted with was never timed either, and the spread is its own evidence, arithmetic nobody would arrive at by listening. A document a machine timed does need a mark, because a machine writes its times through the same function the tapping screen does and the result is indistinguishable. So an untimed document is recognised by its emptiness, a draft by its shape, the machine's work by what it says of itself, and everything else is a person's.");
  ("★ THE FIRST OF THE THREE WAS MISSING UNTIL 2026-10-02, AND THE COST WAS SIXTEEN PSALMS THAT COULD NOT BE TIMED AT ALL. Psalm 90 through 104 and Psalm 136 held lines and no moments whatsoever, which is neither a draft spread nor an interrupted afternoon, so the unmarked answer below fired and every one of them was defended as somebody's work. The only command that can listen to them refused all sixteen, saying a person had timed them and their ear was better. Nothing went red over it either: what went red was the gate asking whether a person's timings are held twice, which had been demanding a kept copy of sixteen documents holding nothing to keep.");
  ("★ THE UNMARKED ANSWER IS THAT IT IS A PERSON'S, WHICH IS THE ONLY SAFE DIRECTION FOR A GUESS TO GO. Every timing document that existed before the mark did carries no mark, and among those are the ones somebody actually sat and tapped. Reading silence as the machine's would offer exactly those to be written over, and the loss is an evening of somebody's listening that nothing can reconstruct; reading silence as a person's costs at most a minute of a machine's listening done twice.");
  ("That asymmetry is also what says why the first question is allowed to narrow this and a sharper reading of the mark would not be. A document holding no moments has no evening of listening in it, so the expensive side of the trade is empty rather than merely unlikely - the exception is read off the reason the guess leans the way it does, rather than taken despite it.");
  let none = lyric_video_document_times_none_is(document);
  if (none) {
    return false;
  }
  let spread = lyric_video_document_times_spread_is(document);
  if (spread) {
    return false;
  }
  let word = lyric_video_times_machine_word();
  let machine = equal(document.times_from, word);
  if (machine) {
    return false;
  }
  return true;
}
