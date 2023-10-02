import { describe, expect, test } from "vitest";

import branchName from "./branch-name";

describe("branchName", () => {
  test("the correct format with all params", () => {
    expect(branchName("feat", "DEVEX-123", "user", "short description")).toBe(
      "feat/devex-123_user_shortDescription"
    );
  });

  test("the correct format without Jira ticket", () => {
    expect(branchName("feat", "", "user", "short description")).toBe(
      "feat/user_shortDescription"
    );
  });
});
