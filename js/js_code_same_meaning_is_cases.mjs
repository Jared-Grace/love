export function js_code_same_meaning_is_cases() {
  "Pairs of lines beside whether the two say the same thing, so that what the unscramble marks right is written down somewhere a reader can check it against their own arithmetic.";
  "The pairs are chosen in twos on purpose. Every case that should be accepted stands next to a case built from the same tiles that should not, because a rule wide enough to let the first through and narrow enough to keep the second out is the whole of what is being asked. A corpus of only the accepted ones would be passed by a reader that says yes to everything.";
  let cases = [
    {
      before: "9 + 7 + 4",
      after: "4 + 9 + 7",
      same: true,
      why: "a run of additions may be written in any order. The bracketing a tree puts on it - 9 and 7 added first - is not something the writer of the line put there, so an ordering is not wrong for bracketing it elsewhere",
    },
    {
      before: "11 - 2 - 3",
      after: "11 - 3 - 2",
      same: true,
      why: "taking two amounts away, in either order, leaves the same amount. What may not move is the 11, and it has not",
    },
    {
      before: "11 - 2 - 3",
      after: "2 - 11 - 3",
      same: false,
      why: "the same three numbers and the same two signs, and a different sum, because the one being taken from has changed. This is the case that stops the rule above from being read as any order at all",
    },
    {
      before: "9 - 3 + 2",
      after: "9 + 2 - 3",
      same: true,
      why: "adding and taking away in one run. Each number carries the sign standing in front of it wherever it goes, so the 3 stays a taking away and the sum does not move",
    },
    {
      before: "11 - 3 === 44 / 4",
      after: "44 / 4 === 11 - 3",
      same: true,
      why: "the two sides of an equals may swap, and each side keeps what it was",
    },
    {
      before: "11 - 3 === 44 / 4",
      after: "11 - 3 === 4 / 44",
      same: false,
      why: "the line the whole of this was written for. Both lines come out false, and answering the same is what used to be asked, so this was accepted along with a hundred and forty others. Eight is not a ninth of one, and a learner told this was right was told something untrue",
    },
    {
      before: "3 < 1 !== true",
      after: "3 < true !== 1",
      same: false,
      why: "the reported fault. Two numbers compared and then two booleans, rearranged into a number against a boolean and then a boolean against a number - a different sentence that lands on the same answer by luck",
    },
    {
      before: '"He" + " gave"',
      after: '" gave" + "He"',
      same: false,
      why: "a plus is not always a sum. Joined writing keeps the order it was joined in, and the two sides of this one may not swap the way the two sides of an addition may",
    },
    {
      before: "n + 1",
      after: "1 + n",
      same: true,
      why: "a name is let through. Nobody can say what a name holds until the line runs, so reading it hopefully as writing would mark a learner wrong for an ordering that is right - and the only thing that shuts the door is writing actually present in the line",
    },
    {
      before: "(1 + 2) * 3",
      after: "1 + 2 * 3",
      same: false,
      why: "the brackets a writer put there are what the line says. Moving them makes a different sum, and that they are the same characters in the same order is not the question",
    },
    {
      before: "Math.min(4, 9)",
      after: "Math.min(9, 4)",
      same: true,
      why: "the smaller of two does not depend on which was named first",
    },
    {
      before: "8 / 2 * 2",
      after: "2 * 8 / 2",
      same: true,
      why: "multiplying and dividing behave as adding and taking away do - each number carries whether it is multiplied or divided by, and the 8 is multiplied by in both",
    },
    {
      before: "8 / 2 * 2",
      after: "2 / 8 * 2",
      same: false,
      why: "the same numbers and the same signs again, and this time the 8 has become something divided by. Half of a quarter is not two",
    },
  ];
  return cases;
}
