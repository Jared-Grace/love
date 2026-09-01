import { property_list_size } from "./property_list_size.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_documents_gate_run_lines_read } from "./lyric_video_documents_gate_run_lines_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_documents_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every timing document keeps its lines in the order they are sung - each line ends after it begins, no line begins before a line above it, and a line either has both of its moments or neither.");
  ("A DOCUMENT THAT BREAKS THIS WAS FOUND BY WATCHING THE VIDEO, WHICH IS THE MOST EXPENSIVE WAY THERE IS TO BE TOLD. The closing Hallelujah of Psalm a hundred and forty-eight had never been tapped, and the rounding turned nothing into zero, so it was written as beginning at second zero and running the whole length of the song. Nothing anywhere said so: the file was well-formed, every gate was green, and the fault appeared only as a card standing over every other card for two and a half minutes, minutes after ffmpeg had been asked to make it. Reading the three files takes no measurable time and says the same thing before the render is started.");
  ("A LINE WITH NEITHER MOMENT IS NOT A FAULT, BECAUSE IT IS THE HONEST RECORD OF A LINE NOBODY HAS HEARD YET. Somebody times half a psalm, stops, and comes back tomorrow; the untimed half has to be able to sit in the file overnight. What is a fault is a line holding one moment and not the other, which no route through the code can produce and so means a document was edited by hand into a state that renders as a card with no end or no beginning.");
  ("The check is against nothing rather than against a written-down number of known offenders, because there is no reading under which a line sung before the line above it is acceptable. A ratchet is for a fault being paid down; this one is a fault being kept out.");
  ("★ HOW MUCH WAS READ TRAVELS OUT WITH THE VERDICT, because finding no fault and reading no file are the same green word otherwise. The folder is named by one function and the documents in it are picked out by their ending, so a rename of either would leave this sweeping an empty list and saying every timing document is in order. Both numbers are carried: the documents fall to nothing if the folder moves, and the lines fall to nothing if the documents are still found but what is inside them is reached under some other name.");
  let r2 = await lyric_video_documents_gate_run_lines_read();
  let lines_read = property_get(r2, "lines_read");
  let faults_all = property_get(r2, "faults_all");
  let documents = property_list_size(r2, "paths_json");
  list_empty_is_assert_json(faults_all, {
    hint: "a lyric timing document has lines out of the order they are sung; open it on the timing desk and tap the named line again, or clear both of its moments if it was never heard - never leave one moment set and the other missing",
  });
  let r = {
    documents,
    lines_read,
  };
  return r;
}
