export enum DataType {
  Null = 0,
  Boolean,
  Number,
  String,
  Buffer,
  BigInt64BE,
  BigInt64LE,
  BigUInt64BE,
  BigUInt64LE,
  DoubleBE,
  DoubleLE,
  FloatBE,
  FloatLE,
  Int8,
  Int16BE,
  Int16LE,
  Int32BE,
  Int32LE,
  UInt8,
  UInt16BE,
  UInt16LE,
  UInt32BE,
  UInt32LE,
}

export const Encoders: {
  [key in DataType]: {
    encode: (data: any) => Buffer;
    decode: (buf: Buffer, offset: number, end: number) => any;
    size: number;
  };
} = {
  [DataType.Null]: {
    encode: (): Buffer => Buffer.allocUnsafe(0),
    decode: (): null => null,
    size: 0,
  },
  [DataType.Boolean]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(1);
      buf.writeUInt8(data ? 1 : 0, 0);
      return buf;
    },
    decode: (buf, offset): boolean => buf.readUInt8(offset) === 1,
    size: 1,
  },
  [DataType.Number]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeDoubleBE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readDoubleBE(offset),
    size: 8,
  },
  [DataType.String]: {
    encode: (data): Buffer => Buffer.from(data, 'utf8'),
    decode: (buf, offset, end): string => buf.toString('utf8', offset, end),
    size: -1,
  },
  [DataType.Buffer]: {
    encode: (data): Buffer => data,
    decode: (buf, offset, end): Buffer => buf.slice(offset, end),
    size: -1,
  },
  [DataType.BigInt64BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigInt64BE(data, 0);
      return buf;
    },
    decode: (buf, offset): bigint => buf.readBigInt64BE(offset),
    size: 8,
  },
  [DataType.BigInt64LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigInt64LE(data, 0);
      return buf;
    },
    decode: (buf, offset): bigint => buf.readBigInt64LE(offset),
    size: 8,
  },
  [DataType.BigUInt64BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigUInt64BE(data, 0);
      return buf;
    },
    decode: (buf, offset): bigint => buf.readBigUInt64BE(offset),
    size: 8,
  },
  [DataType.BigUInt64LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigUInt64LE(data, 0);
      return buf;
    },
    decode: (buf, offset): bigint => buf.readBigUInt64LE(offset),
    size: 8,
  },
  [DataType.DoubleBE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeDoubleBE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readDoubleBE(offset),
    size: 8,
  },
  [DataType.DoubleLE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(8);
      buf.writeDoubleLE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readDoubleLE(offset),
    size: 8,
  },
  [DataType.FloatBE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeFloatBE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readFloatBE(offset),
    size: 4,
  },
  [DataType.FloatLE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeFloatLE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readFloatLE(offset),
    size: 4,
  },
  [DataType.Int8]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(1);
      buf.writeInt8(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readInt8(offset),
    size: 1,
  },
  [DataType.Int16BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(2);
      buf.writeInt16BE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readInt16BE(offset),
    size: 2,
  },
  [DataType.Int16LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(2);
      buf.writeInt16LE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readInt16LE(offset),
    size: 2,
  },
  [DataType.Int32BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeInt32BE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readInt32BE(offset),
    size: 4,
  },
  [DataType.Int32LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeInt32LE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readInt32LE(offset),
    size: 4,
  },
  [DataType.UInt8]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(1);
      buf.writeUInt8(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readUInt8(offset),
    size: 1,
  },
  [DataType.UInt16BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readUInt16BE(offset),
    size: 2,
  },
  [DataType.UInt16LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(2);
      buf.writeUInt16LE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readUInt16LE(offset),
    size: 2,
  },
  [DataType.UInt32BE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeUInt32BE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readUInt32BE(offset),
    size: 4,
  },
  [DataType.UInt32LE]: {
    encode: (data): Buffer => {
      const buf = Buffer.allocUnsafe(4);
      buf.writeUInt32LE(data, 0);
      return buf;
    },
    decode: (buf, offset): number => buf.readUInt32LE(offset),
    size: 4,
  },
};

export type Data = null | Buffer | boolean | string | number;
export type DataSegment = [DataType, Data];

export const getTypeAndSizeBuffer = (
  type: DataType,
  size: number,
  fixedSize: number
): Buffer => {
  if (fixedSize === -1) {
    // variable size
    const buf = Buffer.allocUnsafe(2 + 4);
    buf.writeUInt16BE(type, 0);
    buf.writeUInt32BE(size, 2);
    return buf;
  }
  {
    const buf = Buffer.allocUnsafe(2);
    buf.writeUInt16BE(type, 0);
    return buf;
  }
};

export const encodeBinar = (dataList: DataSegment[]): Buffer => {
  const { length } = dataList;
  const buffers = new Array(2 * length) as Buffer[];
  for (let i = 0; i < length; i += 1) {
    const [type, data] = dataList[i];
    const encoder = Encoders[type];
    const buf = encoder.encode(data);
    buffers[2 * i + 1] = buf;
    buffers[2 * i] = getTypeAndSizeBuffer(type, buf.byteLength, encoder.size);
  }
  return Buffer.concat(buffers);
};

export const decodeBinar = (buffer: Buffer): any[] => {
  const bufSize = buffer.byteLength;
  const data = [] as any[];
  let i = 0;
  while (i < bufSize) {
    const type = buffer.readUInt16BE(i) as DataType;
    const encoder = Encoders[type];
    const { size } = encoder;
    if (size === -1) {
      const varSize = buffer.readUInt32BE(i + 2);
      const offset = i + 6;
      const end = offset + varSize;
      data.push(encoder.decode(buffer, offset, end));
      i = end;
    } else {
      const offset = i + 2;
      const end = offset + size;
      data.push(encoder.decode(buffer, offset, end));
      i = end;
    }
  }
  return data;
};
