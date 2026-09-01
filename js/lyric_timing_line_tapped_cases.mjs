import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_line_tapped_cases() {
  arguments_assert(arguments, 0);
  ("Lines as a saved timing document holds them, and the line each one has to come back as when the screen opens it again.");
  ("WHAT THESE HOLD DOWN IS A FAULT THAT GREW EVERY TIME SOMEBODY FIXED SOMETHING. The document keeps two records of each moment: the one that was tapped and the one the finished video uses, which is the tapped one moved earlier by the tap lag. Loading the second and saving it moved it earlier again, so a passage visited to repair two late lines walked its other eighteen lines further ahead of the music - and it looked exactly like the lag being set wrong, which is the change somebody would make next.");
  ("EACH END HAS ITS OWN CASE, because the two are separate records and a half-written line has to answer for each of its ends separately rather than let one of them speak for the pair.");
  ("SECOND ZERO HAS ITS OWN CASE TOO. A line sung from the first note was tapped at zero, and a reader that asks whether there is a moment by asking whether the number is worth anything throws that tap away and reaches past it to the corrected one - which is also zero, so on that one line the wrong answer is right and the case that catches it has to be built out of a document where the two disagree.");
  let cases = [
    {
      line: {
        start: 2.39,
        end: 5.63,
        text: "Hallelujah!",
        start_tapped: 2.69,
        end_tapped: 5.93,
      },
      line_hand: {
        start: 2.69,
        end: 5.93,
        text: "Hallelujah!",
      },
      why: "a document that remembers both taps hands both of them back, so the lag is taken off once on the way out rather than once per visit",
    },
    {
      line: {
        start: 10.26,
        end: 13.9,
        text: "praise Him in the highest places.",
      },
      line_hand: {
        start: 10.26,
        end: 13.9,
        text: "praise Him in the highest places.",
      },
      why: "a document written before the taps were kept has only the corrected moments, and they come back untouched rather than guessed backwards by a lag nothing recorded",
    },
    {
      line: {
        start: null,
        end: null,
        text: "Hallelujah!",
        start_tapped: null,
        end_tapped: null,
      },
      line_hand: {
        start: null,
        end: null,
        text: "Hallelujah!",
      },
      why: "a line nobody ever tapped still says so, because a screen that showed it as a number would be showing a moment no one heard",
    },
    {
      line: {
        start: 0,
        end: 3.7,
        text: "Praise the LORD",
        start_tapped: 0.3,
        end_tapped: 4,
      },
      line_hand: {
        start: 0.3,
        end: 4,
        text: "Praise the LORD",
      },
      why: "the corrected moment has been floored at zero, so the tap is the only record of where the line was actually heard and reaching past it loses the line's real start",
    },
    {
      line: {
        start: 0,
        end: 4.7,
        text: "Hallelujah!",
        start_tapped: 0,
        end_tapped: 5,
      },
      line_hand: {
        start: 0,
        end: 5,
        text: "Hallelujah!",
      },
      why: "a tap of zero is a tap, so it is kept as one - the question is whether the document remembers a moment, never whether that moment is far enough in to look like one",
    },
    {
      line: {
        start: 47.1,
        end: 49.39,
        text: "for He gave the command and they were created.",
        start_tapped: 47.4,
      },
      line_hand: {
        start: 47.4,
        end: 49.39,
        text: "for He gave the command and they were created.",
      },
      why: "a line whose start was tapped and whose end was not answers for each end on its own, rather than letting the missing end throw away the tap that is there",
    },
  ];
  return cases;
}
