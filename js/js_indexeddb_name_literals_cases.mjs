import { text_frozen } from "./text_frozen.mjs";
export function js_indexeddb_name_literals_cases() {
  "Files written out small, each one saying which names of kept things it writes straight into a call.";
  "The empty answers are the ones that earn their keep. This reader's whole effect is to fail a gate, so a reader that had stopped answering would leave the gate green over a repo naming people's stored work in passing - and a green gate reads exactly like a repo in order.";
  "The doors are written out here rather than read off the repo, so a case says the same thing forever. Read off the repo, every one of these answers would change the day somebody adds a parameter to a browser-database function, and a corpus that moves cannot hold a reading still.";
  "One case gives the opening function two written-out words, because it is the only way in that names the database as well as the store, and a reading that only ever looked at the second argument would pass it.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  "No case waits on its call, though every real one does. A case is read as a whole file rather than as the inside of a function, and waiting is only allowed inside a function that says it waits - so the word would end the reading before it began. Nothing is lost by leaving it out: what is asked about is which call names a kept thing and what stands in the naming argument, and neither of those changes.";
  let doors = {
    indexeddb_database_open: [0, 1],
    indexeddb_get_all: [1],
    indexeddb_store_clear: [1],
  };
  let cases = [
    {
      doors,
      code: text_frozen(
        'let all = indexeddb_get_all(download_cache_database, "downloads");',
      ),
      words: ["downloads"],
      why: "the store stands second, so a word written there names people's kept work in passing and nothing is watching it",
    },
    {
      doors,
      code: text_frozen(
        "let store = download_cache_store();\nlet all = indexeddb_get_all(download_cache_database, store);",
      ),
      words: [],
      why: "the same call with the name held by a function, which is the repaired shape and is what the canonicalizing pass leaves behind",
    },
    {
      doors,
      code: text_frozen(
        'let database = indexeddb_database_open("download_cache", "downloads");',
      ),
      words: ["download_cache", "downloads"],
      why: "the one way in that names the database too, so both arguments are asked about and both are written out here",
    },
    {
      doors,
      code: text_frozen(
        "let name = download_cache_database_name();\nlet store = download_cache_store();\nlet database = indexeddb_database_open(name, store);",
      ),
      words: [],
      why: "the same opening with both names held, which is how every way into a store in this repo is written today",
    },
    {
      doors,
      code: text_frozen('let held = localStorage.getItem("downloads");'),
      words: [],
      why: "a word going somewhere else is watched by something else - only the browser database is asked about here",
    },
    {
      doors,
      code: text_frozen('let value = property_get(record, "downloads");'),
      words: [],
      why: "an ordinary object names its fields the same way and nothing there reaches a disk",
    },
    {
      doors,
      code: text_frozen(
        'let all = ebible_offline_chapter_get("downloads");',
      ),
      words: [],
      why: "a call to something that is not a way into a store, because matching on shape rather than on the named ways in would take every call in the file",
    },
    {
      doors,
      code: text_frozen('("the downloads are kept in a store called bible");'),
      words: [],
      why: "a word the file only says in prose is not a word it writes anywhere",
    },
  ];
  return cases;
}
