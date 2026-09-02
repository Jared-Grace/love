import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_bless_finished_person_beam } from "./app_g_bless_finished_person_beam.mjs";
import { app_g_bless_finished_person_beam_fade } from "./app_g_bless_finished_person_beam_fade.mjs";
import { app_g_bless_finished_person_ring } from "./app_g_bless_finished_person_ring.mjs";
import { app_g_bless_finished_people } from "./app_g_bless_finished_people.mjs";
import { app_g_bless_finished_person_bloom } from "./app_g_bless_finished_person_bloom.mjs";
import { app_g_bless_finished_person_bloom_fade } from "./app_g_bless_finished_person_bloom_fade.mjs";
import { app_g_bless_finished_people_fade } from "./app_g_bless_finished_people_fade.mjs";
export function app_g_bless_finished_faces_person_light(
  people,
  gap,
  fall,
  div_map,
  hold,
) {
  arguments_assert(arguments, 5);
  async function person_light(index) {
    let person = list_get(people, index);
    ("The wait comes BEFORE each face and not after it, so the run ends ON the last beginning");
    ("rather than a gap past it. After it, the run carried one gap of dead time on the end,");
    ("and everything below had to subtract that same gap back out again to work out where in");
    ("the celebration it actually was.");
    let later = equal_not(index, 0);
    if (later) {
      await sleep(gap);
    }
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
      ("The hard-edged circle is thrown at the same instant the light goes out, and it is the");
      ("only thing here with an edge. It is what the touchdown is READ from: the soft lights");
      ("either side of it say a face is lit, and none of them can say that anything struck.");
      app_g_bless_finished_person_ring(person);
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
  }
  return person_light;
}
