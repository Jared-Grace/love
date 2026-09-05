import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_times_spread_is } from "./lyric_video_document_times_spread_is.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_document_times_hand_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether the moments in a timing document were put there by a person, and so must not be written over.");
  ("★ IT ASKS TWO QUESTIONS BECAUSE THERE ARE TWO WAYS OF NOT BEING SOMEBODY'S WORK, AND ONLY ONE OF THEM LEAVES A MARK. A document still holding the flat spread it was drafted with was never timed at all, and no mark is needed to see that - the spread is its own evidence, arithmetic nobody would arrive at by listening. A document a machine timed does need a mark, because a machine writes its times through the same function the tapping screen does and the result is indistinguishable. So the draft is recognised by its shape and the machine's work by what it says of itself, and everything else is a person's.");
  ("★ THE UNMARKED ANSWER IS THAT IT IS A PERSON'S, WHICH IS THE ONLY SAFE DIRECTION FOR A GUESS TO GO. Every timing document that existed before the mark did carries no mark, and among those are the ones somebody actually sat and tapped. Reading silence as the machine's would offer exactly those to be written over, and the loss is an evening of somebody's listening that nothing can reconstruct; reading silence as a person's costs at most a minute of a machine's listening done twice.");
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
