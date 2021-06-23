var cxml = require("cxml");
var Primitive = require('../../../xml-primitives');

cxml.register('http://www.w3.org/2000/09/xmldsig#', exports, [
	[Primitive, ['string'], []]
], [
	'DigestValueType',
	'KeyInfoType',
	'ReferenceType',
	'SignatureType',
	'SignatureValueType',
	'SignedInfoType',
	'TransformsType',
	'TransformType',
	'TTransformURI',
	'X509DataType'
], [
	[0, 0, [[9, 0]], []],
	[3, 1, [], []],
	[0, 0, [[25, 0]], [[8, 1]]],
	[0, 0, [[15, 0], [16, 0], [23, 0]], [[7, 1], [10, 1], [24, 0]]],
	[0, 0, [[17, 0], [20, 0], [21, 0]], [[4, 1]]],
	[1, 1, [], [[5, 1]]],
	[0, 0, [[14, 0], [18, 0], [19, 0]], [[6, 1]]],
	[0, 0, [[22, 2]], []],
	[0, 0, [[12, 3]], [[13, 0]]],
	[3, 1, [], []],
	[0, 0, [[11, 0]], []],
	[0, 0, [], [[3, 0]]],
	[3, 1, [], []],
	[0, 0, [], [[1, 0]]],
	[0, 0, [], [[2, 0]]]
], [
	['Algorithm', [1], 0],
	['Algorithm', [1], 0],
	['Algorithm', [1], 0],
	['Id', [1], 0],
	['Id', [1], 0],
	['Id', [1], 0],
	['Id', [1], 0],
	['Id', [1], 0],
	['Signature', [5], 0],
	['Type', [1], 0],
	['X509Certificate', [1], 0],
	['XPath', [1], 0],
	['Algorithm', [10], 0],
	['CanonicalizationMethod', [14], 0],
	['DigestMethod', [12], 0],
	['DigestValue', [2], 0],
	['KeyInfo', [3], 0],
	['Reference', [4], 0],
	['SignatureMethod', [15], 0],
	['SignatureValue', [6], 0],
	['SignedInfo', [7], 0],
	['Transform', [9], 0],
	['Transforms', [8], 0],
	['URI', [13], 0],
	['X509Data', [11], 0]
]);