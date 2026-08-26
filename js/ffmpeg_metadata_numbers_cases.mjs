export function ffmpeg_metadata_numbers_cases() {
  "small stretches of what ffmpeg prints while it is measuring, and the readings that should be got out of each one";
  "THE STRETCHES ARE WRITTEN OUT BY HAND rather than captured from a run, because a case is only worth holding if a reader can work the answer out themselves and disagree with the code. Pasted from a run, every expectation here would be a copy of whatever the parser did that day, including on the day it started doing the wrong thing.";
  "THE FIRST CASE IS THE SHAPE THE READINGS ACTUALLY ARRIVE IN - a frame line carrying the time, then the line under it carrying the number, over and over. It is here because the time and the number are on different lines, which is the one thing about this format that a reader would not guess and a rewrite would not preserve.";
  "THE SECOND CASE HAS THE ASKED-FOR NUMBER SITTING BESIDE ANOTHER ONE. Two measurements printed together is an ordinary thing to want, and a parser that reads whichever line looks numeric answers with both of them mixed together - a mixture that still has the right length and the right sort of numbers in it, so nothing downstream would notice.";
  "THE THIRD CASE IS THE DANGEROUS ONE AND IT EXPECTS NOTHING BACK. Handed something with no readings in it at all - which is what a changed print format looks like - the honest answer is an empty list, and this is here to say that emptiness is what the callers must be ready for rather than something this should invent a number to cover. The refusal belongs to the caller that cannot use an empty answer, not here.";
  "THE FOURTH CASE HAS A READING BEFORE ANY TIME HAS BEEN SEEN. A stream that begins mid-way should still give its number up rather than be dropped, so the time it is filed under is the start rather than nothing.";
  let cases = [
    {
      printed_text:
        "frame:0    pts:0       pts_time:0\nlavfi.r128.S=-120.691\nframe:1    pts:4800    pts_time:0.1\nlavfi.r128.S=-23.4\n",
      metadata_key: "lavfi.r128.S",
      readings: [
        {
          second: 0,
          reading: -120.691,
        },
        {
          second: 0.1,
          reading: -23.4,
        },
      ],
      why: "the time is on the frame line and the number is on the line under it, so each reading is made out of two lines and neither line alone is a reading",
    },
    {
      printed_text:
        "frame:0    pts:0       pts_time:0\nlavfi.r128.M=-9.9\nlavfi.r128.S=-11.1\nframe:1    pts:4800    pts_time:0.1\nlavfi.r128.M=-8.8\nlavfi.r128.S=-12.2\n",
      metadata_key: "lavfi.r128.S",
      readings: [
        {
          second: 0,
          reading: -11.1,
        },
        {
          second: 0.1,
          reading: -12.2,
        },
      ],
      why: "only the asked-for measurement is read, because a parser that takes any numeric-looking line answers with two measurements interleaved and the answer is the right length and the wrong thing",
    },
    {
      printed_text:
        "frame:0    pts:0       pts_time:0\nframe:1    pts:4800    pts_time:0.1\n",
      metadata_key: "lavfi.r128.S",
      readings: [],
      why: "nothing measured is answered as nothing measured rather than as a number, so a caller that cannot use an empty answer is the one that has to refuse it",
    },
    {
      printed_text: "lavfi.r128.I=-14.3\n",
      metadata_key: "lavfi.r128.I",
      readings: [
        {
          second: 0,
          reading: -14.3,
        },
      ],
      why: "a reading arriving before any time has been seen is still a reading, filed at the start rather than thrown away",
    },
  ];
  return cases;
}
