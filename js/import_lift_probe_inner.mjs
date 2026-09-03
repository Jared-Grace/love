import express from "express";
import { arguments_assert } from "./arguments_assert.mjs";
export function import_lift_probe_inner() {
  arguments_assert(arguments, 0);
  let j = express.json({
    limit: "1mb",
  });
  return j;
}
