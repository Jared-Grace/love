let holder = null;
export function function_worker_pool_holder() {
  "The one place the pool of warm workers currently being handed jobs is kept, handed back as something its readers can write into.";
  "Only ever one pool is the current one, and it is replaced rather than emptied. An older pool goes on existing for as long as it has work in flight, which is what lets its workers finish the jobs they were given instead of being killed holding them.";
  "A worker that dies asks whether the pool it belongs to is still this one before it marks that pool broken. Reading the answer from here is what makes a drained old pool's last breath harmless.";
  "Made once and kept, for the same reason the count next door is: readers in different files have to be looking at the same box or the writing goes nowhere anybody reads.";
  if (holder === null) {
    holder = {
      current: null,
    };
  }
  return holder;
}
