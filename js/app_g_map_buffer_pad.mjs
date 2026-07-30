import { fn_name } from "./fn_name.mjs";
export function app_g_map_buffer_pad() {
  ("the buffer-ring thickness (in tiles) padded around every newly generated map (",
    fn_name("app_g_map_pad"),
    "), so the viewport can scroll far enough to CENTER the player even at the real map edge (needs ~half the visible-tile window). the render cost is roughly ((inner + 2*pad) / inner)^2 more tiles — the one place to retune that trade");
  ("8 rather than 6 because the tile base dropped to 56px: a 844px-tall phone now shows 15 tiles down instead of 11, so centring at the top or bottom edge asks for 7.5 tiles of room and 6 left the player sitting off-centre there. that used to be recoverable by dragging the map; the view no longer scrolls by hand, so the ring has to cover it");
  let r = 8;
  return r;
}
