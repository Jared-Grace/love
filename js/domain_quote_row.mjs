import { equal } from "./equal.mjs";
import { domain_price_dollars } from "./domain_price_dollars.mjs";
export function domain_quote_row(result) {
  "One name's answer from a bulk price check, said plainly: whether it can be bought, whether the registry has priced this particular name rather than charging the ending's ordinary rate, and what the first year, each year after, and a move in cost.";
  "PREMIUM IS THE WHOLE REASON THIS EXISTS. A catalogue rate for an ending is not a quote for a name - measured, jesus.love asked $7,642 to register and $10,917 a year while .love's ordinary rate was under thirty dollars.";
  let extended = result.extended || {};
  let pricing = extended.typePricing || {};
  let row = {
    domain: result.domain,
    available: equal(result.result, "AVAILABLE"),
    pending: equal(result.result, "PENDING"),
    premium: extended.premium ? true : false,
    registration: domain_price_dollars(pricing.registration),
    renewal: domain_price_dollars(pricing.renewal),
    transfer: domain_price_dollars(pricing.transfer),
  };
  return row;
}
