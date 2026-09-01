import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function lyric_video_documents_gate_run_document_measured() {
  "Builds the reading that one timed lyric document is put through: how many lines it holds, and every fault in their moments, which are a line given only one of its two moments, a line that ends before it begins, and a line that begins before one written above it.";
  arguments_assert(arguments, 0);
  async function document_measured(path_document) {
    let document_timed = await file_read_json(path_document);
    let lines = document_timed.lines;
    function line_start(line) {
      let start = line.start;
      return start;
    }
    function line_faults(line, index) {
      let start = line.start;
      let end = line.end;
      let started = number_is(start);
      let ended = number_is(end);
      let untimed = not(started) && not(ended);
      if (untimed) {
        let faults_none = [];
        return faults_none;
      }
      let half_timed = not(started && ended);
      if (half_timed) {
        let only_one = {
          path_document,
          index,
          why: "one moment and not the other",
          start,
          end,
          text: line.text,
        };
        let r = [only_one];
        return r;
      }
      let backwards = less_than(end, start);
      let faults_backwards = backwards
        ? [
            {
              path_document,
              index,
              why: "ends before it begins",
              start,
              end,
              text: line.text,
            },
          ]
        : [];
      let above = lines.slice(0, index);
      let starts_above_all = above.map(line_start);
      let starts_above = list_filter(starts_above_all, number_is);
      function later_than_this(start_above) {
        let later = greater_than(start_above, start);
        return later;
      }
      let out_of_order = starts_above.filter(later_than_this);
      let goes_back = list_empty_not_is(out_of_order);
      let faults_back = goes_back
        ? [
            {
              path_document,
              index,
              why: "begins before a line above it",
              start,
              end,
              text: line.text,
            },
          ]
        : [];
      let faults = faults_backwards.concat(faults_back);
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
