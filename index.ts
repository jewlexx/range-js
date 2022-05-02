export class Range implements Iterable<number> {
  private length = this.to - this.from;

  constructor(public from: number, public to: number) {}

  [Symbol.iterator](): Iterator<number, any, undefined> {
    let counter = 0;

    return {
      next: () => {
        return {
          done: counter >= this.length,
          value: (counter += 1) + this.from,
        };
      },
    };
  }
}

export default function range(start: number, end: number): Range {
  return new Range(start, end);
}
