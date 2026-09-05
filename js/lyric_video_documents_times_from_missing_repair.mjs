import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_times_from_missing } from "./lyric_video_documents_times_from_missing.mjs";
import { list_map } from "./list_map.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_documents_times_from_missing_repair() {
  arguments_assert(arguments, 0);
  ("Writes into every timing document a machine can be shown to have written the fact that a machine wrote it, and then shows there are none left unsaid.");
  ("★ IT EXISTS BECAUSE TWENTY THREE DOCUMENTS WERE WRITTEN BEFORE THERE WAS ANYWHERE TO SAY SO, AND THE RULE PROTECTING PEOPLE'S WORK THEREFORE PROTECTED THEM. Whose moments a document holds was being read off its shape, and the shape a machine writes is the shape the tapping desk writes, so the machine's own output came back looking like somebody's evening and could never be improved on. The fix is not to loosen the rule - it is to leave behind the one fact the shape cannot carry, on the documents that already exist.");
  ("IT FINDS ITS OWN SET AND IS SAFE TO RUN AGAIN. Nothing is passed in, because a list handed in from outside can drift from what is actually unmarked, and a second run over an already-marked folder finds nothing to do and says so.");
  ("★ IT ASKS AGAIN AFTERWARDS AND REFUSES A QUIET FAILURE. Writing a key into a file is the kind of step that can half-happen - a peer editing the same document, a write that lands and a read that does not - and a count of files opened would report success either way. Asking the same question a second time and requiring the answer to be empty is the only report that means what it says.");
  let before = await lyric_video_documents_times_from_missing();
  function name_of(one) {
    let name = one.name;
    return name;
  }
  let names = list_map(before, name_of);
  for (let one of before) {
    let document = await file_read_json(one.path);
    document.times_from = one.word;
    await file_overwrite_json(one.path, document);
  }
  let after = await lyric_video_documents_times_from_missing();
  list_empty_is_assert_json(after, {
    hint: "a timing document a machine wrote still says nothing about where its moments came from, after being told to; read it and check nothing else is holding the file open",
  });
  let r = {
    marked: before.length,
    names,
  };
  return r;
}
