import { text_frozen } from "./text_frozen.mjs";
export function js_condition_bodies_empty_cases() {
  "Small files written out, each one saying which halves of a question it opens";
  "and leaves empty.";
  "The false cases carry the rule's edges. A loop with an empty body is written";
  "that way on purpose - the work is in its header, and the repo has one that";
  "walks two paths forward while they agree and answers with how far it got. An";
  "empty function body is a placeholder that does nothing on purpose, and the";
  "repo keeps one under that very name. Neither is a question asked and dropped.";
  "The nested case is here because the one that started this sat inside a lambda";
  "inside a loop, and a reading that only looked at the top of a file would have";
  "walked past it.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen("if (b) {\n}\n"),
      empties: ["if"],
      why: "the plainest shape - an answer worked out and nowhere for it to go",
    },
    {
      code: text_frozen("if (b) {\n  list_add(r, 1);\n} else {\n}\n"),
      empties: ["else"],
      why: "the other half is the one left empty, and the half with work in it must not be reported",
    },
    {
      code: text_frozen("if (b) {\n} else {\n}\n"),
      empties: ["if", "else"],
      why: "both halves empty is one question dropped twice, so both are named",
    },
    {
      code: text_frozen("if (a) {\n  if (b) {\n  }\n}\n"),
      empties: ["if"],
      why: "buried inside another body, which is where the one that started this was found",
    },
    {
      code: text_frozen("if (b) {\n  list_add(r, 1);\n}\n"),
      empties: [],
      why: "a question with its answer written is the ordinary case and must stay silent",
    },
    {
      code: text_frozen("for (let i = 0; b(i); i = i + 1) {\n}\n"),
      empties: [],
      why: "a scan loop keeps its work in the header, so nothing was left unwritten - the repo has one and it must not be reported",
    },
    {
      code: text_frozen("while (b()) {\n}\n"),
      empties: [],
      why: "the same reading for the other loop word, so the rule cannot be widened to loops by accident",
    },
    {
      code: text_frozen("function nothing() {\n}\n"),
      empties: [],
      why: "a function that does nothing on purpose is a placeholder the repo keeps by name, not a dropped answer",
    },
    {
      code: text_frozen("if (b) list_add(r, 1);\n"),
      empties: [],
      why: "no block was ever opened, so there is no empty one to find",
    },
  ];
  return cases;
}
