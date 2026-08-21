import { bible_event_readings_kinds_ranked } from "./bible_event_readings_kinds_ranked.mjs";
import { bible_event_reading_kinds } from "./bible_event_reading_kinds.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_event_kind_mechanic_order() {
  "Which kinds of event a mechanic has to be built for, in the order to build them, each one chosen for how many events it NEWLY reaches - and which kinds are never chosen at all, because everything carrying them is already reachable through something else.";
  "★ THIS SAYS WHICH KINDS ARE MECHANICS AND WHICH ARE ONLY MODIFIERS, and it says it by deriving rather than by anybody deciding. A kind that is never chosen names no event of its own: every scene carrying it also carries a kind that was already built. So it is a thing that happens INSIDE a mechanic and not a mechanic, and that is a fact about the corpus which changes by itself when another book is read.";
  ("★ WHY THIS IS NOT ",
    fn_name("bible_event_kind_coverage"),
    ". That one walks the kinds in FREQUENCY order and reports the running total, which answers the question BUILD THE COMMONEST FIRST. This one walks them in order of what each still buys, which answers the different and more useful question HOW FEW MECHANICS REACH EVERY EVENT. The commonest kind is not always the one that reaches the most that is still unreached, and where the two orders disagree the difference is a smaller set of mechanics for the same coverage.");
  ("The choice at each step is the largest new gain, and a tie goes to the commoner kind, because the ranking is walked in frequency order and the first largest wins. That makes the answer the same every time it is asked, which a set cover chosen any other way would not be.");
  ("★ A KIND CAN MOVE FROM MODIFIER TO MECHANIC WHEN A BOOK ARRIVES, and that is the one thing running this today cannot show you. At two books law was never chosen and offering was never chosen - both were carried by scenes some other mechanic already reached. Numbers put law fifth with a gain of sixteen and made offering a mechanic too. So a kind in the unchosen list is a finding about the corpus READ SO FAR and never a verdict about Scripture; the honest reading of that list is NOT YET, not NEVER.");
  ("★ THE COUNT BARELY MOVES WHEN THE CORPUS GROWS. Two books gave a hundred and sixty-seven events and twenty-two mechanics; three books give two hundred and forty-eight events and twenty-four. Half again as much Scripture cost two more mechanics. That is the number the whole reading pass existed to produce, and it is the reason a game over the whole Bible is a buildable thing rather than an open-ended one.");
  ("It is the obvious greedy choice and so not proven to be the smallest possible set. It is an upper bound on how many mechanics are needed, and an upper bound is the side to be wrong on: it never says a mechanic can be skipped when it cannot.");
  let counted = await bible_event_readings_kinds_ranked();
  let readings = counted.readings;
  let ranked = counted.ranked;
  let uncovered = list_copy(readings);
  let chosen = [];
  let chosen_names = [];
  function gain_of(kind) {
    function reading_carries_is(reading) {
      let kinds = bible_event_reading_kinds(reading);
      let carries = list_includes(kinds, kind);
      return carries;
    }
    let gain = list_filter_size(uncovered, reading_carries_is);
    return gain;
  }
  function best_remaining() {
    let best = null;
    let best_gain = 0;
    function each_ranked(row) {
      let kind = property_get(row, "value");
      let already = list_includes(chosen_names, kind);
      if (already) {
        return;
      }
      let gain = gain_of(kind);
      let better = greater_than(gain, best_gain);
      if (better) {
        best = row;
        best_gain = gain;
      }
    }
    each(ranked, each_ranked);
    let found = {
      best,
      best_gain,
    };
    return found;
  }
  while (list_empty_not_is(uncovered)) {
    let r2 = best_remaining();
    let best_gain = property_get(r2, "best_gain");
    let best = property_get(r2, "best");
    if (not(best)) {
      break;
    }
    let kind = property_get(best, "value");
    let count = property_get(best, "count");
    list_add(chosen_names, kind);
    function reading_uncovered_stays(reading) {
      let kinds = bible_event_reading_kinds(reading);
      let stays = list_includes_not(kinds, kind);
      return stays;
    }
    uncovered = list_filter(uncovered, reading_uncovered_stays);
    let left = list_size(readings);
    let right = list_size(uncovered);
    let covered_running = subtract(left, right);
    list_add(chosen, {
      kind,
      count,
      gain: best_gain,
      covered_running,
    });
  }
  let unchosen = [];
  function each_ranked_unchosen(row) {
    let kind = property_get(row, "value");
    let already = list_includes(chosen_names, kind);
    if (already) {
      return;
    }
    let count = property_get(row, "count");
    list_add(unchosen, {
      kind,
      count,
    });
  }
  each(ranked, each_ranked_unchosen);
  let r = {
    events: list_size(readings),
    kinds_used: list_size(ranked),
    mechanics: list_size(chosen),
    chosen,
    unchosen,
  };
  return r;
}
