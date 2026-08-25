import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_seats } from "./app_shared_text_reader_seats.mjs";
import { app_shared_text_reader_stops } from "./app_shared_text_reader_stops.mjs";
import { function_reachable_calls_named_stopping } from "./function_reachable_calls_named_stopping.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_door_arrivals(f_name_app) {
  "$plain f_name_app";
  "Every call inside one app that arrives at a door words leave through, said as the function it was written in, the door it went to, and whatever is sitting in the seat the words go in.";
  "THE SEAT IS HANDED OVER AS IT WAS FOUND AND NOT JUDGED HERE. Whether what sits there is words typed out in place, or a name, or a reach into a record, is the question each reading built on this is asking, and answering it once for all of them would settle by accident a thing they deliberately answer differently.";
  "AN ARRIVAL THAT LEFT THE SEAT EMPTY IS KEPT rather than dropped, for the same reason. A reading that counts how many doors it stood at needs it and a reading that looks at what went through does not, so throwing it away here would make one of those readings wrong while leaving nothing to show it.";
  "The functions it managed to walk come back beside the arrivals, because how much of the app was opened is the whole of how far to trust how little was found.";
  "It is one function rather than the same opening written at the top of each reading, so the two cannot come to disagree about which app they walked - they turn aside at the same screens and stand at the same doors by construction rather than by both being kept up to date.";
  arguments_assert(arguments, 1);
  let seats = app_shared_text_reader_seats();
  let stops = await app_shared_text_reader_stops(f_name_app);
  let walked = await function_reachable_calls_named_stopping(f_name_app, stops);
  let calls = property_get(walked, "calls");
  let arrivals = [];
  for (let one of calls) {
    let f_name = property_get(one, "f_name");
    let callee_name = property_get(one, "callee_name");
    let call = property_get(one, "call");
    for (let seat of seats) {
      let door = property_get(seat, "fn");
      let ours = equal(callee_name, door);
      if (not(ours)) {
        continue;
      }
      let at = property_get(seat, "at");
      let argument = call.arguments[at];
      list_add(arrivals, {
        f_name,
        door,
        argument,
      });
    }
  }
  let reachable = property_get(walked, "reachable");
  let r = {
    arrivals,
    reachable,
  };
  return r;
}
