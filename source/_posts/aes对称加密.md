---
title: CryptoJS
date: 2018-04-24 00:48:47
categories: js
tags:
  - CryptoJS
---
```javascript
const sKey = CryptoJS.enc.Utf8.parse('test');

// 加密
encryptedStr = CryptoJS.AES.encrypt('text', sKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
}).ciphertext.toString()

// 解密
CryptoJS.AES.decrypt(
    CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(encryptedStr)),
    sKey,
    {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }
).toString(CryptoJS.enc.Utf8);
```
