import * as Primitive from '../../../xml-primitives';

// Source files:
// http://127.0.0.1:8080/xmldsig-core-schema_v1.01.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type DigestValueType = string;
type _DigestValueType = Primitive._string;

interface _KeyInfoType extends BaseType {
	Id?: string;
	X509Data: X509DataType;
}
export interface KeyInfoType extends _KeyInfoType { constructor: { new(): KeyInfoType }; }
export var KeyInfoType: { new(): KeyInfoType };

interface _ReferenceType extends BaseType {
	Id?: string;
	Type?: string;
	URI: string;
	DigestMethod: ReferenceTypeDigestMethodType;
	DigestValue: string;
	Transforms: TransformsType;
}
export interface ReferenceType extends _ReferenceType { constructor: { new(): ReferenceType }; }
export var ReferenceType: { new(): ReferenceType };

interface _ReferenceTypeDigestMethodType extends BaseType {
	Algorithm: string;
}
interface ReferenceTypeDigestMethodType extends _ReferenceTypeDigestMethodType { constructor: { new(): ReferenceTypeDigestMethodType }; }

type ReferenceTypeURIType = string;
type _ReferenceTypeURIType = Primitive._string;

interface _SignatureType extends BaseType {
	Id?: string;
	KeyInfo: KeyInfoType;
	SignatureValue: SignatureValueType;
	SignedInfo: SignedInfoType;
}
export interface SignatureType extends _SignatureType { constructor: { new(): SignatureType }; }
export var SignatureType: { new(): SignatureType };

interface _SignatureValueType extends Primitive._string {
	Id?: string;
}
export interface SignatureValueType extends _SignatureValueType { constructor: { new(): SignatureValueType }; }
export var SignatureValueType: { new(): SignatureValueType };

interface _SignedInfoType extends BaseType {
	Id?: string;
	CanonicalizationMethod: SignedInfoTypeCanonicalizationMethodType;
	Reference: ReferenceType;
	SignatureMethod: SignedInfoTypeSignatureMethodType;
}
export interface SignedInfoType extends _SignedInfoType { constructor: { new(): SignedInfoType }; }
export var SignedInfoType: { new(): SignedInfoType };

interface _SignedInfoTypeCanonicalizationMethodType extends BaseType {
	Algorithm: string;
}
interface SignedInfoTypeCanonicalizationMethodType extends _SignedInfoTypeCanonicalizationMethodType { constructor: { new(): SignedInfoTypeCanonicalizationMethodType }; }

interface _SignedInfoTypeSignatureMethodType extends BaseType {
	Algorithm: string;
}
interface SignedInfoTypeSignatureMethodType extends _SignedInfoTypeSignatureMethodType { constructor: { new(): SignedInfoTypeSignatureMethodType }; }

interface _TransformsType extends BaseType {
	Transform: TransformType[];
}
export interface TransformsType extends _TransformsType { constructor: { new(): TransformsType }; }
export var TransformsType: { new(): TransformsType };

interface _TransformType extends BaseType {
	Algorithm: TTransformURI;
	XPath?: string[];
}
export interface TransformType extends _TransformType { constructor: { new(): TransformType }; }
export var TransformType: { new(): TransformType };

export type TTransformURI = ("http://www.w3.org/2000/09/xmldsig#enveloped-signature" | "http://www.w3.org/TR/2001/REC-xml-c14n-20010315");
interface _TTransformURI extends Primitive._string { content: TTransformURI; }

interface _X509DataType extends BaseType {
	X509Certificate: string;
}
export interface X509DataType extends _X509DataType { constructor: { new(): X509DataType }; }
export var X509DataType: { new(): X509DataType };

export interface document extends BaseType {
	Signature: SignatureType;
}
export var document: document;
