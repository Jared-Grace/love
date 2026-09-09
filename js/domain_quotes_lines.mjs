import { equal } from "./equal.mjs";
export function domain_quotes_lines(quotes) {
  "The quotes as one line each - the name, the first year, every year after, and the word premium when the registry has priced that particular name rather than charging the ending's ordinary rate - which is the shape to read straight down.";
  let lines = [];
  for (let quote of quotes) {
    let premium = quote.premium ? " premium" : "";
    let first = domain_quotes_lines_money(quote.registration);
    let yearly = domain_quotes_lines_money(quote.renewal);
    lines.push(quote.domain + " " + first + " " + yearly + premium);
  }
  function domain_quotes_lines_money(value) {
    if (equal(value, null)) {
      let r = "-";
      return r;
    }
    let said = value.toFixed(2);
    return said;
  }
  return lines;
}
