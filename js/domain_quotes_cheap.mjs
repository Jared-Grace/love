import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export function domain_quotes_cheap(quotes, renewal_max) {
  "The quotes worth reading first: the names that can actually be bought and whose every-year price is at or under a ceiling, cheapest year first.";
  "THE RENEWAL IS THE PRICE, NOT THE FIRST YEAR. A first year is a promotion and is paid once; the renewal is paid for as long as the site lives, and the two are set separately - measured, .church was $6.69 to start and $46.86 every year after.";
  let cheap = quotes.filter(affordable);
  function affordable(quote) {
    if (not(quote.available)) {
      return false;
    }
    if (equal(quote.renewal, null)) {
      return false;
    }
    let within = less_than_equal(quote.renewal, renewal_max);
    return within;
  }
  let sorted = cheap.slice();
  sorted.sort(by_renewal);
  function by_renewal(a, b) {
    let difference = subtract(a.renewal, b.renewal);
    if (not_equal(difference, 0)) {
      return difference;
    }
    let first_year = subtract(a.registration, b.registration);
    return first_year;
  }
  return sorted;
}
