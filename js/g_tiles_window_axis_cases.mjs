export function g_tiles_window_axis_cases() {
  "Scroll offsets beside the first and last whole tile that is fully visible at each of them, one case for each way the arithmetic can be got wrong.";
  "What rests on this reading is whether a tap is allowed at all. A window a shade too wide walks the player through tiles they cannot see, which is the very walk the guard exists to refuse; a shade too narrow and it refuses a tile in plain sight, which the player reads as the game ignoring them - and neither says anything anywhere. A whole session was spent watching taps do nothing before the window was the thing that got measured.";
  "The first two cases are a real game screen, measured off the page rather than invented: a map scrolled to where a player standing at tile 5,10 puts it, on a screen 1745 wide and 987 tall with the grid inset 873 across and 494 down.";
  "The rest are the boundaries, where an off-by-one lives: a tile sliced by the near edge, a screen that fits whole tiles exactly, a bar eating the far end, and a scroll that has no tiles on it at all.";
  let cases = [
    {
      scrolled: 308,
      tile: 56,
      view_length: 1745,
      grid_inset: 873,
      trim: 0,
      window_tiles: {
        first: -10,
        last: 20,
      },
      why: "across a real game screen - the window runs off the left of the map because nothing is clamped, and the caller only ever asks whether a real tile is inside it",
    },
    {
      scrolled: 588,
      tile: 56,
      view_length: 987,
      grid_inset: 494,
      trim: 0,
      window_tiles: {
        first: 2,
        last: 18,
      },
      why: "down the same screen - seventeen whole rows, which is what a walk of ten tiles south is measured against",
    },
    {
      scrolled: 588,
      tile: 56,
      view_length: 987,
      grid_inset: 494,
      trim: 120,
      window_tiles: {
        first: 2,
        last: 16,
      },
      why: "the same again with a bar across the bottom of the map: two rows go, because a tile underneath something the player cannot see past is not on screen",
    },
    {
      scrolled: 874,
      tile: 56,
      view_length: 112,
      grid_inset: 873,
      trim: 0,
      window_tiles: {
        first: 1,
        last: 1,
      },
      why: "tile zero is sliced by one pixel at the near edge and is refused for it - fully visible means fully, which is the whole reason the near side rounds up",
    },
    {
      scrolled: 873,
      tile: 56,
      view_length: 112,
      grid_inset: 873,
      trim: 0,
      window_tiles: {
        first: 0,
        last: 1,
      },
      why: "two tiles fitting the screen exactly, nothing sliced at either end - the case an extra one back on the far side would break and the one before it would not",
    },
    {
      scrolled: 0,
      tile: 56,
      view_length: 112,
      grid_inset: 873,
      trim: 0,
      window_tiles: {
        first: -15,
        last: -15,
      },
      why: "scrolled right off the grid, so what is on screen is the empty margin the map is inset by and no real tile at all. the answer names a tile that does not exist rather than saying nothing, which is deliberate: the caller asks whether tile such-and-such is inside, and no real tile ever is",
    },
  ];
  return cases;
}
