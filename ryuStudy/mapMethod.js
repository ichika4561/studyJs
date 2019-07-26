const keys = [
{
  accessKey: '00d2847682bbd04951939d40ac7cbad4f2cdf55ceae2b2a6b26e4f264689e54a',
  secretKey: '51abc5f634fbb2ca20a5a15bc69a6f4e0ae5ac6d200040549cf67a8578a4be4a993e0f9faf804fade2fd7b0cbde42170',
  userId: 'TEST',
  nonce: 0,
  isActive: true,
  isDeleted: false,
  expireDate: 1579772347,
  type: 'mc',
  registerDate: 0,
  registerId: 'TEST',
},
{
  // box
  accessKey: '59bcb868c969bfa7ebad1ccea2d74677f2eeb9b977f6d2269dc32fe7f9eaac8e',
  secretKey: '56d7dab72ffe1287711c1a33ddc6da56a4d22ecb31822cb5fa73a15207bc718bf35471c7c63448fa77c3016111a86595',
  userId: 'TEST',
  nonce: 0,
  isActive: true,
  isDeleted: false,
  expireDate: 1579772347,
  type: 'mc',
  registerDate: 0,
  registerId: 'TEST',
}
]

const keyMap = new Map(keys.map(key => [key.accessKey, key]));

console.log(keyMap);
const accessKey = '00d2847682bbd04951939d40ac7cbad4f2cdf55ceae2b2a6b26e4f264689e54'


const getKey = (accessKey) => {
    if (keyMap.has(accessKey)) {
      return keyMap.get(accessKey);
    }
    // TODO get key from management server
    return null;
  };

const targetKey = getKey(accessKey);

// console.log(targetKey.secretKey);