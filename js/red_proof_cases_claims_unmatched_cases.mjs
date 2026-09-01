import { arguments_assert } from "./arguments_assert.mjs";
export function red_proof_cases_claims_unmatched_cases() {
  arguments_assert(arguments, 0);
  ("Cases written out beside the ones a reading should pick out of them, for the reading that catches a case claiming to be the only one catching something when it catches nothing others do not.");
  ("THE WORDS HERE ARE REAL ONES. The first is the sentence that stood in a corpus for the whole of a working day saying a case sat exactly on a line the line was nowhere near, and it is here because a check nothing has ever refused is the thing this whole family of files exists to be suspicious of. It was found by a person reading a printed table, which is the way that does not happen again.");
  ("THE THIRD IS THE ONE THAT MUST NOT BE CAUGHT, and it is why the words looked for are four and not one. It says a tap is the only record of something, which is a remark about what is in front of it rather than a claim about the other cases - and a reading that took the bare word for a claim would ask its author to reword a true sentence. Two of the four cases here are things that must be let through, because a catcher is only as good as what it declines to catch.");
  ("A case is looked at only when it is already known to catch nothing others do not, so both lists are handed in. The first list is the cases catching nothing at all and the second the cases catching nothing alone; a claim made from either is equally false, and the same sentence is written into both to say so.");
  let false_claim =
    "Eight of ten is exactly the line, and exactly the line is over it. A version drawn at the same place but refusing to count the boundary in goes red here and nowhere else.";
  let true_claim =
    "A version asking how many were missed rather than what share was answered would write a lag into the box off two presses, and this is the only case that tells the two apart.";
  let about_the_data =
    "The corrected moment has been floored at zero, so the tap is the only record of where the line was actually heard.";
  let no_claim =
    "Every sound answered. The lag is offered, cut to two places, and the sentence says where it has gone.";
  let cases = [
    {
      name: "a sentence saying a version goes red here and nowhere else, from a case that is the sole refuser of nothing",
      idle: [],
      redundant: [
        {
          index: 1,
          described: false_claim,
        },
      ],
      unmatched: [1],
    },
    {
      name: "the same sentence from a case that refuses nothing at all, which is the worse of the two and is caught the same way",
      idle: [
        {
          index: 1,
          described: false_claim,
        },
      ],
      redundant: [],
      unmatched: [1],
    },
    {
      name: "a sentence calling itself the only case that tells two versions apart, from a case that is holding nothing down alone",
      idle: [],
      redundant: [
        {
          index: 7,
          described: true_claim,
        },
      ],
      unmatched: [7],
    },
    {
      name: "a sentence saying a tap is the only record of something is a remark about the numbers in front of it, not a claim about the other cases, and is let through",
      idle: [],
      redundant: [
        {
          index: 3,
          described: about_the_data,
        },
      ],
      unmatched: [],
    },
    {
      name: "a sentence making no claim at all is let through",
      idle: [],
      redundant: [
        {
          index: 0,
          described: no_claim,
        },
      ],
      unmatched: [],
    },
    {
      name: "nothing spare and nothing idle catches nothing, which is what every corpus here says today",
      idle: [],
      redundant: [],
      unmatched: [],
    },
  ];
  return cases;
}
