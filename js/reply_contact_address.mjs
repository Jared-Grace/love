import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_phone_number } from "./reply_phone_number.mjs";
import { reply_response_whatsapp } from "./reply_response_whatsapp.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_letters_at_most } from "./reply_letters_at_most.mjs";
import { reply_roads } from "./reply_roads.mjs";
import { reply_cities } from "./reply_cities.mjs";
import { reply_cantonment } from "./reply_cantonment.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_contact_address() {
  "Somebody giving a phone number: maybe the word contact, the number, then maybe a short street name, a road word, a listed town and a cantonment. The number is answered with the WhatsApp line, in the place the number stood.";
  "★ THE NUMBER AND THE ROAD WORD ARE WHAT KEEP THE STREET NAME HONEST. The letters of a street name could be anything, so what says this is an address is a whole phone number before them and a road word after them.";
  let o_contact = reply_sequence_optional(["contact"]);
  let number = reply_phone_number();
  let whatsapp = reply_response_whatsapp();
  let phone = reply_on_match_output(number, whatsapp);
  let street = reply_letters_at_most(12);
  let roads = reply_roads();
  let cities = reply_cities();
  let area = reply_cantonment();
  let o_area = reply_optional(area);
  let town = reply_sequence([cities, o_area]);
  let o_town = reply_optional(town);
  let address = reply_sequence([street, roads, o_town]);
  let o_address = reply_optional(address);
  let contact = reply_sequence([o_contact, phone, o_address]);
  return contact;
}
