import { app_g_bless_finished_faces_person_light } from "./app_g_bless_finished_faces_person_light.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_finished_faces_order } from "./app_g_bless_finished_faces_order.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sleep } from "./sleep.mjs";
import { each_async } from "./each_async.mjs";
export async function app_g_bless_finished_faces(
  container_map,
  div_map,
  player_img_c,
  people,
  faces_show,
) {
  arguments_assert(arguments, 5);
  ("Everybody a prayer has just reached, lit together. The camera pulls back far enough to");
  ("hold all of them and goes to the middle of them, and then a light falls out of the sky");
  ("onto each face in turn and opens where it lands, one shortly after another, the lights");
  ("running on side by side once they are up.");
  ("One camera move for the whole group rather than one per face. Going to each in turn made");
  ("the screen travel between people who may be streets apart, and a screen that keeps");
  ("moving is a screen nothing on it can be watched on. Held still with all of them in it,");
  ("the player watches the lights instead of the journey.");
  ("Started one after another and left to run together, which is the difference between a");
  ("list and an event. All at once is one flash and no sense of how many; strictly in turn");
  ("is a queue the player waits out. Overlapping, each new light arrives while the last is");
  ("still burning, so the screen fills up - and filling up is what three people at once");
  ("actually is.");
  ("The run of beginnings takes the SAME length of time however many faces there are, so the");
  ("gap between them is shared out rather than fixed. Fixed, every extra person added their");
  ("own delay onto the end of it, and a prayer that reached a whole building spent nearly");
  ("three seconds merely getting started - by which time the first light was already going");
  ("out, so the group never existed on the screen all at once and the player watched a queue");
  ("rather than an answer. Shared out, more people simply arrive faster, which is what more");
  ("people ought to feel like.");
  ("Three faces is what this length was tuned on and three still gets exactly the spacing it");
  ("had. Two are spread over the same window and so wait a little longer between them; nine");
  ("come in a quick run. Whatever the number, they begin together and end together, and that");
  ("is what makes this one event rather than a list of them.");
  ("It is kept comfortably shorter than the hold below, and the whole arrangement rests on");
  ("that: every light has to be up before the first one is let go. A fixed gap could not");
  ("promise it and a fixed window can, because the window is the same length whoever turns up.");
  ("ONE face has no gap at all, because a gap is the space between two beginnings and there");
  ("is only one of those. It is also why the window is divided by the spaces between the");
  ("faces rather than by the faces themselves - a single face would otherwise sit through a");
  ("whole window of waiting for a second person who is never coming.");
  ("ONE face waits for nothing: the light goes up while the camera is still travelling. The");
  ("quiet gold mark lands on that face the moment the prayer does, and the camera is going to");
  ("that same person - so the light is in the middle of the screen the whole way there, and");
  ("waiting would only let the player see the answer and then watch the screen slide about");
  ("before anything was made of it.");
  ("SEVERAL faces wait for the camera to arrive. Their lights are spread across the screen");
  ("rather than sitting on the one place it is heading for, so a face going bright mid-");
  ("journey goes bright in the wrong place and then slides out from under its own light. A");
  ("household is meant to read as one thing lighting up together, and it cannot while the");
  ("ground under it is still moving.");
  ("The camera is aimed at the middle of the box that holds them, and not at the average of");
  ("where they stand. Two of a household walking together and one away on their own would");
  ("drag an average onto the pair and leave the third off the screen, which is exactly the");
  ("person the pull-back was for.");
  ("Where they are is read once, at the top, and not followed. People walk, and a camera");
  ("chasing them is a camera the street cannot be read from; the lights ride on the people");
  ("themselves, so they stay right wherever anybody walks to.");
  ("Each is let go after the same length of time, on the clock it started on, so they end");
  ("one after another in the order they began. The ending is then the same shape as the");
  ("beginning, and the whole group reads as a run of lights passing over a household.");
  ("The camera is left where it is, pulled back, and bringing it in again belongs to");
  ("whatever comes next. This step knows how far out it had to stand to hold everybody; it");
  ("does not know where the screen is wanted afterwards, and guessing that here is how the");
  ("player ends up watching two journeys when they asked for one.");
  let r = await app_g_bless_finished_faces_order(
    people,
    container_map,
    div_map,
    player_img_c,
  );
  let order = property_get(r, "order");
  let fall = property_get(r, "fall");
  let hold = property_get(r, "hold");
  let gap = property_get(r, "gap");
  let person_light = app_g_bless_finished_faces_person_light(
    people,
    gap,
    fall,
    div_map,
    hold,
  );
  ("The lights are held at full strength for about a second and a half before they are let");
  ("go. They are what the player asked for by praying, so the screen belongs to them for");
  ("long enough to be looked at rather than merely noticed - a celebration over before the");
  ("eye settles on it is one a player will tell you they could not see, and one did.");
  await each_async(order, person_light);
  ("The quiet gold each of these faces keeps is let go HERE, with every blue light up and");
  ("none of them yet fading, so it rises underneath the light that earned it. It was held");
  ("back until after all of this and then simply appeared, which put the mark that REMAINS");
  ("in front of the player after the thing it remains from was over - the answer arriving");
  ("in two separate pieces with a gap in between.");
  ("Underneath, and gradually. Both marks sit on the same few pixels, and that is exactly");
  ("why the gold may not simply switch on here: what saves it is that the two are no longer");
  ("the same colour and no longer arrive at the same speed. The blue opens fast and leaves;");
  ("the gold comes up slowly and stays, and by the time the blue peels away the thing under");
  ("it has been there long enough to be read as what was left behind.");
  ("The last face has not lit yet when the run above finishes - the run ends on its");
  ("beginning, and its light is still on the way down. Waiting out one fall here is what");
  ("makes the sentence above true: by then every blue is up, and none of them has begun to go.");
  await sleep(fall);
  faces_show();
  ("The last light landed at the wait just above, so the whole of its own hold is still to");
  ("run. Waiting that out here is what lets everything below go on knowing every light has");
  ("been let go.");
  await sleep(hold);
  ("The wait here outlasts the fade rather than matching it, because the lights are not");
  ("only fading, they are being taken off the map - each on a clock of its own a little");
  ("after its fade. What comes next moves the camera, and a light still hanging on a face");
  ("travels with that face; so a light left over does not sit quietly out of sight, it");
  ("rides across the screen while the next thing is trying to begin. Waiting until the");
  ("map is actually clear is what makes the two halves of this celebration two halves.");
  await sleep(1000);
  ("The camera is NOT put back here any more. Whatever happens next has its own place to");
  ("be - a finished house, or the player - and it knows both where that is and how close");
  ("in it wants to stand. Put back here first, the screen zoomed in on nothing in");
  ("particular and then set off again for somewhere else, which is two journeys where the");
  ("player asked for one.");
}
