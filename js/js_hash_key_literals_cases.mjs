import { text_frozen } from "./text_frozen.mjs";
export function js_hash_key_literals_cases() {
  "Files written out small, each one saying which words it writes straight into the address of a page.";
  "The empty answers are the ones that earn their keep. This reader's whole effect is to fail a gate, so a reader that had stopped answering would leave the gate green over a repo quietly publishing words nobody can watch - and a green gate reads exactly like a repo in order. Only a written-down offender can tell those apart.";
  "Two of them say the reader must not simply flag every field name it meets. An ordinary object standing beside the address in the same file is named the same way and is nobody's business here, and a word handed to a field call as the value being stored is not naming anything at all.";
  "Two more say it must not trust what the address happens to be called. Every one of them is called hash today, so a reader that matched the word would agree with itself on every case the repo can offer - which is why one case renames it and another reaches it through the parameter of a function handed off to be run.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen('html_hash_property_set("c", chapter_code);'),
      words: ["c"],
      why: "the short door takes the word first, so a word written there is published",
    },
    {
      code: text_frozen(
        "html_hash_property_set(app_shared_bible_chapter_hash_key(), chapter_code);",
      ),
      words: [],
      why: "the same door with the word held by a function, which is the repaired shape",
    },
    {
      code: text_frozen('html_hash_object_property_set("sp", index);'),
      words: ["sp"],
      why: "the other short door, which reads the address and writes it back",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nproperty_set(hash, "v", "");',
      ),
      words: ["v"],
      why: "the long way, where the address is an object and the word stands beside it",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nlet chapter_code = property_get(hash, "c");',
      ),
      words: ["c"],
      why: "reading is as published as writing - a word can only be read back if something wrote it",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nlet l = property_get_or(hash, "l", remembered);',
      ),
      words: ["l"],
      why: "every way of naming a field counts, not a few written down by hand",
    },
    {
      code: text_frozen(
        'let address = html_hash_object_get();\nproperty_set(address, "b", "");',
      ),
      words: ["b"],
      why: "the address under another name, which a reader trusting the usual word would walk past",
    },
    {
      code: text_frozen(
        'function change(held) {\n  property_set(held, "l", "en");\n}\nhtml_hash_transform(change);',
      ),
      words: ["l"],
      why: "the address reached through the parameter of a function handed off to be run",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nlet record = {};\nproperty_set(record, "chosen", true);',
      ),
      words: [],
      why: "an ordinary object beside the address in the same file names its fields the same way and is nobody's business here",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nproperty_set(hash, key, "chapter");',
      ),
      words: [],
      why: "handed third to a field call, so it is the value being stored rather than the word being published",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\n("the chapter sits under c in the address");',
      ),
      words: [],
      why: "a word the file only says in prose is not a word it writes anywhere",
    },
  ];
  return cases;
}
