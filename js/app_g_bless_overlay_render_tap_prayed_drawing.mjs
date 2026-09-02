import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_g_bless_overlay_render_tap_prayed_render_ground } from "./app_g_bless_overlay_render_tap_prayed_render_ground.mjs";
export function app_g_bless_overlay_render_tap_prayed_drawing(r2, glows, wash) {
  "The drawing side of the street: a way to draw it, what a celebration is holding back from that drawing, and the two ways of letting a held thing go.";
  "TWO THINGS THE PICTURE IS ALLOWED TO BE BEHIND THE RECORD ON while a celebration runs: the house that prayer just filled in, and the quiet gold on the faces it just reached.";
  "BOTH ARE KEPT AS STATE HERE rather than decided at each draw, and that is the whole repair. The street is redrawn on its own clock all through a celebration - every step every walking person takes asks for a draw - so a hold that was one skipped draw was undone by the next of those within a breath. A player saw the house light up while the camera was still travelling to it, which is the answer arriving before the question.";
  "IT IS ONE PLACE RATHER THAN SCATTERED, because a draw is asked for from everywhere and only the prayer knows what is being celebrated. One answer that every draw reads is one that no two draws can disagree about - and everybody who reads or writes it goes through the handful of ways out of here, so there is nowhere else it could be written from.";
  "THE FACES ARE HELD BY NAME, AND THE GROUND BY A PLAIN YES OR NO, because they are undone differently. A house is either drawn or not; a face has to be told apart from the ninety other faces whose gold must stay exactly where it is.";
  arguments_assert(arguments, 3);
  let cone_get = property_get(r2, "cone_get");
  let blessed = property_get(r2, "blessed");
  let homes = property_get(r2, "homes");
  let blocks = property_get(r2, "blocks");
  let container_map = property_get(r2, "container_map");
  let bar = property_get(r2, "bar");
  let view_everyone = property_get(r2, "view_everyone");
  let hold = property_get(r2, "hold");
  let edge = property_get(r2, "edge");
  let held_ground = false;
  let held_people = [];
  ("A THIRD THING THE DRAW READS, and the only one that is not a hold: whoever the last prayer for discernment named. It is kept here for the same reason the other two are - the street is redrawn from everywhere and one answer that every draw reads is one no two draws can disagree about.");
  ("It starts EMPTY, because nothing has been prayed for yet. A player who has never asked is aimed at nobody, which is exactly what the map said before this prayer existed.");
  let discerned = bless_view_of_people([]);
  function render() {
    "A draw of the street from the record, less whatever a celebration is still holding back.";
    let ground = not(held_ground);
    app_g_bless_overlay_render_tap_prayed_render_ground({
      ground,
      glows,
      homes,
      blocks,
      blessed,
      view_everyone,
      edge,
      container_map,
      bar,
      cone_get,
      hold,
      wash,
      held: held_people,
      discerned,
    });
  }
  function ground_show() {
    "Lets the finished house go up on the map. The celebration says when, and it is after";
    "the camera has arrived and the street has been held still long enough for the player to";
    "have seen it as it was.";
    held_ground = false;
    render();
  }
  function faces_show() {
    "Lets the quiet gold go up on the faces just prayed for, once the arriving light on them";
    "is over. The two marks land on the same few pixels, so shown together they read as one";
    "mark brightening slightly rather than as a light arriving and a light left behind.";
    held_people = [];
    render();
  }
  function hold_set(ground, people) {
    "Holds back from the picture what a prayer just lit, until the celebration hands each half over in its own time.";
    "Nothing is drawn from here. The prayer asks for the draw itself, after this, so that the holds are already set when it does - or this would be the one draw in the whole celebration that showed everything.";
    held_ground = ground;
    held_people = people;
  }
  function discern_set(view) {
    "Writes down who the prayer for discernment named, and puts the arrow on them.";
    "The draw is asked for from here, because nothing else is about to ask - the player has just read a prayer and pressed amen, and the street has not otherwise changed.";
    discerned = view;
    render();
  }
  let r = {
    render,
    ground_show,
    faces_show,
    hold_set,
    discern_set,
  };
  return r;
}
