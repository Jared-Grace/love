import { VM } from "vm";
export async function import_fresh(path) {
  const vm = new VM({
    context: {},
  });
  let v = await vm.run(`import("${path}")`);
  return v;
}
