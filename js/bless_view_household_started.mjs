import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { set_new } from "./set_new.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { not } from "./not.mjs";
import { set_add } from "./set_add.mjs";
import { each } from "./each.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_household_started(blessed, view) {
  arguments_assert(arguments, 2);
  ("Everybody in sight who has NOT been prayed for and who shares a household with somebody");
  ("who has - the people left in a house the player has started.");
  ("This is the answer to the only question the game could not be played without and never");
  ("showed. A household is a family of two to five and finishing one earns a rung, but who they");
  ("is arithmetic on a hidden number, and four people in five are out walking rather");
  ("than stood at their own door - so a family is scattered down the street and looks");
  ("exactly like everybody else. A player praying for six faces at random has about one");
  ("chance in fifty of finishing any house at all, which is a ladder that cannot be climbed");
  ("on purpose.");
  ("It shows the household and NOT the whole address on purpose, and only after the first");
  ("prayer in it. Shown from the start, every person on the street would be wearing a group");
  ("mark and the street would read as a puzzle board rather than as a road. Shown for the");
  ("building and the block as well, the player would be handed the whole map at once and");
  ("there would be nothing left to find. Finding the first person in a house stays the");
  ("discovery; the other two are then aimed at rather than stumbled on.");
  ("It goes out for a person the moment they are prayed for, because there is nothing left");
  ("to say about them - their own light says it. The last ring in a house therefore");
  ("disappears at the very prayer that lights the house, which is the rung being earned");
  ("said twice in one moment and in two places.");
  ("A household that is already finished has no unprayed-for members, so it rings nobody");
  ("without that having to be asked - and a household covered by a prayer over the whole");
  ("block is finished in exactly the same way.");
  ("Asked of the whole street rather than of the cone, like the lights are, because who");
  ("lives with whom is a fact about them and stays true while the player is looking");
  ("elsewhere.");
  let people = bless_view_people(view);
  function person_household(person) {
    let household = bless_person_place(person, "household");
    return household;
  }
  let started = set_new();
  function person_note(person) {
    let marked = bless_person_blessed_is(blessed, person);
    if (not(marked)) {
      return;
    }
    let household = person_household(person);
    set_add(started, household);
  }
  each(people, person_note);
  function person_remaining(person) {
    let marked = bless_person_blessed_is(blessed, person);
    if (marked) {
      return false;
    }
    let household = person_household(person);
    let begun = set_includes(started, household);
    return begun;
  }
  let remaining = list_filter(people, person_remaining);
  let view_remaining = bless_view_of_people(remaining);
  return view_remaining;
}
