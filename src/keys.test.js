//
// Copyright 2020 DxOS.
//

// dxos-testing-browser

import { createKeyPair, createId, hasher, humanize, keyToBuffer, keyToString } from './keys';

test('Basic key operations', () => {
  const { publicKey, secretKey } = createKeyPair();

  expect(keyToBuffer(keyToString(publicKey))).toEqual(publicKey);

  expect(() => keyToString('not-a-buffer')).toThrowError();
  expect(() => keyToBuffer('not-a-value-hex-key')).toThrowError();
  expect(() => keyToBuffer(publicKey)).toThrowError();

  expect(createId()).not.toEqual(createId());

  expect(humanize(publicKey)).not.toEqual(humanize(secretKey));
  expect(humanize(publicKey)).toEqual(hasher.humanize(keyToString(publicKey)));
  expect(hasher.humanize(createId())).toBeDefined();
});
