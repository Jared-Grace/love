export function g_img_square_size_css() {
  "each map tile / character is a FIXED square — a CAMERA model: the window shows however many tiles FIT, so resizing reveals MORE map instead of rescaling everything, and a wide desktop shows far more of the 25x25 world at once. floored by 100vw/5 & 100vh/5 so the tiniest screens still show at least 5 tiles each way";
  ("56px base, chosen by how much of the world a PHONE sees rather than by how large a sprite is: 76px gave a 390px-wide phone 5.1 tiles across, so an npc was invisible until you were nearly standing on them — which works against the discernment walk, where seeing who is around IS the choice. 56px gives 7 across and 15 down on the same phone. the two floor terms never bind at this base until a screen is under 280px wide");
  let v = "min(56px, 100vw / 5, 100vh / 5)";
  return v;
}
