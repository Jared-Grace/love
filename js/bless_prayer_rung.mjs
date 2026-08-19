import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { bless_prayer_of } from "./bless_prayer_of.mjs";
import { bless_rung_phrase } from "./bless_rung_phrase.mjs";
export function bless_prayer_rung(rung) {
  arguments_assert(arguments, 1);
  ("The prayer the player reads over one person, carried as far as the rung they have");
  ("reached - 'God save and bless this person', and then 'God save and bless this person");
  ("and everyone in their neighborhood', and one day 'and everyone in their country'.");
  ("There is ONE prayer in this game and this is it. Every rung says these same words and");
  ("adds to the end, because a bigger rung is not a different prayer - it is the same");
  ("prayer reaching further. The person is never dropped from it either: the blessing");
  ("always lands on somebody the player is looking at, and the place comes along because");
  ("it is theirs.");
  ("The lowest rung says nothing more, and that is not a missing clause. 'This person and");
  ("everyone in their person' is nonsense, and the plain prayer is the one the whole ladder");
  ("is built out of.");
  ("It is kept SHORT on purpose. It is prayed once every few seconds for the whole game,");
  ("and a long prayer said that often stops being prayed and starts being skipped.");
  let alone = equal(rung, "person");
  if (alone) {
    let one = bless_prayer_of("this person");
    return one;
  }
  let where = bless_rung_phrase(rung);
  let reaching = text_combine("this person and everyone ", where);
  let text = bless_prayer_of(reaching);
  return text;
}
