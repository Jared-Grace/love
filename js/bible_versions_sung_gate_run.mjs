import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_english_public_domain } from "./bible_usfm_versions_english_public_domain.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_versions_sung_gate_run() {
  "Checks that every lyric video is built on a translation nobody owns.";
  "SINGING ASKS A NARROWER QUESTION THAN SHOWING, AND THIS IS WHERE THE TWO ARE KEPT APART. A verse put on the screen is a copy of the translation and the credit line beside it settles the whole duty. A verse set to a tune and repeated is a new work made out of the translation, and a share-alike text then asks that the song be given away on the same terms as the text it was built from. That is a duty taken on at the moment somebody picks a wording, and paid much later by whoever wanted to sell the song or keep it.";
  "WHICH TRANSLATIONS ARE FREE IS DERIVED FROM THE PUBLISHERS' OWN LICENCE PAGES, NEVER FROM A BLANK. The shelf writes an empty licence beside a translation that asks for nothing, which is right for printing a credit and wrong for deciding one: a row somebody adds without filling that field in reads exactly like a text nobody owns. So the free list is asked for rather than inferred, and a translation whose page has not been read is not free here, it is unanswered, and unanswered fails.";
  "WHICH TRANSLATION A VIDEO IS BUILT ON IS ITS FILE NAME, WHICH IS WHY NOTHING NEEDS TO BE OPENED. The name is worked out from the passage, and the first word of it is the short word of the translation. The credit inside the document is a printed phrase meant for a reader, so two translations could print the same one and neither would say which shelf the words came off.";
  "IT REFUSES TO PASS WITHOUT HAVING LOOKED AT ANYTHING. The licence pages sit outside this repo, and a gate runs inside a frozen copy of the tree put somewhere else on disk; a store root that pointed into the copy would answer every question with nothing, and a free list that came back empty would then find fault with every video rather than none. So the emptiness is the first thing asserted, and it is asserted about the list the answer is read out of.";
  "No videos at all is not a failure. There is a first one, and until it is written there is nothing here to be wrong about.";
  arguments_assert(arguments, 0);
  let free = await bible_usfm_versions_english_public_domain();
  let words = list_map_property(free, "version");
  let read_nothing = list_empty_is(words);
  assert_json(not(read_nothing), {
    hint: "no translation was read as public domain at all, so the licence pages were never reached and this gate is looking at nothing",
  });
  let folder = data_given_lyric_videos_folder();
  let files = await folder_read_files(folder);
  let owned = [];
  for (let file_name of files) {
    let parts = text_split(file_name, "_");
    let version = list_first(parts);
    let unfree = list_includes_not(words, version);
    if (unfree) {
      list_add(owned, {
        file_name,
        version,
      });
    }
  }
  assert_json(list_empty_is(owned), {
    owned,
    free: words,
    hint: "this lyric video is built on a translation nobody has read as public domain, so the song inherits whatever the translation asks for - move it onto a free wording rather than adding the name here",
  });
  let videos = list_size(files);
  let versions = list_size(words);
  return {
    videos,
    versions,
  };
}
