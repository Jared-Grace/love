export function lambda_timeout(fn, ms) {
  let v = Promise.resolve().then(fn);
  let r3 = Promise.race([
    v,
    new Promise(function lambda2(_, reject) {
      function lambda() {
        let r = reject(new Error("Timeout"));
        return r;
      }
      let r2 = setTimeout(lambda, ms);
      return r2;
    }),
  ]);
  return r3;
}
