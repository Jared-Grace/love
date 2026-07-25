export function g_img_square_size_css() {
  "each map tile / character is a FIXED square — a CAMERA model: the window shows however many tiles FIT, so resizing reveals MORE map instead of rescaling everything, and a wide desktop shows far more of the 25x25 world at once. 76px base (roughly the size a phone already gets today, so no mobile regression), floored by 100vw/5 & 100vh/5 so the tiniest screens still show at least 5 tiles each way";
  let v = "min(76px, 100vw / 5, 100vh / 5)";
  return v;
}
