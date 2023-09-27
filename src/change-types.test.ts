import { describe, expect, it } from "vitest";

import { changeTypes } from "./change-types";

describe("changeTypes", () => {
  it("exists", () => {
    expect(changeTypes).toMatchSnapshot();
  });
});
