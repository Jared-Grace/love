import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_combine } from "../../../love/public/src/list_map_combine.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { trinity_name_prayer } from "../../../love/public/src/trinity_name_prayer.mjs";
import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
export function app_g_doxology() {
  marker("1");
  function jesus_christ() {
    let v = "Jesus" + string_random_or_empty(" Christ");
    return v;
  }
  let t = trinity_name_prayer();
  const believe = list_random_item([
    string_random_or_empty("Now ") +
      "I believe" +
      string_random_or_empty(
        ", in " +
          jesus_christ() +
          string_random_or_empty(
            ", the Son of" + string_random_or_empty(" the living") + " God",
          ),
      ),
    "I " +
      list_random_item(["confess", "recieve"]) +
      " " +
      jesus_christ() +
      " as my" +
      string_random_or_empty(" risen") +
      " Lord and Savior",
  ]);
  const blessing =
    "God bless you " +
    string_random_or_empty(
      " in the name of " + list_random_item(["Jesus", t]) + " ",
    ) +
    "amen";
  const choices = [
    "Thank you" +
      string_random_or_empty(
        " very much" + string_random_or_empty(" from the bottom of my heart"),
      ),
    "Glory to God" + string_random_or_empty(" in the highest"),
    "Praise God" +
      string_random_or_empty(
        ", the Father of " +
          string_random_or_empty("our Lord ") +
          jesus_christ(),
      ),
    "Hallelujah",
    "Amen",
  ];
  list_shuffle(choices);
  let r = integer_random(1, 3);
  let taken = list_take(choices, r);
  let combined = list_concat_multiple([[believe], taken, [blessing]]);
  const mapped = list_map_combine("!", combined);
  const doxology = list_join_space(mapped);
  return doxology;
}
