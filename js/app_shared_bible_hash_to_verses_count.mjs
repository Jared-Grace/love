import { app_shared_bible_verses_count_hash_key } from "./app_shared_bible_verses_count_hash_key.mjs";
import { app_shared_bible_verses_count_default } from "./app_shared_bible_verses_count_default.mjs";
import { app_shared_bible_verses_count_maximum } from "./app_shared_bible_verses_count_maximum.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { catch_null } from "./catch_null.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_shared_bible_hash_to_verses_count(hash) {
  "How many verses in a row a link is asking for, read off the link itself.";
  "It is read forgivingly rather than strictly, because a person types this word into an address bar by hand. A word that is not a number at all, or a number below one, is answered as one verse; a number past the ceiling is answered as the ceiling. Refusing loudly here would stop the page while it was opening, before a single line had been drawn, and a page that never arrives says less than a wrong number does.";
  let key = app_shared_bible_verses_count_hash_key();
  let fallback = app_shared_bible_verses_count_default();
  let text = property_get_or(hash, key, fallback);
  function lambda() {
    let n = number_from_text(text);
    return n;
  }
  let number = catch_null(lambda);
  let count = number_from_text(fallback);
  let at_least_1 = greater_than_equal_1(number);
  if (at_least_1) {
    count = number;
  }
  let maximum = app_shared_bible_verses_count_maximum();
  let over = greater_than(count, maximum);
  if (over) {
    count = maximum;
  }
  return count;
}
