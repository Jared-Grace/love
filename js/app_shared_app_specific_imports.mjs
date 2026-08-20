import { app_shared_app_specific_imports_walked } from "./app_shared_app_specific_imports_walked.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_app_specific_imports() {
  arguments_assert(arguments, 0);
  ("Every place a shared unit reaches into one particular app - each answer naming the shared function and the app-specific name it imports.");
  ("Shared code is what every app is allowed to depend on, so it can depend on no app itself. Break that and the shared closure stops being shared: an app importing one shared button now carries whatever app that button reached for. Twice the imported name is a whole app entry point, and a name-only import of one of those was measured at 410 KiB on a bundle.");
  ("The pair is the answer rather than the shared function alone, because one shared function can reach into two apps and fixing one of them should not read as fixing both.");
  ("The near side is a name rather than an app here. Shared is not an app, so asking which app one of these belongs to answers with an empty word, the same as it does for every plain tooling name - and this reading wants the one family, not all of them. Its wider sibling asks the whole unowned set and holds a baseline; this one holds its family at zero.");
  ("The two questions that decide what counts moved one name along when the gate above needed to know how much had been opened. The readers here write or add to a record and none of them has any use for the count, so it is read off next door and left behind.");
  let told = await app_shared_app_specific_imports_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
