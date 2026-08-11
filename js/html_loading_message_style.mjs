import { html_viewport_width_full } from "./html_viewport_width_full.mjs";
export function html_loading_message_style() {
  "how the one line under the loading spinner is drawn, and where it sits: pinned below the middle of the viewport, so the spinner above it stays exactly centered no matter how tall this line grows. it clears the ring at its WIDEST, not at rest - the ring breathes out to a third again its size, so an 8rem radius reaches almost 11rem, and a gap measured against the resting ring would let the line be crossed on every expansion. shared by the runtime overlay and the static boot splash";
  "the line takes its natural one-line width and is then held to the viewport, which is what lets the words be changed freely: a line pinned at half the viewport and pulled back by half its own width has only half the screen to lay itself out in, so without a ceiling a longer message would run off both edges of a phone with nothing anywhere reporting it. wrapping is already safe here because the pinning above was chosen so this line may grow as tall as it likes";
  let r = {
    position: "fixed",
    top: "calc(50% + 11rem)",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "0",
    color: "white",
    "font-size": "1.5rem",
    "font-family": "sans-serif",
    "text-align": "center",
    width: "max-content",
    "max-width": html_viewport_width_full(),
    "box-sizing": "border-box",
    "text-shadow": "0 0.05em 0.15em rgba(0, 0, 0, 0.8)",
    background:
      "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 75%)",
    padding: "1.25rem 3.5rem",
  };
  return r;
}
