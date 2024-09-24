import { defaultOptions } from "../src/options";

describe("defaultOptions", () => {
  it("should return default options when no options are provided", () => {
    const result = defaultOptions();
    expect(result).toEqual({
      minDepth: 1,
      maxDepth: 6,
    });
  });

  it("should merge default options with partial provided options", () => {
    const options = {
      minDepth: 3,
    };
    const result = defaultOptions(options);
    expect(result).toEqual({
      minDepth: 3,
      maxDepth: 6,
    });
  });
});
