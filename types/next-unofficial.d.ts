declare module 'next/server' {
  export function unstable_after(fn: () => Promise<void>): void;
}