import { text_frozen } from "./text_frozen.mjs";
export function js_visit_type_cases() {
  "Small written-out pieces of code beside the kind of thing to stop at in each, and the things the walk stops at, named and in the order they are handed over.";
  "This is the walk nearly everything that reads a file is built on, and the order it hands things over in is not an accident of how it was written - it hands each thing over after everything standing inside it. So the third case, where one call is written inside another, has the inner call arriving first. Anything gathered on the way down is therefore complete by the time the thing holding it arrives, which is the whole reason a walk over a file is wanted, and a walk rewritten to hand things over on the way down instead would still pass a case that only counted them.";
  "The first case is there to say that the order across a file is the order things are written in, so that the third case is read as the walk going inwards and not as the walk going backwards.";
  "The last case asks for a kind that is not in the code at all and gets an empty list. That is an answer, not a failure: this walk is asked about kinds that are usually absent, from callers that would be wrong to stop.";
  "Each thing stopped at is named rather than described, using its own name where it has one and the name of what it calls where it is a call, because a list of kinds would be the same word over and over and would say nothing about which things were reached.";
  "Each piece of code is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "every name in a small function, in the order they are written",
      code: text_frozen("function f(a) {\n  let b = g(a);\n  return h(b);\n}"),
      type: "Identifier",
      met: ["f", "a", "b", "g", "a", "h", "b"],
    },
    {
      name: "only the calls in that same function, with every other name passed over",
      code: text_frozen("function f(a) {\n  let b = g(a);\n  return h(b);\n}"),
      type: "CallExpression",
      met: ["g", "h"],
    },
    {
      name: "a call written inside another call, which arrives from the inside out",
      code: text_frozen("g(h(a));"),
      type: "CallExpression",
      met: ["h", "g"],
    },
    {
      name: "a kind that is nowhere in the code, which is answered and not stopped on",
      code: text_frozen("g(h(a));"),
      type: "Literal",
      met: [],
    },
  ];
  return cases;
}
