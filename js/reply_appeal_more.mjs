import { arguments_assert } from "./arguments_assert.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_prayer_abundance_of_prayer } from "./reply_prayer_abundance_of_prayer.mjs";
export function reply_appeal_more() {
  arguments_assert(arguments, 0);
  ("One more line told in an appeal for help that asks for no money by itself: how bad things are, which is prayed for, or to keep them in mind, which is answered like a request for prayer.");
  ("★ IT NEVER STANDS ALONE. Told on its own, how hot it is or that somebody cannot work is not an appeal, so it only counts beside one of the needs the appeal is about.");
  let you = reply_choice(["u", "you"]);
  let know = reply_sequence([you, "know"]);
  let o_know = reply_optional(know);
  let heat = reply_sequence([
    o_know,
    "many",
    "people",
    "and",
    "children's",
    "suffering",
    "from",
    "heat",
    "stroke",
  ]);
  let heal = text_may_the_lord_exclamation(
    "heal and protect the people and the children",
  );
  let heat_said = reply_on_match_prayer(heat, heal);
  let bricks = reply_sequence([
    "some",
    "children's",
    "are",
    "from",
    "bricks",
    "factory",
  ]);
  let free = text_may_the_lord_exclamation(
    "free the children from brick factories",
  );
  let bricks_said = reply_on_match_prayer(bricks, free);
  let cannot_work = reply_sequence([
    "children's",
    "and",
    "people",
    "even",
    "they",
    "not",
    "able",
    "to",
    "do",
    "work",
  ]);
  let temperature = reply_sequence([
    "here",
    "is",
    "temperature",
    "is",
    "55",
    "c",
    "or",
    "some",
    "times",
    "more",
  ]);
  let remember = reply_sequence(["keep", "remembering", "this", "children's"]);
  let prayed = reply_prayer_abundance_of_prayer();
  let remember_said = reply_on_match_prayer(remember, prayed);
  let more = reply_choice([
    heat_said,
    bricks_said,
    cannot_work,
    temperature,
    remember_said,
  ]);
  return more;
}
