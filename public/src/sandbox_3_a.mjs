export async function sandbox_3_a() {
  let ms = null;
  await new Promise(function lambda5(resolve) {
    let v = setTimeout(resolve, ms);
    return v;
  });
}
