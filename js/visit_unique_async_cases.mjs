import { text_frozen } from "./text_frozen.mjs";
export function visit_unique_async_cases() {
  "Written-out graphs beside the run of nodes a walk outward from one of them hands over, in the order it hands them over. Each graph is written as a list of nodes and what each one reaches, so that nothing here depends on a name being spelled twice in two places.";
  "A node is handed over BEFORE the ones it reaches, which is the opposite of the walk over a file, and the difference is not a matter of taste. This walk is what turns a graph into something a reader can be handed once each, and it does that by marking a node as met at the moment it is handed over - so the marking has to have happened before anything asks what that node reaches. Turn it around and the marking arrives after the reaching, nothing is ever marked in time to cut anything, and a graph that leads back to where it started is walked until the machine refuses another step.";
  "So the rings here are the cases that matter. A ring back to the start, a node reaching itself, and a ring that closes below the start each come to an end and hand every node over once, and every one of them would run forever under the other order. They are also the reason the plain walk's refusal to enter a node it is already inside never fires here: a node is marked before its own children are asked for, so it is never offered as something below itself.";
  "The order is the answer, so these lists are NOT sorted. Which of two branches is taken first is part of what the walk promises, and the diamond is written down to say which: the whole of the first branch is finished before the second is begun, so a node both branches reach arrives on the first one.";
  let t = text_frozen("b");
  let t2 = text_frozen("a");
  let t3 = text_frozen("b");
  let t4 = text_frozen("b");
  let t5 = text_frozen("c");
  let t6 = text_frozen("d");
  let t7 = text_frozen("d");
  let t8 = text_frozen("a");
  let t9 = text_frozen("b");
  let t10 = text_frozen("d");
  let t11 = text_frozen("c");
  let t12 = text_frozen("b");
  let t13 = text_frozen("a");
  let t14 = text_frozen("a");
  let t15 = text_frozen("b");
  let t16 = text_frozen("b");
  let t17 = text_frozen("c");
  let t18 = text_frozen("b");
  let t19 = text_frozen("a");
  let t20 = text_frozen("b");
  let t21 = text_frozen("c");
  let t22 = text_frozen("a");
  let t23 = text_frozen("a");
  let t24 = text_frozen("b");
  let cases = [
    {
      name: "a node is handed over before the one it reaches",
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
      visited: [t2, t3],
    },
    {
      name: "a node two branches reach is handed over once, on the first branch",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t4, t5],
        },
        {
          node: text_frozen("b"),
          reaches: [t6],
        },
        {
          node: text_frozen("c"),
          reaches: [t7],
        },
        {
          node: text_frozen("d"),
          reaches: [],
        },
      ],
      from: text_frozen("a"),
      visited: [t8, t9, t10, t11],
    },
    {
      name: "a ring back to where the walk started comes to an end",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t12],
        },
        {
          node: text_frozen("b"),
          reaches: [t13],
        },
      ],
      from: text_frozen("a"),
      visited: [t14, t15],
    },
    {
      name: "a ring that closes below where the walk started comes to an end",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t16],
        },
        {
          node: text_frozen("b"),
          reaches: [t17],
        },
        {
          node: text_frozen("c"),
          reaches: [t18],
        },
      ],
      from: text_frozen("a"),
      visited: [t19, t20, t21],
    },
    {
      name: "a node that reaches itself is handed over once",
      edges: [
        {
          node: text_frozen("a"),
          reaches: [t22],
        },
      ],
      from: text_frozen("a"),
      visited: [t23],
    },
    {
      name: "a node that reaches nothing is still handed over",
      edges: [
        {
          node: text_frozen("b"),
          reaches: [],
        },
      ],
      from: text_frozen("b"),
      visited: [t24],
    },
  ];
  return cases;
}
