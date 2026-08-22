import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_last } from "./list_last.mjs";
import { bible_search_folder } from "./bible_search_folder.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { equal } from "./equal.mjs";
export function bible_search_built_path_gate_run() {
  "QA gate: the mark saying which build the search index came from does not stand where a word could stand.";
  "A WORD IS KEPT UNDER ITS OWN SPELLING AND NOTHING ELSE, so every name straight inside the words folder belongs to some word. The mark first went in as built.json, and built is a word of the Bible - so the mark read back as that word's own list of verses. It could never differ from itself, which is the single thing a mark exists to do, and every device quietly threw away its saved words once on being told nothing had changed.";
  "The check is the collision itself rather than a rule about names: build the path a word of this file name would be kept at, and the two must not be the same path. Nothing here needs the network, and nothing here needs to know which words the Bible holds.";
  arguments_assert(arguments, 0);
  let path = bible_search_built_path();
  let parts = text_split_slash_forward(path);
  let name = list_last(parts);
  let folder = bible_search_folder();
  ("a word's file is the folder and the word spelled out with nothing between them, so this is where a word of exactly this name would be kept");
  let word_path = list_join_slash_forward([folder, name]);
  let same = equal(path, word_path);
  let json = {
    path,
    word_path,
    said: "the search index keeps its mark where a word of the Bible would be kept, so the mark is that word's own list of verses and can never say a build has changed",
  };
  false_is_assert_json(same, json);
}
