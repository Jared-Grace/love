export async function lambda_timeout(fn, ms) {
  let v = Promise.resolve().then(fn);
  let r3 = await Promise.race([
    v,
    new Promise(function lambda2(_, reject) {
      function lambda() {
        let r4 = reject(new Error("Timeout"));
        return r4;
      }
      let r2 = setTimeout(lambda, ms);
      return r2;
    }),
  ]);
  return r3;
}
