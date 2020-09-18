//
// Copyright 2020 DXOS.org
//

// dxos-testing-browser

import { createKeyPair, createId, hash, hasher, humanize, keyToBuffer, keyToString } from './keys';

test('Basic key operations', () => {
  const { publicKey } = createKeyPair();

  expect(keyToBuffer(keyToString(publicKey))).toEqual(publicKey);

  expect(() => keyToString('not-a-buffer')).toThrowError();
  expect(() => keyToBuffer('not-a-value-hex-key')).toThrowError();
  expect(() => keyToBuffer(publicKey)).toThrowError();
});

test('Hashing', () => {
  const { publicKey, secretKey } = createKeyPair();

  expect(createId()).not.toEqual(createId());

  expect(hash('DXOS')).toBe('574cd771783913943e13c8bedcfee346661b1eeee29d9ca597b0b60962046d40');
  expect(hash('DXOS')).not.toBe(hash('DXOS-2'));

  expect(humanize(publicKey)).not.toEqual(humanize(secretKey));
  expect(humanize(publicKey)).toEqual(hasher.humanize(keyToString(publicKey)));
  expect(hasher.humanize(createId())).toBeDefined();
});
