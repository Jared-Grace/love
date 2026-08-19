export function bless_marks_climbed_cases() {
  ("What following the marks is supposed to get a player, for crowds small enough that the");
  ("answer can be argued to rather than run.");
  ("Every answer here is worked out from the ladder's sizes on paper. That is the whole");
  ("point of a case: an expected value copied back out of the function it is checking says");
  ("only that the code still does what it did, which is exactly what it does after it has");
  ("been broken. How far the player climbs and whether anybody is left behind can both be");
  ("reasoned, so both are written down and nothing else is.");
  ("The crowds are whole containers, because a part-filled one has no interesting answer.");
  ("Three people are a household, twelve are a building, sixty are a block - so each of");
  ("those crowds ends one rung higher than the last, and the three answers differ from one");
  ("another rather than agreeing by luck.");
  ("Nobody is left dark in any of them, and that is a claim rather than a hope. The player");
  ("meets every person and prays for the ones who are dark, so a person can only finish");
  ("dark by never being met - and a stride sharing no factor with the crowd reaches all of");
  ("them exactly once.");
  ("A rung is reached because the LAST prayer earns it. When the final dark face is lit,");
  ("every person in the crowd is done, so every household is, so every building is - and");
  ("the rung after the largest whole container is not earned, because that one needs more");
  ("people than the crowd holds. Sixty people are one block of a neighbourhood of twelve,");
  ("so the climb stops at the block whatever order the crowd is met in.");
  ("The scattered strides are the ones that matter. Met one after another, a household");
  ("arrives whole and finishes itself by accident, which is the easy case and the one a");
  ("real pavement never gives; a stride steps across households and buildings, so the game");
  ("has to add up part-finished places that were started a long time apart.");
  let cases = [
    {
      count: 3,
      stride: 1,
      climbed: {
        rung: "household",
        dark: 0,
      },
      why: "three people are one household and no more, so the third prayer finishes it and the building above it is still eleven people short",
    },
    {
      count: 12,
      stride: 1,
      climbed: {
        rung: "building",
        dark: 0,
      },
      why: "twelve people are four households, which is a whole building, and a block wants five buildings",
    },
    {
      count: 12,
      stride: 7,
      climbed: {
        rung: "building",
        dark: 0,
      },
      why: "the same building met in a scattered order still ends as a whole building, because the answer depends on who has been prayed for and not on when",
    },
    {
      count: 60,
      stride: 1,
      climbed: {
        rung: "block",
        dark: 0,
      },
      why: "sixty people are twenty households, five buildings, one block, and a neighbourhood wants twelve blocks",
    },
    {
      count: 60,
      stride: 7,
      climbed: {
        rung: "block",
        dark: 0,
      },
      why: "a whole block met seven at a time mixes every household with the ones either side of it, and still ends as a whole block",
    },
    {
      count: 60,
      stride: 23,
      climbed: {
        rung: "block",
        dark: 0,
      },
      why: "a long stride crosses buildings rather than households, so no place is ever finished by the prayers that started it",
    },
    {
      count: 60,
      stride: 29,
      climbed: {
        rung: "block",
        dark: 0,
      },
      why: "a stride of nearly half the crowd walks the block end to end and back, which is the least orderly way in that still reaches everybody",
    },
  ];
  return cases;
}
