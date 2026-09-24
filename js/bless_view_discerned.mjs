import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { bless_view_family_started_ordered } from "./bless_view_family_started_ordered.mjs";
import { bless_view_finish_first } from "./bless_view_finish_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { bless_place_done_is } from "./bless_place_done_is.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_min } from "./list_min.mjs";
import { equal } from "./equal.mjs";
export function bless_view_discerned(blessed, everyone) {
  arguments_assert(arguments, 2);
  ("One person on the street who has not been prayed for - the answer to the prayer asking");
  ("God who to go to next.");
  ("It is the one question this game refuses to answer for free. Nothing on the street");
  ("points at anybody until this prayer has been said, so without it a player has no way to");
  ("be told where to go except by walking until somebody dark walks past.");
  ("Praying is how they find out, which is the whole reason it may be answered here at all.");
  ("The player does not pick who is next and neither does the game hand it over for");
  ("nothing: they ask, and the answer comes. That is the day walk of the gospel game acted");
  ("out on a street.");
  ("DRAWN rather than reasoned out, and the draw is over the BUILDINGS nearest finishing");
  ("rather than over the whole street. Nothing about where the player is standing enters it,");
  ("so the answer is still somebody they would not have chosen and still does not change when");
  ("they take a step. Nearest would make the prayer a compass; what narrows the pool here is");
  ("how much of a building is left, which is a fact about the street rather than about the");
  ("player.");
  ("Fewest families left, counted over the whole building. A building with two of its three");
  ("families finished is one household from earning a rung and a fresh one is three, so being");
  ("sent to the near one is strictly the shorter way to the same place.");
  ("A HOUSE ALREADY STARTED COMES FIRST. While any family the player has prayed into still");
  ("has somebody left, the answer is one of them - from the house fewest prayers from done, the one begun first on a tie - so the");
  ("prayers after the first one lead up to the first family being finished, and the first");
  ("rung is earned by asking rather than stumbled on. The street no longer points at the rest");
  ("of a house by itself, so this prayer is now the only thing that does.");
  ("A building at two families of three with nobody half prayed for in the third is the");
  ("closest thing on the street to being done once no house is half finished, which is what");
  ("the building count below is for.");
  ("A player reported the miss: the prayer sent them to one building, then to another, while");
  ("a building behind them sat one family from finished. Answered that way it opens buildings");
  ("faster than it closes them and the rung above stays out of reach - which is the same");
  ("complaint the arrow was changed for, one rung down.");
  ("TIES are drawn between and not broken, so the pool narrows and never closes to one. At");
  ("the start of a game every building has all of its families left, every score is equal and");
  ("the draw is the whole street again - which is right, because with nothing started there is");
  ("nothing to close out.");
  ("Asked of the WHOLE street and not of what the player can see, because a prayer is not");
  ("limited by where somebody happens to be facing. The answer is then often somebody out");
  ("of sight, which is exactly what the arrow at the edge of the screen is for.");
  ("Anybody covered by a prayer over their house or their block is left out along with");
  ("anybody prayed for by name. They have been prayed for; sending the player back to them");
  ("would be answering the prayer with work already done.");
  ("A household counts as finished when everybody in it has been prayed for, whether or not");
  ("the house itself was ever named - the same reading the ladder climbs by. Asked for the");
  ("name alone, a building whose every resident was lit would still be counted as having all");
  ("its families to go, and the one building nobody needs to be sent to would be the one this");
  ("sent them to first.");
  ("An empty answer when everybody has been prayed for, rather than a person picked anyway.");
  ("There is nothing left to discern, and a street that is finished should say so by having");
  ("no arrow on it.");
  let people = bless_view_people(everyone);
  function person_left_is(person) {
    let prayed = bless_person_blessed_is(blessed, person);
    let remaining = not(prayed);
    return remaining;
  }
  let left = list_filter(people, person_left_is);
  let none = list_empty_is(left);
  if (none) {
    let empty = bless_view_of_people(left);
    return empty;
  }
  let started = bless_view_family_started_ordered(blessed, everyone);
  let house = bless_view_finish_first(blessed, started);
  let house_people = bless_view_people(house);
  let house_any = list_empty_not_is(house_people);
  if (house_any) {
    let member = list_random_item(house_people);
    let view_member = bless_view_of_people([member]);
    return view_member;
  }
  function person_score(person) {
    let building = bless_person_place(person, "building");
    let households = bless_place_members("building", building);
    function household_left_is(id) {
      let done = bless_place_done_is(blessed, "family", id);
      let over = not(done);
      return over;
    }
    let count = list_filter_size(households, household_left_is);
    return count;
  }
  let scores = list_map(left, person_score);
  let fewest = list_min(scores);
  function person_closing_is(person) {
    let count = person_score(person);
    let closing = equal(count, fewest);
    return closing;
  }
  let nearest = list_filter(left, person_closing_is);
  let chosen = list_random_item(nearest);
  let view = bless_view_of_people([chosen]);
  return view;
}
