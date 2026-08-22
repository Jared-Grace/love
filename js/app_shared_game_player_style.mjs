import { html_style_set } from "./html_style_set.mjs";
export function app_shared_game_player_style(player_img_c) {
  "The white breathing glow that says which of the people on the map is YOU.";
  "A map full of characters drawn the same way needs one of them marked, and the mark has to survive the map moving under it. This one is a light rather than a badge or an arrow, so it is read at a glance without being aimed at, it sits on the person rather than beside them, and it moves with them for free because it is part of how they are drawn.";
  "It BREATHES rather than sitting still, because a still light is hard to tell from a bright tile. Movement is the one thing on a map of pictures that nothing else is doing while the player stands about, so it finds the eye of somebody who has looked away and come back - which is the case the mark exists for.";
  "Shared, and not the gospel game's own, because both games draw the same street with the same people on it and the player is the same person in both. Two answers to which one is you would have been the same question answered twice, and a player who learned the glow in one game would have had to learn something else in the other.";
  "The keyframes it names are put on the page separately, once, by the twin next door - so a game that shows a player has to ask for both. Named here and never defined, this is a line of CSS the browser quietly ignores.";
  html_style_set(player_img_c, "animation", "pulseGlow 2s infinite alternate");
}
