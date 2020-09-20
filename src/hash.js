//
// Copyright 2020 DxOS.
//

import assert from 'assert';
import CryptoJS from 'crypto-js';

/**
 *
 * @param algorithm
 * @param plaintext
 * @returns {string}
 * @private
 */
const _hash = (algorithm, plaintext) => {
  assert(typeof algorithm === 'string');
  assert(typeof plaintext === 'string');

  return CryptoJS[algorithm](plaintext).toString();
};

/**
 * Creates a SHA-1 hash of the supplied string, returned as a hexadecimal string.
 * @param {string} text
 * @returns {string}
 */
export const sha1 = (text) => _hash('SHA1', text);

/**
 * Creates a SHA-256 hash of the supplied string, returned as a hexadecimal string.
 * @param {string} text
 * @returns {string}
 */
export const sha256 = (text) => _hash('SHA256', text);

/**
 * Creates a SHA-512 hash of the supplied string, returned as a hexadecimal string.
 * @param {string} text
 * @returns {string}
 */
export const sha512 = (text) => _hash('SHA512', text);

/**
 * Creates a SHA-512 hash of the supplied string, returned as a hexadecimal string.
 * @param {string} text
 * @returns {string}
 */
export const ripemd160 = (text) => _hash('RIPEMD160', text);
