import { text_frozen } from "./text_frozen.mjs";
export function js_span_cuttable_cases() {
  "Written-out functions and two line numbers apiece, pinning which runs may be pulled out into a function of their own and which must be refused.";
  "Every case here is a silence. The cut finishes cleanly whichever way it is wrong: the lines come out looking exactly like a tidy extraction, every gate stays green, and what breaks is a value read somewhere else at some later moment. One of these was found by reading a single screen closely before trusting the proposer, and there are ninety more screens waiting - so the reading has to live here rather than in whoever is paying attention.";
  "The runs that must be let through are as much of the corpus as the runs that must be refused, and cost more thought. A refusal that is too eager is safe and quiet, and would sit here for a year taking the good cuts away one at a time with nobody the wiser.";
  "Each case is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  "Lines are counted from the top of the body and both ends are included, the same counting the proposer walks by.";
  "Writing to a name and writing through a dot or a bracket are two different things here, and three of these cases are about nothing else. Pointing a name somewhere else splits it in two across a cut, because each side then holds its own; filling a slot of a list or setting something on an object changes the one thing both sides are looking at, and survives. Reading them the same way is safe and quiet and refused a whole screen of drawing for no reason at all, so the cases that must be let through are here to keep that from coming back.";
  let cases = [
    {
      name: "a plain run of work, whose one handed-back name is only ever read",
      code: text_frozen(
        "function f() {\n  let a = one();\n  let b = two(a);\n  let c = three(b);\n  return c;\n}\n",
      ),
      from: 0,
      to: 1,
      cuttable: true,
    },
    {
      name: "a run holding a return that would leave it",
      code: text_frozen(
        "function f() {\n  let a = one();\n  if (a) {\n    return a;\n  }\n  let b = two(a);\n  return b;\n}\n",
      ),
      from: 0,
      to: 1,
      cuttable: false,
    },
    {
      name: "a run writing to a name brought into being above it",
      code: text_frozen(
        "function f() {\n  let a = one();\n  let b = two();\n  a = three(b);\n  return a;\n}\n",
      ),
      from: 1,
      to: 2,
      cuttable: false,
    },
    {
      name: "a run whose function reads a name the lines behind go on writing",
      code: text_frozen(
        "function f() {\n  let chosen = null;\n  function show() {\n    draw(chosen);\n  }\n  attach(show);\n  chosen = pick();\n  return show;\n}\n",
      ),
      from: 0,
      to: 2,
      cuttable: false,
    },
    {
      name: "the same run carried down to hold the line doing the writing",
      code: text_frozen(
        "function f() {\n  let chosen = null;\n  function show() {\n    draw(chosen);\n  }\n  attach(show);\n  chosen = pick();\n  return show;\n}\n",
      ),
      from: 0,
      to: 3,
      cuttable: true,
    },
    {
      name: "a run whose function writes a name the lines behind go on reading",
      code: text_frozen(
        "function f() {\n  let count = 0;\n  function step() {\n    count = add(count, 1);\n  }\n  attach(step);\n  report(count);\n}\n",
      ),
      from: 0,
      to: 2,
      cuttable: false,
    },
    {
      name: "a name counted up by a loop inside the run and read once behind it",
      code: text_frozen(
        "function f() {\n  let total = 0;\n  for (let item of items) {\n    total = add(total, item);\n  }\n  report(total);\n}\n",
      ),
      from: 0,
      to: 1,
      cuttable: true,
    },
    {
      name: "a run filling a slot of a list brought into being above it",
      code: text_frozen(
        "function f() {\n  let spans = [];\n  let token = one();\n  spans[0] = token;\n  report(spans);\n}\n",
      ),
      from: 1,
      to: 2,
      cuttable: true,
    },
    {
      name: "a run whose function fills a slot of a list the run hands back",
      code: text_frozen(
        "function f() {\n  let spans = [];\n  function step(i) {\n    spans[i] = one(i);\n  }\n  attach(step);\n  report(spans);\n}\n",
      ),
      from: 0,
      to: 2,
      cuttable: true,
    },
    {
      name: "a run whose function sets something on an object the run hands back",
      code: text_frozen(
        "function f() {\n  let covered = {};\n  function step(i) {\n    covered.seen = i;\n  }\n  attach(step);\n  report(covered);\n}\n",
      ),
      from: 0,
      to: 2,
      cuttable: true,
    },
  ];
  return cases;
}
