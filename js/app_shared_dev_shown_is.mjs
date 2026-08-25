import { host_local_network_is } from "./host_local_network_is.mjs";
export function app_shared_dev_shown_is() {
  "Whether an app's dev tools are offered at all on the page being read: the way in, wherever a given app puts it, and the screens behind it.";
  "Shared rather than one game's own, because both games ask it and the answer must not be allowed to differ between them. It sits here for the ordinary reason a thing sits here - no app owns it - and it depends on no app, so importing it hands nobody a second app they did not ask for.";
  "They used to ship. The reason given was that a phone has no localhost to develop from, so holding them back to localhost would have left the only device the game is really played on with no way in. That reason no longer holds, because being on this same network is a wider question than being localhost: a phone reaching this machine by the name its own network gives it answers yes, and that is how the game is worked on from a phone anyway.";
  "So the wider question is the one asked, and asking it costs a player nothing they wanted. A reader who opened the deployed game came to play it; a gear in their menu and a directory of test screens behind it are somebody else's tools left out in a room they were shown into.";
  "It is one answer rather than one per place, because the places go together: a button or a pill that opens a directory, a card on the index page that opens the same directory, and the screens the directory lists. Any one of those left showing on its own is either a way in that does nothing or a screen with no way in, and both look like a fault rather than a decision.";
  let r = host_local_network_is();
  return r;
}
