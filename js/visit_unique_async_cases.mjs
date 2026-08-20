export function visit_unique_async_cases() {
  "Written-out graphs beside the run of nodes a walk outward from one of them hands over, in the order it hands them over. Each graph is written as a list of nodes and what each one reaches.";
  "A node is handed over BEFORE the ones it reaches, which is the opposite of the walk over a file, and the difference is not a matter of taste. This walk is what turns a graph into something a reader can be handed once each, and it does that by marking a node as met at the moment it is handed over - so the marking has to have happened before anything asks what that node reaches. Turn it around and the marking arrives after the reaching, nothing is ever marked in time to cut anything, and a graph that leads back to where it started is walked until the machine refuses another step.";
  "So the rings here are the cases that matter. A ring back to the start, a node reaching itself, and a ring that closes below the start each come to an end and hand every node over once, and every one of them would run forever under the other order. They are also the reason the plain walk's refusal to enter a node it is already inside never fires here: a node is marked before its own children are asked for, so it is never offered as something below itself.";
  "The order is the answer, so these lists are NOT sorted. Which of two branches is taken first is part of what the walk promises, and the diamond is written down to say which: the whole of the first branch is finished before the second is begun, so a node both branches reach arrives on the first one.";
  "The nodes are single letters and are written as they are. A node here is a place in a made-up graph and not the name of anything, and a single letter is a name no function in this repo wears, so there is nothing for the letters to be mistaken for and nothing to hold them still against.";
  let cases = [
    {
      name: "a node is handed over before the one it reaches",
      edges: [
        { node: "a", reaches: ["b"] },
        { node: "b", reaches: [] },
      ],
      from: "a",
      visited: ["a", "b"],
    },
    {
      name: "a node two branches reach is handed over once, on the first branch",
      edges: [
        { node: "a", reaches: ["b", "c"] },
        { node: "b", reaches: ["d"] },
        { node: "c", reaches: ["d"] },
        { node: "d", reaches: [] },
      ],
      from: "a",
      visited: ["a", "b", "d", "c"],
    },
    {
      name: "a ring back to where the walk started comes to an end",
      edges: [
        { node: "a", reaches: ["b"] },
        { node: "b", reaches: ["a"] },
      ],
      from: "a",
      visited: ["a", "b"],
    },
    {
      name: "a ring that closes below where the walk started comes to an end",
      edges: [
        { node: "a", reaches: ["b"] },
        { node: "b", reaches: ["c"] },
        { node: "c", reaches: ["b"] },
      ],
      from: "a",
      visited: ["a", "b", "c"],
    },
    {
      name: "a node that reaches itself is handed over once",
      edges: [{ node: "a", reaches: ["a"] }],
      from: "a",
      visited: ["a"],
    },
    {
      name: "a node that reaches nothing is still handed over",
      edges: [{ node: "b", reaches: [] }],
      from: "b",
      visited: ["b"],
    },
  ];
  return cases;
}
