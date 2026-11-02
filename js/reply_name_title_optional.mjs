import { arguments_assert } from "./arguments_assert.mjs";
import { reply_titles_ministry } from "./reply_titles_ministry.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_names } from "./reply_names.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_name_title_optional() {
  arguments_assert(arguments, 0);
  ("A person's name as somebody gives it: a title if they use one, then one name or several.");
  ("★ THE PARTS ARE JOINED BY A SEQUENCE AND NOT LEFT AS A LIST, because a plain list handed to a rule is compared whole against one word of the message, and no word is ever a list. It would match nothing and say nothing about why.");
  ("It is one piece so that every rule waiting for a name waits for the same thing, and so that a longer way of giving a name only has to be taught here.");
  let titles = reply_titles_ministry();
  let title_optional = reply_optional(titles);
  let names = reply_names();
  let names_once_or_more = reply_once_or_more(names);
  let piece = reply_sequence([title_optional, names_once_or_more]);
  return piece;
}
