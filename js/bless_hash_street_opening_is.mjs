import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { bless_hash_street_openings } from "./bless_hash_street_openings.mjs";
import { list_includes } from "./list_includes.mjs";
export function bless_hash_street_opening_is() {
  "Whether the address this visit was opened with names one of the openings onto the street.";
  "ASKED OF THE ADDRESS RATHER THAN REMEMBERED, so it is spelled afresh in the link every time and no visit inherits it. A skip that stuck would be a skip a player could fall into: the one prayer this game is built around, turned off by a setting nobody knew was on. Typed into the address, it cannot outlive the tab it was typed in.";
  "ANY OPENING DOES IT, not one particular word. What they have in common is what matters - each of them hands over the real street to somebody who came to work on it - and a new opening that had to remember to name itself at each skip would be an address that put a door back up for no reason anybody could see.";
  "What is skipped once the address says so is each skip's own question, and there is more than one of them: the prayer at the door is not the prayer over a person, and one of them is asked only where the dev tools are offered at all. This answers the half they share.";
  arguments_assert(arguments, 0);
  let name = html_hash_name_get();
  let openings = bless_hash_street_openings();
  let opening_is = list_includes(openings, name);
  return opening_is;
}
