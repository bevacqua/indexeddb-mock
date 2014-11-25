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

##### `.flags`

You can set flags to determine what features are enabled. Here's the defaults.

```json
{
  "canOpenDB": true,
  "openDBShouldBlock": false,
  "openDBShouldAbort": false,
  "upgradeNeeded": false,
  "canReadDB": true,
  "canSave": true,
  "canDelete": true,
  "canClear": true,
  "canCreateStore": true,
  "canDeleteDB": true
}
```

Note that flags are reset to their defaults whenever `.reset()` is called.

# License

MIT

  [1]: https://github.com/szimmers/mock-indexeddb
