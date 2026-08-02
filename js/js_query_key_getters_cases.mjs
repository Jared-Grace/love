import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_query_key_getters_cases() {
  "Files written out small, each one saying which functions it calls to name a field of the query part of a page address.";
  "The two shapes of a call are both written down, because only one of them is what the repo is written in. A call standing where the field goes is how a person writes it; the pass that canonicalizes the file then lifts it onto a line of its own and leaves a name behind, and reading only the first way found nothing on every routed file in the repo.";
  "The empty answers say which things standing in that same place are not this. A word written out is the broken shape and has its own reading. A call given arguments works something out rather than handing back a word it holds. And a call naming a field of anything but the query part is nobody's business here.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let f_name = fn_name("g_verify_chapter_query_key");
  let f_name2 = fn_name("g_verify_chapter_query_key");
  let cases = [
    {
      code: text_frozen(
        "let chapter_code = html_query_property_get(g_verify_chapter_query_key());",
      ),
      getters: [f_name],
      why: "the door with the call standing where the field goes, which is how a person writes it",
    },
    {
      code: text_frozen(
        "let property_name = g_verify_chapter_query_key();\nlet chapter_code = html_query_property_get(property_name);",
      ),
      getters: [f_name2],
      why: "the same call lifted onto a line of its own, which is what the canonicalizing pass leaves behind and what nearly every file here holds",
    },
    {
      code: text_frozen('let chapter_code = html_query_property_get("c");'),
      getters: [],
      why: "a word written out is the broken shape and is read elsewhere, not here",
    },
    {
      code: text_frozen(
        "let property_name = g_verify_key_for(kind);\nlet held = html_query_property_get(property_name);",
      ),
      getters: [],
      why: "a call given something works a field name out rather than holding one, so there is no fixed word in it to freeze",
    },
    {
      code: text_frozen(
        "let property_name = g_verify_chapter_storage_key();\nlet held = localStorage.getItem(property_name);",
      ),
      getters: [],
      why: "a word held for somewhere other than the query part is watched by something else",
    },
  ];
  return cases;
}
