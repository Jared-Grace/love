import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function xml_text_escape(text) {
  "$plain text";
  "A piece of writing with its five special characters turned into the named escapes xml spells them with, so it can be put inside xml and still say what it said.";
  "★ THE AMPERSAND IS TURNED FIRST, which is the opposite order to turning them back. Every escape written by the other four begins with an ampersand, so an ampersand turned last would be turned twice and a less-than sign would come out as &amp;amp;lt;.";
  ("★ IT IS THE OTHER HALF OF ",
    fn_name("xml_text_unescape"),
    ", and the two are only a pair while both spell the same five. A caller putting a reader's own words into markup has no way to know which characters the markup will choke on, which is the whole reason this is a named thing rather than a line written at each place that needs it.");
  arguments_assert(arguments, 1);
  let r = text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
  return r;
}
