import { reply_choice } from "./reply_choice.mjs";
export function reply_roads() {
  "The word that says a thing is a road - the last word of a street address and the only part of one that can be written down in full.";
  "★ THIS USED TO SPELL ONE REAL STREET. The shape was an optional `w`, then the name of an actual road somebody lives on, then the kind of road it is; beside a name, a town and a country that were equally particular, it completed a home address in a public repository. Only the kind survives here, and that is not a shortcut - the kinds of road are a closed handful and the names of roads are not a list anybody can hold.";
  "So an address is recognised by its shape and not by where it is: a number, then this word. Nothing is lost in the reply, which never repeats the address back.";
  let kinds = ["avenue", "blvd", "circle", "lane", "road", "street", "way"];
  let roads = reply_choice(kinds);
  return roads;
}
