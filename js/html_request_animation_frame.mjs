export async function html_request_animation_frame() {
  await new Promise(function lambda(r) {
    let v = requestAnimationFrame(r);
    return v;
  });
}
