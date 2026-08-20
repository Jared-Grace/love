import { text_frozen } from "./text_frozen.mjs";
export function js_visit_types_cases() {
  "One small written-out piece of code asked about four different ways, beside the things the walk stops at each time, each named by its kind and by the name it carries.";
  "The reading takes a list of kinds rather than one, and the cases are all about what the list does and does not decide. It decides which things are stopped at. It does not decide the order they arrive in - that belongs to the walk underneath, which hands each thing over after everything standing inside it. The first two cases are the same two kinds asked in opposite orders and getting the same answer, which is the only way to say that in a form something can check.";
  "Asking for no kinds at all stops at nothing. That is worth writing down because the opposite reading is just as easy to write by accident: a list nothing has to match is also a list everything matches, and a walk that quietly stopped at every node would look like a slow walk rather than a wrong one.";
  "The last case asks for a kind that is not in the code alongside one that is, and gets only the one that is. A kind that is absent is not an error and does not spoil the rest of the ask.";
  "Each thing stopped at is written down with its kind in front of its name, because two of the things here are a call and the name of the thing it calls, which share a name and would otherwise be indistinguishable in the answer.";
  "The code is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "two kinds asked at once, arriving mixed together in the walk's own order",
      code: text_frozen("g(h(a));"),
      types: ["CallExpression", "Identifier"],
      met: [
        "Identifier g",
        "Identifier h",
        "Identifier a",
        "CallExpression h",
        "CallExpression g",
      ],
    },
    {
      name: "the same two kinds asked the other way round, arriving in the same order",
      code: text_frozen("g(h(a));"),
      types: ["Identifier", "CallExpression"],
      met: [
        "Identifier g",
        "Identifier h",
        "Identifier a",
        "CallExpression h",
        "CallExpression g",
      ],
    },
    {
      name: "no kinds asked for at all, which stops at nothing rather than at everything",
      code: text_frozen("g(h(a));"),
      types: [],
      met: [],
    },
    {
      name: "a kind that is there asked alongside one that is not",
      code: text_frozen("g(h(a));"),
      types: ["Literal", "CallExpression"],
      met: ["CallExpression h", "CallExpression g"],
    },
  ];
  return cases;
}
