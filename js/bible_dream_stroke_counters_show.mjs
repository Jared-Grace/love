import { each } from "./each.mjs";
import { bible_dream_stroke_humps } from "./bible_dream_stroke_humps.mjs";
import { bible_dream_hump_counter_paths } from "./bible_dream_hump_counter_paths.mjs";
import { bible_dream_counter_draw } from "./bible_dream_counter_draw.mjs";
export function bible_dream_stroke_counters_show(state) {
  "Once a stroke is finished, read the bumps out of it and set an answering flourish writing itself beside each one, one after another.";
  "★ IT WAITS UNTIL THE STROKE IS WHOLE, BECAUSE A BUMP IS NOT KNOWN UNTIL IT IS OVER. A stretch of line bending one way is only a bump once it stops bending that way, so ornament offered while the hand is still moving would have to be built on a guess and would keep being taken back and redrawn as the guess failed. Waiting costs nothing that matters: the flourishes carry on writing while the player is already on the next stroke, so what is felt is another hand working alongside rather than a verdict delivered afterwards.";
  "Every flourish on the whole shape is counted through one running number, so the colours carry on turning across the bumps instead of restarting at each one, and no two neighbours come out the same colour.";
  let humps = bible_dream_stroke_humps(state.samples);
  let waited = 0;
  let turn = 0;
  function each_hump(hump) {
    let paths = bible_dream_hump_counter_paths(state.samples, hump);
    function each_path(drawn) {
      bible_dream_counter_draw(state.flourish, drawn, waited, turn);
      waited = waited + 260;
      turn = turn + 1;
    }
    each(paths, each_path);
  }
  each(humps, each_hump);
}
