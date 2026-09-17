import { g_direction } from "./g_direction.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
import { g_direction_across } from "./g_direction_across.mjs";
import { and } from "./and.mjs";
import { bless_crossing_column_clear_is } from "./bless_crossing_column_clear_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_crossing_glance } from "./bless_crossing_glance.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { bless_crossing_glance_tries } from "./bless_crossing_glance_tries.mjs";
import { greater_than } from "./greater_than.mjs";
import { bless_crossing_clear_is } from "./bless_crossing_clear_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function bless_crossing_wait(
  world,
  to,
  player,
  player_img_c,
  div_map,
) {
  arguments_assert(arguments, 5);
  ("Holds the walker at the kerb: they look one way, then the other, then stand there looking");
  ("up and down the road until it is clear, and only then does the walk go on.");
  ("LOOKING is the part that is worth the time it costs. The waiting could have been done");
  ("silently and the walk would have been just as safe, and it would have read as the game");
  ("having stuck. A person who turns their head has visibly decided something, and what they");
  ("have decided is the thing this whole crossing exists to teach - you look before you step");
  ("into a road.");
  ("A look is a HEAD AND A CAMERA together, and what says it is a single call rather than");
  ("anything written here. There are three places in this that a walker looks, and keeping a");
  ("camera in step with three of them by hand is a thing that goes wrong once and then reads");
  ("as the screen having drifted.");
  ("It looks WEST first and then EAST, in that order, because a walk is a sequence and a");
  ("sequence has to have an order; either would do, and doing both is the point. Turning once");
  ("would be checking the lane in front and trusting the other one.");
  ("Then it waits, and the waiting is a LOOP rather than a fixed pause, because what is being");
  ("waited on is a car getting out of the way and cars are not on a schedule the walker");
  ("knows. A fixed pause is a guess that is too long whenever the road was already empty and");
  ("too short exactly when it matters.");
  ("The head KEEPS TURNING for as long as the wait lasts, and the two head turns before it");
  ("are the first two of the same thing rather than a separate ceremony. Somebody who looked");
  ("twice and then stood perfectly still is somebody who has stopped watching the road, which");
  ("is the opposite of what they are being shown; and a walker frozen mid-street is the one");
  ("thing that makes a wait read as the game having hung rather than as a person being");
  ("careful. The turning costs nothing, because the waiting was already happening.");
  ("The road is ASKED far more often than the head turns. Looking is what the player sees and");
  ("half a second a glance is about the pace of a person; but the gap being waited for is");
  ("measured in car-lengths and closes while it is being looked at, so a walker who checked");
  ("only when they turned their head would step out on a gap that was true half a second ago.");
  ("Ask quickly, turn slowly.");
  ("A look takes most of its half second in the camera's own slide, so what is added after it");
  ("is the short hold at the end of a turn rather than the whole of the pause. Left at the");
  ("full pause the two would add up and the opening pair of looks alone would take the best");
  ("part of two seconds, which is a walker being ponderous rather than careful.");
  ("The wait is BOUNDED, and it is worth being plain about why that is safe rather than");
  ("merely convenient. Cars give way to anybody standing on the road, so a walker who steps");
  ("out stops the traffic instead of being hurt by it. The bound therefore cannot cause an");
  ("accident; all it can do is stop the game freezing if the traffic somehow never leaves a");
  ("gap. Waiting for ever is the one outcome that would be worse than crossing.");
  ("She turns to FACE THE ROAD before she looks up it. A walker arrives at a kerb pointed");
  ("whichever way the last step left her, which is often along the pavement or straight away");
  ("from the road, and glancing up a lane from there is a person turning their head at");
  ("nothing. Squaring up to the crossing first is what makes the two looks afterwards read as");
  ("looks - it says what she is about to do, and the looks then say she is checking it is");
  ("safe.");
  ("It is also what the glances are measured FROM. Each one is drawn half way between the");
  ("road and the lane, so the road has to be somewhere she is actually pointed or the half");
  ("way facing is half way between the lane and a direction she abandoned two steps ago.");
  ("Squaring up is itself a TURN and is drawn as one, through whatever facings lie between");
  ("the way the last step left her and the road. It is the first movement of the crossing and");
  ("the one that says a walk has become a decision, so a swap of one picture for another is");
  ("the last thing it should be.");
  let toward = g_direction(player, to);
  await app_shared_game_character_turn(player, player_img_c, toward);
  await app_shared_animation_sleep_quick();
  ("Which lane to look up is WORKED OUT from the way she is crossing rather than named. A");
  ("road is crossed at right angles to itself, so the crossing already says it.");
  ("There is no hold written between the two looks any more. A look now turns through a");
  ("half-way picture and holds THERE instead, so the beat that used to sit between the looks");
  ("sits inside each of them, where it is the middle of a turn rather than a wait on a turn");
  ("already finished. Left in both places it would be paid twice, and the length of this was");
  ("measured as too long twice running.");
  let facing = g_direction_across(toward);
  await bless_crossing_glance(player, player_img_c, facing, div_map);
  facing = g_direction_opposite(facing);
  await bless_crossing_glance(player, player_img_c, facing, div_map);
  ("Forty looks at the road is several times longer than the longest gap between two cars on");
  ("a lane this length, so reaching the end of it means something is wrong rather than that");
  ("the traffic was heavy.");
  ("She waits for a REAL gap first - nothing bearing down for eight squares - because that is what waiting for traffic looks like, and it is the only version of this that teaches anything. Once she has spent that patience, only the second half of the question survives. Traffic dense enough never to leave an eight-square gap would otherwise leave her standing on the kerb for the rest of the game.");
  ("The band beside her must be empty in BOTH cases, never only in the relaxed one. Waiting for a gap in the oncoming traffic says nothing at all about the car that has just gone past her, because that car is travelling away and counts as no threat - yet it is still drawn halfway across the square behind it, so she would step out alongside something plainly still in the crossing. That was the reported fault: she began walking while a car was still a little in the walkway.");
  let tries = 120;
  let patience = 40;
  let glance = bless_crossing_glance_tries();
  while (greater_than(tries, 0)) {
    let patient = greater_than(patience, 0);
    let clear = bless_crossing_column_clear_is(world, to);
    if (patient) {
      let gap = bless_crossing_clear_is(world, to);
      clear = and(clear, gap);
    }
    if (clear) {
      return;
    }
    patience = subtract(patience, 1);
    glance = subtract(glance, 1);
    let due = less_than_equal(glance, 0);
    if (due) {
      facing = g_direction_opposite(facing);
      await bless_crossing_glance(player, player_img_c, facing, div_map);
      glance = bless_crossing_glance_tries();
    }
    await app_shared_animation_sleep_quick();
    tries = subtract(tries, 1);
  }
}
