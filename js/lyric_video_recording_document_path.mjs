import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
export function lyric_video_recording_document_path(path_document, mark) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain mark");
  ("Where the timing document of one particular recording of a passage is kept: the passage's own address for the plain recording, and that address carrying the mark for every other recording of it.");
  ("★ THE PLAIN RECORDING KEEPS THE ADDRESS IT ALREADY HAD, WHICH IS WHY THE TIMES ALREADY CORRECTED BY HAND SURVIVE THIS. Somebody has sat with several of these songs and moved each line onto the beat it is sung on, and those documents are named after their passage because at the time a passage meant one song. Marking every recording including the plain one would rename all of them, and a renamed document is a document the drafting walk cannot see - so it would draft an even spread at the new address and the corrected times would be sitting in a file nothing reads again.");
  ("★ THE MARK IS WORKED OUT FROM THE RECORDINGS THEMSELVES AND IS ONLY SPELLED HERE. What tells two singings of one passage apart is a question about the whole set of them, so it is answered where the set is, and this is handed the answer; a passage with one recording is handed nothing and gets the plain address.");
  ("It grows an address rather than spelling one, so a change to where documents live or what they end in reaches this without it being edited. What is added is only the part that says which recording, because that is the one thing that is not about the passage.");
  let plain = equal(mark, "");
  if (plain) {
    return path_document;
  }
  let stem = text_without_ending(path_document, ".json");
  let path = stem + "_" + mark + ".json";
  return path;
}
