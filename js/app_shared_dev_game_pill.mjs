import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_shared_dev_pill } from "./app_shared_dev_pill.mjs";
export function app_shared_dev_game_pill() {
  arguments_assert(arguments, 0);
  ("The pill over the dev directory that goes back to the game itself - the ordinary page,");
  ("with no screen drawn over it and no opening asked for.");
  ("The directory is the one dev page with NO way out of it. Every screen it opens carries a");
  ("back-to-routes pill, so a reader can always get from a screen to the list; from the list");
  ("there was nothing but the address bar, which on a phone means editing a URL by thumb to");
  ("delete four characters off the end of it. The way in is one tap and the way out was not.");
  ("It goes to the PLAIN game and not to one of the openings. An opening is the street with");
  ("the door prayer skipped and the panels turned off, which is the right thing to hand a");
  ("developer testing a screen and the wrong thing to hand somebody who has finished and");
  ("wants to see what a player sees. The openings are all on the list above anyway, a tap");
  ("away, so the pill is worth spending on the one address the list does not hold.");
  ("Shared by both games because both draw their directory through the same screen, and a");
  ("pill written once in each is the pair of copies that ends with one of them improved.");
  ("The hash is emptied and the page RELOADED rather than the game being started from here.");
  ("A dev screen has already drawn itself over the top of whatever was underneath and left");
  ("its own listeners behind; starting the game again in that page would be the game running");
  ("underneath a panel it cannot see. A reload is the same road every other pill takes.");
  let word = "";
  function game() {
    html_hash_name_reload(word);
  }
  app_shared_dev_pill("← game", "#", game, "0.5rem");
}
