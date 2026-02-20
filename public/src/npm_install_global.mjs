import { npm_install_generic } from "../../../love/public/src/npm_install_generic.mjs";
export async function npm_install_global(package_name) {
  let before = "-g ";
  await npm_install_generic(package_name, before);
}
