import { v4 } from "uuid";
export async function uuid() {
  let u = v4();
  return u;
}
