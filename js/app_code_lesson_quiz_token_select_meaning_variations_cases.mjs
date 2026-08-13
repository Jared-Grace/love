export function app_code_lesson_quiz_token_select_meaning_variations_cases() {
  "Lines from the lessons beside every token ordering the unscramble should accept for each - the whole answer, so an ordering quietly appearing is as much a failure as one quietly going.";
  "What rests on this is what a learner is told is right. An ordering that should not be there marks a line the lesson never taught as a correct answer, and the learner is taught it; one that should be there and is not marks the learner wrong for something the lesson does accept. Neither is an error anywhere - the quiz simply agrees, or simply does not.";
  "The orderings are written in the order they come back, because that order is what the answer box shows while the learner is part way through building one.";
  let cases = [
    {
      code: "3 < 1 !== true",
      variations: ["3 < 1 !== true", "true !== 3 < 1"],
      why: "the line the fault was reported on. Two numbers compared, then two booleans compared - and the true may lead because < binds tighter than !==, so it still reads as true !== (3 < 1). Eight more orderings used to be accepted here, every one of them comparing a number against a true or a false and landing on the right answer by luck",
    },
    {
      code: "9 > 4 !== false",
      variations: ["9 > 4 !== false", "false !== 9 > 4"],
      why: "the same shape written with the other comparison and the other boolean, so a rule that happened to hold for one symbol has to hold for the pair",
    },
    {
      code: "6 !== 8 !== false",
      variations: ["6 !== 8 !== false", "8 !== 6 !== false"],
      why: "!== on both sides. The two numbers may swap, because that is one comparison read either way round; the false may not lead, because 6 !== false compares a number against a boolean - and without parentheses that is what the flat line says",
    },
    {
      code: "1 === true",
      variations: ["1 === true", "true === 1"],
      why: "a line whose own two sides are different kinds. Comparing across kinds is itself a lesson, so the check is that an ordering compares what the line compared rather than that it compares like with like - written the other way, this line must still be accepted",
    },
    {
      code: "1 + 2 * 4",
      variations: ["1 + 2 * 4", "1 + 4 * 2", "2 * 4 + 1", "4 * 2 + 1"],
      why: "arithmetic, with no comparison in it at all, so nothing here is narrowed - proof the rule reaches only the lines it was written for",
    },
  ];
  return cases;
}
