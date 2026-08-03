import { text_frozen } from "./text_frozen.mjs";
export function js_hash_object_word_calls_unknown_cases() {
  "Files written out small, each one saying which words it writes into a page address through a call the walk over addresses cannot read.";
  "The empty answers are the ones that earn their keep, and here more than anywhere. This reading exists to say what the walk beside it walked past, so a reading that had stopped answering would agree with a repo in perfect order - and the thing it was watching for is a word already on somebody else's disk, where nothing here can reach it.";
  "The first two are the whole point standing side by side: the same field written the same way, once through a call the walk knows and once through one it does not. Only the second is this reading's business, because the first is already being asked about next door.";
  "The rest say it must not flag what publishes nothing. A field named by something held in a variable puts no word in a link. An ordinary object beside the address in the same file is named the same way and is nobody's business here. And a call handed only the address names no field at all.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nfield_set(hash, "l", "en");',
      ),
      words: ["l"],
      why: "a call naming a field of the address whose name does not carry the prefix the walk looks for",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nproperty_set(hash, "l", "en");',
      ),
      words: [],
      why: "the same field through a call the walk already reads, which is asked about next door",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nfield_set(hash, chosen, "en");',
      ),
      words: [],
      why: "the field named by something held, so no word is written into anybody's link",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nlet record = {};\nfield_set(record, "chosen", true);',
      ),
      words: [],
      why: "an ordinary object beside the address in the same file names its fields the same way",
    },
    {
      code: text_frozen(
        "let hash = html_hash_object_get();\nhash_to_url(hash);",
      ),
      words: [],
      why: "a call handed the address and nothing else names no field of it",
    },
    {
      code: text_frozen(
        'let address = html_hash_object_get();\nfield_set(address, "b", "");',
      ),
      words: ["b"],
      why: "the address under another name, because which names hold one is asked of the code rather than of a habit",
    },
  ];
  return cases;
}
