# binar
Encode / decode binary data using Buffer written in TypeScript

[![npm version](https://badge.fury.io/js/binar.svg)](https://badge.fury.io/js/binar)
[![npm](https://img.shields.io/npm/dw/binar.svg)](https://www.npmjs.com/package/binar)
![npm type definitions](https://img.shields.io/npm/types/binar.svg)
[![Build Status](https://travis-ci.org/joonhocho/binar.svg?branch=master)](https://travis-ci.org/joonhocho/binar)
[![Dependency Status](https://david-dm.org/joonhocho/binar.svg)](https://david-dm.org/joonhocho/binar)
[![GitHub](https://img.shields.io/github/license/joonhocho/binar.svg)](https://github.com/joonhocho/binar/blob/master/LICENSE)

## Get Started
```
npm install -D binar
```
or
```
yarn add -D binar
```

```typescript
import { DataType, decodeBinar, encodeBinar } from 'binar';

test('binar', () => {
  const data = [
    [DataType.Null, null],
    [DataType.Boolean, false],
    [DataType.Boolean, true],
    [DataType.Number, 0],
    [DataType.Number, 1],
    [DataType.Number, -1],
    [DataType.Number, Math.random()],
    [DataType.String, 'this is string 하하'],
    [DataType.Buffer, Buffer.from('another 하하')],
    [DataType.BigInt64BE, BigInt(-Math.floor(Math.random() * 2 ** 32))],
    [DataType.BigInt64LE, BigInt(-Math.floor(Math.random() * 2 ** 32))],
    [DataType.BigUInt64BE, BigInt(Math.floor(Math.random() * 2 ** 32))],
    [DataType.BigUInt64LE, BigInt(Math.floor(Math.random() * 2 ** 32))],
    [DataType.DoubleBE, -Math.random()],
    [DataType.DoubleLE, -Math.random()],
    [DataType.FloatBE, -Math.random()],
    [DataType.FloatLE, -Math.random()],
    [DataType.Int8, -Math.floor(Math.random() * 2 ** 4)],
    [DataType.Int16BE, -Math.floor(Math.random() * 2 ** 8)],
    [DataType.Int16LE, -Math.floor(Math.random() * 2 ** 8)],
    [DataType.Int32BE, -Math.floor(Math.random() * 2 ** 16)],
    [DataType.Int32LE, -Math.floor(Math.random() * 2 ** 16)],
    [DataType.UInt8, Math.floor(Math.random() * 2 ** 8)],
    [DataType.UInt16BE, Math.floor(Math.random() * 2 ** 16)],
    [DataType.UInt16LE, Math.floor(Math.random() * 2 ** 16)],
    [DataType.UInt32BE, Math.floor(Math.random() * 2 ** 32)],
    [DataType.UInt32LE, Math.floor(Math.random() * 2 ** 32)],
  ];

  const buf = encodeBinar(data as any);
  console.log(Buffer.from(data.map((x) => x[1]).join(':')).toString('base64'));
  console.log(buf.toString('base64'));
  const values = decodeBinar(buf);

  for (let i = 0, len = values.length; i < len; i += 1) {
    const val = values[i];
    if (typeof val === 'number') {
      expect(values[i]).toBeCloseTo(data[i][1] as any);
    } else {
      expect(values[i]).toEqual(data[i][1] as any);
    }
  }
});
```

## License
[MIT License](https://github.com/joonhocho/binar/blob/master/LICENSE)
