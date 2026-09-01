import { lyric_timing_lines_timed } from "../../../js/lyric_timing_lines_timed.mjs";
import { lyric_timing_lines_timed_cases } from "../../../js/lyric_timing_lines_timed_cases.mjs";

("Sixteen wrong ways of turning tapped moments into lines, each one a single change away from the real reader, kept so the corpus can be asked again whether it still tells them apart.");

("They are built out of one shared body given different settings rather than written sixteen times over, because sixteen copies of the same thirty lines would drift apart and the drift would look like a finding. What each one is wrong about is then the one setting that is switched on, which is also its name.");

function number_is_local(value) {
  let is = typeof value === "number" && isFinite(value);
  return is;
}

function round_hundredths(seconds) {
  let rounded = Math.round(seconds * 100) / 100;
  return rounded;
}

function reader_of(options) {
  function reader(starts, texts, duration) {
    let gap = options.gap === undefined ? 0.05 : options.gap;
    let timed_is = options.timed_is || number_is_local;
    let round_start = options.round_start || round_hundredths;
    let round_end = options.round_end || round_hundredths;
    let lines = starts.map(function (start, index) {
      if (!timed_is(start)) {
        if (options.untimed_zero) {
          let after_untimed = starts.slice(index + 1).find(timed_is);
          let end_untimed =
            after_untimed === undefined ? duration : after_untimed - gap;
          return {
            start: round_start(start),
            end: round_end(end_untimed),
            text: texts[index],
          };
        }
        if (options.drop_untimed) {
          return null;
        }
        return { start: null, end: null, text: texts[index] };
      }
      let after;
      if (options.next_line_not_next_timed) {
        after = starts[index + 1];
        if (!number_is_local(after)) {
          after = undefined;
        }
      } else if (options.search_from_self) {
        after = starts.slice(index).find(timed_is);
      } else if (options.search_whole) {
        after = starts.find(timed_is);
      } else {
        after = starts.slice(index + 1).find(timed_is);
      }
      let last = after === undefined;
      let end;
      if (last) {
        end = options.gap_on_last
          ? duration - gap
          : options.last_end_null
            ? null
            : duration;
      } else {
        end = after - gap;
      }
      let rounded_end =
        end === null
          ? null
          : options.round_before_gap && !last
            ? round_end(after) - gap
            : round_end(end);
      return {
        start: round_start(start),
        end: rounded_end,
        text: options.no_text ? "" : texts[index],
      };
    });
    return options.drop_untimed ? lines.filter(Boolean) : lines;
  }
  function answer(one) {
    let r = reader(one.starts, one.texts, one.duration);
    return r;
  }
  return answer;
}

let unrounded = function (seconds) {
  return seconds;
};

let floor_hundredths = function (seconds) {
  let f = Math.floor(seconds * 100) / 100;
  return f;
};

let ceiling_hundredths = function (seconds) {
  let c = Math.ceil(seconds * 100) / 100;
  return c;
};

export const red_proof = {
  fn: lyric_timing_lines_timed.name,
  cases: lyric_timing_lines_timed_cases,
  expected: "lines",
  described: "why",
  wrong: {
    untimed_zero: reader_of({ untimed_zero: true }),
    drop_untimed: reader_of({ drop_untimed: true }),
    truthy_timed: reader_of({ timed_is: (start) => Boolean(start) }),
    no_gap: reader_of({ gap: 0 }),
    wide_gap: reader_of({ gap: 0.1 }),
    gap_on_last: reader_of({ gap_on_last: true }),
    next_line_not_next_timed: reader_of({ next_line_not_next_timed: true }),
    search_from_self: reader_of({ search_from_self: true }),
    search_whole: reader_of({ search_whole: true }),
    last_end_null: reader_of({ last_end_null: true }),
    no_round_start: reader_of({ round_start: unrounded }),
    no_round_end: reader_of({ round_end: unrounded }),
    floor_hundredths: reader_of({
      round_start: floor_hundredths,
      round_end: floor_hundredths,
    }),
    ceiling_hundredths: reader_of({
      round_start: ceiling_hundredths,
      round_end: ceiling_hundredths,
    }),
    round_before_gap: reader_of({ round_before_gap: true }),
    no_text: reader_of({ no_text: true }),
  },
  allowed: {},
};
