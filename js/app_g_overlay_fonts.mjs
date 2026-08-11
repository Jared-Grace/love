export function app_g_overlay_fonts() {
  "the shared font sizes for the prayer-family overlays (the prayer-wait #discern screen, the dove HS-warning #dove screen, and the thanksgiving) — one place to tune them so the overlays all match. taken from the prayer-wait overlay";
  "each size is the size it has always been on a roomy screen and a share of the screen's width on a small one, whichever is smaller. a fixed size was measured overflowing a phone: at three hundred and ninety across, the dove began forty eight above the top of the screen and the verse reference fell four below the bottom, so the picture was beheaded and the reference simply was not there. a share of the width cannot do that, because it shrinks with the thing it has to fit inside";
  "the shares are chosen so each size reaches its old value while the screen is still narrower than a phone held sideways - so nothing on a desktop, a tablet, or a laptop is drawn one pixel differently, and only a screen too small for the old size ever sees a smaller one";
  let fonts = {
    emoji: "min(12rem, 30vw)",
    statement: "min(2.25rem, 7vw)",
    verse: "min(1.75rem, 6vw)",
    reference: "min(1.25rem, 4.5vw)",
  };
  return fonts;
}
