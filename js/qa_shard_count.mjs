import { divide_floor } from "./divide_floor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { cpu_count } from "./cpu_count.mjs";
import { half } from "./half.mjs";
import { floor } from "./floor.mjs";
import { machine_memory_room_bytes_or_null } from "./machine_memory_room_bytes_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { qa_shard_memory_bytes } from "./qa_shard_memory_bytes.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_shard_count() {
  "How many runs of the frozen copy to ask at once: half this machine's processors, or as many as there is room in memory for, whichever is fewer";
  "One process answers one question at a time, so asking every gate of a single process leaves every processor but one idle. Measured gate by gate, the gates share nothing with each other - each one took the same time alone in its own process as it did in one process alongside all the others - so dividing them across processes gives up nothing when there is a processor free to take the share";
  "What it must not do is take a share of a machine that is already full, and a fixed number does exactly that. Several of us work in this one folder, so several of these runs used to happen at once, and a fixed seven shares meant seven processes each - measured at a load of forty-three with twenty-three of these processes running, where the whole run took six minutes against the one minute it takes on a quiet machine. Dividing the work made one run faster and all of them together slower, which is the wrong trade on a shared machine";
  "That is why this used to ask what was already running and take only what was left. It no longer asks, and the reason is that the thing it was defending against cannot happen any more: these runs are taken one at a time now, so the load it was reading was mostly its own kind, and backing away from it meant backing away from itself";
  "The two together made a circle. A second run found the processors full and took a single share, an undivided run lasts long enough for a third to find the same, and the number that was supposed to protect the machine was the thing keeping every run on it slow. Taking turns broke the circle; reading the load afterwards only kept paying for it";
  "Measured 2026-08-11, one run alone on fourteen processors: it read the load left over from the run before it and took two shares of a possible seven, and asking the gates took eight and a half minutes - five sixths of the whole run. There was nothing on the machine to be polite to";
  "Half the processors is the whole of the politeness now, and it is enough. It was always the ceiling, chosen because past it the shares stopped getting faster even with the machine to themselves - six and eight came out the same within noise on twelve processors. So this leaves half the machine to whoever else is working, always, and no longer leaves them the other half as well";
  "★ BUT PROCESSORS ARE NOT THE ONLY THING A SHARE TAKES, AND MEMORY IS THE ONE THAT KILLS. A share holds up to a gigabyte and seven tenths while it runs, so seven of them is around eight gigabytes taken at once, and a machine several of us are already working in does not have that to give. Measured 2026-09-02: free overflow fell from three point eight gigabytes to two hundred and twenty eight kilobytes and the kernel killed a share outright. Counting processors alone cannot see that coming, because the processor count is the same on a full machine as on an empty one";
  "★ AND THE KILLING IS WHAT MAKES THIS WORSE THAN SLOWNESS. A killed share cannot say which gates it asked, so the whole judging comes back unanswered and nothing is written down - which leaves the record exactly as stale as it was, which is the very condition that lets the next judging start. Taking too many shares does not merely cost this run; it is what makes the next one happen and fail the same way";
  "★ SO THE ROOM IS ASKED FOR AND DIVIDED, AND THE SMALLER OF THE TWO ANSWERS WINS. Neither number is a ceiling on the other - the processors say how much dividing is worth doing and the memory says how much can be afforded, and a share has to be worth doing and affordable both";
  "★ A MACHINE THAT WILL NOT SAY HOW MUCH ROOM IT HAS IS NOT GUESSED AT. Where there is no reading the processor count stands alone, exactly as it did before this reading existed, because a made-up number of bytes would silently decide this for every run afterwards and nothing would show which runs were decided by a measurement and which by an invention";
  "★ ONE SHARE IS THE FLOOR AND REFUSING ALTOGETHER IS NOT ON OFFER HERE. However tight the machine, this hands back a judging that runs undivided rather than no judging at all: whether a judging should start on a full machine is a question for the door that starts it, and answering it in two places would let one of them quietly overrule the other";
  arguments_assert(arguments, 0);
  let cores = await cpu_count();
  let shared = half(cores);
  let by_cores = floor(shared);
  let taking = by_cores;
  let room_bytes = await machine_memory_room_bytes_or_null();
  if (null_is(room_bytes)) {
    ("Nothing said, so nothing counted: the processor count is left standing on its own.");
  } else {
    let share_bytes = qa_shard_memory_bytes();
    let by_room = divide_floor(room_bytes, share_bytes);
    let room_smaller = less_than(by_room, by_cores);
    if (room_smaller) {
      taking = by_room;
    }
  }
  let alone = less_than(taking, 1);
  if (alone) {
    let one = 1;
    return one;
  }
  return taking;
}
