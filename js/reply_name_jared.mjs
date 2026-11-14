import { reply_choice } from "./reply_choice.mjs";
export function reply_name_jared() {
  "The name of the person the replies go out from, as people have really written it: Jared, Jered, Jarred, Jerod.";
  "★ ONLY SPELLINGS SOMEBODY HAS ACTUALLY SENT. Every one here was found in a real message from somebody else: jared, jered and jarred from one person's greetings (2026-11-14), and Jerod from another (searched 2026-11-15). A spelling worked out from a pattern - Jard, Jrd, Jarod - is a guess about which mistakes people make, and no guess here was any likelier than a hundred others; the next real misspelling is added when it arrives.";
  let name = reply_choice(["jared", "jered", "jarred", "jerod"]);
  return name;
}
