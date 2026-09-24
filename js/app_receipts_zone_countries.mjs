import { arguments_assert } from "./arguments_assert.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { country_usa } from "./country_usa.mjs";
export function app_receipts_zone_countries() {
  "The two places whose clocks the list of purchases can be read in: the Philippines, where purchases are made and whose time they are kept in, first, and the eastern United States, where they are reviewed.";
  arguments_assert(arguments, 0);
  let r = country_philippines();
  let c = country_usa();
  let countries = [r, c];
  return countries;
}
