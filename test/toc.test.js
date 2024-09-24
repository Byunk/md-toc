import { toc } from "../src/toc";
import loremIpsum from "./fixture/lorem-ipsum.js";

describe("toc", () => {
  it("should return an array of TOC items", () => {
    const result = toc(loremIpsum);
    expect(result).toEqual([
      { content: "Praeter stat", slug: "praeter-stat", lvl: 1 },
      {
        content: "Conplet Cyllaron armigerae promptior quem",
        slug: "conplet-cyllaron-armigerae-promptior-quem",
        lvl: 2,
      },
      {
        content: "Corpus in spectat formidine dat",
        slug: "corpus-in-spectat-formidine-dat",
        lvl: 2,
      },
      {
        content: "Sedit loci ait bracchia nullos sonitum petens",
        slug: "sedit-loci-ait-bracchia-nullos-sonitum-petens",
        lvl: 2,
      },
      { content: "Illis quos sic", slug: "illis-quos-sic", lvl: 2 },
    ]);
  });

  it("should skip headings that match the skip option", () => {
    const result = toc(loremIpsum, { skip: "Corpus in spectat formidine dat" });
    expect(result).toEqual([
      { content: "Praeter stat", slug: "praeter-stat", lvl: 1 },
      {
        content: "Conplet Cyllaron armigerae promptior quem",
        slug: "conplet-cyllaron-armigerae-promptior-quem",
        lvl: 2,
      },
      {
        content: "Sedit loci ait bracchia nullos sonitum petens",
        slug: "sedit-loci-ait-bracchia-nullos-sonitum-petens",
        lvl: 2,
      },
      { content: "Illis quos sic", slug: "illis-quos-sic", lvl: 2 },
    ]);
  });

  it("should filter headings that match the filter option", () => {
    const result = toc(loremIpsum, {
      filter: (str) => str.includes("Conplet Cyllaron"),
    });
    expect(result).toEqual([
      { content: "Praeter stat", slug: "praeter-stat", lvl: 1 },
      {
        content: "Corpus in spectat formidine dat",
        slug: "corpus-in-spectat-formidine-dat",
        lvl: 2,
      },
      {
        content: "Sedit loci ait bracchia nullos sonitum petens",
        slug: "sedit-loci-ait-bracchia-nullos-sonitum-petens",
        lvl: 2,
      },
      { content: "Illis quos sic", slug: "illis-quos-sic", lvl: 2 },
    ]);
  });
});
