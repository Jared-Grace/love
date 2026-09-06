import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_line_faults } from "./lyric_video_document_line_faults.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function lyric_video_documents_gate_run_document_measured() {
  "Builds the reading that one timed lyric document is put through: how many lines it holds, and every fault in their moments, which are a line given only one of its two moments, a line that ends before it begins, and a line that begins before one written above it.";
  "What counts as a fault is judged a line at a time somewhere else, and this only opens the document and gathers what came back. The judgement is worth its own name because a person reading a failed gate wants to argue with the rule rather than with the walk over the lines.";
  arguments_assert(arguments, 0);
  async function document_measured(path_document) {
    let document_timed = await file_read_json(path_document);
    let lines = document_timed.lines;
    function line_faults(line, index) {
      let faults = lyric_video_document_line_faults(
        path_document,
        lines,
        line,
        index,
      );
      return faults;
    }
    let by_line = lines.map(line_faults);
    let faults_here = list_concat_multiple(by_line);
    let measured = {
      lines_read: list_size(lines),
      faults: faults_here,
    };
    return measured;
  }
  return document_measured;
}
