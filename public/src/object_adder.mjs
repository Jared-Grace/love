import { marker } from "../../../love/public/src/marker.mjs";
export function object_adder(lambda) {
  marker("1");
  function lambda2() {}
  lambda(lambda2);
}
