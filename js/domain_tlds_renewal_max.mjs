import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export function domain_tlds_renewal_max(pricing, renewal_max) {
  "The endings worth asking about: the ones whose ordinary every-year price is at or under a ceiling, cheapest first.";
  "THE CEILING IS ON THE RENEWAL BECAUSE THAT IS THE PRICE. A first year is a promotion paid once - .church opens at $6.69 and asks $46.86 every year after.";
  "THE HANDSHAKE ENDINGS ARE LEFT OUT, and there are 273 of them in a list of about 700. They are not endings the ordinary internet resolves at all - a site under one is reachable only by somebody running that naming system, which no church's congregation is.";
  let endings = [];
  for (let tld of object_property_names(pricing)) {
    let sold = pricing[tld];
    let handshake = equal(sold.specialType, "handshake");
    if (handshake) {
      continue;
    }
    let renewal = Number(sold.renewal);
    let b2 = less_than_equal(renewal, renewal_max);
    if (not(b2)) {
      continue;
    }
    endings.push({
      tld,
      renewal,
    });
  }
  endings.sort(by_renewal);
  function by_renewal(a, b) {
    let difference = subtract(a.renewal, b.renewal);
    return difference;
  }
  let names = endings.map(named);
  function named(ending) {
    let r = ending.tld;
    return r;
  }
  return names;
}
