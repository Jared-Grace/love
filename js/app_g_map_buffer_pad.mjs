import { fn_name } from "./fn_name.mjs";
export function app_g_map_buffer_pad() {
  ("the buffer-ring thickness (in tiles) padded around every newly generated map (",
    fn_name("app_g_map_pad"),
    "), so the viewport can scroll far enough to CENTER the player even at the real map edge (needs ~half the visible-tile window). the render cost is roughly ((inner + 2*pad) / inner)^2 more tiles — the one place to retune that trade");
  ("1, because the ring no longer buys the room it was sized for: ",
    fn_name("app_g_map_room_new"),
    " draws the open water as a repeating background, which costs the same however far it reaches, so centring is exact at every screen size without a single tile of ring. what is left is one row of real water around the world, keeping a shoreline the map can be read against and keeping this a genuine ring. it was 8 while the room was made of tiles, at 41x41 = 1681 of them against 27x27 = 729 now");
  let r = 1;
  return r;
}
