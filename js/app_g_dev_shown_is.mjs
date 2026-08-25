import { host_local_network_is } from "./host_local_network_is.mjs";
export function app_g_dev_shown_is() {
  "Whether the game's dev tools are offered at all on the page being read: the button in the player menu, the card on the index page, and the screens themselves.";
  "They used to ship. The reason given was that a phone has no localhost to develop from, so holding them back to localhost would have left the only device the game is really played on with no way in. That reason no longer holds, because being on this same network is a wider question than being localhost: a phone reaching this machine by the name its own network gives it answers yes, and that is how the game is worked on from a phone anyway.";
  "So the wider question is the one asked, and asking it costs a player nothing they wanted. A reader who opened the deployed game came to play it; a gear in their menu and a directory of test screens behind it are somebody else's tools left out in a room they were shown into.";
  "It is one answer rather than one per place, because three of them go together: a button that opens a directory, a card that opens the same directory, and the screens the directory lists. Any one of those left showing on its own is either a button that does nothing or a screen with no button, and both look like a fault rather than a decision.";
  let r = host_local_network_is();
  return r;
}
