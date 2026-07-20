import { list_join_space } from "./list_join_space.mjs";
import { list_map_combine } from "./list_map_combine.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_take } from "./list_take.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { trinity_name_prayer } from "./trinity_name_prayer.mjs";
import { g_name_jesus } from "./g_name_jesus.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_doxology() {
  function jesus_christ() {
    let v = text_combine("Jesus", text_random_or_empty(" Christ"));
    return v;
  }
  let t = trinity_name_prayer();
  let believe = list_random_item([
    text_combine_multiple([
      text_random_or_empty("Now "),
      "I believe in ",
      g_name_jesus(),
    ]),
    text_combine_multiple([
      "I ",
      list_random_item(["confess", "receive"]),
      " ",
      jesus_christ(),
      " as my",
      text_random_or_empty(" risen"),
      " Lord and Savior",
    ]),
  ]);
  let blessing = text_combine_multiple([
    "God bless you ",
    text_random_or_empty(
      text_combine_multiple([
        " in the name of ",
        list_random_item(["Jesus", t]),
        " ",
      ]),
    ),
    "amen",
  ]);
  let choices = [
    text_combine(
      "Thank you",
      text_random_or_empty(
        text_combine(
          " very much",
          text_random_or_empty(" from the bottom of my heart"),
        ),
      ),
    ),
    text_combine("Glory to God", text_random_or_empty(" in the highest")),
    text_combine(
      "Praise God",
      text_random_or_empty(
        text_combine_multiple([
          ", the Father of ",
          text_random_or_empty("our Lord "),
          jesus_christ(),
        ]),
      ),
    ),
    "Hallelujah",
    "Amen",
  ];
  list_shuffle(choices);
  let r = integer_random(1, 3);
  let taken = list_take(choices, r);
  let combined = list_concat_multiple([[believe], taken, [blessing]]);
  let mapped = list_map_combine(combined, "!");
  let doxology = list_join_space(mapped);
  return doxology;
}
