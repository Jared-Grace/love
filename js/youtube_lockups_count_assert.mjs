import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { error_json } from "./error_json.mjs";
export function youtube_lockups_count_assert(found, stated, ask) {
  "Refuse a reading that holds fewer things than youtube said the list holds, rather than handing the short reading back as if it were the whole list.";
  "A page that arrives without the token asking for the next one is not an error to anybody: the reading simply ends, the caller is given what came, and nothing anywhere says it is a piece. That happened - a playlist of twenty-five songs answered as ten - and the danger is not the missing fifteen but what is done with the answer. Adding to a playlist puts a song at the end, so a short reading of what a playlist already holds is turned straight into fifteen songs appended out of order, by code that was right.";
  "Nothing is checked when youtube did not say a number, because a check that invents its expectation fails on the days it is wrong about, which is worse than not checking.";
  arguments_assert(arguments, 3);
  if (equal(stated, null)) {
    return;
  }
  if (not_equal(found, stated)) {
    error_json({
      message:
        "youtube says this list holds a different number of things than were read, so the reading is a piece of the list and not the list",
      found: found,
      stated: stated,
      ask: ask,
    });
  }
}
