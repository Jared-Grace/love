export function lyric_video_flags_ranked_cases() {
  "The orderings of flagged lines this repo has decided on, each written down as the lines handed in and the order they should come back in.";
  "★ THE CASE THAT CARRIES THE DECISION IS THE SEVENTH, AND THE REASONING IT PINS DOWN HELD THE OPPOSITE FOR A LONG TIME. A line the aligner put early was believed harmless, so the obvious ordering was the signed one and a nine second early line belonged at the bottom under every late line in the song. Measured 2026-10-02 against the five documents somebody timed by ear, that is wrong: nine of the thirty eight lines the aligner genuinely put late carry an early flag, the worst early miss in that pool is 26 seconds out, and across the psalter the direction splits 1035 to 1045 - a coin toss, because it compares two guesses rather than a guess against the singing. Nothing in the code would go red if someone put the sign back in charge, and every other case here would still pass, which is exactly why this one is written down.";
  "★ A CORPUS OF ORDERINGS HAS TO HOLD A CASE WHOSE ORDER IS ALREADY RIGHT AND ONE WHOSE ORDER IS FULLY REVERSED, OR IT CANNOT TELL A SORT FROM A SHUFFLE. The third hands in lines that are already worst first and must come back untouched; the fourth hands in the same distances in the order the song sings them, which is their exact reverse. A reader that sorted by the line number, or by nothing at all, would be answered right by one of those two and wrong by the other.";
  "Each case carries only the fields the ordering reads - the line number to name it by and the distance to rank it on - rather than a whole flag with its moments and its words, because the other fields cannot change the answer and spelling them would hide which ones can.";
  "What is written down is the line numbers in the order expected, not the flags, so a case can be read at a glance and a change of order shows up as a different list of small numbers.";
  let cases = [
    {
      name: "a song whose two readings agreed everywhere, so there is nothing to put in order",
      flagged: [],
      ranked: [],
    },
    {
      name: "one line flagged on its own, which is already in whatever order it is going to be in",
      flagged: [
        {
          line: 5,
          apart: 0.42,
        },
      ],
      ranked: [5],
    },
    {
      name: "lines handed in worst first already, which must come back exactly as they went in",
      flagged: [
        {
          line: 9,
          apart: 4.2,
        },
        {
          line: 2,
          apart: 1.1,
        },
        {
          line: 7,
          apart: 0.35,
        },
      ],
      ranked: [9, 2, 7],
    },
    {
      name: "the same distances handed in the order the song sings them, which is their reverse and is how they actually arrive",
      flagged: [
        {
          line: 2,
          apart: 0.35,
        },
        {
          line: 7,
          apart: 1.1,
        },
        {
          line: 9,
          apart: 4.2,
        },
      ],
      ranked: [9, 7, 2],
    },
    {
      name: "a line neither reading could place, sung last in the song, which comes first because it has no distance to be sorted by",
      flagged: [
        {
          line: 0,
          apart: 2.4,
        },
        {
          line: 1,
          apart: 0.9,
        },
        {
          line: 8,
          apart: null,
        },
      ],
      ranked: [8, 0, 1],
    },
    {
      name: "two lines neither reading could place, which keep the order the song sings them in because nothing separates them",
      flagged: [
        {
          line: 3,
          apart: null,
        },
        {
          line: 6,
          apart: 5.5,
        },
        {
          line: 1,
          apart: null,
        },
      ],
      ranked: [3, 1, 6],
    },
    {
      name: "a far early line and a near late one, where the ordering that reads the direction would put the early one last and the measured answer puts it first",
      flagged: [
        {
          line: 4,
          apart: 0.31,
          behind: 0.31,
        },
        {
          line: 11,
          apart: 9.2,
          behind: -9.2,
        },
        {
          line: 6,
          apart: 0.5,
          behind: 0.5,
        },
      ],
      ranked: [11, 6, 4],
    },
    {
      name: "an unplaced line beside the furthest apart line in the song, where being unplaced still comes first",
      flagged: [
        {
          line: 12,
          apart: 30.7,
          behind: 30.7,
        },
        {
          line: 0,
          apart: null,
          behind: null,
        },
      ],
      ranked: [0, 12],
    },
  ];
  return cases;
}
