import { app_g_dev_routes } from "./app_g_dev_routes.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function app_g_dev_route_names() {
  "the word after the # for every dev screen the game has, got by building the registry and reading back the names it ended up holding.";
  "IT USED TO READ THE REGISTRY'S CODE AS TEXT, AND THAT ANSWER WAS ONCE RIGHT AND IS NOT ANY MORE. When every route was a function written directly inside the registry, the functions standing in that body were the routes, and asking the code which those were could not fall behind somebody adding a screen. Routes now reach the registry three different ways: seventeen of them are keys of an object written out in one of the chained groups, two are put in one at a time by name afterwards, and the ones for clearing an npc's path are not written down anywhere at all - their names are built at run time by joining a prefix to each situation the game knows about. No reading of the source can see the third kind, because the words do not exist until the code runs.";
  "SO IT CALLS THE REGISTRY, WHICH IS THE THING THE OLD READING WAS ONLY EVER AN IMITATION OF. What used to make that impossible was one line asking whether the page came from localhost, in a place where there is no page - so the question threw and took the whole list down with it. That question answers no now where there is nothing to ask, which is what a localhost-only screen deserves anyway.";
  "WHICH MEANS THE LIST IS ONE SHORTER AWAY FROM A BROWSER, AND THAT IS THE RIGHT LENGTH. #design is held back off localhost, so a sweep run from a script does not get it - and a sweep is exactly the caller that must not be handed a screen the sweep's own browser would be refused.";
  "the two callers both wanted the screens that exist TODAY rather than the ones that existed when they were written, which is what they were promised and, until this, not what they got: the reading returned the single route that happened still to be written inside the registry itself, so a walk of every dev screen at phone size walked one.";
  let routes = app_g_dev_routes(null);
  let names = object_property_names(routes);
  return names;
}
