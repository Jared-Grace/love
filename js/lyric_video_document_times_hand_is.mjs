import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_times_none_is } from "./lyric_video_document_times_none_is.mjs";
import { lyric_video_document_times_spread_is } from "./lyric_video_document_times_spread_is.mjs";
import { lyric_video_document_times_stepped_is } from "./lyric_video_document_times_stepped_is.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_document_times_hand_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether the moments in a timing document were put there by a person, and so must not be written over.");
  ("★ THERE ARE THREE WAYS OF NOT BEING SOMEBODY'S WORK AND ONLY ONE OF THEM LEAVES A MARK, SO THE QUESTIONS DO NOT COME ONE PER WAY. A document with no moments in it anywhere has plainly never been timed, and needs no mark to see that - there is nothing there to have been anybody's. A document still holding the flat spread it was drafted with was never timed either, and the spread is its own evidence, arithmetic nobody would arrive at by listening; that one is asked twice, because dividing a song into equal shares leaves two marks and either can be rubbed out without the other. A document a machine timed does need a mark, because a machine writes its times through the same function the tapping screen does and the result is indistinguishable. So an untimed document is recognised by its emptiness, a draft by its shape, the machine's work by what it says of itself, and everything else is a person's.");
  ("★ THE SECOND READING OF THE DRAFT WAS MISSING UNTIL 2026-10-02, AND THE COST WAS TWO PSALMS DEFENDED AS WORK NOBODY DID. The flush reading asks whether each line ends on the very moment the next begins, which is one question per pair of lines and fails the whole document if any single pair disagrees. bsb_PSA_106_1-12_take1 and bsb_PSA_131_take1 were drafted with a step that does not land on a hundredth of a second, so a few of their line ends round away from the next start, and both were read as a person's. The command that could have listened to them refused every time, saying a person had timed this and their ear was better. The step reading asks one question of the whole document instead and recognises both. It also puts right a measurement: twenty eight of the 107 lines that were being used as known-right answers for how well these two readings agree came from the first of those two documents, and no person ever timed any of them.");
  ("★ THE UNMARKED ANSWER IS THAT IT IS A PERSON'S, WHICH IS THE ONLY SAFE DIRECTION FOR A GUESS TO GO. Every timing document that existed before the mark did carries no mark, and among those are the ones somebody actually sat and tapped. Reading silence as the machine's would offer exactly those to be written over, and the loss is an evening of somebody's listening that nothing can reconstruct; reading silence as a person's costs at most a minute of a machine's listening done twice.");
  ("That asymmetry is also what says why the first question is allowed to narrow this and a sharper reading of the mark would not be. A document holding no moments has no evening of listening in it, so the expensive side of the trade is empty rather than merely unlikely - the exception is read off the reason the guess leans the way it does, rather than taken despite it. The step reading narrows it on the same ground: a document whose every line begins the same distance after the last has no evening in it either, and what tells it from a tapped one is not a margin to sit near but a hundred and forty times the margin.");
  let none = lyric_video_document_times_none_is(document);
  if (none) {
    return false;
  }
  let spread = lyric_video_document_times_spread_is(document);
  if (spread) {
    return false;
  }
  let stepped = lyric_video_document_times_stepped_is(document);
  if (stepped) {
    return false;
  }
  let word = lyric_video_times_machine_word();
  let machine = equal(document.times_from, word);
  if (machine) {
    return false;
  }
  return true;
}
