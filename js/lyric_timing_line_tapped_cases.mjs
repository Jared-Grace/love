import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_line_tapped_cases() {
  arguments_assert(arguments, 0);
  ("Lines as a saved timing document holds them, and the line each one has to come back as when the screen opens it again.");
  ("WHAT THESE HOLD DOWN IS A FAULT THAT GREW EVERY TIME SOMEBODY FIXED SOMETHING. The document keeps two records of each moment: the one that was tapped and the one the finished video uses, which is the tapped one moved earlier by the tap lag. Loading the second and saving it moved it earlier again, so a passage visited to repair two late lines walked its other eighteen lines further ahead of the music - and it looked exactly like the lag being set wrong, which is the change somebody would make next.");
  ("EACH END HAS ITS OWN CASE, because the two are separate records and a half-written line has to answer for each of its ends separately rather than let one of them speak for the pair.");
  ("SECOND ZERO HAS ITS OWN CASE, AND IT CATCHES NOTHING THAT ANOTHER CASE DOES NOT ALSO CATCH. A reader that decides whether a moment was recorded by asking whether the number is worth anything throws away a tap of zero - but a tap of zero corrects to zero, since the correction only ever moves a moment earlier and the floor holds it there, so on every document this pipeline can write that reader gives the right answer anyway. The case is kept as a promise rather than as a trap: the question being asked is whether the document remembers a moment, and the day something writes a document where the two disagree is the day the promise starts paying.");
  ("ELEVEN WRONG READERS WERE WRITTEN OUT AND RUN AGAINST THESE CASES, AND EVERY CASE REFUSED AT LEAST ONE OF THEM. That is the check a corpus cannot make on itself by passing: a case that no wrong reader disagrees with is describing the code back to itself, and the only way to find one is to write the disagreements down and see which case notices. The readers that were refused were: asking one question about the pair, letting one end decide for both, reaching for the tap when nothing recorded one, never reaching for it at all, crossing the two ends over, dropping the words, carrying the tapped records back out so the next save writes them in twice, and asking whether a record is not null without also asking whether it is missing altogether - which the line whose end was never tapped catches, because a missing record is undefined rather than null.");
  ("TWO READERS WERE REFUSED BY NOTHING, AND BOTH ARE THE SAME READER IN DIFFERENT WORDS RATHER THAN HOLES. The first is the worth-anything reader the paragraph above already argues about. The second asks whether a record is neither null nor missing, instead of asking whether it is a number, and it agrees with this one everywhere because only one thing in the repo ever writes these records - the lag correction, which copies the moment the document already held - so a record is a number or it is null and there is no third shape to tell the two questions apart. That is an argument about what can be written, not about what these cases happen to cover, and it expires the moment something else writes a tapped record. Asking who writes one costs a second and is the check to make before trusting this paragraph again.");
  ("THE WRONG READERS ARE NO LONGER A PARAGRAPH ABOUT THE PAST. They are written out in data/given/red_proofs/",
    fn_name("lyric_timing_line_tapped"),
    ".mjs, and ",
    fn_name("red_proofs_gate_run"),
    " asks every one of them of every case here on each run - so a case removed later, or a reader that stops being wrong, is said out loud rather than leaving this account describing a check nobody is doing any more. Everything above records what was learnt; the file is the check itself, and it is what corrected the second-zero paragraph.");
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
      why: "a line whose start was tapped and whose end was not answers for each end on its own, rather than letting the missing end throw away the tap that is there - and the missing end is missing altogether rather than written as null, which is the shape a reader asking only about null walks straight past",
    },
  ];
  return cases;
}
