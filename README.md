# indexeddb-mock

> Easily stub out IndexedDB

This mock is adapted from [mock-indexeddb][1] to play nice with CommonJS and `npm`.

# Install

Use `npm`.

```shell
npm i -D indexeddb-mock
```

# Public API

##### `.mock`

A mock of the IndexedDB API.

##### `.reset()`

Resets state in the mock. Call this before tests to reset state.

##### `.commit(key, value)`

Adds an item with `key` and `value`. Used to prefill IndexedDB before tests.

# License

MIT

  [1]: https://github.com/szimmers/mock-indexeddb
