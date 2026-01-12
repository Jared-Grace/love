export function promise_sequence() {
  let tail = Promise.resolve();
  let v = async function enqueue(fn) {
    let result = null;
    async function lambda() {
      result = await fn();
    }
    tail = tail.then(lambda);
    await tail;
    return result;
  };
  return v;
}
