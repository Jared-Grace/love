import { digits } from "./digits.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_letters_at_most } from "./reply_letters_at_most.mjs";
import { reply_roads } from "./reply_roads.mjs";
import { reply_cities } from "./reply_cities.mjs";
import { reply_cantonment } from "./reply_cantonment.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_contact_address() {
  "Somebody giving a phone number and a street: contact, the digits, a short street name, a road word, then maybe a listed town and a cantonment.";
  "★ THE CLOSED WORDS ARE WHAT KEEP THE STREET NAME HONEST. The letters of a street name could be anything, so what says this is an address is the word contact, the digits and the road word around them.";
  let choices = digits();
  let one_digit = reply_choice(choices);
  let number = reply_once_or_more(one_digit);
  let street = reply_letters_at_most(12);
  let roads = reply_roads();
  let cities = reply_cities();
  let area = reply_cantonment();
  let o_area = reply_optional(area);
  let town = reply_sequence([cities, o_area]);
  let o_town = reply_optional(town);
  let address = reply_sequence(["contact", number, street, roads, o_town]);
  return address;
}
