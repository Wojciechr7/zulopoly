module.exports = {
  name: 'base',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/base',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
