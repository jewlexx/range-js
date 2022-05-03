export class Range implements Iterable<number> {
  private length = this.to - this.from;

  constructor(public from: number, public to: number, public step: number) {}

  [Symbol.iterator](): Iterator<number, any, undefined> {
    let counter = 0;

    return {
      next: () => {
        return {
          done: counter >= this.length,
          value: (counter += this.step) + this.from,
        };
      },
    };
  }
}

export function range(start: number, end: number, step: number = 1): Range {
  return new Range(start, end, step);
}

export default range;
