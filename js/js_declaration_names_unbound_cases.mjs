import { text_frozen } from "./text_frozen.mjs";
export function js_declaration_names_unbound_cases() {
  "Small written-out functions, each saying which of the names inside it are supplied by nothing the function itself holds - what it reaches out of itself for";
  "This reading decides what a moved function is handed. A name it misses is a name the move leaves behind, and the moved function then reads a word nothing supplies; where a repo function happens to answer to that word, the repairing pass imports it and the code runs on against something it was never written against. That ending passes every other check there is, which is why the reading needs a corpus of its own";
  "The cases carry both directions. Some must name something, so a reading gone quiet fails here; some must name nothing, so a reading that calls everything unbound fails too. Missing a name and inventing one are opposite faults and a corpus leaning one way only ever catches one of them";
  "Every answer opens with the function's own name. That is on purpose and not a fault: whether a function counts as reaching outside itself is the caller's question rather than this one's, so the name is left in and each caller subtracts what it means to";
  "The written-out functions are held as fixed text, because the pass that canonicalizes an edited file would otherwise read the names inside them as references and rewrite the very thing each case is written to say";
  let own = text_frozen("f");
  let own2 = text_frozen("f");
  let own3 = text_frozen("f");
  let own4 = text_frozen("f");
  let own5 = text_frozen("f");
  let own6 = text_frozen("f");
  let outer = text_frozen("outer_shade");
  let outer2 = text_frozen("outer_shade");
  let t = text_frozen("paint");
  let t2 = text_frozen("risky");
  let t3 = text_frozen("take");
  let cases = [
    {
      name: "the name after the colon in a pair is read, and is bound outside",
      code: text_frozen(
        "export function f(b) {\n  paint(b, { shade: outer_shade });\n}\n",
      ),
      unbound: [own, t, outer],
    },
    {
      name: "the word standing as the key of a pair is text, not a name",
      code: text_frozen("export function f(b) {\n  return { shade: b };\n}\n"),
      unbound: [own2],
    },
    {
      name: "a pair written the short way really does read the name",
      code: text_frozen(
        "export function f() {\n  return { outer_shade };\n}\n",
      ),
      unbound: [own3, outer2],
    },
    {
      name: "a caught error is bound by the clause that names it",
      code: text_frozen(
        "export function f() {\n  try {\n    risky();\n  } catch (trouble) {\n    return trouble;\n  }\n}\n",
      ),
      unbound: [own4, t2],
    },
    {
      name: "a name the function binds for itself",
      code: text_frozen(
        "export function f() {\n  let held = 1;\n  return held;\n}\n",
      ),
      unbound: [own5],
    },
    {
      name: "a loop's own item, live for the length of the loop",
      code: text_frozen(
        "export function f(items) {\n  for (let item of items) {\n    take(item);\n  }\n}\n",
      ),
      unbound: [own6, t3],
    },
  ];
  return cases;
}
