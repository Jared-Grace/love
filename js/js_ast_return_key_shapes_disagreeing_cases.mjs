import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_ast_return_key_shapes_disagreeing_cases() {
  arguments_assert(arguments, 0);
  ("Small written-out files, each saying which disagreeing sets of keys the reading should find in it.");
  ("THE CASES CARRY BOTH DIRECTIONS, and the second direction is the one that matters. A reading that had quietly gone silent would leave the gate green and the baseline unchanged, and every rename from then on could rewrite a key with nothing to say so. So half of these must yield shapes, and half must yield none - a reading that answers nothing fails on the first half, and one that calls everything a disagreement fails on the second.");
  ("The first case is the break itself, copied down from the day it happened: two ways out of the usfm line reader said marker_text where the third said marker, and while that stood every chapter of every bible on this disk threw. A corpus whose first entry is a real failure is a corpus that cannot be satisfied by a reading that only handles what its author imagined.");
  ("Each file is held as fixed text, because the names written inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.");
  let cases = [
    {
      name: "the break: two ways out spell the key one way and the third spells it another",
      code: text_frozen(
        "export function f(line) {\n  if (a) {\n    let unmarked = { marker_text: '', rest: line };\n    return unmarked;\n  }\n  if (b) {\n    return { marker_text: '', rest: line };\n  }\n  let both = { marker: c, rest: d };\n  return both;\n}\n",
      ),
      shapes: ["marker_text,rest", "marker,rest"],
    },
    {
      name: "a key written in the short form, renamed on one path only",
      code: text_frozen(
        "export function f(marker_text, rest) {\n  if (a) {\n    return { marker_text, rest };\n  }\n  return { marker: marker_text, rest };\n}\n",
      ),
      shapes: ["marker_text,rest", "marker,rest"],
    },
    {
      name: "every way out agrees, one written out and one lifted onto a name",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return { start: 1, end: 2 };\n  }\n  let r = { end: 4, start: 3 };\n  return r;\n}\n",
      ),
      shapes: [],
    },
    {
      name: "an answer of nothing beside an answer of an object is not a disagreement",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return null;\n  }\n  return { found: 1, path: 2 };\n}\n",
      ),
      shapes: [],
    },
    {
      name: "a callback answering with its own shape is not the outer function answering",
      code: text_frozen(
        "export function f(list) {\n  function one(item) {\n    let timed = { start: 1, text: item };\n    return timed;\n  }\n  let lines = list.map(one);\n  return { lines, duration: 2 };\n}\n",
      ),
      shapes: [],
    },
    {
      name: "a callback that disagrees with itself is caught like any other function",
      code: text_frozen(
        "export function f(list) {\n  function one(item) {\n    if (a) {\n      return { start: 1, text: item };\n    }\n    return { text: item };\n  }\n  return list.map(one);\n}\n",
      ),
      shapes: ["start,text", "text"],
    },
    {
      name: "a key that is not known until the code runs is not read at all",
      code: text_frozen(
        "export function f(word) {\n  if (a) {\n    return { [word]: 1, rest: 2 };\n  }\n  return { marker: 1, rest: 2 };\n}\n",
      ),
      shapes: [],
    },
    {
      name: "a spread carries in words this file cannot see, so nothing is read",
      code: text_frozen(
        "export function f(held) {\n  if (a) {\n    return { ...held, rest: 2 };\n  }\n  return { marker: 1, rest: 2 };\n}\n",
      ),
      shapes: [],
    },
    {
      name: "the order the keys were typed in is not part of the shape",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return { rest: 1, marker: 2 };\n  }\n  return { marker: 3, rest: 4 };\n}\n",
      ),
      shapes: [],
    },
    {
      name: "two functions side by side may answer with quite different words",
      code: text_frozen(
        "export function f() {\n  return { marker: 1, rest: 2 };\n}\nexport function g() {\n  return { start: 1, end: 2 };\n}\n",
      ),
      shapes: [],
    },
  ];
  return cases;
}
