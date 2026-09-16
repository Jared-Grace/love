import { arguments_assert } from "./arguments_assert.mjs";
export function xml_text_unescape(text) {
  "$plain text";
  "What a piece of xml text says once its five named escapes are turned back into the characters they stand for.";
  "★ THE AMPERSAND IS TURNED BACK LAST. An escaped escape such as &amp;lt; says the four characters &lt; and not a less-than sign, and turning the ampersand back first would read it twice.";
  arguments_assert(arguments, 1);
  let r = text
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
  return r;
}
