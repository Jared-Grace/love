import { text_frozen } from "./text_frozen.mjs";
import { visit_filter_recursive_cycle_message } from "./visit_filter_recursive_cycle_message.mjs";
export function visit_filter_cases() {
  "Written-out graphs beside what the plain walk makes of each one: either the run of nodes it handed over, written as one line, or the sentence it refused with.";
  "Two things are watched here and they pull against each other. The walk refuses to enter a node it is already inside, because a shape like that has no bottom and would be walked until the machine refused another step. It must NOT refuse a node that merely turns up twice - the diamond below reaches the same node down two branches, and both branches really do reach it, so both must hand it over. A walk that kept a record of everything it had ever seen would satisfy the rings and quietly answer half the diamond, and half an answer reads exactly like a whole one.";
  "So the diamond is the case that costs something to keep right, and it is written down with the node appearing twice on purpose. Being inside a node is the only question asked; having met one before is not asked at all, and the walk that does ask it is a different function with its own corpus.";
  "The refusal is spelled by calling for the sentence rather than copying it, so rewording the complaint stays a rewording. What the case fixes is WHICH refusal, not which words: any other failure would answer with something else and fail here.";
  let refused = visit_filter_recursive_cycle_message();
  let t = text_frozen("b");
  let t2 = text_frozen("b");
  let t3 = text_frozen("c");
  let t4 = text_frozen("d");
  let t5 = text_frozen("d");
  let t6 = text_frozen("b");
  let t7 = text_frozen("a");
  let t8 = text_frozen("a");
  let cases = [
    {
      name: "a node is handed over after the one it reaches",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t],
        },
        {
          node: text_frozen("b"),
          reaches: [],
        },
      ],
      from: text_frozen("a"),
      made: text_frozen("b a"),
    },
    {
      name: "a node two branches reach is handed over on both of them",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t2, t3],
        },
        {
          node: text_frozen("b"),
          reaches: [t4],
        },
        {
          node: text_frozen("c"),
          reaches: [t5],
        },
        {
          node: text_frozen("d"),
          reaches: [],
        },
      ],
      from: text_frozen("a"),
      made: text_frozen("d b d c a"),
    },
    {
      name: "a ring back to where the walk started is refused",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t6],
        },
        {
          node: text_frozen("b"),
          reaches: [t7],
        },
      ],
      from: text_frozen("a"),
      made: refused,
    },
    {
      name: "a node that reaches itself is refused",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t8],
        },
      ],
      from: text_frozen("a"),
      made: refused,
    },
  ];
  return cases;
}
