export function gloss_classes_backing_elsewhere_cases() {
  "Marked classes handed to the queue and the classes that should come back out of it, in the order they should come out, written down so the picking and the ranking can be checked against something other than themselves.";
  "Every class here was read out of the corpus on 2026-09-07 and carries the reading it really got. The queue exists to be short, and the two ways it silently stops being short are picking up an answer it should leave alone and dropping one it should keep - so a backed class and a silent class are handed in beside the elsewhere ones every time, and neither may appear in the answer.";
  "An unmarked class is here on its own. A class that was never walked carries no reading at all, and the reading it does not carry is not elsewhere; a picker written the obvious way, testing that the mark is not backed, would sweep every unwalked class in the corpus into a queue a person is meant to work through. Six hundred and six of eight hundred and thirty sightings are unwalked, so getting that wrong is not a small error in the answer, it is the answer.";
  let cases = [
    {
      classes: [
        {
          root: "tarong",
          claimed: "taro",
          backing: "elsewhere",
          count: 4,
        },
        {
          root: "higugma",
          claimed: "gugma",
          backing: "backed",
          count: 17,
        },
        {
          root: "nako",
          claimed: "ako",
          backing: "silent",
          count: 9,
        },
      ],
      wanted: ["tarong/taro"],
      why: "the three readings side by side, and only one of them is work - the backed class is the commonest in the corpus and the silent one is nine sightings, so a picker that let either through would be noticed by its size before its wrongness",
    },
    {
      classes: [
        {
          root: "niana",
          claimed: "ni",
          backing: "elsewhere",
          count: 1,
        },
        {
          root: "hinumdom",
          claimed: "hinumdum",
          backing: "elsewhere",
          count: 8,
        },
        {
          root: "matuod",
          claimed: "tinuod",
          backing: "elsewhere",
          count: 7,
        },
      ],
      wanted: ["hinumdom/hinumdum", "matuod/tinuod", "niana/ni"],
      why: "handed in smallest first so a queue that simply kept the order it was given would come back reversed and look like a queue anyway",
    },
    {
      classes: [
        {
          root: "batan-on",
          claimed: "bata",
          count: 3,
        },
      ],
      wanted: [],
      why: "a class nobody walked, carrying no reading - it is not elsewhere and must not be treated as though the absence of a mark were one",
    },
    {
      classes: [],
      wanted: [],
      why: "nothing handed in, nothing to work through, and no queue invented out of it",
    },
  ];
  return cases;
}
