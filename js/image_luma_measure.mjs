import { catch_null } from "./catch_null.mjs";
import { image_element_luma } from "./image_element_luma.mjs";
export function image_luma_measure(src, on_luma) {
  "measure how bright the picture at src is and hand the answer to on_luma, as a mean brightness from 0 for black to 255 for white; a picture that will not load, or that the browser will not let be read back, hands back null rather than a number nobody could trust";
  let size = 24;
  let image = new Image();
  image.crossOrigin = "anonymous";
  function lambda() {
    function lambda3() {
      let r = image_element_luma(image, size);
      return r;
    }
    let luma = catch_null(lambda3);
    on_luma(luma);
  }
  function lambda2() {
    on_luma(null);
  }
  image.onload = lambda;
  image.onerror = lambda2;
  image.src = src;
}
