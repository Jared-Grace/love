import { app_g_bless_finished_person_beam_ms } from "./app_g_bless_finished_person_beam_ms.mjs";
import { app_g_bless_finished_person_beam } from "./app_g_bless_finished_person_beam.mjs";
import { app_g_bless_finished_person_beam_fade } from "./app_g_bless_finished_person_beam_fade.mjs";
import { subtract } from "./subtract.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_lit_box } from "./app_g_bless_lit_box.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_camera_span } from "./app_g_bless_camera_span.mjs";
import { app_g_bless_finished_people } from "./app_g_bless_finished_people.mjs";
import { app_g_bless_finished_person_bloom } from "./app_g_bless_finished_person_bloom.mjs";
import { sleep } from "./sleep.mjs";
import { each_async } from "./each_async.mjs";
import { app_g_bless_finished_person_bloom_fade } from "./app_g_bless_finished_person_bloom_fade.mjs";
import { app_g_bless_finished_people_fade } from "./app_g_bless_finished_people_fade.mjs";
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
  ("The gap between them is short on purpose. It is there to be felt rather than counted;");
  ("long enough that the eye catches a second thing starting, short enough that a household");
  ("reads as one answered prayer and not as three of them.");
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
  let box = app_g_bless_lit_box(people);
  let middle = property_get(box, "middle");
  let span = property_get(box, "span");
  ("The camera is set going from inside a step of its own that hands its arrival back rather");
  ("than being waited on here. One face is meant to light up WHILE the screen travels, so");
  ("the waiting has to be a separate decision taken further down - and a call written out");
  ("in the open in a waiting body reads as something to be waited on, both to a person and");
  ("to the pass that tidies this file.");
  async function travel_start() {
    let promise = await app_g_bless_camera_span(
      container_map,
      div_map,
      player_img_c,
      span,
      middle,
    );
    return promise;
  }
  let arrived = travel_start();
  let faces = list_size(people);
  let group = equal_not(faces, 1);
  if (group) {
    await arrived;
  }
  ("Equal LENGTH is what ending together cost, and it is why that was given up. Let go all");
  ("at the same moment, a light that started later had less time on the screen than the one");
  ("before it, and the last person prayed for got the shortest celebration of the three -");
  ("a difference a player has no way of reading as anything but the last of them mattering");
  ("least. Given the same time each, the lights end as they began, spaced out, and nobody");
  ("gets a shorter answer for having been reached second.");
  let gap = 300;
  let hold = 1460;
  let fall = app_g_bless_finished_person_beam_ms();
  async function person_light(person) {
    let one = [person];
    ("The light comes DOWN first and the burst is what it lands in, rather than the two");
    ("starting together. Started together they are two things happening at once on one face;");
    ("one after the other they are one thing arriving and then opening, which is the whole");
    ("reason the fall was added.");
    let beam = app_g_bless_finished_person_beam(person);
    ("Everything after the fall runs on a clock of its own and is not waited on here. Waited");
    ("on, the fall would be added to the gap between one face and the next, and a household");
    ("would light up at whatever speed the sky happened to travel at rather than at the");
    ("spacing chosen for it. Set going instead, the falls overlap the gaps, and the faces");
    ("still begin one gap apart however long a fall takes.");
    async function light_run() {
      await sleep(fall);
      app_g_bless_finished_person_beam_fade(beam);
      let flares = app_g_bless_finished_people(div_map, one);
      let bloom = app_g_bless_finished_person_bloom(div_map, person);
      ("Each light carries its own ending rather than being gathered into a list and let go");
      ("from outside. A list can only be let go at one moment, which is the very thing being");
      ("undone here, and a light that knows when it is finished needs nobody to remember it.");
      await sleep(hold);
      app_g_bless_finished_person_bloom_fade(bloom);
      app_g_bless_finished_people_fade(flares);
    }
    ("It is set going through a line of its own rather than called out in the open, because");
    ("the pass that tidies this file puts a wait in front of a bare call it finds inside a");
    ("waiting body. That is right nearly everywhere and here it would undo the one thing");
    ("this arrangement exists for.");
    function light_start() {
      light_run();
    }
    light_start();
    await sleep(gap);
  }
  ("The lights are held at full strength for about a second and a half before they are let");
  ("go. They are what the player asked for by praying, so the screen belongs to them for");
  ("long enough to be looked at rather than merely noticed - a celebration over before the");
  ("eye settles on it is one a player will tell you they could not see, and one did.");
  await each_async(people, person_light);
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
  ("The last face has not lit yet when the run above finishes - its light is still on the");
  ("way down. Waiting out one fall here is what makes the sentence above true: by then every");
  ("blue is up, and none of them has begun to go.");
  await sleep(fall);
  faces_show();
  ("The last light began one fall after the run above finished, and one gap before that. So");
  ("what remains of its own hold is the hold less that gap. Waiting that out here is what");
  ("lets everything below go on knowing every light has been let go.");
  let last = subtract(hold, gap);
  await sleep(last);
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
