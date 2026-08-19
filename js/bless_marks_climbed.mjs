import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { range } from "./range.mjs";
import { range_map } from "./range_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { set_new } from "./set_new.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { bless_places_at_index } from "./bless_places_at_index.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
export function bless_marks_climbed(count, stride) {
  arguments_assert(arguments, 2);
  ("Plays a whole crowd the way the game asks the player to play it - pray for every dark");
  ("face, never for a lit one - and says how far up the ladder that got, how many prayers");
  ("it took, and whether anybody was left dark at the end.");
  ("It is the player's own rule and nothing else. The mark over somebody's head is the only");
  ("guidance this game gives, so a lit face is a face the game has told the player to leave");
  ("alone; playing any other way would be measuring a player the game never described.");
  ("Nobody is placed and nothing is drawn. A person here is an address and no more, because");
  ("what is being asked is a question about the ladder rather than about the street - and a");
  ("generated street would make the answer depend on where a crowd happened to stand.");
  ("The crowd is met in STRIDES rather than in order, and that is the whole difficulty. Met");
  ("one after another, households arrive whole and complete themselves by accident; a real");
  ("street mixes them, so somebody's housemate is usually somewhere else on the pavement.");
  ("A stride that shares no factor with the count reaches everybody exactly once, which is");
  ("a scattering the caller can name and repeat rather than a shuffle nobody can.");
  function person_at(index) {
    let places = bless_places_at_index(index);
    let person = {
      places: places,
    };
    return person;
  }
  let people = range_map(count, person_at);
  let blessed = set_new();
  let rungs = bless_rungs();
  let rung = list_first(rungs);
  let prayers = 0;
  let steps = range(count);
  for (let step of steps) {
    let reach = multiply(step, stride);
    let index = modulo(reach, count);
    let person = list_get(people, index);
    let lit = bless_person_blessed_is(blessed, person);
    if (not(lit)) {
      let place = bless_person_place(person, rung);
      bless_blessed_add(blessed, rung, place);
      prayers = add(prayers, 1);
      let earned = bless_rung_earned_is(blessed, person, rung);
      if (earned) {
        rung = bless_rung_after(rung);
      }
    }
  }
  function dark_is(person) {
    let lit = bless_person_blessed_is(blessed, person);
    let dark = not(lit);
    return dark;
  }
  let dark = list_filter_size(people, dark_is);
  let climbed = {
    rung: rung,
    prayers: prayers,
    dark: dark,
  };
  return climbed;
}
