import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_hash_key_getters_cases() {
  "Files written out small, each one saying which functions it calls to name a field of the address of a page.";
  "The two shapes of a call are both written down, because only one of them is what the repo is written in. A call standing where the field goes is how a person writes it; the pass that canonicalizes the file then lifts it onto a line of its own and leaves a name behind, and reading only the first way found nothing on every routed file in the repo.";
  "The empty answers say which things standing in that same place are not this. A word written out is the broken shape and has its own reading. A call given arguments works something out rather than handing back a word it holds. A name lifted from a call given arguments is the same thing under a name. And a call naming a field of any other object is nobody's business here.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let f_name = fn_name("app_shared_bible_chapter_hash_key");
  let f_name2 = fn_name("app_shared_bible_verse_hash_key");
  let f_name3 = fn_name("app_supper_passage_hash_key");
  let f_name4 = fn_name("app_code_lesson_hash_key");
  let cases = [
    {
      code: text_frozen(
        "html_hash_property_set(app_shared_bible_chapter_hash_key(), chapter_code);",
      ),
      getters: [f_name],
      why: "the short door with the call standing where the field goes, which is how a person writes it",
    },
    {
      code: text_frozen(
        'let hash = html_hash_object_get();\nlet property_name = app_shared_bible_verse_hash_key();\nproperty_set(hash, property_name, "");',
      ),
      getters: [f_name2],
      why: "the same call lifted onto a line of its own, which is what the canonicalizing pass leaves behind and what nearly every file here holds",
    },
    {
      code: text_frozen(
        "let hash = {};\nlet property_name = app_supper_passage_hash_key();\nproperty_set(hash, property_name, index);\nlet url = hash_to_url(hash);",
      ),
      getters: [f_name3],
      why: "a link built for another tab, which is an address only because of what is done with it at the end",
    },
    {
      code: text_frozen(
        "let hash = html_hash_get();\nlet key = list_get(kv, 0);\nlet is_lesson = equal(key, app_code_lesson_hash_key());",
      ),
      getters: [f_name4],
      why: "the third shape, where a page pulling its own address apart never hands the field anywhere and asks instead whether a word out of the address is this field",
    },
    {
      code: text_frozen(
        "let key = list_get(kv, 0);\nlet is_lesson = equal(key, app_code_lesson_hash_key());",
      ),
      getters: [],
      why: "the same question in a file that never touches the address, which is an ordinary comparison and not a link being read",
    },
    {
      code: text_frozen('html_hash_property_set("c", chapter_code);'),
      getters: [],
      why: "a word written out is the broken shape and is read elsewhere, not here",
    },
    {
      code: text_frozen(
        "let hash = html_hash_object_get();\nlet property_name = app_shared_bible_key_for(kind);\nproperty_set(hash, property_name, value);",
      ),
      getters: [],
      why: "a call given something works a field name out rather than holding one, so there is no fixed word in it to freeze",
    },
    {
      code: text_frozen(
        "let record = {};\nlet property_name = app_g_conversation_key();\nproperty_set(record, property_name, held);",
      ),
      getters: [],
      why: "an ordinary object names its fields the same way and nothing here goes into anybody's link",
    },
  ];
  return cases;
}
