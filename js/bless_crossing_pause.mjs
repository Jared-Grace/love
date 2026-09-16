import { bless_crossing_claim } from "./bless_crossing_claim.mjs";
import { bless_camera_close_factor } from "./bless_camera_close_factor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_camera_close } from "./bless_camera_close.mjs";
import { bless_crossing_wait } from "./bless_crossing_wait.mjs";
import { bless_camera_player_return } from "./bless_camera_player_return.mjs";
export async function bless_crossing_pause(
  world,
  to,
  player,
  player_img_c,
  div_map,
) {
  arguments_assert(arguments, 5);
  ("The whole of stopping at a kerb, as it is watched: the camera comes in close on the");
  ("walker and the road, they look up and down it until the traffic has gone, and the camera");
  ("opens out again as they step off.");
  ("The waiting and the watching are two functions because they answer to different things.");
  ("How long to stand there is decided by the traffic and is the same whether anybody is");
  ("looking; where the camera is has nothing to do with the traffic and everything to do");
  ("with the fact that the one thing worth seeing here is a few pixels of a head turning.");
  ("At playing distance a careful crossing and a game that has frozen look identical - which");
  ("is exactly the reading the head turns were added to prevent, and they were too small to");
  ("do it. Coming in close is what makes them legible.");
  ("The road comes with her. She is standing at the edge of it when this is asked, so a");
  ("close view centred on her holds the lane she is about to cross and a good stretch of it");
  ("either way, and the car she is waiting for arrives inside the picture rather than off it.");
  ("The way back out is asked for on the way through rather than left to the walk, because a");
  ("camera left close would stay close for the rest of the journey, and every step after the");
  ("crossing would be taken at a distance nobody chose. The pair belongs to whoever opened");
  ("it.");
  ("It opens out BEFORE the step into the road rather than after the crossing is finished,");
  ("so the walker steps off as the street opens around them. Held close until they reached");
  ("the far kerb, the camera would be doing the one thing a crossing must not do: hiding how");
  ("much road is left.");
  let factor = bless_camera_close_factor();
  await bless_camera_close(div_map, player_img_c, player, factor);
  ("The way back out is GUARDED for the same reason the opening of it is paired with it at");
  ("all: this function owns the close-up, and a wait that throws would hand back a camera");
  ("left leaning on a kerb for the rest of the game. The road is not claimed on that path -");
  ("claiming it would stop the traffic for somebody who is not crossing - so the guard holds");
  ("the camera and nothing else.");
  try {
    await bless_crossing_wait(world, to, player, player_img_c, div_map);
    ("The road is CLAIMED the instant the waiting ends and before the camera pulls back, so that not one tick passes between deciding to go and the traffic being told. The camera is a third of a second of animation; at this street's pace a vehicle moves two squares in that time, and those are exactly the two squares she is about to walk into.");
    bless_crossing_claim(world, to);
  } finally {
    await bless_camera_player_return(div_map, player_img_c, player);
  }
}
