import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { function_exists_not } from "./function_exists_not.mjs";
export async function app_shared_text_reader_stops(f_name_app) {
  "$plain f_name_app";
  "The names inside one app that a reader checking words against the language promise must not walk into, because nothing behind them was ever promised to anybody.";
  "TODAY THAT IS THE APP'S DEV SCREENS AND NOTHING ELSE. A promise about language is made to a reader, and the screens the person building the app opens to look at their own work have no reader to have made it to. The words on them are for one person who wrote them, in the language they wrote them in, and turning those into other languages is work nobody asked for - work that would also bury the findings that are real. Measured on the game the day this was written: ten findings, of which seven were the bench for reviewing pictures and one was the private design notes. Two were the app talking to a player.";
  "IT IS THE REGISTRY THAT IS NAMED, NOT THE SCREENS, and that is what stops an exemption drifting away from the fact it stands on. A screen is a dev screen because it is reachable from the thing that lists the dev screens; a list of screen names written out here would be a second opinion about that, and a second opinion goes stale the moment somebody adds a screen without knowing this file exists. Naming the doorway cannot go stale, because the doorway is the same object the app itself opens those screens through.";
  "A SCREEN THAT SHARES SOMETHING WITH THE APP PROPER IS STILL READ, and that follows from stopping at a doorway rather than crossing off names. Whatever the dev screens borrow from the game is reached by the game's own route as well, so the walk arrives at it anyway. What is left out is only what nothing but a dev screen reaches.";
  "AN APP WITH NO DEV SCREENS GETS NOTHING TO STOP AT, which is why the name is looked for rather than assumed. Every app is asked the same question and most of them answer that they have no such registry, and an answer of nothing is the correct answer for them, not a failure to find something.";
  "THE REGISTRY IS NOT THE ONLY DOORWAY, AND NAMING ONLY IT LET A DEV SCREEN THROUGH. The thing that reads the address and decides what to open is a door of its own, and one screen hangs off it rather than off the registry - the directory of all the dev screens, which is a dev screen too and is opened by name instead of being listed among the routes. The walk went straight into it. So both doorways are named, and the one that decides comes first because everything the other one holds is behind it as well.";
  "EACH DOORWAY IS LOOKED FOR SEPARATELY RATHER THAN ASSUMED TO COME AS A PAIR. Only the game has the deciding door today and every app that has dev screens at all has a registry, so an app answering to one name and not the other is the ordinary case, not a half-built one.";
  arguments_assert(arguments, 1);
  let suffixes = ["_dev_if", "_dev_routes"];
  let stops = [];
  for (let suffix of suffixes) {
    let f_name = text_combine(f_name_app, suffix);
    let missing = await function_exists_not(f_name);
    if (missing) {
      continue;
    }
    list_add(stops, f_name);
  }
  return stops;
}
