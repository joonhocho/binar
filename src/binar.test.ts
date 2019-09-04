// tslint:disable no-console
import { DataType, decodeBinar, encodeBinar } from './binar';

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

test('vs json', () => {
  const data = [
    [DataType.Number, Math.random()],
    [DataType.Number, Math.random()],
    [DataType.String, 'Hello World'],
  ];

  const n = 10000;

  let res1: any;
  const t1 = Date.now();
  for (let i = 0; i < n; i += 1) {
    res1 = encodeBinar(data as any).toString('base64');
  }
  console.log('binar', (Date.now() - t1) / n, res1);

  let res2: any;
  const t2 = Date.now();
  for (let i = 0; i < n; i += 1) {
    res2 = Buffer.from(JSON.stringify(data.map((x) => x[1]))).toString(
      'base64'
    );
  }
  console.log('json', (Date.now() - t2) / n, res2);
});
