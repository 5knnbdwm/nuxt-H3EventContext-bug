// import baa from "../foo/baa"

declare module 'h3' {
  interface H3EventContext {
    // foo: typeof baa
    userId: undefined
  }
}
