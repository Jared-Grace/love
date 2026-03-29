export async function lambda_timeout(fn, ms) {
  let value = new Error(lambda_timeout.name);
  let v = Promise.resolve().then(fn);
  let r = await Promise.race([
    v,
    new Promise(function lambda2(_, reject) {
      function lambda() {
        let r4 = reject(new Error(lambda_timeout.name));
        return r4;
      }
      let r2 = setTimeout(lambda, ms);
      return r2;
    }),
  ]);
  return r;
}
