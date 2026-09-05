import { arguments_assert } from "./arguments_assert.mjs";
import { bless_world_size } from "./bless_world_size.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_bless_tile_size_map() {
  arguments_assert(arguments, 0);
  ("How large one tile is drawn when the whole world is being shown at once instead of the");
  ("stretch of street in front of the player.");
  ("It is WORKED OUT from the size of the world rather than written down, because what this");
  ("size is for is a fact about the world and not a taste about the picture: every tile has");
  ("to be on the screen. A number typed in here would go on looking right and quietly cut");
  ("the far corner off the moment the street got longer, and a corner missing off a map is");
  ("the one fault a map may not have.");
  ("Both directions are asked and the smaller answer wins, because the world is square and");
  ("a screen is not. Sized by the width alone it hangs off the bottom of a short window;");
  ("sized by the height alone it runs off the side of a narrow one. The smaller of the two");
  ("fits in whichever direction is the tight one and leaves room in the other.");
  ("A few tiles of air are counted in on top of the world itself. The outermost ring is");
  ("open water and the edge of everywhere, so a map drawn flush to the screen reads as a");
  ("world that carries on past it - and the buttons the game is played with sit over the");
  ("bottom of the screen, so the last row drawn hard against it would be a row under a");
  ("button.");
  ("Nothing caps it in pixels, unlike the size the street is played at. That cap is there so");
  ("a person stays large enough to walk up to on a wide screen, and nobody walks up to");
  ("anybody here - what is wanted is the whole thing at once, so a big screen should spend");
  ("all of itself on it.");
  let size = bless_world_size();
  let air = 6;
  let across = add(size, air);
  let text = text_combine_multiple([
    "min(100vw / ",
    across,
    ", 100vh / ",
    across,
    ")",
  ]);
  return text;
}
