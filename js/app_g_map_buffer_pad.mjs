export function app_g_map_buffer_pad() {
  "the buffer-ring thickness (in tiles) padded around every newly generated map (app_g_map_pad), so the viewport can scroll far enough to CENTER the player even at the real map edge (needs ~half the visible-tile window; 6 covers a phone plus a normal desktop). the render cost is roughly ((inner + 2*pad) / inner)^2 more tiles — the one place to retune that trade";
  return 6;
}
