import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function date_zone_abbreviation(d, zone) {
  "$plain d";
  "$plain zone";
  "The short name a named zone goes by at a moment, which changes with summer time: 'America/New_York' is 'EST' in January and 'EDT' in July.";
  arguments_assert(arguments, 2);
  let format = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    timeZoneName: "short",
  });
  for (let part of format.formatToParts(d)) {
    if (equal(part.type, "timeZoneName")) {
      let r = part.value;
      return r;
    }
  }
  let r2 = "";
  return r2;
}
