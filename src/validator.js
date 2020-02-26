//
// Copyright 2020 DxOS.
//

import { verify } from 'hypercore-crypto';

import { keyToBuffer } from './keys';

/**
 * Generator for signature validation function.
 * @param {String} publicKey
 */
export const getSignatureValidator =
  (publicKey) => (message, signature) => verify(message, signature, keyToBuffer(publicKey));
