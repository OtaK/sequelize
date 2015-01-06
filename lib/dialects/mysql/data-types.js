'use strict';

var DataTypes = require('../../data-types');

// TEXT types lengths for MySQL only that are quite much identical to BLOB
DataTypes.TEXT.prototype.toString = function() {
  switch (this._length.toLowerCase()) {
  case 'tiny':
    return 'TINY' + this._typeName;
  case 'medium':
    return 'MEDIUM' + this._typeName;
  case 'long':
    return 'LONG' + this._typeName;
  default:
    return this._typeName;
  }
};

module.exports = DataTypes;
