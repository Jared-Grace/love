import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { list_includes } from "./list_includes.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_search_built_path_gate_run() {
  "QA gate: the mark saying which build the search index came from stands where no word can reach, and is really up there.";
  "A WORD IS KEPT UNDER ITS OWN SPELLING AND NOTHING ELSE, so every name lying flat in the words folder belongs to some word. The mark first went in as built.json, and built is a word of the Bible - so the mark read back as that word's own list of verses. It could never differ from itself, which is the single thing a mark exists to do, and every device quietly threw away its saved words once on being told nothing had changed.";
  "A word cannot hold a slash, so a folder of its own is the whole of the fix, and depth is the whole of the check: the folder and one name is a word's slot, anything deeper is somewhere no word can be spelled.";
  "IT ALSO ASKS STORAGE WHETHER THE MARK IS THERE, because a mark that is named safely and never written reads back as nothing, and nothing is what a reader sees on the first visit anyway - so the fault would sit unnoticed until somebody asked why no device ever kept its words.";
  "It asks about the mark's own folder rather than the words folder. Both answer the question, and the words folder answered it in eight and a half minutes over sixty-four thousand names, which is more than half of what the whole gate suite costs - to learn one thing about one file.";
  "How many names were found comes back with the answer. Pointed at a folder that has moved, this finds nothing, and the count falling to zero is what tells that apart from a clean run.";
  arguments_assert(arguments, 0);
  let path = bible_search_built_path();
  let parts = text_split_slash_forward(path);
  let word_place_is = list_size_2(parts);
  false_is_assert_json(word_place_is, {
    path,
    said: "the search index keeps its mark where a word of the Bible is kept, so the mark reads back as that word's own list of verses and can never say a build has changed",
  });
  ("storage is asked for a prefix and not for a folder, so the trailing slash has to be spelled out, and it is what keeps the ask to the mark's own folder rather than every word beside it");
  let folder_parts = list_take_less_1(parts);
  let folder = list_join_slash_forward(folder_parts);
  let slash = text_slash_forward();
  let prefix = list_join_empty([folder, slash]);
  let held = await firebase_storage_list_jg(prefix);
  let written_is = list_includes(held, path);
  true_is_assert_json(written_is, {
    path,
    held,
    hint: "the mark is named where no word can reach and storage has nothing there - every device is told the index is as old as it ever was, and throws its saved words away on the next visit",
  });
  let r = {
    held: list_size(held),
    path,
  };
  return r;
}
