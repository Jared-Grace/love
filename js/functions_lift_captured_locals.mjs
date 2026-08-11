import { commits_function_nested_lift } from "./commits_function_nested_lift.mjs";
import { function_lift_captured_locals } from "./function_lift_captured_locals.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_lift_captured_locals(folder) {
  "$plain folder";
  "Every function ever moved out of another one that still reads a name belonging to where it came from, each answered beside the names it lost";
  "One lift losing a name is a mistake; every lift losing one is the moving itself being wrong, and only asking about all of them can tell those apart. It finds its own set out of the history rather than being handed a list, because which functions were moved is written down in the commits and nowhere else";
  "A lift that lost nothing is left out entirely, so an empty answer means the moving has never dropped anything";
  "They are asked one after another rather than all at once. Each one spawns a program to read the history, and a hundred and sixty of those arriving together on a machine already shared by everybody working is the slowest way to ask a question that only has to be asked once";
  let lifts = await commits_function_nested_lift(folder);
  let faulty = [];
  for (let lift of lifts) {
    let before = property_get(lift, "before");
    let source = property_get(lift, "source");
    let nested = property_get(lift, "nested");
    let lifted = property_get(lift, "lifted");
    let read = await function_lift_captured_locals(
      folder,
      before,
      source,
      nested,
      lifted,
    );
    let any = property_list_empty_not_is(read, "dropped");
    if (any) {
      list_add(faulty, read);
    }
  }
  return faulty;
}
