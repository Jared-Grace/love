import { lyric_timing_line_tapped } from "../../../js/lyric_timing_line_tapped.mjs";
import { lyric_timing_line_tapped_cases } from "../../../js/lyric_timing_line_tapped_cases.mjs";

("Eleven wrong ways of reading a saved line back off a timing document, kept so the corpus can be asked again whether it still tells them apart.");

("What decides an end is one question asked twice - once about the moment the line was tapped to start and once about the moment it was tapped to stop - so most of the wrong versions here are that question asked once, asked about the wrong end, or asked with a word that means something slightly else.");

("Two of them are let off below rather than closed with a case, and both are the same working-out in other words rather than holes. The reasons are the corpus's own, repeated here because a reader meeting this file may never open that one.");

function value_of(line, tapped_key, corrected_key, options) {
  let tapped = line[tapped_key];
  let corrected = line[corrected_key];
  if (options.tap_always) {
    return tapped;
  }
  if (options.tap_never) {
    return corrected;
  }
  let kept = options.worth_anything
    ? Boolean(tapped)
    : options.not_null_only
      ? tapped !== null
      : options.present_not_null
        ? tapped !== null && tapped !== undefined
        : typeof tapped === "number" && isFinite(tapped);
  let value = kept ? tapped : corrected;
  return value;
}

function number_is_local(value) {
  let is = typeof value === "number" && isFinite(value);
  return is;
}

function reader_of(options) {
  function answer(one) {
    let line = one.line;
    if (options.one_question_for_pair) {
      let both =
        number_is_local(line.start_tapped) && number_is_local(line.end_tapped);
      let paired = {
        start: both ? line.start_tapped : line.start,
        end: both ? line.end_tapped : line.end,
        text: line.text,
      };
      return paired;
    }
    if (options.start_decides_both) {
      let by_start = number_is_local(line.start_tapped);
      let led = {
        start: by_start ? line.start_tapped : line.start,
        end: by_start ? line.end_tapped : line.end,
        text: line.text,
      };
      return led;
    }
    if (options.end_decides_both) {
      let by_end = number_is_local(line.end_tapped);
      let led = {
        start: by_end ? line.start_tapped : line.start,
        end: by_end ? line.end_tapped : line.end,
        text: line.text,
      };
      return led;
    }
    let start = value_of(line, "start_tapped", "start", options);
    let end = value_of(line, "end_tapped", "end", options);
    if (options.ends_crossed) {
      let crossed = {
        start: end,
        end: start,
        text: line.text,
      };
      return crossed;
    }
    if (options.tapped_kept) {
      let carried = {
        start,
        end,
        text: line.text,
        start_tapped: line.start_tapped,
        end_tapped: line.end_tapped,
      };
      return carried;
    }
    let read = {
      start,
      end,
      text: options.no_text ? "" : line.text,
    };
    return read;
  }
  return answer;
}

export const red_proof = {
  fn: lyric_timing_line_tapped.name,
  cases: lyric_timing_line_tapped_cases,
  expected: "line_hand",
  described: "why",
  wrong: {
    one_question_for_pair: reader_of({ one_question_for_pair: true }),
    start_decides_both: reader_of({ start_decides_both: true }),
    end_decides_both: reader_of({ end_decides_both: true }),
    tap_always: reader_of({ tap_always: true }),
    tap_never: reader_of({ tap_never: true }),
    ends_crossed: reader_of({ ends_crossed: true }),
    no_text: reader_of({ no_text: true }),
    tapped_kept: reader_of({ tapped_kept: true }),
    not_null_only: reader_of({ not_null_only: true }),
    worth_anything: reader_of({ worth_anything: true }),
    present_not_null: reader_of({ present_not_null: true }),
  },
  allowed: {
    worth_anything:
      "It decides whether a moment was recorded by asking whether the number is worth anything, which throws away a tap of zero - but a tap of zero corrects to zero, since the correction only ever moves a moment earlier and the floor holds it there, so on every document this pipeline can write it gives the right answer anyway. It stops being the same the day something writes a document where the two disagree.",
    present_not_null:
      "It asks whether a record is neither null nor missing instead of asking whether it is a number, and it agrees everywhere because only one thing in the repo ever writes these records - the lag correction, which copies the moment the document already held - so a record is a number or it is null and there is no third shape to tell the two questions apart. That is an argument about what can be written, not about what these cases happen to cover, and it expires the moment something else writes a tapped record.",
  },
};
