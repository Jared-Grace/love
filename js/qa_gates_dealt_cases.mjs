export function qa_gates_dealt_cases() {
  "Sets of gates, what each was measured to cost, and how they should come out when split into shares";
  "The property being pinned is not how even the shares are - it is that every gate is dealt once and only once. Evenness is a saving and a bad split only costs time; a gate dealt to nobody is never asked, and a suite that never asks a gate answers all clear in exactly the voice it uses when it has checked. That is the one failure here that lies";
  "The names are invented rather than real gate names, because a real one would be turned into a reference to that function by the canonicalizing pass and would then follow every later rename of a function these cases are not about";
  let cases = [
    {
      name: "with nothing timed they are dealt round in turn",
      gates: [
        "asked_one",
        "asked_two",
        "asked_three",
        "asked_four",
        "asked_five",
        "asked_six",
        "asked_seven",
      ],
      costs: {},
      count: 3,
      dealt: {
        sizes: [3, 2, 2],
        missing: [],
        twice: [],
      },
      why: "a missing record must land where the old dealing did rather than somewhere worse. Weighing every gate at nought reads as even and is not: no share is ever lighter than the first, so every gate lands on the first and the run is undivided again, silently",
    },
    {
      name: "a gate far heavier than the rest is left on its own",
      gates: [
        "asked_one",
        "asked_two",
        "asked_three",
        "asked_four",
        "asked_five",
        "asked_six",
        "asked_seven",
      ],
      costs: {
        asked_one: 90000,
        asked_two: 1000,
        asked_three: 1000,
        asked_four: 1000,
        asked_five: 1000,
        asked_six: 1000,
        asked_seven: 1000,
      },
      count: 3,
      dealt: {
        sizes: [1, 3, 3],
        missing: [],
        twice: [],
      },
      why: "the whole point of dealing by cost. The heaviest gate decides how long the run takes whatever else happens, so giving it anything else to carry adds that to the wait for no reason",
    },
    {
      name: "a gate nobody timed is not treated as free",
      gates: ["asked_one", "asked_two", "asked_three", "asked_four"],
      costs: {
        asked_one: 1000,
        asked_two: 1000,
      },
      count: 2,
      dealt: {
        sizes: [2, 2],
        missing: [],
        twice: [],
      },
      why: "every gate written since the last timing is unmeasured, so nought would put all of them together on one share - the newest code, judged the least evenly, which is the opposite of what anybody wants",
    },
    {
      name: "more shares than gates leaves shares empty rather than losing gates",
      gates: ["asked_one", "asked_two", "asked_three"],
      costs: {
        asked_one: 5000,
        asked_two: 3000,
        asked_three: 1000,
      },
      count: 5,
      dealt: {
        sizes: [1, 1, 1, 0, 0],
        missing: [],
        twice: [],
      },
      why: "an empty share is an idle process and costs nothing that matters. Reaching past the end of the shares to avoid one would be an error thrown from inside a run of the suite, which reads as the repo being broken",
    },
  ];
  return cases;
}
