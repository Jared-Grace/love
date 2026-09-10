import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
export function lyric_video_recording_document_path(path_document, take) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain take");
  ("Where the timing document of one particular recording of a passage is kept: the passage's own address for the first recording, and that address marked with the take for every one after it.");
  ("★ THE FIRST RECORDING KEEPS THE ADDRESS IT ALREADY HAD, WHICH IS WHY THE TIMES ALREADY CORRECTED BY HAND SURVIVE THIS. Somebody has sat with several of these songs and moved each line onto the beat it is sung on, and those documents are named after their passage because at the time a passage meant one song. Marking every recording including the first would rename all of them, and a renamed document is a document the drafting walk cannot see - so it would draft an even spread at the new address and the corrected times would be sitting in a file nothing reads again.");
  ("★ THE MARK IS THE TAKE THE FILE NAME ITSELF CARRIES, RATHER THAN A NUMBER COUNTED OUT HERE. Counting would depend on how many recordings happened to be in the folder when the walk ran, so downloading a further singing of a psalm could shift what an existing document is called and quietly hand one recording another one's times. The take is written on the file and does not move.");
  ("It grows an address rather than spelling one, so a change to where documents live or what they end in reaches this without it being edited. What is added is only the part that says which recording, because that is the one thing that is not about the passage.");
  let first = equal(take, 0);
  if (first) {
    return path_document;
  }
  let stem = text_without_ending(path_document, ".json");
  let path = stem + "_take" + take + ".json";
  return path;
}
