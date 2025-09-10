export function sleep(ms) {
  let v4 = new Promise(function lambda5(resolve) {
    let v = setTimeout(resolve, ms);
    return v;
  });
  return v4;
}
