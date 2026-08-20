import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function findings_from_data_named() {
  "Every file that was sitting in the data folder while being a record of what a check found out, said as the file's own name and the name of the one function holding its address.";
  "Written down rather than worked out, because telling the two apart is a judgment about what a file is for and nothing in the shape of a file says it. A count of how many bibles were read looks exactly like a list of which bibles to read; only somebody who knows why it was written can say that the first is an answer and the second is a question.";
  "The address function is named beside each one because a file name alone does not say which function spells it, and a search for the word would answer with everything that ever mentions the file rather than the one place its address is decided.";
  "Written out in full rather than shrinking as the move goes on, so it stays a list of which files are findings rather than a list of work left to do. The mover asks the disk whether each one is still there, which is what makes running this twice harmless.";
  arguments_assert(arguments, 0);
  let named = [
    ["bible_sentence_end_marks", fn_name("bible_sentence_end_marks_path")],
    ["bible_storage_books", fn_name("bible_storage_books_path")],
    ["bible_verse_holes", fn_name("bible_verse_holes_path")],
    ["ebible_index_flat_uploaded", fn_name("ebible_index_flat_uploaded_path")],
    ["ebible_readaloud_lines", fn_name("ebible_readaloud_lines_path")],
    ["prod_live_hashes", fn_name("firebase_prod_hashes_path")],
    ["promoted_from", fn_name("qa_promoted_path")],
    ["qa_gate_run_timings", fn_name("qa_gate_run_timings_path")],
    ["qa_gate_timings", fn_name("qa_gate_timings_path")],
  ];
  return named;
}
