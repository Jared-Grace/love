import { lyric_timing_lag_measured } from "../../../js/lyric_timing_lag_measured.mjs";
import { lyric_timing_lag_measured_cases } from "../../../js/lyric_timing_lag_measured_cases.mjs";
import { list_sorted_percentile } from "../../../js/list_sorted_percentile.mjs";

("Twelve wrong ways of working out how long after a sound somebody presses, kept so the corpus can be asked again whether it still tells them apart.");

("Two of them are let off below rather than closed with a case, and the reason beside each one is a claim about what else in the repo does: that presses only ever arrive already in order, and that every sound is either answered or counted missed. Both are true today and both would stop being true quietly, which is why they are written down where a reader of this file will meet them.");

function ascending(a, b) {
  let difference = a - b;
  return difference;
}

function middle_of(sorted, options) {
  if (options.mean_not_middle) {
    let total = sorted.reduce(function (running, one) {
      let added = running + one;
      return added;
    }, 0);
    let mean = total / sorted.length;
    return mean;
  }
  if (options.middle_low_side) {
    let low = sorted[Math.floor((sorted.length - 1) / 2)];
    return low;
  }
  if (options.middle_high_side) {
    let high = sorted[Math.ceil((sorted.length - 1) / 2)];
    return high;
  }
  let percentile = list_sorted_percentile(sorted, 0.5);
  return percentile;
}

function reader_of(options) {
  function answer(one) {
    let clicks = one.clicks;
    let taps = one.taps;
    let window_seconds = one.window_seconds;
    let pressed = options.no_sort ? taps.slice() : taps.slice().sort(ascending);
    let differences = [];
    let missed = 0;
    if (options.search_per_click) {
      for (let click of clicks) {
        let found = pressed.find(function (press) {
          let inside = press >= click && press - click <= window_seconds;
          return inside;
        });
        if (found === undefined) {
          missed = missed + 1;
        } else {
          differences.push(found - click);
        }
      }
    } else {
      let next = 0;
      for (let click of clicks) {
        while (next < pressed.length && pressed[next] < click) {
          next = next + 1;
        }
        let waiting = next < pressed.length;
        let gap = waiting ? pressed[next] - click : null;
        let inside = options.window_strict
          ? gap < window_seconds
          : options.window_ignored
            ? true
            : gap <= window_seconds;
        let answered = waiting && inside;
        if (answered) {
          differences.push(gap);
          if (!options.no_advance) {
            next = next + 1;
          }
        } else {
          missed = missed + 1;
        }
      }
    }
    let heard = options.heard_counts_presses ? taps.length : differences.length;
    let sorted = differences.slice().sort(ascending);
    let any = differences.length > 0;
    let lag = any
      ? middle_of(sorted, options)
      : options.lag_zero_when_none
        ? 0
        : null;
    let missed_reported = options.missed_derived
      ? clicks.length - differences.length
      : missed;
    let r = {
      lag,
      heard,
      missed: missed_reported,
    };
    return r;
  }
  return answer;
}

export const red_proof = {
  fn: lyric_timing_lag_measured.name,
  cases: lyric_timing_lag_measured_cases,
  expected: "measured",
  described: "why",
  wrong: {
    search_per_click: reader_of({ search_per_click: true }),
    no_advance: reader_of({ no_advance: true }),
    window_strict: reader_of({ window_strict: true }),
    window_ignored: reader_of({ window_ignored: true }),
    mean_not_middle: reader_of({ mean_not_middle: true }),
    middle_low_side: reader_of({ middle_low_side: true }),
    middle_high_side: reader_of({ middle_high_side: true }),
    heard_counts_presses: reader_of({ heard_counts_presses: true }),
    lag_zero_when_none: reader_of({ lag_zero_when_none: true }),
    no_sort: reader_of({ no_sort: true }),
    missed_derived: reader_of({ missed_derived: true }),
  },
  allowed: {
    no_sort:
      "The presses are only ever put in order by one thing in the repo - the desk hands them over in the order they were made - so sorting a list that is already sorted changes nothing on any run this can be given. It stops being the same working-out the moment something else writes a run of presses, a file loaded back or several devices merged, and then this needs a case rather than this sentence.",
    missed_derived:
      "Every sound either takes a press or is counted as missed and there is no third way through the loop, so counting the ones that missed and taking the ones that were heard away from the total are the same number arrived at from opposite ends. It stops being the same the moment a sound can be passed over without going down either side.",
  },
};
