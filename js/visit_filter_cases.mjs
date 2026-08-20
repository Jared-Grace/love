import { visit_filter_recursive_cycle_message } from "./visit_filter_recursive_cycle_message.mjs";
export function visit_filter_cases() {
  "Written-out graphs beside what the plain walk makes of each one: either the run of nodes it handed over, written as one line, or the sentence it refused with.";
  "Two things are watched here and they pull against each other. The walk refuses to enter a node it is already inside, because a shape like that has no bottom and would be walked until the machine refused another step. It must NOT refuse a node that merely turns up twice - the diamond below reaches the same node down two branches, and both branches really do reach it, so both must hand it over. A walk that kept a record of everything it had ever seen would satisfy the rings and quietly answer half the diamond, and half an answer reads exactly like a whole one.";
  "So the diamond is the case that costs something to keep right, and it is written down with the node appearing twice on purpose. Being inside a node is the only question asked; having met one before is not asked at all, and the walk that does ask it is a different function with its own corpus.";
  "The refusal is spelled by calling for the sentence rather than copying it, so rewording the complaint stays a rewording. What the case fixes is WHICH refusal, not which words: any other failure would answer with something else and fail here.";
  "The nodes are single letters and are written as they are. A node here is a place in a made-up graph and not the name of anything, and a single letter is a name no function in this repo wears, so there is nothing for the letters to be mistaken for and nothing to hold them still against.";
  let refused = visit_filter_recursive_cycle_message();
  let cases = [
    {
      name: "a node is handed over after the one it reaches",
      edges: [
        {
          node: "a",
          reaches: ["b"],
        },
        {
          node: "b",
          reaches: [],
        },
      ],
      from: "a",
      made: "b a",
    },
    {
      name: "a node two branches reach is handed over on both of them",
      edges: [
        {
          node: "a",
          reaches: ["b", "c"],
        },
        {
          node: "b",
          reaches: ["d"],
        },
        {
          node: "c",
          reaches: ["d"],
        },
        {
          node: "d",
          reaches: [],
        },
      ],
      from: "a",
      made: "d b d c a",
    },
    {
      name: "a ring back to where the walk started is refused",
      edges: [
        {
          node: "a",
          reaches: ["b"],
        },
        {
          node: "b",
          reaches: ["a"],
        },
      ],
      from: "a",
      made: refused,
    },
    {
      name: "a node that reaches itself is refused",
      edges: [
        {
          node: "a",
          reaches: ["a"],
        },
      ],
      from: "a",
      made: refused,
    },
  ];
  return cases;
}
