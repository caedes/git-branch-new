import { describe, expect, test } from "vitest";
import trigram from "./trigram";

describe("trigram", () => {
  test("with empty string", () => {
    expect(trigram("")).toBe("");
  });

  test("with one word", () => {
    expect(trigram("john")).toBe("joh");
  });

  test("with two dasherize words", () => {
    expect(trigram("john-smith")).toBe("jsm");
  });

  test("with two camelCase words", () => {
    expect(trigram("johnSmith")).toBe("jsm");
  });

  test("with two dot-separated words", () => {
    expect(trigram("John.Smith")).toBe("jsm");
  });

  test("with two words", () => {
    expect(trigram("John Smith")).toBe("jsm");
  });

  test("with three words", () => {
    expect(trigram("John Fitzerald Smith")).toBe("jfs");
  });

  test("with more than three words", () => {
    expect(trigram("John Spenser Fitzerald Smith")).toBe("jsf");
  });
});
