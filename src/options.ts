export interface Options {
  minDepth: number;
  maxDepth: number;
  skip?: string;
  filter?: (str: string) => boolean;
}

export function defaultOptions(options?: Partial<Options>): Options {
  return {
    minDepth: 1,
    maxDepth: 6,
    ...options,
  };
}
