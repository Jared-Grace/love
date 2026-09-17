import { g_character_face_set } from "./g_character_face_set.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_game_character_picture_set } from "./app_shared_game_character_picture_set.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_directions_all } from "./g_directions_all.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_get_try } from "./list_get_try.mjs";
import { not } from "./not.mjs";
import { app_shared_game_character_turn_frame_sleep } from "./app_shared_game_character_turn_frame_sleep.mjs";
export async function app_shared_game_character_turn(
  character,
  img,
  direction,
) {
  arguments_assert(arguments, 3);
  ("Turns a person to face a new way by SHOWING the turn: every facing between where they");
  ("were pointed and where they are going is drawn, one after another, the short way round.");
  ("Facing somebody a new way used to be a single swap of one picture for another, and a");
  ("swap is not a turn - it is the same person suddenly pointed elsewhere, which the eye");
  ("reads as a jump or, when the two pictures are alike, as nothing at all. The in-between");
  ("pictures are what make it a movement, and they were drawn, shipped and never shown.");
  ("The ring is the whole of the cleverness. The eight facings are kept in turning order, so");
  ("the step from one picture to the next one along IS an eighth of a turn, and walking the");
  ("list is walking the person round. Nothing here knows what south-west looks like or that");
  ("it sits between south and west; it knows only that neighbours in the list are neighbours");
  ("in the world, which is a fact the list itself promises to keep.");
  ("It goes the SHORT way round. More than half a turn one way is less than half the other,");
  ("so a walker asked to face about turns through the nearer side rather than sweeping all");
  ("the way round the long side like a lighthouse. Exactly half is a dead heat and it goes");
  ("forward, because a rule that has to answer must answer something and neither is wrong.");
  ("Already facing that way is not a turn and costs nothing - no frame, no wait, no picture");
  ("written. That matters because this is called on every step of a walk, where the facing");
  ("usually has not changed, and a turn that always slept would put a stutter into walking in");
  ("a straight line.");
  ("The wait goes BETWEEN frames and never after the last one. The final picture is the");
  ("facing that was asked for, and whoever asked has their own reason to hold it or to move");
  ("on; sleeping here as well would charge every caller for a pause it did not ask for, on");
  ("top of the one it did.");
  let ring = g_directions_all();
  ("The person FACES the new way at once, and only the picture takes its time getting there. Everything else in a game asks which way somebody faces - what they can see, which way a step goes, whether they are already looking somewhere - and all of it was written for a facing that changes in one go. Letting the answer pass through the in-between facings would hand every one of those readers a direction it was never written for, for a fraction of a second, whenever anybody anywhere was turning. So the turn is something drawn, never something the rest of the game has to wait out.");
  ("It starts from the picture ON THE SCREEN rather than from the way the person was facing, because those two differ while a turn is still being drawn - and a new turn begun half way through an old one has to carry on from where the eye last saw them.");
  let facing = property_get_or(character, "direction", "south");
  let from = property_get_or(img, "facing_shown", facing);
  g_character_face_set(character, direction);
  ("A newer turn TAKES OVER. Somebody turned again before the last turn finished would otherwise have two turns stepping the same picture, and whichever finished last would decide the facing on the screen - often the older one. Each turn is numbered on the picture, and a turn that finds a later number there stops.");
  let previous = property_get_or(img, "turns", 0);
  let turning = add(previous, 1);
  property_set(img, "turns", turning);
  let arrived = equal(from, direction);
  if (arrived) {
    return;
  }
  let index = list_index_of(ring, from);
  let target = list_index_of(ring, direction);
  let count = list_size(ring);
  let left = add(target, count);
  let left2 = subtract(left, index);
  let ahead = modulo(left2, count);
  let half_ring = 4;
  let backwards = greater_than(ahead, half_ring);
  let step = 1;
  if (backwards) {
    step = -1;
  }
  let going = true;
  while (going) {
    let left3 = add(index, step);
    let left4 = add(left3, count);
    index = modulo(left4, count);
    let next = list_get_try(ring, index);
    app_shared_game_character_picture_set(character, img, next);
    let b = equal(index, target);
    going = not(b);
    if (going) {
      await app_shared_game_character_turn_frame_sleep();
      let latest = property_get(img, "turns");
      going = equal(latest, turning);
    }
  }
}
