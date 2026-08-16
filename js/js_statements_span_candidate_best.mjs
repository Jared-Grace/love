import { list_filter_size } from "./list_filter_size.mjs";
import { add } from "./add.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { span_worst_piece } from "./span_worst_piece.mjs";
import { span_row_better } from "./span_row_better.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice_include } from "./list_slice_include.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function js_statements_span_candidate_best(statements, addresses, from) {
  arguments_assert(arguments, 3);
  ("The run of lines starting at the given line whose cutting would leave the smallest worst piece behind, or nothing when no run starting there could be cut at all.");
  ("Best rather than longest, and the difference is the whole worth of the reading. Ranked by length the first thing offered on the longest function in the record was seventy-seven lines out of eighty-nine, which moves nearly the whole body and leaves a function of seventy-seven standing - a cut that changes the name of the problem and nothing else. What a cut is worth is measured next door, on how much is still too long once it is made.");
  ("Every end is tried rather than stopping at the first one that refuses. A run that cannot be cut does not stay uncuttable as it grows: a line further down may be the very line that brings into being the name an earlier line was writing to, and once that line is inside the run the writing is the run's own.");
  ("Both ends have to be lines a name reaches, because that is how the cut is told where to start and stop. A line no name reaches is skipped as an end and passed straight over in the middle, where it needs no address at all.");
  let address_from = list_get(addresses, from);
  if (null_is(address_from)) {
    return null;
  }
  ("The prose is left out of both counts. A body here is mostly paragraphs explaining itself, and counting those as length makes a run covering every line of work look as though it left a good deal behind - which is how a cut that moves the whole body and gains nothing came to be offered first.");
  let count = list_filter_size(statements, js_statement_work_is);
  ("The walk still goes over every line, prose and all, because a run is addressed by where it stands in the body rather than by where it stands among the lines of work. Only the counting leaves the prose out.");
  let count_lines = list_size(statements);
  let held = null;
  for (let to = from; less_than(to, count_lines); to++) {
    let address_to = list_get(addresses, to);
    if (null_is(address_to)) {
      continue;
    }
    let span = list_slice_include(statements, from, to);
    ("What is behind the run is handed over with it, because one of the three readings is about what the run would have to give back and that is decided by what the lines behind still read.");
    let after = add(to, 1);
    let tail = list_skip(statements, after);
    let cuttable = js_statements_span_cuttable_is(span, tail);
    if (not(cuttable)) {
      continue;
    }
    let size = list_filter_size(span, js_statement_work_is);
    let worst = span_worst_piece(count, size);
    let offered = {
      from,
      to,
      address_from,
      address_to,
      size,
      worst,
    };
    held = span_row_better(held, offered);
  }
  return held;
}
