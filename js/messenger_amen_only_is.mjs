import { equal } from "./equal.mjs";
export function messenger_amen_only_is(text) {
  "$plain text";
  "Whether a message says nothing but Amen, praying hands, or both - in any case, with spaces, a full stop or an exclamation mark around them. Anything else, an empty message included, is a real reply and is not this.";
  let rest = text
    .replace(/🙏[\u{1F3FB}-\u{1F3FF}]?/gu, "")
    .replace(/[\s.!]/g, "")
    .toLowerCase();
  let r = equal(rest, "amen") || (equal(rest, "") && text.includes("🙏"));
  return r;
}
