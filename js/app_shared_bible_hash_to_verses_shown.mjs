import { not } from "./not.mjs";
import { app_shared_bible_verses_shown_hash_key } from "./app_shared_bible_verses_shown_hash_key.mjs";
import { app_shared_bible_verses_count_maximum } from "./app_shared_bible_verses_count_maximum.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { catch_null } from "./catch_null.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_shared_bible_hash_to_verses_shown(hash) {
  "How many verses a link is asking to have on the screen, which is a thing only a link that has been pressed for more says at all.";
  "Nothing is the ordinary answer and is not a mistake: a link somebody was sent asks for a passage the size they chose, and says nothing about being extended because it has not been. So this answers nothing rather than a number, and the page asking it falls back to the chosen size - which is also what every link written before this word existed does.";
  "A number that is there is read as forgivingly as the chosen size beside it, and for the same reason: a person types this into an address bar by hand, and a page that refuses loudly while it is opening says less than a page showing a slightly wrong number of verses does. Below one is answered as nothing at all, because a passage of no verses is not what anybody meant by pressing for more.";
  let key = app_shared_bible_verses_shown_hash_key();
  let text = property_get_or(hash, key, null);
  function lambda() {
    let n = number_from_text(text);
    return n;
  }
  let number = catch_null(lambda);
  let at_least_one = greater_than_equal_1(number);
  if (not(at_least_one)) {
    return null;
  }
  let maximum = app_shared_bible_verses_count_maximum();
  let over = greater_than(number, maximum);
  if (over) {
    return maximum;
  }
  return number;
}
