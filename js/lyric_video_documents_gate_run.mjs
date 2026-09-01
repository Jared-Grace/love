import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_documents_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every timing document keeps its lines in the order they are sung - each line ends after it begins, no line begins before a line above it, and a line either has both of its moments or neither.");
  ("A DOCUMENT THAT BREAKS THIS WAS FOUND BY WATCHING THE VIDEO, WHICH IS THE MOST EXPENSIVE WAY THERE IS TO BE TOLD. The closing Hallelujah of Psalm a hundred and forty-eight had never been tapped, and the rounding turned nothing into zero, so it was written as beginning at second zero and running the whole length of the song. Nothing anywhere said so: the file was well-formed, every gate was green, and the fault appeared only as a card standing over every other card for two and a half minutes, minutes after ffmpeg had been asked to make it. Reading the three files takes no measurable time and says the same thing before the render is started.");
  ("A LINE WITH NEITHER MOMENT IS NOT A FAULT, BECAUSE IT IS THE HONEST RECORD OF A LINE NOBODY HAS HEARD YET. Somebody times half a psalm, stops, and comes back tomorrow; the untimed half has to be able to sit in the file overnight. What is a fault is a line holding one moment and not the other, which no route through the code can produce and so means a document was edited by hand into a state that renders as a card with no end or no beginning.");
  ("The check is against nothing rather than against a written-down number of known offenders, because there is no reading under which a line sung before the line above it is acceptable. A ratchet is for a fault being paid down; this one is a fault being kept out.");
  ("★ HOW MUCH WAS READ TRAVELS OUT WITH THE VERDICT, because finding no fault and reading no file are the same green word otherwise. The folder is named by one function and the documents in it are picked out by their ending, so a rename of either would leave this sweeping an empty list and saying every timing document is in order. Both numbers are carried: the documents fall to nothing if the folder moves, and the lines fall to nothing if the documents are still found but what is inside them is reached under some other name.");
  ("The answer is bound to a name of its own rather than to the usual one, because the two nested functions below already bind that one, and the reader that looks for what a gate hands back steps from the returned name to the first line in the whole function binding it - which would be the empty list inside the innermost of them. Side-by-side scopes may reuse a name and nothing goes red, so this is not a fault being worked around; it is a name chosen to be unambiguous where an ambiguous one would silently answer for something else.");
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
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
        let r = [];
        return r;
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
        let r2 = [only_one];
        return r2;
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
      let starts_above = lines
        .slice(0, index)
        .map(line_start)
        .filter(number_is);
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
  let by_document = await list_map_unordered_async(
    paths_json,
    document_measured,
  );
  let faults_by_document = list_map_property(by_document, "faults");
  let faults_all = list_concat_multiple(faults_by_document);
  let lines_by_document = list_map_property(by_document, "lines_read");
  let lines_read = list_sum(lines_by_document);
  let documents = list_size(paths_json);
  list_empty_is_assert_json(faults_all, {
    hint: "a lyric timing document has lines out of the order they are sung; open it on the timing desk and tap the named line again, or clear both of its moments if it was never heard - never leave one moment set and the other missing",
  });
  let walked = {
    documents,
    lines_read,
  };
  return walked;
}
