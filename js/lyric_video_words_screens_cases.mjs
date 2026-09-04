export function lyric_video_words_screens_cases() {
  "Recorded pieces whose words have already been placed in time, each written down beside the screens it must be cut into.";
  "★ THE CASES ARE SET AGAINST A SHALLOW SCREEN RATHER THAN THE REAL ONE, so that a piece short enough to read here is still long enough to be cut. The real frame holds eleven lines, and written against that every case would have to be a paragraph before it split at all, and nobody could check the expected answer by eye. Two lines is the shallowest screen that can be cut at all, and the width is left at the real one so the wrapping being tested is the wrapping that ships.";
  "★ THE SECOND AND THIRD CASES ARE THE SAME WORDS AND THE SAME MOMENTS, DIFFERING ONLY IN THEIR PUNCTUATION, which is what makes them a measurement of the looking back rather than two unrelated examples. With the commas the screen ends after a name; without them it ends wherever the letters ran out, and the words the son of are left hanging. That second answer is not a fault - it is what there is to work with when the reader marked nothing.";
  "★ THE PHRASE IS THE ONE THE LOOKING BACK WAS MEASURED ON. A screen that fills up on a name has to reach four words back, over of and son and the, to find the comma the reader paused at. A case that reached only three would pass a shorter distance and this corpus would then agree with the fault it exists to catch.";
  let words = [
    {
      word: "Amos,",
      start: 0,
      end: 0.4,
    },
    {
      word: "the",
      start: 0.4,
      end: 0.6,
    },
    {
      word: "son",
      start: 0.6,
      end: 0.9,
    },
    {
      word: "of",
      start: 0.9,
      end: 1,
    },
    {
      word: "Nahum,",
      start: 1,
      end: 1.5,
    },
    {
      word: "the",
      start: 1.5,
      end: 1.7,
    },
    {
      word: "son",
      start: 1.7,
      end: 2,
    },
    {
      word: "of",
      start: 2,
      end: 2.1,
    },
    {
      word: "Esli,",
      start: 2.1,
      end: 2.6,
    },
  ];
  let bare = [
    {
      word: "Amos",
      start: 0,
      end: 0.4,
    },
    {
      word: "the",
      start: 0.4,
      end: 0.6,
    },
    {
      word: "son",
      start: 0.6,
      end: 0.9,
    },
    {
      word: "of",
      start: 0.9,
      end: 1,
    },
    {
      word: "Nahum",
      start: 1,
      end: 1.5,
    },
    {
      word: "the",
      start: 1.5,
      end: 1.7,
    },
    {
      word: "son",
      start: 1.7,
      end: 2,
    },
    {
      word: "of",
      start: 2,
      end: 2.1,
    },
    {
      word: "Esli",
      start: 2.1,
      end: 2.6,
    },
  ];
  let long = [
    {
      word: "Amos,",
      start: 0,
      end: 0.5,
    },
    {
      word: "the",
      start: 0.5,
      end: 1,
    },
    {
      word: "son",
      start: 1,
      end: 1.5,
    },
    {
      word: "of",
      start: 1.5,
      end: 2,
    },
    {
      word: "Nahum,",
      start: 2,
      end: 2.5,
    },
    {
      word: "the",
      start: 2.5,
      end: 3,
    },
    {
      word: "son",
      start: 3,
      end: 3.5,
    },
    {
      word: "of",
      start: 3.5,
      end: 4,
    },
    {
      word: "Esli,",
      start: 4,
      end: 4.5,
    },
    {
      word: "the",
      start: 4.5,
      end: 5,
    },
    {
      word: "son",
      start: 5,
      end: 5.5,
    },
    {
      word: "of",
      start: 5.5,
      end: 6,
    },
    {
      word: "Naggai,",
      start: 6,
      end: 6.5,
    },
    {
      word: "the",
      start: 6.5,
      end: 7,
    },
    {
      word: "son",
      start: 7,
      end: 7.5,
    },
  ];
  let cases = [
    {
      words: [
        {
          word: "In",
          start: 0.1,
          end: 0.3,
        },
        {
          word: "the",
          start: 0.3,
          end: 0.5,
        },
        {
          word: "beginning.",
          start: 0.5,
          end: 1.2,
        },
      ],
      room: {
        pixels_across: 920,
        lines_max: 2,
        font_size: 150,
      },
      seconds: 1.5,
      screens: [
        {
          start: 0,
          end: 1.5,
          text: "In the beginning.",
        },
      ],
      why: "a piece that fits comes back whole, beginning at nothing and ending at the length of its own file rather than at its first and last syllable",
    },
    {
      words: words,
      room: {
        pixels_across: 920,
        lines_max: 2,
        font_size: 150,
      },
      seconds: 3,
      screens: [
        {
          start: 0,
          end: 1.5,
          text: "Amos, the son of Nahum,",
        },
        {
          start: 1.5,
          end: 3,
          text: "the son of Esli,",
        },
      ],
      why: "the screen fills up in the middle of the son of Esli and reaches four words back to the comma after Nahum, so the phrase crosses no join and the two screens share one moment",
    },
    {
      words: bare,
      room: {
        pixels_across: 920,
        lines_max: 2,
        font_size: 150,
      },
      seconds: 3,
      screens: [
        {
          start: 0,
          end: 2,
          text: "Amos the son of Nahum the son",
        },
        {
          start: 2,
          end: 3,
          text: "of Esli",
        },
      ],
      why: "the same words with nothing marked, so there is no pause to find and the break falls where the letters ran out - which is what the looking back is worth exactly nothing against",
    },
    {
      words: long,
      room: {
        pixels_across: 920,
        lines_max: 4,
        font_size: 150,
      },
      seconds: 7.5,
      screens: [
        {
          start: 0,
          end: 4.5,
          text: "Amos, the son of Nahum, the son of Esli,",
        },
        {
          start: 4.5,
          end: 7.5,
          text: "the son of Naggai, the son",
        },
      ],
      why: "filling forward would have given the first screen all four of its lines and left the last one holding the two words that would not go on it, so the pair is folded again where it comes out three lines and two - and the fold lands on the comma after Esli, because a pause is taken over a balance wherever one fits",
    },
  ];
  return cases;
}
