import { g_npc_nickname_lists } from "./g_npc_nickname_lists.mjs";
import { list_get } from "./list_get.mjs";
import { mod } from "./mod.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { multiply } from "./multiply.mjs";
export function g_npc_nickname(index) {
  "The name one person of the pool is called by, worked out from their number and nothing else.";
  "PEOPLE ARE NOT NUMBERS, which is the whole of why this exists. The pool draws a person as a turn count and files them under a running number, and that number then became the address every arc was written and reported against - so a reader was handed PERSON 2 IS RED and had to go and look up who that was. A name is the same address and needs no lookup, and it stops a person in a game about people being an entry in a count.";
  "WORKED OUT RATHER THAN STORED, so nothing in the pool has to be regenerated to gain one and no file can fall out of step with another. The pool's files hold a turn count that authored arcs are attached to; a name written into them would be a second thing to keep true, and a person's name would then depend on when their file was last written rather than on who they are.";
  "THE NAMES ARE THE ONES THE GAME ALREADY USES for the people in its streets, so a person in the pool and a person walking past are called the same kinds of thing. Inventing a second naming would have meant a reader learning two. The two lists arrive already cleaned and pulled apart, which is what lets the stepping below be a proof rather than a hope.";
  "IT ALTERNATES BETWEEN THE TWO LISTS, and that is doing more work than it looks like. Written down, the men outnumber the women more than ten to one, so one list drawn from at random gives a town that is nearly all men; taking them in turn hands the arcs an even split before anybody writes a word. The name is what tells the writer which the person is, and it is fixed before the arc is, so the balance is not a thing an author has to keep counting.";
  "THE STEP IS WHAT KEEPS THE NAMES APART. Walking the list in order would name the people in the order they were drawn, so two people next to each other in the pool would read as next to each other in the alphabet, which is the numbering wearing a different coat. Stepping sixty-one names at a time scatters them, and because sixty-one shares no factor with either list's length, stepping cannot land twice on the same name before it has used them all - so the names are unique by working rather than by being checked.";
  "The check is that the pool is not longer than the names can cover. Past that the stepping wraps onto a name it has already given out, and two people would answer to one word - which is the one way this can go wrong, so it throws rather than returning a name that lies.";
  let alternating = g_npc_nickname_lists();
  let side = mod(index, 2);
  let names = list_get(alternating, side);
  let within = divide_floor(index, 2);
  let last = list_size_less_1(names);
  less_than_equal_assert_json(within, last, {
    index,
    hint: "the pool has grown past the names that can be handed out one each, so two people would be called the same word; the repair is a longer list of names, not a shorter pool",
  });
  let stepped = multiply(within, 61);
  let size = list_size(names);
  let at = mod(stepped, size);
  let nickname = list_get(names, at);
  return nickname;
}
