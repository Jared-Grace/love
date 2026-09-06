export function lyric_video_screens_faults_cases() {
  "Runs of finished screens beside the faults each one should be answered with, one case for every way a card can be drawn wrong and one for each way it can look wrong and be right.";
  "★ THIS READER IS NOW ASKED ABOUT EVERY CHAPTER THAT IS RENDERED AND NOBODY WATCHES WHAT IT SAYS. Its answer is written down beside each video as the video is made, and a sweep gathers those answers into one verdict over the whole bible. So the way this fails is not a wrong complaint that somebody reads and argues with - it is silence, and silence here reads as a bible whose every chapter was looked at and found sound.";
  "★ EVERY CASE THAT MUST ANSWER WITH A FAULT IS PAIRED WITH ONE THAT MUST ANSWER WITH NONE. A corpus of cases that all expect a complaint cannot catch a reader that complains about everything, and a corpus that all expect silence cannot catch a reader that has stopped looking. The scrap pair is the sharpest of them: two runs of the same shape, differing only in whether the card above finished its sentence, and the reader must answer them differently.";
  "★ THE FRAME IS THE REAL ONE RATHER THAN A CONVENIENT SMALL ONE. What is being guarded is what ships, and a card that fits a made-up frame says nothing about the frame these videos are actually drawn on. The one number the cases lean on is that this frame holds eleven lines, and it is not written down here - it is worked out from the sizes by the same reader the renderer uses, so a change to the lettering moves the cases and the renderer together.";
  let long =
    "Jesus himself, when he began to teach, was about thirty years old, being the son (as was supposed) of Joseph, the son of Heli, the son of Matthat, the son of Levi, the son of Melchi, the son of Jannai, the son of Joseph, the son of Mattathias, the son of Amos, the son of Nahum, the son of Esli, the son of Naggai, the son of Maath, the son of Mattathias, the son of Semein, the son of Joseph, the son of Judah, the son of Joanan, the son of Rhesa, the son of Zerubbabel, the son of Shealtiel, the son of Neri.";
  let cases = [
    {
      screens: [
        {
          text: "In the beginning God created the heavens and the earth.",
          start: 0,
          end: 3,
        },
        {
          text: "The earth was formless and empty.",
          start: 3,
          end: 6,
        },
      ],
      faults: [],
      why: "two ordinary cards, each inside the frame, sharing their join, the second following a finished sentence - the run this reader must stay quiet about, because every chapter is mostly made of these",
    },
    {
      screens: [
        {
          text: long,
          start: 0,
          end: 9,
        },
      ],
      faults: ["over the frame"],
      why: "the genealogy of Luke, which is the longest card in the bible and the reason this reader was written - drawn whole it runs far past the eleven lines the frame holds, and nobody would know without watching",
    },
    {
      screens: [
        {
          text: "In the beginning.",
          start: 5,
          end: 5,
        },
      ],
      faults: ["no time on screen"],
      why: "a card that arrives and leaves at the same moment, so it is never seen at all - the timing fault that looks like nothing on paper and shows as a word missing from the video",
    },
    {
      screens: [
        {
          text: "   ",
          start: 0,
          end: 2,
        },
      ],
      faults: ["nothing to read"],
      why: "a card holding only spaces, which shows for its full time as a blank frame. It is asked after the space is trimmed off, so a card of whitespace is not mistaken for a card of words",
    },
    {
      screens: [
        {
          text: "",
          start: 4,
          end: 4,
        },
      ],
      faults: ["no time on screen", "nothing to read"],
      why: "one card wrong in two ways at once, which proves the faults gather rather than the first one found stopping the reading - and fixes the order they are reported in, which is the order a watcher would meet them",
    },
    {
      screens: [
        {
          text: "The word of God came to John.",
          start: 0,
          end: 3,
        },
        {
          text: "He came into all the region.",
          start: 4,
          end: 7,
        },
      ],
      faults: ["join not shared"],
      why: "a join that is two moments instead of one - the card before leaves at three and this one arrives at four, so a second of the recording has no card standing over it. It is counted against the later card, which is where a watcher first sees the gap",
    },
    {
      screens: [
        {
          text: "and Herod being tetrarch of Galilee, and his brother Philip",
          start: 0,
          end: 3,
        },
        {
          text: "tetrarch of the region",
          start: 3,
          end: 5,
        },
      ],
      faults: ["a scrap under a full card"],
      why: "a full card cut off mid-sentence with its remainder left standing alone underneath. Where that cut fell was somebody's choice, so it is reported rather than mended",
    },
    {
      screens: [
        {
          text: "and Herod being tetrarch of Galilee, and his brother Philip.",
          start: 0,
          end: 3,
        },
        {
          text: "tetrarch of the region",
          start: 3,
          end: 5,
        },
      ],
      faults: [],
      why: "the same two cards with a full stop added above, and the answer must change. A short card following a finished sentence is a short verse standing on its own, which is right; measured over three chapters this one test was the whole difference between fourteen complaints and none",
    },
  ];
  return cases;
}
