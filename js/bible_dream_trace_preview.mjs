import { bible_dream_scene_trace_show } from "./bible_dream_scene_trace_show.mjs";
import { bible_dream_pharaoh_strokes } from "./bible_dream_pharaoh_strokes.mjs";
export function bible_dream_trace_preview() {
  "Pharaoh's two dreams on a screen, on the sandbox app at the hash dream_trace: every stroke GEN41:1-7 says he saw, laid out faint and all at once, waiting to be drawn by dragging along it.";
  "It exists to answer ONE question that no amount of reasoning can answer - whether tracing a given shape, in an order you choose, feels like anything at all. Everything else about it is deliberately cheap. If the dragging is dull the whole dream palette is wrong and the reading it was built on still stands, which is why the reading was written down somewhere else first.";
  "It is a passage and nothing more. Every line it used to hold about how the tracing works moved into the shower it calls, the moment there was a second dream to show, so that neither passage can quietly get a mechanic of its own.";
  let scene = bible_dream_pharaoh_strokes();
  let root = bible_dream_scene_trace_show(scene);
  return root;
}
