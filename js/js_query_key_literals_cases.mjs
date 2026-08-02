import { text_frozen } from "./text_frozen.mjs";
export function js_query_key_literals_cases() {
  "Files written out small, each one saying which words it writes straight into the query part of a page address.";
  "The empty answers are the ones that earn their keep. This reader's whole effect is to fail a gate, so a reader that had stopped answering would leave the gate green over a repo quietly publishing words nobody can watch - and a green gate reads exactly like a repo in order.";
  "One case is a call given nothing, which is the repaired shape and is read elsewhere. One is a call to something else entirely, because there is one door here and a reader matching on shape rather than on the door would take every one-argument call in the file.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen('let chapter_code = html_query_property_get("c");'),
      words: ["c"],
      why: "the door takes the word first, so a word written there is published the moment somebody saves the link",
    },
    {
      code: text_frozen(
        "let chapter_code = html_query_property_get(g_verify_chapter_query_key());",
      ),
      words: [],
      why: "the same door with the word held by a function, which is the repaired shape and has its own reading",
    },
    {
      code: text_frozen(
        "let property_name = g_verify_chapter_query_key();\nlet chapter_code = html_query_property_get(property_name);",
      ),
      words: [],
      why: "the same call lifted onto a line of its own, which is what the canonicalizing pass leaves behind",
    },
    {
      code: text_frozen('let held = localStorage.getItem("c");'),
      words: [],
      why: "a word going somewhere else is watched by something else - only the query part is asked about here",
    },
    {
      code: text_frozen('let value = property_get(record, "c");'),
      words: [],
      why: "an ordinary object names its fields the same way and nothing there goes into anybody's link",
    },
    {
      code: text_frozen('("the chapter sits under c in the query part");'),
      words: [],
      why: "a word the file only says in prose is not a word it writes anywhere",
    },
  ];
  return cases;
}
