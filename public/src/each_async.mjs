export async function each_async(list, lambda) {
  for (let item of list) {
   await lambda(item);
  }
}
