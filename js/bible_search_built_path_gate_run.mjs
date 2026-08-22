import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { bible_search_folder } from "./bible_search_folder.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_search_built_path_gate_run() {
  "QA gate: the mark saying which build the search index came from does not stand where a word stands.";
  "A WORD IS KEPT UNDER ITS OWN SPELLING AND NOTHING ELSE, so every name straight inside the words folder belongs to some word. The mark first went in as built.json, and built is a word of the Bible - so the mark read back as that word's own list of verses. It could never differ from itself, which is the single thing a mark exists to do, and every device quietly threw away its saved words once on being told nothing had changed.";
  "It is checked against what storage is actually holding rather than against a rule about names, because the rule is what was wrong: the mark was named carefully and still landed on a word. Every file lying flat in that folder is a word's file, so the question is simply whether the mark is one of them.";
  "How many were walked comes back with the answer. Pointed at a folder that has moved, this would find nothing and say so in the same word it uses when nothing is wrong, and the count is what tells those apart.";
  arguments_assert(arguments, 0);
  let path = bible_search_built_path();
  let folder = bible_search_folder();
  ("storage is asked for a prefix and not for a folder, so the slash has to be spelled out or the bucket answers four hundred rather than listing anything");
  let slash = text_slash_forward();
  let prefix = list_join_empty([folder, slash]);
  let held = await firebase_storage_list_jg(prefix);
  function word_place_is(held_path) {
    "the folder and one name is where a word lives; anything deeper is somewhere a word cannot be, because a word cannot hold a slash";
    let parts = text_split_slash_forward(held_path);
    let flat = list_size_2(parts);
    return flat;
  }
  let word_places = list_filter(held, word_place_is);
  let taken = list_includes(word_places, path);
  let json = {
    path,
    said: "the search index keeps its mark where a word of the Bible is kept, so the mark reads back as that word's own list of verses and can never say a build has changed",
  };
  false_is_assert_json(taken, json);
  let r = {
    held: list_size(held),
    word_places: list_size(word_places),
    path,
  };
  return r;
}
