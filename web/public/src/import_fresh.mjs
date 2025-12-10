export function import_fresh(path) {
  const vm = new VM({
    context: {},
  });
  let v = vm.run(`import("${path}")`);
  return v;
}
