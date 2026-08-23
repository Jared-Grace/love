import { arguments_assert } from "./arguments_assert.mjs";
export function html_on_error(lambda) {
  arguments_assert(arguments, 1);
  ("run something whenever this page hits an error it did not catch");
  ("Both kinds are listened for. A throw and a rejected promise nobody waited on are the same failure to somebody reading the screen, and a listener that heard only one of them would be deaf to every fault inside an await - which on a page that loads what it shows is most of them.");
  window.addEventListener("error", lambda);
  window.addEventListener("unhandledrejection", lambda);
}
