import * as Primitive from "../xml-primitives";
import * as ds from "../www.w3.org/2000/09/xmldsig_";

// Source files:
// http://127.0.0.1:8080/leiauteNFe_v4.00.xsd
// http://127.0.0.1:8080/tiposBasico_v4.00.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
/** Tipo Ambiente */
export type TAmb = "1" | "2";
interface _TAmb extends Primitive._string {
  content: TAmb;
}

/** Tipo ano */
export type Tano = string;
type _Tano = Primitive._string;

/** Tipo Chave da Nota Fiscal Eletrônica */
export type TChNFe = string;
type _TChNFe = Primitive._string;

/** Tipo Código da Lista de Serviços LC 116/2003 */
export type TCListServ =
  | "01.01"
  | "01.02"
  | "01.03"
  | "01.04"
  | "01.05"
  | "01.06"
  | "01.07"
  | "01.08"
  | "01.09"
  | "02.01"
  | "03.02"
  | "03.03"
  | "03.04"
  | "03.05"
  | "04.01"
  | "04.02"
  | "04.03"
  | "04.04"
  | "04.05"
  | "04.06"
  | "04.07"
  | "04.08"
  | "04.09"
  | "04.10"
  | "04.11"
  | "04.12"
  | "04.13"
  | "04.14"
  | "04.15"
  | "04.16"
  | "04.17"
  | "04.18"
  | "04.19"
  | "04.20"
  | "04.21"
  | "04.22"
  | "04.23"
  | "05.01"
  | "05.02"
  | "05.03"
  | "05.04"
  | "05.05"
  | "05.06"
  | "05.07"
  | "05.08"
  | "05.09"
  | "06.01"
  | "06.02"
  | "06.03"
  | "06.04"
  | "06.05"
  | "06.06"
  | "07.01"
  | "07.02"
  | "07.03"
  | "07.04"
  | "07.05"
  | "07.06"
  | "07.07"
  | "07.08"
  | "07.09"
  | "07.10"
  | "07.11"
  | "07.12"
  | "07.13"
  | "07.16"
  | "07.17"
  | "07.18"
  | "07.19"
  | "07.20"
  | "07.21"
  | "07.22"
  | "08.01"
  | "08.02"
  | "09.01"
  | "09.02"
  | "09.03"
  | "10.01"
  | "10.02"
  | "10.03"
  | "10.04"
  | "10.05"
  | "10.06"
  | "10.07"
  | "10.08"
  | "10.09"
  | "10.10"
  | "11.01"
  | "11.02"
  | "11.03"
  | "11.04"
  | "12.01"
  | "12.02"
  | "12.03"
  | "12.04"
  | "12.05"
  | "12.06"
  | "12.07"
  | "12.08"
  | "12.09"
  | "12.10"
  | "12.11"
  | "12.12"
  | "12.13"
  | "12.14"
  | "12.15"
  | "12.16"
  | "12.17"
  | "13.02"
  | "13.03"
  | "13.04"
  | "13.05"
  | "14.01"
  | "14.02"
  | "14.03"
  | "14.04"
  | "14.05"
  | "14.06"
  | "14.07"
  | "14.08"
  | "14.09"
  | "14.10"
  | "14.11"
  | "14.12"
  | "14.13"
  | "14.14"
  | "15.01"
  | "15.02"
  | "15.03"
  | "15.04"
  | "15.05"
  | "15.06"
  | "15.07"
  | "15.08"
  | "15.09"
  | "15.10"
  | "15.11"
  | "15.12"
  | "15.13"
  | "15.14"
  | "15.15"
  | "15.16"
  | "15.17"
  | "15.18"
  | "16.01"
  | "16.02"
  | "17.01"
  | "17.02"
  | "17.03"
  | "17.04"
  | "17.05"
  | "17.06"
  | "17.08"
  | "17.09"
  | "17.10"
  | "17.11"
  | "17.12"
  | "17.13"
  | "17.14"
  | "17.15"
  | "17.16"
  | "17.17"
  | "17.18"
  | "17.19"
  | "17.20"
  | "17.21"
  | "17.22"
  | "17.23"
  | "17.24"
  | "17.25"
  | "18.01"
  | "19.01"
  | "20.01"
  | "20.02"
  | "20.03"
  | "21.01"
  | "22.01"
  | "23.01"
  | "24.01"
  | "25.01"
  | "25.02"
  | "25.03"
  | "25.04"
  | "25.05"
  | "26.01"
  | "27.01"
  | "28.01"
  | "29.01"
  | "30.01"
  | "31.01"
  | "32.01"
  | "33.01"
  | "34.01"
  | "35.01"
  | "36.01"
  | "37.01"
  | "38.01"
  | "39.01"
  | "40.01";
interface _TCListServ extends Primitive._string {
  content: TCListServ;
}

/** Tipo Número do CNPJ */
export type TCnpj = string;
type _TCnpj = Primitive._string;

/** Tipo Número do CNPJ Opcional */
export type TCnpjOpc = string;
type _TCnpjOpc = Primitive._string;

/** Tipo Número do CNPJ tmanho varíavel (3-14) */
export type TCnpjVar = string;
type _TCnpjVar = Primitive._string;

/** Tipo Código do Município da tabela do IBGE */
export type TCodMunIBGE = string;
type _TCodMunIBGE = Primitive._string;

/** Tipo Código da UF da tabela do IBGE */
export type TCodUfIBGE =
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "31"
  | "32"
  | "33"
  | "35"
  | "41"
  | "42"
  | "43"
  | "50"
  | "51"
  | "52"
  | "53";
interface _TCodUfIBGE extends Primitive._string {
  content: TCodUfIBGE;
}

/** Tipo Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas */
interface _TConsReciNFe extends BaseType {
  versao: string;
  /** Número do Recibo */
  nRec: string;
  /** Identificação do Ambiente:
   * 1 - Produção
   * 2 - Homologação */
  tpAmb: TAmb;
}
export interface TConsReciNFe extends _TConsReciNFe {
  constructor: { new (): TConsReciNFe };
}
export var TConsReciNFe: { new (): TConsReciNFe };

/** Tipo Código de orgão (UF da tabela do IBGE + 90 RFB) */
export type TCOrgaoIBGE =
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "31"
  | "32"
  | "33"
  | "35"
  | "41"
  | "42"
  | "43"
  | "50"
  | "51"
  | "52"
  | "53"
  | "90"
  | "91"
  | "92";
interface _TCOrgaoIBGE extends Primitive._string {
  content: TCOrgaoIBGE;
}

/** Tipo Número do CPF */
export type TCpf = string;
type _TCpf = Primitive._string;

/** Tipo Número do CPF de tamanho variável (3-11) */
export type TCpfVar = string;
type _TCpfVar = Primitive._string;

/** Tipo data AAAA-MM-DD */
export type TData = string;
type _TData = Primitive._string;

/** Data e Hora, formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm) */
export type TDateTimeUTC = string;
type _TDateTimeUTC = Primitive._string;

/** Tipo Decimal com até 1 dígitos inteiros, podendo ter de 1 até 4 decimais */
export type TDec_0104v = string;
type _TDec_0104v = Primitive._string;

/** Tipo Decimal com até 2 dígitos inteiros, podendo ter de 1 até 4 decimais */
export type TDec_0204v = string;
type _TDec_0204v = Primitive._string;

/** Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais */
export type TDec_0302a04 = string;
type _TDec_0302a04 = Primitive._string;

/** Tipo Decimal com 3 inteiros (no máximo 100), com até 4 decimais */
export type TDec_0302a04Max100 = string;
type _TDec_0302a04Max100 = Primitive._string;

/** Tipo Decimal com até 3 dígitos inteiros e 2 até 4 decimais. Utilizados em TAGs opcionais, não aceita valor zero. */
export type TDec_0302a04Opc = string;
type _TDec_0302a04Opc = Primitive._string;

/** Tipo Decimal com 3 inteiros (no máximo 100), com 2 decimais */
export type TDec_0302Max100 = string;
type _TDec_0302Max100 = Primitive._string;

/** Tipo Decimal com 3 inteiros (no máximo 100), com 4 decimais */
export type TDec_0304Max100 = string;
type _TDec_0304Max100 = Primitive._string;

/** Tipo Decimal com 8 inteiros, podendo ter de 1 até 3 decimais */
export type TDec_0803v = string;
type _TDec_0803v = Primitive._string;

/** Tipo Decimal com 11 inteiros, podendo ter 4 decimais */
export type TDec_1104 = string;
type _TDec_1104 = Primitive._string;

/** Tipo Decimal com 11 inteiros, podendo ter 4 decimais (utilizado em tags opcionais) */
export type TDec_1104Opc = string;
type _TDec_1104Opc = Primitive._string;

/** Tipo Decimal com 11 inteiros, podendo ter de 1 até 4 decimais */
export type TDec_1104v = string;
type _TDec_1104v = Primitive._string;

/** Tipo Decimal com 11 inteiros, podendo ter de 1 até 10 decimais */
export type TDec_1110v = string;
type _TDec_1110v = Primitive._string;

/** Tipo Decimal com 12 inteiros, podendo ter  3 decimais */
export type TDec_1203 = string;
type _TDec_1203 = Primitive._string;

/** Tipo Decimal com 12 inteiros e 4 decimais */
export type TDec_1204 = string;
type _TDec_1204 = Primitive._string;

/** Tipo Decimal com 12 inteiros com 1 até 4 decimais */
export type TDec_1204Opc = string;
type _TDec_1204Opc = Primitive._string;

/** Tipo Decimal com 12 inteiros, 1 a 4 decimais */
export type TDec_1204temperatura = string;
type _TDec_1204temperatura = Primitive._string;

/** Tipo Decimal com 12 inteiros de 1 até 4 decimais */
export type TDec_1204v = string;
type _TDec_1204v = Primitive._string;

/** Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais */
export type TDec_1302 = string;
type _TDec_1302 = Primitive._string;

/** Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais, utilizado em tags opcionais */
export type TDec_1302Opc = string;
type _TDec_1302Opc = Primitive._string;

/** Tipo Dados do Endereço  // 24/10/08 - tamanho mínimo */
interface _TEndereco extends BaseType {
  /** CEP */
  CEP?: string;
  /** Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior. */
  cMun: string;
  /** Código de Pais */
  cPais?: string;
  /** Telefone, preencher com Código DDD + número do telefone , nas operações com exterior é permtido informar o código do país + código da localidade + número do telefone */
  fone?: string;
  /** Número */
  nro: string;
  /** Sigla da UF, informar EX para operações com o exterior. */
  UF: TUf;
  /** Bairro */
  xBairro: string;
  /** Complemento */
  xCpl?: string;
  /** Logradouro */
  xLgr: string;
  /** Nome do município, informar EXTERIOR para operações com o exterior. */
  xMun: string;
  /** Nome do país */
  xPais?: string;
}
export interface TEndereco extends _TEndereco {
  constructor: { new (): TEndereco };
}
export var TEndereco: { new (): TEndereco };

type TEnderecoCEPType = string;
type _TEnderecoCEPType = Primitive._string;

type TEnderecoCPaisType = string;
type _TEnderecoCPaisType = Primitive._string;

type TEnderecoFoneType = string;
type _TEnderecoFoneType = Primitive._string;

type TEnderecoNroType = string;
type _TEnderecoNroType = _TString;

type TEnderecoXBairroType = string;
type _TEnderecoXBairroType = _TString;

type TEnderecoXCplType = string;
type _TEnderecoXCplType = _TString;

type TEnderecoXLgrType = string;
type _TEnderecoXLgrType = _TString;

type TEnderecoXMunType = string;
type _TEnderecoXMunType = _TString;

type TEnderecoXPaisType = string;
type _TEnderecoXPaisType = _TString;

/** Tipo Dados do Endereço do Emitente  // 24/10/08 - desmembrado / tamanho mínimo */
interface _TEnderEmi extends BaseType {
  /** CEP - NT 2011/004 */
  CEP: string;
  /** Código do município */
  cMun: string;
  /** Código do país */
  cPais?: TEnderEmiCPaisType;
  /** Preencher com Código DDD + número do telefone (v.2.0) */
  fone?: string;
  /** Número */
  nro: string;
  /** Sigla da UF */
  UF: TUfEmi;
  /** Bairro */
  xBairro: string;
  /** Complemento */
  xCpl?: string;
  /** Logradouro */
  xLgr: string;
  /** Nome do município */
  xMun: string;
  /** Nome do país */
  xPais?: TEnderEmiXPaisType;
}
export interface TEnderEmi extends _TEnderEmi {
  constructor: { new (): TEnderEmi };
}
export var TEnderEmi: { new (): TEnderEmi };

type TEnderEmiCEPType = string;
type _TEnderEmiCEPType = Primitive._string;

type TEnderEmiCPaisType = "1058";
interface _TEnderEmiCPaisType extends _TString {
  content: TEnderEmiCPaisType;
}

type TEnderEmiFoneType = string;
type _TEnderEmiFoneType = Primitive._string;

type TEnderEmiNroType = string;
type _TEnderEmiNroType = _TString;

type TEnderEmiXBairroType = string;
type _TEnderEmiXBairroType = _TString;

type TEnderEmiXCplType = string;
type _TEnderEmiXCplType = _TString;

type TEnderEmiXLgrType = string;
type _TEnderEmiXLgrType = _TString;

type TEnderEmiXMunType = string;
type _TEnderEmiXMunType = _TString;

type TEnderEmiXPaisType = "Brasil" | "BRASIL";
interface _TEnderEmiXPaisType extends _TString {
  content: TEnderEmiXPaisType;
}

/** Tipo Pedido de Concessão de Autorização da Nota Fiscal Eletrônica */
interface _TEnviNFe extends BaseType {
  versao: string;
  idLote: string;
  /** Indicador de processamento síncrono. 0=NÃO; 1=SIM=Síncrono */
  indSinc: TEnviNFeIndSincType;
  NFe: TNFe[];
}
export interface TEnviNFe extends _TEnviNFe {
  constructor: { new (): TEnviNFe };
}
export var TEnviNFe: { new (): TEnviNFe };

type TEnviNFeIndSincType = "0" | "1";
interface _TEnviNFeIndSincType extends Primitive._string {
  content: TEnviNFeIndSincType;
}

/** Tipo Finalidade da NF-e (1=Normal; 2=Complementar; 3=Ajuste; 4=Devolução/Retorno) */
export type TFinNFe = "1" | "2" | "3" | "4";
interface _TFinNFe extends Primitive._string {
  content: TFinNFe;
}

/** Identificador único (Globally Unique Identifier) */
export type TGuid = string;
type _TGuid = Primitive._string;

/** Tipo Identificação de Lote */
export type TIdLote = string;
type _TIdLote = Primitive._string;

/** Tipo Inscrição Estadual do Emitente // alterado EM 24/10/08 para aceitar ISENTO */
export type TIe = string;
type _TIe = Primitive._string;

/** Tipo Inscrição Estadual do Destinatário // alterado para aceitar vazio ou ISENTO - maio/2010 v2.0 */
export type TIeDest = string;
type _TIeDest = Primitive._string;

/** Tipo Inscrição Estadual do Destinatário // alterado para aceitar vazio ou ISENTO - maio/2010 v2.0 */
export type TIeDestNaoIsento = string;
type _TIeDestNaoIsento = Primitive._string;

/** Tipo Inscrição Estadual do ST // acrescentado EM 24/10/08 */
export type TIeST = string;
type _TIeST = Primitive._string;

/** Grupo de informações do responsável técnico pelo sistema de emissão de DF-e */
interface _TInfRespTec extends BaseType {
  /** CNPJ */
  CNPJ: string;
  /** Informar o e-mail da pessoa a ser contatada na empresa desenvolvedora do sistema. */
  email: string;
  /** Informar o telefone da pessoa a ser contatada na empresa desenvolvedora do sistema. Preencher com o Código DDD + número do telefone. */
  fone: string;
  /** O hashCSRT é o resultado da função hash (SHA-1 – Base64) do CSRT fornecido pelo fisco mais a Chave de Acesso da NFe. */
  hashCSRT?: string;
  /** Identificador do CSRT utilizado para montar o hash do CSRT */
  idCSRT?: string;
  /** Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. */
  xContato: string;
}
export interface TInfRespTec extends _TInfRespTec {
  constructor: { new (): TInfRespTec };
}
export var TInfRespTec: { new (): TInfRespTec };

type TInfRespTecEmailType = string;
type _TInfRespTecEmailType = _TString;

type TInfRespTecFoneType = string;
type _TInfRespTecFoneType = Primitive._string;

type TInfRespTecHashCSRTType = string;
type _TInfRespTecHashCSRTType = Primitive._string;

type TInfRespTecIdCSRTType = string;
type _TInfRespTecIdCSRTType = Primitive._string;

type TInfRespTecXContatoType = string;
type _TInfRespTecXContatoType = _TString;

/** Tipo: Dados do IPI */
interface _TIpi extends BaseType {
  /** Código de Enquadramento Legal do IPI (tabela a ser criada pela RFB) */
  cEnq: string;
  /** CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta. */
  CNPJProd?: string;
  /** Código do selo de controle do IPI */
  cSelo?: string;
  IPINT: TIpiIPINTType;
  IPITrib: TIpiIPITribType;
  /** Quantidade de selo de controle do IPI */
  qSelo?: string;
}
export interface TIpi extends _TIpi {
  constructor: { new (): TIpi };
}
export var TIpi: { new (): TIpi };

type TIpiCEnqType = string;
type _TIpiCEnqType = _TString;

type TIpiCSeloType = string;
type _TIpiCSeloType = _TString;

interface _TIpiIPINTType extends BaseType {
  /** Código da Situação Tributária do IPI:
   * 01-Entrada tributada com alíquota zero
   * 02-Entrada isenta
   * 03-Entrada não-tributada
   * 04-Entrada imune
   * 05-Entrada com suspensão
   * 51-Saída tributada com alíquota zero
   * 52-Saída isenta
   * 53-Saída não-tributada
   * 54-Saída imune
   * 55-Saída com suspensão */
  CST: TIpiIPINTTypeCSTType;
}
interface TIpiIPINTType extends _TIpiIPINTType {
  constructor: { new (): TIpiIPINTType };
}

type TIpiIPINTTypeCSTType =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55";
interface _TIpiIPINTTypeCSTType extends Primitive._string {
  content: TIpiIPINTTypeCSTType;
}

interface _TIpiIPITribType extends BaseType {
  /** Código da Situação Tributária do IPI:
   * 00-Entrada com recuperação de crédito
   * 49 - Outras entradas
   * 50-Saída tributada
   * 99-Outras saídas */
  CST: TIpiIPITribTypeCSTType;
  /** Alíquota do IPI */
  pIPI: string;
  /** Quantidade total na unidade padrão para tributação */
  qUnid: string;
  /** Valor da BC do IPI */
  vBC: string;
  /** Valor do IPI */
  vIPI: string;
  /** Valor por Unidade Tributável. Informar o valor do imposto Pauta por unidade de medida. */
  vUnid: string;
}
interface TIpiIPITribType extends _TIpiIPITribType {
  constructor: { new (): TIpiIPITribType };
}

type TIpiIPITribTypeCSTType = "00" | "49" | "50" | "99";
interface _TIpiIPITribTypeCSTType extends Primitive._string {
  content: TIpiIPITribTypeCSTType;
}

type TIpiQSeloType = string;
type _TIpiQSeloType = Primitive._string;

/** Tipo Justificativa */
export type TJust = string;
type _TJust = _TString;

/** Tipo Dados do Local de Retirada ou Entrega // 24/10/08 - tamanho mínimo // v2.0 */
interface _TLocal extends BaseType {
  /** CEP */
  CEP?: string;
  /** Código do município (utilizar a tabela do IBGE) */
  cMun: string;
  /** CNPJ */
  CNPJ: string;
  /** Código de Pais */
  cPais?: string;
  /** CPF (v2.0) */
  CPF: string;
  /** Informar o e-mail do expedidor/Recebedor. O campo pode ser utilizado para informar o e-mail de recepção da NF-e indicada pelo expedidor */
  email?: string;
  /** Telefone, preencher com Código DDD + número do telefone , nas operações com exterior é permtido informar o código do país + código da localidade + número do telefone */
  fone?: string;
  /** Inscrição Estadual (v2.0) */
  IE?: string;
  /** Número */
  nro: string;
  /** Sigla da UF */
  UF: TUf;
  /** Bairro */
  xBairro: string;
  /** Complemento */
  xCpl?: string;
  /** Logradouro */
  xLgr: string;
  /** Nome do município */
  xMun: string;
  /** Razão Social ou Nome do Expedidor/Recebedor */
  xNome?: string;
  /** Nome do país */
  xPais?: string;
}
export interface TLocal extends _TLocal {
  constructor: { new (): TLocal };
}
export var TLocal: { new (): TLocal };

type TLocalCEPType = string;
type _TLocalCEPType = Primitive._string;

type TLocalCPaisType = string;
type _TLocalCPaisType = Primitive._string;

type TLocalEmailType = string;
type _TLocalEmailType = _TString;

type TLocalFoneType = string;
type _TLocalFoneType = Primitive._string;

type TLocalNroType = string;
type _TLocalNroType = _TString;

type TLocalXBairroType = string;
type _TLocalXBairroType = _TString;

type TLocalXCplType = string;
type _TLocalXCplType = _TString;

type TLocalXLgrType = string;
type _TLocalXLgrType = _TString;

type TLocalXMunType = string;
type _TLocalXMunType = _TString;

type TLocalXNomeType = string;
type _TLocalXNomeType = _TString;

type TLocalXPaisType = string;
type _TLocalXPaisType = _TString;

/** Tipo temp médio em segundos */
export type TMed = string;
type _TMed = Primitive._string;

/** Tipo Modelo Documento Fiscal */
export type TMod = "55" | "65";
interface _TMod extends Primitive._string {
  content: TMod;
}

/** Tipo Motivo */
export type TMotivo = string;
type _TMotivo = _TString;

/** Tipo Número do Documento Fiscal */
export type TNF = string;
type _TNF = Primitive._string;

/** Tipo Nota Fiscal Eletrônica */
interface _TNFe extends BaseType {
  /** Informações da Nota Fiscal eletrônica */
  infNFe: TNFeInfNFeType;
  /** Informações suplementares Nota Fiscal */
  infNFeSupl?: TNFeInfNFeSuplType;
  Signature: ds.SignatureType;
}
export interface TNFe extends _TNFe {
  constructor: { new (): TNFe };
}
export var TNFe: { new (): TNFe };

interface _TNFeInfNFeSuplType extends BaseType {
  /** Texto com o QR-Code impresso no DANFE NFC-e */
  qrCode: string;
  /** Informar a URL da "Consulta por chave de acesso da NFC-e". A mesma URL que deve estar informada no DANFE NFC-e para consulta por chave de acesso. */
  urlChave: string;
}
interface TNFeInfNFeSuplType extends _TNFeInfNFeSuplType {
  constructor: { new (): TNFeInfNFeSuplType };
}

type TNFeInfNFeSuplTypeQrCodeType = string;
type _TNFeInfNFeSuplTypeQrCodeType = Primitive._string;

type TNFeInfNFeSuplTypeUrlChaveType = string;
type _TNFeInfNFeSuplTypeUrlChaveType = Primitive._string;

interface _TNFeInfNFeType extends BaseType {
  /** PL_005d - 11/08/09 - validação do Id */
  Id: string;
  /** Versão do leiaute (v4.00) */
  versao: string;
  /** Pessoas autorizadas para o download do XML da NF-e */
  autXML?: TNFeInfNFeTypeAutXMLType[];
  /** Emissão de avulsa, informar os dados do Fisco emitente */
  avulsa?: TNFeInfNFeTypeAvulsaType;
  /** Informações de registro aquisições de cana */
  cana?: TNFeInfNFeTypeCanaType;
  /** Dados da cobrança da NF-e */
  cobr?: TNFeInfNFeTypeCobrType;
  /** Informações de compras  (Nota de Empenho, Pedido e Contrato) */
  compra?: TNFeInfNFeTypeCompraType;
  /** Identificação do Destinatário */
  dest?: TNFeInfNFeTypeDestType;
  /** Dados dos detalhes da NF-e */
  det: TNFeInfNFeTypeDetType[];
  /** Identificação do emitente */
  emit: TNFeInfNFeTypeEmitType;
  /** Identificação do Local de Entrega (informar apenas quando for diferente do endereço do destinatário) */
  entrega?: TLocal;
  /** Informações de exportação */
  exporta?: TNFeInfNFeTypeExportaType;
  /** identificação da NF-e */
  ide: TNFeInfNFeTypeIdeType;
  /** Informações adicionais da NF-e */
  infAdic?: TNFeInfNFeTypeInfAdicType;
  /** Grupo de Informações do Intermediador da Transação */
  infIntermed?: TNFeInfNFeTypeInfIntermedType;
  /** Informações do Responsável Técnico pela emissão do DF-e */
  infRespTec?: TInfRespTec;
  /** Grupo para informações da solicitação da NFF */
  infSolicNFF?: TNFeInfNFeTypeInfSolicNFFType;
  /** Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004 */
  pag: TNFeInfNFeTypePagType;
  /** Identificação do Local de Retirada (informar apenas quando for diferente do endereço do remetente) */
  retirada?: TLocal;
  /** Dados dos totais da NF-e */
  total: TNFeInfNFeTypeTotalType;
  /** Dados dos transportes da NF-e */
  transp: TNFeInfNFeTypeTranspType;
}
interface TNFeInfNFeType extends _TNFeInfNFeType {
  constructor: { new (): TNFeInfNFeType };
}

interface _TNFeInfNFeTypeAutXMLType extends BaseType {
  /** CNPJ Autorizado */
  CNPJ: string;
  /** CPF Autorizado */
  CPF: string;
}
interface TNFeInfNFeTypeAutXMLType extends _TNFeInfNFeTypeAutXMLType {
  constructor: { new (): TNFeInfNFeTypeAutXMLType };
}

interface _TNFeInfNFeTypeAvulsaType extends BaseType {
  /** CNPJ do Órgão emissor */
  CNPJ: string;
  /** Data de emissão do DAR (AAAA-MM-DD) */
  dEmi?: string;
  /** Data de pagamento do DAR (AAAA-MM-DD) */
  dPag?: string;
  /** Telefone */
  fone?: string;
  /** Matrícula do agente */
  matr: string;
  /** Número do Documento de Arrecadação de Receita */
  nDAR?: string;
  /** Repartição Fiscal emitente */
  repEmi: string;
  /** Sigla da Unidade da Federação */
  UF: TUfEmi;
  /** Valor Total constante no DAR */
  vDAR?: string;
  /** Nome do agente */
  xAgente: string;
  /** Órgão emitente */
  xOrgao: string;
}
interface TNFeInfNFeTypeAvulsaType extends _TNFeInfNFeTypeAvulsaType {
  constructor: { new (): TNFeInfNFeTypeAvulsaType };
}

type TNFeInfNFeTypeAvulsaTypeFoneType = string;
type _TNFeInfNFeTypeAvulsaTypeFoneType = Primitive._string;

type TNFeInfNFeTypeAvulsaTypeMatrType = string;
type _TNFeInfNFeTypeAvulsaTypeMatrType = _TString;

type TNFeInfNFeTypeAvulsaTypeNDARType = string;
type _TNFeInfNFeTypeAvulsaTypeNDARType = _TString;

type TNFeInfNFeTypeAvulsaTypeRepEmiType = string;
type _TNFeInfNFeTypeAvulsaTypeRepEmiType = _TString;

type TNFeInfNFeTypeAvulsaTypeXAgenteType = string;
type _TNFeInfNFeTypeAvulsaTypeXAgenteType = _TString;

type TNFeInfNFeTypeAvulsaTypeXOrgaoType = string;
type _TNFeInfNFeTypeAvulsaTypeXOrgaoType = _TString;

interface _TNFeInfNFeTypeCanaType extends BaseType {
  /** Deduções - Taxas e Contribuições */
  deduc?: TNFeInfNFeTypeCanaTypeDeducType[];
  /** Fornecimentos diários */
  forDia: TNFeInfNFeTypeCanaTypeForDiaType[];
  /** Total Anterior */
  qTotAnt: string;
  /** Total Geral */
  qTotGer: string;
  /** Total do mês */
  qTotMes: string;
  /** Mês e Ano de Referência, formato: MM/AAAA */
  ref: string;
  /** Identificação da safra */
  safra: string;
  /** Valor  dos fornecimentos */
  vFor: string;
  /** Valor Líquido dos fornecimentos */
  vLiqFor: string;
  /** Valor Total das Deduções */
  vTotDed: string;
}
interface TNFeInfNFeTypeCanaType extends _TNFeInfNFeTypeCanaType {
  constructor: { new (): TNFeInfNFeTypeCanaType };
}

interface _TNFeInfNFeTypeCanaTypeDeducType extends BaseType {
  /** valor da dedução */
  vDed: string;
  /** Descrição da Dedução */
  xDed: string;
}
interface TNFeInfNFeTypeCanaTypeDeducType
  extends _TNFeInfNFeTypeCanaTypeDeducType {
  constructor: { new (): TNFeInfNFeTypeCanaTypeDeducType };
}

type TNFeInfNFeTypeCanaTypeDeducTypeXDedType = string;
type _TNFeInfNFeTypeCanaTypeDeducTypeXDedType = _TString;

interface _TNFeInfNFeTypeCanaTypeForDiaType extends BaseType {
  /** Número do dia */
  dia: string;
  /** Quantidade em quilogramas - peso líquido */
  qtde: string;
}
interface TNFeInfNFeTypeCanaTypeForDiaType
  extends _TNFeInfNFeTypeCanaTypeForDiaType {
  constructor: { new (): TNFeInfNFeTypeCanaTypeForDiaType };
}

type TNFeInfNFeTypeCanaTypeForDiaTypeDiaType = string;
type _TNFeInfNFeTypeCanaTypeForDiaTypeDiaType = Primitive._string;

type TNFeInfNFeTypeCanaTypeRefType = string;
type _TNFeInfNFeTypeCanaTypeRefType = Primitive._string;

type TNFeInfNFeTypeCanaTypeSafraType = string;
type _TNFeInfNFeTypeCanaTypeSafraType = _TString;

interface _TNFeInfNFeTypeCobrType extends BaseType {
  /** Dados das duplicatas NT 2011/004 */
  dup?: TNFeInfNFeTypeCobrTypeDupType[];
  /** Dados da fatura */
  fat?: TNFeInfNFeTypeCobrTypeFatType;
}
interface TNFeInfNFeTypeCobrType extends _TNFeInfNFeTypeCobrType {
  constructor: { new (): TNFeInfNFeTypeCobrType };
}

interface _TNFeInfNFeTypeCobrTypeDupType extends BaseType {
  /** Data de vencimento da duplicata (AAAA-MM-DD) */
  dVenc?: string;
  /** Número da duplicata */
  nDup?: string;
  /** Valor da duplicata */
  vDup: string;
}
interface TNFeInfNFeTypeCobrTypeDupType extends _TNFeInfNFeTypeCobrTypeDupType {
  constructor: { new (): TNFeInfNFeTypeCobrTypeDupType };
}

type TNFeInfNFeTypeCobrTypeDupTypeNDupType = string;
type _TNFeInfNFeTypeCobrTypeDupTypeNDupType = _TString;

interface _TNFeInfNFeTypeCobrTypeFatType extends BaseType {
  /** Número da fatura */
  nFat?: string;
  /** Valor do desconto da fatura */
  vDesc?: string;
  /** Valor líquido da fatura */
  vLiq?: string;
  /** Valor original da fatura */
  vOrig?: string;
}
interface TNFeInfNFeTypeCobrTypeFatType extends _TNFeInfNFeTypeCobrTypeFatType {
  constructor: { new (): TNFeInfNFeTypeCobrTypeFatType };
}

type TNFeInfNFeTypeCobrTypeFatTypeNFatType = string;
type _TNFeInfNFeTypeCobrTypeFatTypeNFatType = _TString;

interface _TNFeInfNFeTypeCompraType extends BaseType {
  /** Informação do contrato */
  xCont?: string;
  /** Informação da Nota de Empenho de compras públicas (NT2011/004) */
  xNEmp?: string;
  /** Informação do pedido */
  xPed?: string;
}
interface TNFeInfNFeTypeCompraType extends _TNFeInfNFeTypeCompraType {
  constructor: { new (): TNFeInfNFeTypeCompraType };
}

type TNFeInfNFeTypeCompraTypeXContType = string;
type _TNFeInfNFeTypeCompraTypeXContType = _TString;

type TNFeInfNFeTypeCompraTypeXNEmpType = string;
type _TNFeInfNFeTypeCompraTypeXNEmpType = _TString;

type TNFeInfNFeTypeCompraTypeXPedType = string;
type _TNFeInfNFeTypeCompraTypeXPedType = _TString;

interface _TNFeInfNFeTypeDestType extends BaseType {
  /** Número do CNPJ */
  CNPJ: string;
  /** Número do CPF */
  CPF: string;
  /** Informar o e-mail do destinatário. O campo pode ser utilizado para informar o e-mail
   * de recepção da NF-e indicada pelo destinatário */
  email?: string;
  /** Dados do endereço */
  enderDest?: TEndereco;
  /** Identificador do destinatário, em caso de comprador estrangeiro */
  idEstrangeiro: string;
  /** Inscrição Estadual (obrigatório nas operações com contribuintes do ICMS) */
  IE?: string;
  /** Inscrição Municipal do tomador do serviço */
  IM?: string;
  /** Indicador da IE do destinatário:
   * 1 – Contribuinte ICMSpagamento à vista;
   * 2 – Contribuinte isento de inscrição;
   * 9 – Não Contribuinte */
  indIEDest: TNFeInfNFeTypeDestTypeIndIEDestType;
  /** Inscrição na SUFRAMA (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) PL_005d - 11/08/09 - alterado para aceitar 8 ou 9 dígitos */
  ISUF?: string;
  /** Razão Social ou nome do destinatário */
  xNome?: string;
}
interface TNFeInfNFeTypeDestType extends _TNFeInfNFeTypeDestType {
  constructor: { new (): TNFeInfNFeTypeDestType };
}

type TNFeInfNFeTypeDestTypeEmailType = string;
type _TNFeInfNFeTypeDestTypeEmailType = _TString;

type TNFeInfNFeTypeDestTypeIdEstrangeiroType = string;
type _TNFeInfNFeTypeDestTypeIdEstrangeiroType = Primitive._string;

type TNFeInfNFeTypeDestTypeIMType = string;
type _TNFeInfNFeTypeDestTypeIMType = _TString;

type TNFeInfNFeTypeDestTypeIndIEDestType = "1" | "2" | "9";
interface _TNFeInfNFeTypeDestTypeIndIEDestType extends Primitive._string {
  content: TNFeInfNFeTypeDestTypeIndIEDestType;
}

type TNFeInfNFeTypeDestTypeISUFType = string;
type _TNFeInfNFeTypeDestTypeISUFType = Primitive._string;

type TNFeInfNFeTypeDestTypeXNomeType = string;
type _TNFeInfNFeTypeDestTypeXNomeType = _TString;

interface _TNFeInfNFeTypeDetType extends BaseType {
  /** Número do item do NF */
  nItem: string;
  /** Tributos incidentes nos produtos ou serviços da NF-e */
  imposto: TNFeInfNFeTypeDetTypeImpostoType;
  impostoDevol?: TNFeInfNFeTypeDetTypeImpostoDevolType;
  /** Informações adicionais do produto (norma referenciada, informações complementares, etc) */
  infAdProd?: string;
  /** Dados dos produtos e serviços da NF-e */
  prod: TNFeInfNFeTypeDetTypeProdType;
}
interface TNFeInfNFeTypeDetType extends _TNFeInfNFeTypeDetType {
  constructor: { new (): TNFeInfNFeTypeDetType };
}

interface _TNFeInfNFeTypeDetTypeImpostoDevolType extends BaseType {
  /** Informação de IPI devolvido */
  IPI: TNFeInfNFeTypeDetTypeImpostoDevolTypeIPIType;
  /** Percentual de mercadoria devolvida */
  pDevol: string;
}
interface TNFeInfNFeTypeDetTypeImpostoDevolType
  extends _TNFeInfNFeTypeDetTypeImpostoDevolType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoDevolType };
}

interface _TNFeInfNFeTypeDetTypeImpostoDevolTypeIPIType extends BaseType {
  /** Valor do IPI devolvido */
  vIPIDevol: string;
}
interface TNFeInfNFeTypeDetTypeImpostoDevolTypeIPIType
  extends _TNFeInfNFeTypeDetTypeImpostoDevolTypeIPIType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoDevolTypeIPIType };
}

interface _TNFeInfNFeTypeDetTypeImpostoType extends BaseType {
  /** Dados do COFINS */
  COFINS?: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSType;
  /** Dados do COFINS da
   * Substituição Tributaria; */
  COFINSST?: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTType;
  /** Dados do ICMS Normal e ST */
  ICMS: TNFeInfNFeTypeDetTypeImpostoTypeICMSType;
  /** Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS */
  ICMSUFDest?: TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestType;
  /** Dados do Imposto de Importação */
  II?: TNFeInfNFeTypeDetTypeImpostoTypeIIType;
  IPI?: TIpi[];
  /** ISSQN */
  ISSQN: TNFeInfNFeTypeDetTypeImpostoTypeISSQNType;
  /** Dados do PIS */
  PIS?: TNFeInfNFeTypeDetTypeImpostoTypePISType;
  /** Dados do PIS Substituição Tributária */
  PISST?: TNFeInfNFeTypeDetTypeImpostoTypePISSTType;
  /** Valor estimado total de impostos federais, estaduais e municipais */
  vTotTrib?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoType
  extends _TNFeInfNFeTypeDetTypeImpostoType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoType };
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTType extends BaseType {
  /** Indica se o valor da COFINS ST compõe o valor total da NFe */
  indSomaCOFINSST?: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTTypeIndSomaCOFINSSTType;
  /** Alíquota do COFINS ST(em percentual) */
  pCOFINS: string;
  /** Quantidade Vendida */
  qBCProd: string;
  /** Alíquota do COFINS ST(em reais) */
  vAliqProd: string;
  /** Valor da BC do COFINS ST */
  vBC: string;
  /** Valor do COFINS ST */
  vCOFINS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTType };
}

type TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTTypeIndSomaCOFINSSTType =
  | "0"
  | "1";
interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTTypeIndSomaCOFINSSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSSTTypeIndSomaCOFINSSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSType extends BaseType {
  /** Código de Situação Tributária do COFINS.
   * 01 – Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo);
   * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada); */
  COFINSAliq: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqType;
  /** Código de Situação Tributária do COFINS:
   * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero);
   * 06 - Operação Tributável - Alíquota Zero;
   * 07 - Operação Isenta da contribuição;
   * 08 - Operação Sem Incidência da contribuição;
   * 09 - Operação com suspensão da contribuição; */
  COFINSNT: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTType;
  /** Código de Situação Tributária do COFINS:
   * 49 - Outras Operações de Saída
   * 50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * 51 - Operação com Direito a Crédito – Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
   * 52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação
   * 53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * 54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * 55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * 56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * 60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * 61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno
   * 62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
   * 63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * 64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * 65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * 66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * 67 - Crédito Presumido - Outras Operações
   * 70 - Operação de Aquisição sem Direito a Crédito
   * 71 - Operação de Aquisição com Isenção
   * 72 - Operação de Aquisição com Suspensão
   * 73 - Operação de Aquisição a Alíquota Zero
   * 74 - Operação de Aquisição sem Incidência da Contribuição
   * 75 - Operação de Aquisição por Substituição Tributária
   * 98 - Outras Operações de Entrada
   * 99 - Outras Operações. */
  COFINSOutr: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrType;
  /** Código de Situação Tributária do COFINS.
   * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto; */
  COFINSQtde: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeType;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSType };
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqType
  extends BaseType {
  /** Código de Situação Tributária do COFINS.
   * 01 – Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo);
   * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada); */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqTypeCSTType;
  /** Alíquota do COFINS (em percentual) */
  pCOFINS: string;
  /** Valor da BC do COFINS */
  vBC: string;
  /** Valor do COFINS */
  vCOFINS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqType {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqType;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqTypeCSTType =
  | "01"
  | "02";
interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSAliqTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTType
  extends BaseType {
  /** Código de Situação Tributária do COFINS:
   * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero);
   * 05 - Operação Tributável (ST);
   * 06 - Operação Tributável - Alíquota Zero;
   * 07 - Operação Isenta da contribuição;
   * 08 - Operação Sem Incidência da contribuição;
   * 09 - Operação com suspensão da contribuição; */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTTypeCSTType;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTType {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTType;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTTypeCSTType =
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09";
interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSNTTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrType
  extends BaseType {
  /** Código de Situação Tributária do COFINS:
   * 49 - Outras Operações de Saída
   * 50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * 51 - Operação com Direito a Crédito – Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
   * 52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação
   * 53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * 54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * 55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * 56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * 60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
   * 61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno
   * 62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
   * 63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
   * 64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
   * 65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
   * 66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação
   * 67 - Crédito Presumido - Outras Operações
   * 70 - Operação de Aquisição sem Direito a Crédito
   * 71 - Operação de Aquisição com Isenção
   * 72 - Operação de Aquisição com Suspensão
   * 73 - Operação de Aquisição a Alíquota Zero
   * 74 - Operação de Aquisição sem Incidência da Contribuição
   * 75 - Operação de Aquisição por Substituição Tributária
   * 98 - Outras Operações de Entrada
   * 99 - Outras Operações. */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrTypeCSTType;
  /** Alíquota do COFINS (em percentual) */
  pCOFINS: string;
  /** Quantidade Vendida (NT2011/004) */
  qBCProd: string;
  /** Alíquota do COFINS (em reais) (NT2011/004) */
  vAliqProd: string;
  /** Valor da BC do COFINS */
  vBC: string;
  /** Valor do COFINS */
  vCOFINS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrType {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrType;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrTypeCSTType =
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "65"
  | "66"
  | "67"
  | "70"
  | "71"
  | "72"
  | "73"
  | "74"
  | "75"
  | "98"
  | "99";
interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSOutrTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeType
  extends BaseType {
  /** Código de Situação Tributária do COFINS.
   * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto; */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeTypeCSTType;
  /** Quantidade Vendida (NT2011/004) */
  qBCProd: string;
  /** Alíquota do COFINS (em reais) (NT2011/004) */
  vAliqProd: string;
  /** Valor do COFINS */
  vCOFINS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeType {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeType;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeTypeCSTType = "03";
interface _TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeCOFINSTypeCOFINSQtdeTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSType extends BaseType {
  /** Tributação pelo ICMS
   * 00 - Tributada integralmente */
  ICMS00: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00Type;
  /** Tributação pelo ICMS
   * 10 - Tributada e com cobrança do ICMS por substituição tributária */
  ICMS10: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10Type;
  /** Tributção pelo ICMS
   * 20 - Com redução de base de cálculo */
  ICMS20: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20Type;
  /** Tributação pelo ICMS
   * 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária */
  ICMS30: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30Type;
  /** Tributação pelo ICMS
   * 40 - Isenta
   * 41 - Não tributada
   * 50 - Suspensão */
  ICMS40: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40Type;
  /** Tributção pelo ICMS
   * 51 - Diferimento
   * A exigência do preenchimento das informações do ICMS diferido fica à critério de cada UF. */
  ICMS51: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51Type;
  /** Tributação pelo ICMS
   * 60 - ICMS cobrado anteriormente por substituição tributária */
  ICMS60: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60Type;
  /** Tributação pelo ICMS
   * 70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária */
  ICMS70: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70Type;
  /** Tributação pelo ICMS
   * 90 - Outras */
  ICMS90: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90Type;
  /** Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação
   * Operação interestadual para consumidor final com partilha do ICMS  devido na operação entre a UF de origem e a UF do destinatário ou ou a UF definida na legislação. (Ex. UF da concessionária de entrega do  veículos) */
  ICMSPart: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartType;
  /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=101 (v.2.0) */
  ICMSSN101: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101Type;
  /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=102, 103, 300 ou 400 (v.2.0)) */
  ICMSSN102: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102Type;
  /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=201 (v.2.0) */
  ICMSSN201: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201Type;
  /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=202 ou 203 (v.2.0) */
  ICMSSN202: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202Type;
  /** Tributação do ICMS pelo SIMPLES NACIONAL,CRT=1 – Simples Nacional e CSOSN=500 (v.2.0) */
  ICMSSN500: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500Type;
  /** Tributação do ICMS pelo SIMPLES NACIONAL, CRT=1 – Simples Nacional e CSOSN=900 (v2.0) */
  ICMSSN900: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900Type;
  /** Grupo de informação do ICMSST devido para a UF de destino, nas operações interestaduais de produtos que tiveram retenção antecipada de ICMS por ST na UF do remetente. Repasse via Substituto Tributário. */
  ICMSST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTType;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSType };
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00Type extends BaseType {
  /** Tributção pelo ICMS
   * 00 - Tributada integralmente */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeModBCType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Alíquota do ICMS */
  pICMS: string;
  /** Valor da BC do ICMS */
  vBC: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do ICMS */
  vICMS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeCSTType = "00";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS00TypeModBCType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10Type extends BaseType {
  /** 10 - Tributada e com cobrança do ICMS por substituição tributária */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor)
   * 6-Valor da Operação; */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCSTType;
  /** Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária; 9-Outros; 12-Fomento agropecuário. */
  motDesICMSST?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeMotDesICMSSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS */
  pICMS: string;
  /** Alíquota do ICMS ST */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Valor da BC do ICMS */
  vBC: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCP?: string;
  /** Valor da Base de cálculo do FCP retido por substituicao tributaria. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST */
  vBCST: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS */
  vICMS: string;
  /** Valor do ICMS ST */
  vICMSST: string;
  /** Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeCSTType = "10";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeModBCType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeMotDesICMSSTType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeMotDesICMSSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS10TypeMotDesICMSSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20Type extends BaseType {
  /** Tributção pelo ICMS
   * 20 - Com redução de base de cálculo */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeModBCType;
  /** Motivo da desoneração do ICMS:3-Uso na agropecuária;9-Outros;12-Fomento agropecuário */
  motDesICMS?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeMotDesICMSType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Alíquota do ICMS */
  pICMS: string;
  /** Percentual de redução da BC */
  pRedBC: string;
  /** Valor da BC do ICMS */
  vBC: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCP?: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do ICMS */
  vICMS: string;
  /** Valor do ICMS de desoneração */
  vICMSDeson?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeCSTType = "20";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeModBCType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeMotDesICMSType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeMotDesICMSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS20TypeMotDesICMSType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30Type extends BaseType {
  /** Tributção pelo ICMS
   * 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeCSTType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor).
   * 6 - Valor da Operação */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeModBCSTType;
  /** Motivo da desoneração do ICMS:6-Utilitários Motocicleta AÁrea Livre;7-SUFRAMA;9-Outros */
  motDesICMS?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeMotDesICMSType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS ST */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST */
  vBCST: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS de desoneração */
  vICMSDeson?: string;
  /** Valor do ICMS ST */
  vICMSST: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeCSTType = "30";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeMotDesICMSType =
  | "6"
  | "7"
  | "9";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeMotDesICMSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS30TypeMotDesICMSType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40Type extends BaseType {
  /** Tributação pelo ICMS
   * 40 - Isenta
   * 41 - Não tributada
   * 50 - Suspensão
   * 51 - Diferimento */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeCSTType;
  /** Este campo será preenchido quando o campo anterior estiver preenchido.
   * Informar o motivo da desoneração:
   * 1 – Táxi;
   * 3 – Produtor Agropecuário;
   * 4 – Frotista/Locadora;
   * 5 – Diplomático/Consular;
   * 6 – Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);
   * 7 – SUFRAMA;
   * 8 - Venda a órgão Público;
   * 9 – Outros
   * 10- Deficiente Condutor
   * 11- Deficiente não condutor
   * 16 - Olimpíadas Rio 2016
   * 90 - Solicitado pelo Fisco */
  motDesICMS?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeMotDesICMSType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** O valor do ICMS será informado apenas nas operações com veículos beneficiados com a desoneração condicional do ICMS. */
  vICMSDeson?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeCSTType =
  | "40"
  | "41"
  | "50";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeMotDesICMSType =
  | "1"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "16"
  | "90";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeMotDesICMSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS40TypeMotDesICMSType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51Type extends BaseType {
  /** Tributção pelo ICMS
   * 20 - Com redução de base de cálculo */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeModBCType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual do diferemento */
  pDif?: string;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCPDif?: string;
  /** Alíquota do imposto */
  pICMS?: string;
  /** Percentual de redução da BC */
  pRedBC?: string;
  /** Valor da BC do ICMS */
  vBC?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCP?: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido. */
  vFCPDif?: string;
  /** Valor efetivo do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCPEfet?: string;
  /** Valor do ICMS */
  vICMS?: string;
  /** Valor do ICMS da diferido */
  vICMSDif?: string;
  /** Valor do ICMS da Operação */
  vICMSOp?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeCSTType = "51";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS51TypeModBCType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60Type extends BaseType {
  /** Tributação pelo ICMS
   * 60 - ICMS cobrado anteriormente por substituição tributária */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60TypeCSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de FCP retido anteriormente por substituição tributária. */
  pFCPSTRet?: string;
  /** Alíquota do ICMS efetiva. */
  pICMSEfet?: string;
  /** Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: string;
  /** Aliquota suportada pelo consumidor final. */
  pST?: string;
  /** Valor da base de cálculo efetiva. */
  vBCEfet?: string;
  /** Valor da Base de cálculo do FCP retido anteriormente por ST. */
  vBCFCPSTRet?: string;
  /** Valor da BC do ICMS ST retido anteriormente */
  vBCSTRet?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPSTRet?: string;
  /** Valor do ICMS efetivo. */
  vICMSEfet?: string;
  /** Valor do ICMS ST retido anteriormente */
  vICMSSTRet?: string;
  /** Valor do ICMS Próprio do Substituto cobrado em operação anterior */
  vICMSSubstituto?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60TypeCSTType = "60";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS60TypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70Type extends BaseType {
  /** Tributção pelo ICMS
   * 70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor);
   * 6 - Valor da Operação. */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCSTType;
  /** Motivo da desoneração do ICMS:3-Uso na agropecuária;9-Outros;12-Fomento agropecuário */
  motDesICMS?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSType;
  /** Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária; 9-Outros; 12-Fomento agropecuário. */
  motDesICMSST?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS */
  pICMS: string;
  /** Alíquota do ICMS ST */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC */
  pRedBC: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Valor da BC do ICMS */
  vBC: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCP?: string;
  /** Valor da Base de cálculo do FCP retido por substituição tributária. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST */
  vBCST: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS */
  vICMS: string;
  /** Valor do ICMS de desoneração */
  vICMSDeson?: string;
  /** Valor do ICMS ST */
  vICMSST: string;
  /** Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeCSTType = "70";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeModBCType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSSTType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS70TypeMotDesICMSType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90Type extends BaseType {
  /** Tributção pelo ICMS
   * 90 - Outras */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor);
   * 6 - Valor da Operação. */
  modBCST?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCSTType;
  /** Motivo da desoneração do ICMS:3-Uso na agropecuária;9-Outros;12-Fomento agropecuário */
  motDesICMS?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSType;
  /** Motivo da desoneração do ICMS-ST: 3-Uso na agropecuária; 9-Outros; 12-Fomento agropecuário. */
  motDesICMSST?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  pFCP?: string;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS */
  pICMS?: string;
  /** Alíquota do ICMS ST */
  pICMSST?: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC */
  pRedBC?: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Valor da BC do ICMS */
  vBC?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCP?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST */
  vBCST?: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). */
  vFCP?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS */
  vICMS?: string;
  /** Valor do ICMS de desoneração */
  vICMSDeson?: string;
  /** Valor do ICMS ST */
  vICMSST?: string;
  /** Valor do ICMS-ST desonerado. */
  vICMSSTDeson?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90Type {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90Type };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeCSTType = "90";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeModBCType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSSTType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSType =
  | "3"
  | "9"
  | "12";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMS90TypeMotDesICMSType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartType
  extends BaseType {
  /** Tributação pelo ICMS
   * 10 - Tributada e com cobrança do ICMS por substituição tributária;
   * 90 – Outros. */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeCSTType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor).
   * 6 - Valor da Operação */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual para determinação do valor  da Base de Cálculo da operação própria. */
  pBCOp: string;
  /** Alíquota do ICMS */
  pICMS: string;
  /** Alíquota do ICMS ST */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC */
  pRedBC?: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Sigla da UF para qual é devido o ICMS ST da operação. */
  UFST: TUf;
  /** Valor da BC do ICMS */
  vBC: string;
  /** Valor da BC do ICMS ST */
  vBCST: string;
  /** Valor do ICMS */
  vICMS: string;
  /** Valor do ICMS ST */
  vICMSST: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartType };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeCSTType = "10" | "90";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSPartTypeModBCType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101Type
  extends BaseType {
  /** 101- Tributada pelo Simples Nacional com permissão de crédito. (v.2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101TypeCSOSNType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno
   * (v2.0) */
  orig: Torig;
  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
  pCredSN: string;
  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0) */
  vCredICMSSN: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101TypeCSOSNType = "101";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN101TypeCSOSNType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102Type
  extends BaseType {
  /** 102- Tributada pelo Simples Nacional sem permissão de crédito.
   * 103 – Isenção do ICMS  no Simples Nacional para faixa de receita bruta.
   * 300 – Imune.
   * 400 – Não tributda pelo Simples Nacional (v.2.0) (v.2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102TypeCSOSNType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno
   * (v2.0) */
  orig: Torig;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102TypeCSOSNType =
  | "102"
  | "103"
  | "300"
  | "400";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN102TypeCSOSNType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201Type
  extends BaseType {
  /** 201- Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por Substituição Tributária (v.2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeCSOSNType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor). (v2.0)
   * 6 - Valor da Operação */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeModBCSTType;
  /** Origem da mercadoria:
   * 0 – Nacional;
   * 1 – Estrangeira – Importação direta;
   * 2 – Estrangeira – Adquirida no mercado interno. (v2.0) */
  orig: Torig;
  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
  pCredSN: string;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS ST (v2.0) */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST (v2.0) */
  pMVAST?: string;
  /** Percentual de redução da BC ICMS ST  (v2.0) */
  pRedBCST?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST (v2.0) */
  vBCST: string;
  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0) */
  vCredICMSSN: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS ST (v2.0) */
  vICMSST: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeCSOSNType = "201";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeCSOSNType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN201TypeModBCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202Type
  extends BaseType {
  /** 202- Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por Substituição Tributária;
   * 203-  Isenção do ICMS nos Simples Nacional para faixa de receita bruta e com cobrança do ICMS por Substituição Tributária (v.2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeCSOSNType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor). (v2.0)
   * 6 - Valor da Operação */
  modBCST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeModBCSTType;
  /** Origem da mercadoria:
   * 0 – Nacional;
   * 1 – Estrangeira – Importação direta;
   * 2 – Estrangeira – Adquirida no mercado interno. (v2.0) */
  orig: Torig;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS ST (v2.0) */
  pICMSST: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST (v2.0) */
  pMVAST?: string;
  /** Percentual de redução da BC ICMS ST  (v2.0) */
  pRedBCST?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST (v2.0) */
  vBCST: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS ST (v2.0) */
  vICMSST: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeCSOSNType =
  | "202"
  | "203";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeCSOSNType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN202TypeModBCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500Type
  extends BaseType {
  /** 500 – ICMS cobrado anterirmente por substituição tributária (substituído) ou por antecipação
   * (v.2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500TypeCSOSNType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual de FCP retido anteriormente por substituição tributária. */
  pFCPSTRet?: string;
  /** Alíquota do ICMS efetiva. */
  pICMSEfet?: string;
  /** Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: string;
  /** Aliquota suportada pelo consumidor final. */
  pST?: string;
  /** Valor da base de cálculo efetiva. */
  vBCEfet?: string;
  /** Valor da Base de cálculo do FCP retido anteriormente. */
  vBCFCPSTRet?: string;
  /** Valor da BC do ICMS ST retido anteriormente (v2.0) */
  vBCSTRet?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPSTRet?: string;
  /** Valor do ICMS efetivo. */
  vICMSEfet?: string;
  /** Valor do ICMS ST retido anteriormente  (v2.0) */
  vICMSSTRet?: string;
  /** Valor do ICMS próprio do substituto */
  vICMSSubstituto?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500TypeCSOSNType = "500";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN500TypeCSOSNType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900Type
  extends BaseType {
  /** Tributação pelo ICMS 900 - Outros(v2.0) */
  CSOSN: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeCSOSNType;
  /** Modalidade de determinação da BC do ICMS:
   * 0 - Margem Valor Agregado (%);
   * 1 - Pauta (valor);
   * 2 - Preço Tabelado Máximo (valor);
   * 3 - Valor da Operação. */
  modBC?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCType;
  /** Modalidade de determinação da BC do ICMS ST:
   * 0 – Preço tabelado ou máximo  sugerido;
   * 1 - Lista Negativa (valor);
   * 2 - Lista Positiva (valor);
   * 3 - Lista Neutra (valor);
   * 4 - Margem Valor Agregado (%);
   * 5 - Pauta (valor).
   * 6 - Valor da Operação */
  modBCST?: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
  pCredSN?: string;
  /** Percentual de FCP retido por substituição tributária. */
  pFCPST?: string;
  /** Alíquota do ICMS */
  pICMS?: string;
  /** Alíquota do ICMS ST */
  pICMSST?: string;
  /** Percentual da Margem de Valor Adicionado ICMS ST */
  pMVAST?: string;
  /** Percentual de redução da BC */
  pRedBC?: string;
  /** Percentual de redução da BC ICMS ST */
  pRedBCST?: string;
  /** Valor da BC do ICMS */
  vBC?: string;
  /** Valor da Base de cálculo do FCP. */
  vBCFCPST?: string;
  /** Valor da BC do ICMS ST */
  vBCST?: string;
  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) (v2.0) */
  vCredICMSSN?: string;
  /** Valor do FCP retido por substituição tributária. */
  vFCPST?: string;
  /** Valor do ICMS */
  vICMS?: string;
  /** Valor do ICMS ST */
  vICMSST?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900Type
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900Type {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900Type;
  };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeCSOSNType = "900";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeCSOSNType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeCSOSNType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCSTType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCSTType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCType =
  | "0"
  | "1"
  | "2"
  | "3";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSN900TypeModBCType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTType extends BaseType {
  /** Tributção pelo ICMS
   * 41-Não Tributado.
   * 60-Cobrado anteriormente por substituição tributária. */
  CST: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTTypeCSTType;
  /** origem da mercadoria: 0 - Nacional
   * 1 - Estrangeira - Importação direta
   * 2 - Estrangeira - Adquirida no mercado interno */
  orig: Torig;
  /** Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. */
  pFCPSTRet?: string;
  /** Alíquota do ICMS efetivo. */
  pICMSEfet?: string;
  /** Percentual de redução da base de cálculo efetiva. */
  pRedBCEfet?: string;
  /** Aliquota suportada pelo consumidor final. */
  pST?: string;
  /** Valor da base de cálculo efetiva. */
  vBCEfet?: string;
  /** Informar o valor da Base de Cálculo do FCP retido anteriormente por ST. */
  vBCFCPSTRet?: string;
  /** Informar o valor da BC do ICMS ST da UF destino */
  vBCSTDest: string;
  /** Informar o valor da BC do ICMS ST retido na UF remetente */
  vBCSTRet: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. */
  vFCPSTRet?: string;
  /** Valor do ICMS efetivo. */
  vICMSEfet?: string;
  /** Informar o valor da BC do ICMS ST da UF destino (v2.0) */
  vICMSSTDest: string;
  /** Informar o valor do ICMS ST retido na UF remetente (iv2.0)) */
  vICMSSTRet: string;
  /** Valor do ICMS Próprio do Substituto cobrado em operação anterior */
  vICMSSubstituto?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTType };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTTypeCSTType = "41" | "60";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSTypeICMSSTTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestType extends BaseType {
  /** Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF. */
  pFCPUFDest?: string;
  /** Alíquota interestadual das UF envolvidas: - 4% alíquota interestadual para produtos importados; - 7% para os Estados de origem do Sul e Sudeste (exceto ES), destinado para os Estados do Norte e Nordeste  ou ES; - 12% para os demais casos. */
  pICMSInter: TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestTypePICMSInterType;
  /** Percentual de partilha para a UF do destinatário: - 40% em 2016; - 60% em 2017; - 80% em 2018; - 100% a partir de 2019. */
  pICMSInterPart: string;
  /** Alíquota adotada nas operações internas na UF do destinatário para o produto / mercadoria. */
  pICMSUFDest: string;
  /** Valor da Base de Cálculo do FCP na UF do destinatário. */
  vBCFCPUFDest?: string;
  /** Valor da Base de Cálculo do ICMS na UF do destinatário. */
  vBCUFDest: string;
  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino. */
  vFCPUFDest?: string;
  /** Valor do ICMS de partilha para a UF do destinatário. */
  vICMSUFDest: string;
  /** Valor do ICMS de partilha para a UF do remetente. Nota: A partir de 2019, este valor será zero. */
  vICMSUFRemet: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestType };
}

type TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestTypePICMSInterType =
  | "4.00"
  | "7.00"
  | "12.00";
interface _TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestTypePICMSInterType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeICMSUFDestTypePICMSInterType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeIIType extends BaseType {
  /** Base da BC do Imposto de Importação */
  vBC: string;
  /** Valor das despesas aduaneiras */
  vDespAdu: string;
  /** Valor do Imposto de Importação */
  vII: string;
  /** Valor do Imposto sobre Operações Financeiras */
  vIOF: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeIIType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeIIType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeIIType };
}

interface _TNFeInfNFeTypeDetTypeImpostoTypeISSQNType extends BaseType {
  /** Informar o Item da lista de serviços da LC 116/03 em que se classifica o serviço. */
  cListServ: TCListServ;
  /** Código do Município de Incidência do Imposto */
  cMun?: string;
  /** Informar o município de ocorrência do fato gerador do ISSQN. Utilizar a Tabela do IBGE (Anexo VII - Tabela de UF, Município e País). “Atenção, não vincular com os campos B12, C10 ou E10” v2.0 */
  cMunFG: string;
  /** Código de Pais */
  cPais?: string;
  /** Código do serviço prestado dentro do município */
  cServico?: string;
  /** Indicador de Incentivo Fiscal. 1=Sim; 2=Não */
  indIncentivo: TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndIncentivoType;
  /** Exibilidade do ISS:1-Exigível;2-Não incidente;3-Isenção;4-Exportação;5-Imunidade;6-Exig.Susp. Judicial;7-Exig.Susp. ADM */
  indISS: TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndISSType;
  /** Número do Processo administrativo ou judicial de suspenção do processo */
  nProcesso?: string;
  /** Alíquota do ISSQN */
  vAliq: string;
  /** Valor da BC do ISSQN */
  vBC: string;
  /** Valor dedução para redução da base de cálculo */
  vDeducao?: string;
  /** Valor desconto condicionado */
  vDescCond?: string;
  /** Valor desconto incondicionado */
  vDescIncond?: string;
  /** Valor da do ISSQN */
  vISSQN: string;
  /** Valor Retenção ISS */
  vISSRet?: string;
  /** Valor outras retenções */
  vOutro?: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypeISSQNType
  extends _TNFeInfNFeTypeDetTypeImpostoTypeISSQNType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypeISSQNType };
}

type TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeCPaisType = string;
type _TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeCPaisType = Primitive._string;

type TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeCServicoType = string;
type _TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeCServicoType = Primitive._string;

type TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndIncentivoType = "1" | "2";
interface _TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndIncentivoType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndIncentivoType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndISSType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7";
interface _TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndISSType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeIndISSType;
}

type TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeNProcessoType = string;
type _TNFeInfNFeTypeDetTypeImpostoTypeISSQNTypeNProcessoType =
  Primitive._string;

interface _TNFeInfNFeTypeDetTypeImpostoTypePISSTType extends BaseType {
  /** Indica se o valor do PISST compõe o valor total da NF-e */
  indSomaPISST?: TNFeInfNFeTypeDetTypeImpostoTypePISSTTypeIndSomaPISSTType;
  /** Alíquota do PIS ST (em percentual) */
  pPIS: string;
  /** Quantidade Vendida */
  qBCProd: string;
  /** Alíquota do PIS ST (em reais) */
  vAliqProd: string;
  /** Valor da BC do PIS ST */
  vBC: string;
  /** Valor do PIS ST */
  vPIS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISSTType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISSTType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISSTType };
}

type TNFeInfNFeTypeDetTypeImpostoTypePISSTTypeIndSomaPISSTType = "0" | "1";
interface _TNFeInfNFeTypeDetTypeImpostoTypePISSTTypeIndSomaPISSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypePISSTTypeIndSomaPISSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypePISType extends BaseType {
  /** Código de Situação Tributária do PIS.
   * 01 – Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo);
   * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada); */
  PISAliq: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqType;
  /** Código de Situação Tributária do PIS.
   * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero);
   * 06 - Operação Tributável - Alíquota Zero;
   * 07 - Operação Isenta da contribuição;
   * 08 - Operação Sem Incidência da contribuição;
   * 09 - Operação com suspensão da contribuição; */
  PISNT: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTType;
  /** Código de Situação Tributária do PIS.
   * 99 - Outras Operações. */
  PISOutr: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrType;
  /** Código de Situação Tributária do PIS.
   * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto; */
  PISQtde: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeType;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISType };
}

interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqType extends BaseType {
  /** Código de Situação Tributária do PIS.
   * 01 – Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo);
   * 02 - Operação Tributável - Base de Calculo = Valor da Operação (Alíquota Diferenciada); */
  CST: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqTypeCSTType;
  /** Alíquota do PIS (em percentual) */
  pPIS: string;
  /** Valor da BC do PIS */
  vBC: string;
  /** Valor do PIS */
  vPIS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqType };
}

type TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqTypeCSTType = "01" | "02";
interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISAliqTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTType extends BaseType {
  /** Código de Situação Tributária do PIS.
   * 04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero);
   * 05 - Operação Tributável (ST);
   * 06 - Operação Tributável - Alíquota Zero;
   * 07 - Operação Isenta da contribuição;
   * 08 - Operação Sem Incidência da contribuição;
   * 09 - Operação com suspensão da contribuição; */
  CST: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTTypeCSTType;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTType };
}

type TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTTypeCSTType =
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09";
interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISNTTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrType extends BaseType {
  /** Código de Situação Tributária do PIS.
   * 99 - Outras Operações. */
  CST: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrTypeCSTType;
  /** Alíquota do PIS (em percentual) */
  pPIS: string;
  /** Quantidade Vendida (NT2011/004) */
  qBCProd: string;
  /** Alíquota do PIS (em reais) (NT2011/004) */
  vAliqProd: string;
  /** Valor da BC do PIS */
  vBC: string;
  /** Valor do PIS */
  vPIS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrType };
}

type TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrTypeCSTType =
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "65"
  | "66"
  | "67"
  | "70"
  | "71"
  | "72"
  | "73"
  | "74"
  | "75"
  | "98"
  | "99";
interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISOutrTypeCSTType;
}

interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeType extends BaseType {
  /** Código de Situação Tributária do PIS.
   * 03 - Operação Tributável - Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto; */
  CST: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeTypeCSTType;
  /** Quantidade Vendida  (NT2011/004) */
  qBCProd: string;
  /** Alíquota do PIS (em reais) (NT2011/004) */
  vAliqProd: string;
  /** Valor do PIS */
  vPIS: string;
}
interface TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeType
  extends _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeType {
  constructor: { new (): TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeType };
}

type TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeTypeCSTType = "03";
interface _TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeTypeCSTType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeImpostoTypePISTypePISQtdeTypeCSTType;
}

type TNFeInfNFeTypeDetTypeInfAdProdType = string;
type _TNFeInfNFeTypeDetTypeInfAdProdType = _TString;

type TNFeInfNFeTypeDetTypeNItemType = string;
type _TNFeInfNFeTypeDetTypeNItemType = Primitive._string;

interface _TNFeInfNFeTypeDetTypeProdType extends BaseType {
  /** Armamentos */
  arma?: TNFeInfNFeTypeDetTypeProdTypeArmaType[];
  /** Codigo de barras diferente do padrão GTIN */
  cBarra?: string;
  /** Código de barras da unidade tributável diferente do padrão GTIN */
  cBarraTrib?: string;
  cBenef?: string;
  /** GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras */
  cEAN: string;
  /** GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras */
  cEANTrib: string;
  /** Codigo especificador da Substuicao Tributaria - CEST, que identifica a mercadoria sujeita aos regimes de  substituicao tributária e de antecipação do recolhimento  do imposto */
  CEST?: string;
  /** Cfop */
  CFOP: string;
  /** CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. */
  CNPJFab?: string;
  /** Informar apenas para operações com combustíveis líquidos */
  comb?: TNFeInfNFeTypeDetTypeProdTypeCombType;
  /** Código do produto ou serviço. Preencher com CFOP caso se trate de itens não relacionados com mercadorias/produto e que o contribuinte não possua codificação própria
   * Formato ”CFOP9999”. */
  cProd: string;
  /** Detalhe da exportação */
  detExport?: TNFeInfNFeTypeDetTypeProdTypeDetExportType[];
  /** Delcaração de Importação
   * (NT 2011/004) */
  DI?: TNFeInfNFeTypeDetTypeProdTypeDIType[];
  /** Código EX TIPI (3 posições) */
  EXTIPI?: string;
  indEscala?: TNFeInfNFeTypeDetTypeProdTypeIndEscalaType;
  /** Este campo deverá ser preenchido com:
   * 0 – o valor do item (vProd) não compõe o valor total da NF-e (vProd)
   * 1  – o valor do item (vProd) compõe o valor total da NF-e (vProd) */
  indTot: TNFeInfNFeTypeDetTypeProdTypeIndTotType;
  /** Informações mais detalhadas do produto (usada na NFF) */
  infProdEmb?: TNFeInfNFeTypeDetTypeProdTypeInfProdEmbType;
  /** Informações mais detalhadas do produto (usada na NFF) */
  infProdNFF?: TNFeInfNFeTypeDetTypeProdTypeInfProdNFFType;
  /** grupo do detalhamento de Medicamentos e de matérias-primas farmacêuticas */
  med?: TNFeInfNFeTypeDetTypeProdTypeMedType;
  /** Código NCM (8 posições), será permitida a informação do gênero (posição do capítulo do NCM) quando a operação não for de comércio exterior (importação/exportação) ou o produto não seja tributado pelo IPI. Em caso de item de serviço ou item que não tenham produto (Ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o código 00 (zeros) (v2.0) */
  NCM: string;
  /** Número de controle da FCI - Ficha de Conteúdo de Importação. */
  nFCI?: string;
  /** Número do Item do Pedido de Compra - Identificação do número do item do pedido de Compra */
  nItemPed?: string;
  /** Número do RECOPI */
  nRECOPI?: string;
  /** Nomenclatura de Valor aduaneio e Estatístico */
  NVE?: string[];
  /** Quantidade Comercial  do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros. */
  qCom: string;
  /** Quantidade Tributável - alterado para aceitar de 0 a 4 casas decimais e 11 inteiros */
  qTrib: string;
  rastro?: TNFeInfNFeTypeDetTypeProdTypeRastroType[];
  /** Unidade comercial */
  uCom: string;
  /** Unidade Tributável */
  uTrib: string;
  /** Valor do Desconto */
  vDesc?: string;
  /** Veículos novos */
  veicProd?: TNFeInfNFeTypeDetTypeProdTypeVeicProdType;
  /** Valor Total do Frete */
  vFrete?: string;
  /** Outras despesas acessórias */
  vOutro?: string;
  /** Valor bruto do produto ou serviço. */
  vProd: string;
  /** Valor Total do Seguro */
  vSeg?: string;
  /** Valor unitário de comercialização  - alterado para aceitar 0 a 10 casas decimais e 11 inteiros */
  vUnCom: string;
  /** Valor unitário de tributação - - alterado para aceitar 0 a 10 casas decimais e 11 inteiros */
  vUnTrib: string;
  /** pedido de compra - Informação de interesse do emissor para controle do B2B. */
  xPed?: string;
  /** Descrição do produto ou serviço */
  xProd: string;
}
interface TNFeInfNFeTypeDetTypeProdType extends _TNFeInfNFeTypeDetTypeProdType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdType };
}

interface _TNFeInfNFeTypeDetTypeProdTypeArmaType extends BaseType {
  /** Descrição completa da arma, compreendendo: calibre, marca, capacidade, tipo de funcionamento, comprimento e demais elementos que permitam a sua perfeita identificação. */
  descr: string;
  /** Número de série do cano */
  nCano: string;
  /** Número de série da arma */
  nSerie: string;
  /** Indicador do tipo de arma de fogo (0 - Uso permitido; 1 - Uso restrito) */
  tpArma: TNFeInfNFeTypeDetTypeProdTypeArmaTypeTpArmaType;
}
interface TNFeInfNFeTypeDetTypeProdTypeArmaType
  extends _TNFeInfNFeTypeDetTypeProdTypeArmaType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeArmaType };
}

type TNFeInfNFeTypeDetTypeProdTypeArmaTypeDescrType = string;
type _TNFeInfNFeTypeDetTypeProdTypeArmaTypeDescrType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeArmaTypeNCanoType = string;
type _TNFeInfNFeTypeDetTypeProdTypeArmaTypeNCanoType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeArmaTypeNSerieType = string;
type _TNFeInfNFeTypeDetTypeProdTypeArmaTypeNSerieType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeArmaTypeTpArmaType = "0" | "1";
interface _TNFeInfNFeTypeDetTypeProdTypeArmaTypeTpArmaType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeArmaTypeTpArmaType;
}

type TNFeInfNFeTypeDetTypeProdTypeCBarraTribType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCBarraTribType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeCBarraType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCBarraType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeCBenefType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCBenefType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCEANTribType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCEANTribType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCEANType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCEANType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCESTType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCESTType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCFOPType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCFOPType = Primitive._string;

interface _TNFeInfNFeTypeDetTypeProdTypeCombType extends BaseType {
  /** CIDE Combustíveis */
  CIDE?: TNFeInfNFeTypeDetTypeProdTypeCombTypeCIDEType;
  /** Código de autorização / registro do CODIF. Informar apenas quando a UF utilizar o CODIF (Sistema de Controle do 			Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível). */
  CODIF?: string;
  /** Código de produto da ANP. codificação de produtos do SIMP (http://www.anp.gov.br) */
  cProdANP: string;
  /** Descrição do Produto conforme ANP. Utilizar a descrição de produtos do Sistema de Informações de Movimentação de Produtos - SIMP (http://www.anp.gov.br/simp/). */
  descANP: string;
  /** Informações do grupo de "encerrante" */
  encerrante?: TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteType;
  /** Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001). Informar em número decimal o percentual do GLP derivado de petróleo no produto GLP. Valores 0 a 100. */
  pGLP?: string;
  /** Percentual de gás natural importado GLGNi para o produto GLP (cProdANP=210203001). Informar em número deciaml o percentual do Gás Natural Importado - GLGNi para o produto GLP. Valores de 0 a 100. */
  pGNi?: string;
  /** Percentual de gás natural nacional - GLGNn para o produto GLP (cProdANP=210203001). Informar em número decimal o percentual do Gás Natural Nacional - GLGNn para o produto GLP. Valores de 0 a 100. */
  pGNn?: string;
  /** Quantidade de combustível
   * faturada à temperatura ambiente.
   * Informar quando a quantidade
   * faturada informada no campo
   * qCom (I10) tiver sido ajustada para
   * uma temperatura diferente da
   * ambiente. */
  qTemp?: string;
  /** Sigla da UF de Consumo */
  UFCons: TUf;
  /** Valor de partida (cProdANP=210203001). Deve ser informado neste campo o valor por quilograma sem ICMS. */
  vPart?: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeCombType
  extends _TNFeInfNFeTypeDetTypeProdTypeCombType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeCombType };
}

interface _TNFeInfNFeTypeDetTypeProdTypeCombTypeCIDEType extends BaseType {
  /** BC do CIDE ( Quantidade comercializada) */
  qBCProd: string;
  /** Alíquota do CIDE  (em reais) */
  vAliqProd: string;
  /** Valor do CIDE */
  vCIDE: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeCombTypeCIDEType
  extends _TNFeInfNFeTypeDetTypeProdTypeCombTypeCIDEType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeCombTypeCIDEType };
}

type TNFeInfNFeTypeDetTypeProdTypeCombTypeCODIFType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeCODIFType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCombTypeCProdANPType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeCProdANPType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCombTypeDescANPType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeDescANPType = Primitive._string;

interface _TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteType
  extends BaseType {
  /** Numero de identificação do Bico utilizado no abastecimento */
  nBico: string;
  /** Numero de identificação da bomba ao qual o bico está interligado */
  nBomba?: string;
  /** Numero de identificação do tanque ao qual o bico está interligado */
  nTanque: string;
  /** Valor do Encerrante no final do abastecimento */
  vEncFin: string;
  /** Valor do Encerrante no ínicio do abastecimento */
  vEncIni: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteType
  extends _TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteType };
}

type TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNBicoType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNBicoType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNBombaType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNBombaType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNTanqueType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCombTypeEncerranteTypeNTanqueType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeCProdType = string;
type _TNFeInfNFeTypeDetTypeProdTypeCProdType = _TString;

interface _TNFeInfNFeTypeDetTypeProdTypeDetExportType extends BaseType {
  /** Exportação indireta */
  exportInd?: TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndType;
  /** Número do ato concessório de Drawback */
  nDraw?: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeDetExportType
  extends _TNFeInfNFeTypeDetTypeProdTypeDetExportType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeDetExportType };
}

interface _TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndType
  extends BaseType {
  /** Chave de acesso da NF-e recebida para exportação */
  chNFe: string;
  /** Registro de exportação */
  nRE: string;
  /** Quantidade do item efetivamente exportado */
  qExport: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndType
  extends _TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndType {
  constructor: {
    new (): TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndType;
  };
}

type TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndTypeNREType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDetExportTypeExportIndTypeNREType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeDetExportTypeNDrawType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDetExportTypeNDrawType = _TString;

interface _TNFeInfNFeTypeDetTypeProdTypeDIType extends BaseType {
  /** Adições (NT 2011/004) */
  adi: TNFeInfNFeTypeDetTypeProdTypeDITypeAdiType[];
  /** Código do exportador (usado nos sistemas internos de informação do emitente da NF-e) */
  cExportador: string;
  /** CNPJ do adquirente ou do encomendante */
  CNPJ?: string;
  /** Data do desembaraço aduaneiro (AAAA-MM-DD) */
  dDesemb: string;
  /** Data de registro da DI/DSI/DA (AAAA-MM-DD) */
  dDI: string;
  /** Numero do Documento de Importação DI/DSI/DA/DRI-E (DI/DSI/DA/DRI-E) (NT2011/004) */
  nDI: string;
  /** Forma de Importação quanto a intermediação
   * 1-por conta propria;2-por conta e ordem;3-encomenda */
  tpIntermedio: TNFeInfNFeTypeDetTypeProdTypeDITypeTpIntermedioType;
  /** Via de transporte internacional informada na DI
   * 1-Maritima;2-Fluvial;3-Lacustre;4-Aerea;5-Postal;6-Ferroviaria;7-Rodoviaria;8-Conduto;9-Meios Proprios;10-Entrada/Saida Ficta;
   * 11-Courier;12-Em maos;13-Por reboque. */
  tpViaTransp: TNFeInfNFeTypeDetTypeProdTypeDITypeTpViaTranspType;
  /** UF onde ocorreu o desembaraço aduaneiro */
  UFDesemb: TUfEmi;
  /** Sigla da UF do adquirente ou do encomendante */
  UFTerceiro?: TUfEmi;
  /** Valor Adicional ao frete para renovação de marinha mercante */
  vAFRMM?: string;
  /** Local do desembaraço aduaneiro */
  xLocDesemb: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeDIType
  extends _TNFeInfNFeTypeDetTypeProdTypeDIType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeDIType };
}

interface _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiType extends BaseType {
  /** Código do fabricante estrangeiro (usado nos sistemas internos de informação do emitente da NF-e) */
  cFabricante: string;
  /** Número da Adição */
  nAdicao?: string;
  /** Número do ato concessório de Drawback */
  nDraw?: string;
  /** Número seqüencial do item dentro da Adição */
  nSeqAdic: string;
  /** Valor do desconto do item da DI – adição */
  vDescDI?: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeDITypeAdiType
  extends _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeDITypeAdiType };
}

type TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeCFabricanteType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeCFabricanteType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNAdicaoType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNAdicaoType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNDrawType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNDrawType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNSeqAdicType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeAdiTypeNSeqAdicType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeDITypeCExportadorType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeCExportadorType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeDITypeNDIType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeNDIType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeDITypeTpIntermedioType = "1" | "2" | "3";
interface _TNFeInfNFeTypeDetTypeProdTypeDITypeTpIntermedioType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeDITypeTpIntermedioType;
}

type TNFeInfNFeTypeDetTypeProdTypeDITypeTpViaTranspType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13";
interface _TNFeInfNFeTypeDetTypeProdTypeDITypeTpViaTranspType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeDITypeTpViaTranspType;
}

type TNFeInfNFeTypeDetTypeProdTypeDITypeXLocDesembType = string;
type _TNFeInfNFeTypeDetTypeProdTypeDITypeXLocDesembType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeEXTIPIType = string;
type _TNFeInfNFeTypeDetTypeProdTypeEXTIPIType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeIndEscalaType = "S" | "N";
interface _TNFeInfNFeTypeDetTypeProdTypeIndEscalaType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeIndEscalaType;
}

type TNFeInfNFeTypeDetTypeProdTypeIndTotType = "0" | "1";
interface _TNFeInfNFeTypeDetTypeProdTypeIndTotType extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeIndTotType;
}

interface _TNFeInfNFeTypeDetTypeProdTypeInfProdEmbType extends BaseType {
  /** Volume do produto na embalagem */
  qVolEmb: string;
  /** Unidade de Medida da Embalagem */
  uEmb: string;
  /** Embalagem do produto */
  xEmb: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeInfProdEmbType
  extends _TNFeInfNFeTypeDetTypeProdTypeInfProdEmbType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeInfProdEmbType };
}

type TNFeInfNFeTypeDetTypeProdTypeInfProdEmbTypeUEmbType = string;
type _TNFeInfNFeTypeDetTypeProdTypeInfProdEmbTypeUEmbType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeInfProdEmbTypeXEmbType = string;
type _TNFeInfNFeTypeDetTypeProdTypeInfProdEmbTypeXEmbType = _TString;

interface _TNFeInfNFeTypeDetTypeProdTypeInfProdNFFType extends BaseType {
  /** Código da operação selecionada na NFF e relacionada ao item */
  cOperNFF: string;
  /** Código Fiscal do Produto */
  cProdFisco: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeInfProdNFFType
  extends _TNFeInfNFeTypeDetTypeProdTypeInfProdNFFType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeInfProdNFFType };
}

type TNFeInfNFeTypeDetTypeProdTypeInfProdNFFTypeCOperNFFType = string;
type _TNFeInfNFeTypeDetTypeProdTypeInfProdNFFTypeCOperNFFType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeInfProdNFFTypeCProdFiscoType = string;
type _TNFeInfNFeTypeDetTypeProdTypeInfProdNFFTypeCProdFiscoType = _TString;

interface _TNFeInfNFeTypeDetTypeProdTypeMedType extends BaseType {
  /** Utilizar o número do registro ANVISA  ou preencher com o literal “ISENTO”, no caso de medicamento isento de registro na ANVISA. */
  cProdANVISA: string;
  /** Preço Máximo ao Consumidor. */
  vPMC: string;
  /** Obs.: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC). */
  xMotivoIsencao?: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeMedType
  extends _TNFeInfNFeTypeDetTypeProdTypeMedType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeMedType };
}

type TNFeInfNFeTypeDetTypeProdTypeMedTypeCProdANVISAType = string;
type _TNFeInfNFeTypeDetTypeProdTypeMedTypeCProdANVISAType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeMedTypeXMotivoIsencaoType = string;
type _TNFeInfNFeTypeDetTypeProdTypeMedTypeXMotivoIsencaoType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeNCMType = string;
type _TNFeInfNFeTypeDetTypeProdTypeNCMType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeNItemPedType = string;
type _TNFeInfNFeTypeDetTypeProdTypeNItemPedType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeNRECOPIType = string;
type _TNFeInfNFeTypeDetTypeProdTypeNRECOPIType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeNVEType = string;
type _TNFeInfNFeTypeDetTypeProdTypeNVEType = Primitive._string;

interface _TNFeInfNFeTypeDetTypeProdTypeRastroType extends BaseType {
  cAgreg?: string;
  /** Data de fabricação/produção. Formato "AAAA-MM-DD". */
  dFab: string;
  /** Data de validade. Informar o último dia do mês caso a validade não especifique o dia. Formato "AAAA-MM-DD". */
  dVal: string;
  /** Número do lote do produto. */
  nLote: string;
  /** Quantidade de produto no lote. */
  qLote: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeRastroType
  extends _TNFeInfNFeTypeDetTypeProdTypeRastroType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeRastroType };
}

type TNFeInfNFeTypeDetTypeProdTypeRastroTypeCAgregType = string;
type _TNFeInfNFeTypeDetTypeProdTypeRastroTypeCAgregType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeRastroTypeNLoteType = string;
type _TNFeInfNFeTypeDetTypeProdTypeRastroTypeNLoteType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeUComType = string;
type _TNFeInfNFeTypeDetTypeProdTypeUComType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeUTribType = string;
type _TNFeInfNFeTypeDetTypeProdTypeUTribType = _TString;

interface _TNFeInfNFeTypeDetTypeProdTypeVeicProdType extends BaseType {
  /** Ano de Fabricação */
  anoFab: string;
  /** Ano Modelo de Fabricação */
  anoMod: string;
  /** Cor do veículo (código de cada montadora) */
  cCor: string;
  /** Código da Cor Segundo as regras de pré-cadastro do DENATRAN: 01-AMARELO;02-AZUL;03-BEGE;04-BRANCA;05-CINZA;06-DOURADA;07-GRENA
   * 08-LARANJA;09-MARROM;10-PRATA;11-PRETA;12-ROSA;13-ROXA;14-VERDE;15-VERMELHA;16-FANTASIA */
  cCorDENATRAN: string;
  /** Chassi do veículo - VIN (código-identificação-veículo) */
  chassi: string;
  /** Capacidade voluntária do motor expressa em centímetros cúbicos (CC). (cilindradas) */
  cilin: string;
  /** Código Marca Modelo (utilizar tabela RENAVAM) */
  cMod: string;
  /** CMT-Capacidade Máxima de Tração - em Toneladas 4 casas decimais */
  CMT: string;
  /** Condição do veículo (1 - acabado; 2 - inacabado; 3 - semi-acabado) */
  condVeic: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCondVeicType;
  /** Distância entre eixos */
  dist: string;
  /** Espécie de veículo (utilizar tabela RENAVAM) */
  espVeic: string;
  /** Quantidade máxima de permitida de passageiros sentados, inclusive motorista. */
  lota: string;
  /** Número do motor */
  nMotor: string;
  /** Serial (série) */
  nSerie: string;
  /** Peso bruto */
  pesoB: string;
  /** Peso líquido */
  pesoL: string;
  /** Potência máxima do motor do veículo em cavalo vapor (CV). (potência-veículo) */
  pot: string;
  /** Tipo de combustível-Tabela RENAVAM: 01-Álcool; 02-Gasolina; 03-Diesel; 16-Álcool/Gas.; 17-Gas./Álcool/GNV; 18-Gasolina/Elétrico */
  tpComb: string;
  /** Tipo da Operação (1 - Venda concessionária; 2 - Faturamento direto; 3 - Venda direta; 0 - Outros) */
  tpOp: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpOpType;
  /** Tipo de pintura */
  tpPint: string;
  /** Restrição
   * 0 - Não há;
   * 1 - Alienação Fiduciária;
   * 2 - Arrendamento Mercantil;
   * 3 - Reserva de Domínio;
   * 4 - Penhor de Veículos;
   * 9 - outras. */
  tpRest: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpRestType;
  /** Tipo de veículo (utilizar tabela RENAVAM) */
  tpVeic: string;
  /** Informa-se o veículo tem VIN (chassi) remarcado.
   * R-Remarcado
   * N-NormalVIN */
  VIN: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeVINType;
  /** Descrição da cor */
  xCor: string;
}
interface TNFeInfNFeTypeDetTypeProdTypeVeicProdType
  extends _TNFeInfNFeTypeDetTypeProdTypeVeicProdType {
  constructor: { new (): TNFeInfNFeTypeDetTypeProdTypeVeicProdType };
}

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeAnoFabType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeAnoFabType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeAnoModType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeAnoModType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCCorDENATRANType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCCorDENATRANType =
  Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCCorType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCCorType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeChassiType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeChassiType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCilinType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCilinType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCModType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCModType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCMTType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCMTType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCondVeicType = "1" | "2" | "3";
interface _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCondVeicType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeCondVeicType;
}

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeDistType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeDistType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeEspVeicType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeEspVeicType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeLotaType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeLotaType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeNMotorType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeNMotorType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeNSerieType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeNSerieType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePesoBType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePesoBType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePesoLType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePesoLType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePotType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypePotType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpCombType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpCombType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpOpType = "0" | "1" | "2" | "3";
interface _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpOpType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpOpType;
}

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpPintType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpPintType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpRestType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "9";
interface _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpRestType
  extends Primitive._string {
  content: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpRestType;
}

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpVeicType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeTpVeicType = Primitive._string;

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeVINType = "R" | "N";
interface _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeVINType extends _TString {
  content: TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeVINType;
}

type TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeXCorType = string;
type _TNFeInfNFeTypeDetTypeProdTypeVeicProdTypeXCorType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeXPedType = string;
type _TNFeInfNFeTypeDetTypeProdTypeXPedType = _TString;

type TNFeInfNFeTypeDetTypeProdTypeXProdType = string;
type _TNFeInfNFeTypeDetTypeProdTypeXProdType = _TString;

interface _TNFeInfNFeTypeEmitType extends BaseType {
  /** CNAE Fiscal */
  CNAE?: string;
  /** Número do CNPJ do emitente */
  CNPJ: string;
  /** Número do CPF do emitente */
  CPF: string;
  /** Código de Regime Tributário.
   * Este campo será obrigatoriamente preenchido com:
   * 1 – Simples Nacional;
   * 2 – Simples Nacional – excesso de sublimite de receita bruta;
   * 3 – Regime Normal. */
  CRT: TNFeInfNFeTypeEmitTypeCRTType;
  /** Endereço do emitente */
  enderEmit: TEnderEmi;
  /** Inscrição Estadual do Emitente */
  IE: string;
  /** Inscricao Estadual do Substituto Tributário */
  IEST?: string;
  /** Inscrição Municipal */
  IM?: string;
  /** Nome fantasia */
  xFant?: string;
  /** Razão Social ou Nome do emitente */
  xNome: string;
}
interface TNFeInfNFeTypeEmitType extends _TNFeInfNFeTypeEmitType {
  constructor: { new (): TNFeInfNFeTypeEmitType };
}

type TNFeInfNFeTypeEmitTypeCNAEType = string;
type _TNFeInfNFeTypeEmitTypeCNAEType = Primitive._string;

type TNFeInfNFeTypeEmitTypeCRTType = "1" | "2" | "3";
interface _TNFeInfNFeTypeEmitTypeCRTType extends Primitive._string {
  content: TNFeInfNFeTypeEmitTypeCRTType;
}

type TNFeInfNFeTypeEmitTypeIMType = string;
type _TNFeInfNFeTypeEmitTypeIMType = _TString;

type TNFeInfNFeTypeEmitTypeXFantType = string;
type _TNFeInfNFeTypeEmitTypeXFantType = _TString;

type TNFeInfNFeTypeEmitTypeXNomeType = string;
type _TNFeInfNFeTypeEmitTypeXNomeType = _TString;

interface _TNFeInfNFeTypeExportaType extends BaseType {
  /** Sigla da UF de Embarque ou de transposição de fronteira */
  UFSaidaPais: TUfEmi;
  /** Descrição do local de despacho */
  xLocDespacho?: string;
  /** Local de Embarque ou de transposição de fronteira */
  xLocExporta: string;
}
interface TNFeInfNFeTypeExportaType extends _TNFeInfNFeTypeExportaType {
  constructor: { new (): TNFeInfNFeTypeExportaType };
}

type TNFeInfNFeTypeExportaTypeXLocDespachoType = string;
type _TNFeInfNFeTypeExportaTypeXLocDespachoType = _TString;

type TNFeInfNFeTypeExportaTypeXLocExportaType = string;
type _TNFeInfNFeTypeExportaTypeXLocExportaType = _TString;

interface _TNFeInfNFeTypeIdeType extends BaseType {
  /** Digito Verificador da Chave de Acesso da NF-e */
  cDV: string;
  /** Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE) */
  cMunFG: string;
  /** Código numérico que compõe a Chave de Acesso. Número aleatório gerado pelo emitente para cada NF-e. */
  cNF: string;
  /** Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE. */
  cUF: TCodUfIBGE;
  /** Informar a data e hora de entrada em contingência contingência no formato  (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00. */
  dhCont?: string;
  /** Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00 */
  dhEmi: string;
  /** Data e Hora da saída ou de entrada da mercadoria / produto (AAAA-MM-DDTHH:mm:ssTZD) */
  dhSaiEnt?: string;
  /** Finalidade da emissão da NF-e:
   * 1 - NFe normal
   * 2 - NFe complementar
   * 3 - NFe de ajuste
   * 4 - Devolução/Retorno */
  finNFe: TFinNFe;
  /** Identificador de Local de destino da operação (1-Interna;2-Interestadual;3-Exterior) */
  idDest: TNFeInfNFeTypeIdeTypeIdDestType;
  /** Indica operação com consumidor final (0-Não;1-Consumidor Final) */
  indFinal: TNFeInfNFeTypeIdeTypeIndFinalType;
  /** Indicador de intermediador/marketplace
   * 0=Operação sem intermediador (em site ou plataforma própria)
   * 1=Operação em site ou plataforma de terceiros (intermediadores/marketplace) */
  indIntermed?: TNFeInfNFeTypeIdeTypeIndIntermedType;
  /** Indicador de presença do comprador no estabelecimento comercial no momento da oepração
   * (0-Não se aplica (ex.: Nota Fiscal complementar ou de ajuste;1-Operação presencial;2-Não presencial, internet;3-Não presencial, teleatendimento;4-NFC-e entrega em domicílio;5-Operação presencial, fora do estabelecimento;9-Não presencial, outros) */
  indPres: TNFeInfNFeTypeIdeTypeIndPresType;
  /** Código do modelo do Documento Fiscal. 55 = NF-e; 65 = NFC-e. */
  mod: TMod;
  /** Descrição da Natureza da Operação */
  natOp: string;
  /** Grupo de infromações da NF referenciada */
  NFref?: TNFeInfNFeTypeIdeTypeNFrefType[];
  /** Número do Documento Fiscal */
  nNF: string;
  /** Processo de emissão utilizado com a seguinte codificação:
   * 0 - emissão de NF-e com aplicativo do contribuinte;
   * 1 - emissão de NF-e avulsa pelo Fisco;
   * 2 - emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site
   * do Fisco;
   * 3- emissão de NF-e pelo contribuinte com aplicativo fornecido pelo Fisco. */
  procEmi: TProcEmi;
  /** Série do Documento Fiscal
   * série normal 0-889
   * Avulsa Fisco 890-899
   * SCAN 900-999 */
  serie: string;
  /** Identificação do Ambiente:
   * 1 - Produção
   * 2 - Homologação */
  tpAmb: TAmb;
  /** Forma de emissão da NF-e
   * 1 - Normal;
   * 2 - Contingência FS
   * 3 - Regime Especial NFF (NT 2021.002)
   * 4 - Contingência DPEC
   * 5 - Contingência FSDA
   * 6 - Contingência SVC - AN
   * 7 - Contingência SVC - RS
   * 9 - Contingência off-line NFC-e */
  tpEmis: TNFeInfNFeTypeIdeTypeTpEmisType;
  /** Formato de impressão do DANFE (0-sem DANFE;1-DANFe Retrato; 2-DANFe Paisagem;3-DANFe Simplificado;
   * 4-DANFe NFC-e;5-DANFe NFC-e em mensagem eletrônica) */
  tpImp: TNFeInfNFeTypeIdeTypeTpImpType;
  /** Tipo do Documento Fiscal (0 - entrada; 1 - saída) */
  tpNF: TNFeInfNFeTypeIdeTypeTpNFType;
  /** versão do aplicativo utilizado no processo de
   * emissão */
  verProc: string;
  /** Informar a Justificativa da entrada */
  xJust?: string;
}
interface TNFeInfNFeTypeIdeType extends _TNFeInfNFeTypeIdeType {
  constructor: { new (): TNFeInfNFeTypeIdeType };
}

type TNFeInfNFeTypeIdeTypeCDVType = string;
type _TNFeInfNFeTypeIdeTypeCDVType = Primitive._string;

type TNFeInfNFeTypeIdeTypeCNFType = string;
type _TNFeInfNFeTypeIdeTypeCNFType = Primitive._string;

type TNFeInfNFeTypeIdeTypeIdDestType = "1" | "2" | "3";
interface _TNFeInfNFeTypeIdeTypeIdDestType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeIdDestType;
}

type TNFeInfNFeTypeIdeTypeIndFinalType = "0" | "1";
interface _TNFeInfNFeTypeIdeTypeIndFinalType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeIndFinalType;
}

type TNFeInfNFeTypeIdeTypeIndIntermedType = "0" | "1";
interface _TNFeInfNFeTypeIdeTypeIndIntermedType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeIndIntermedType;
}

type TNFeInfNFeTypeIdeTypeIndPresType = "0" | "1" | "2" | "3" | "4" | "5" | "9";
interface _TNFeInfNFeTypeIdeTypeIndPresType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeIndPresType;
}

type TNFeInfNFeTypeIdeTypeNatOpType = string;
type _TNFeInfNFeTypeIdeTypeNatOpType = _TString;

interface _TNFeInfNFeTypeIdeTypeNFrefType extends BaseType {
  /** Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual */
  refCTe: string;
  /** Grupo do Cupom Fiscal vinculado à NF-e */
  refECF: TNFeInfNFeTypeIdeTypeNFrefTypeRefECFType;
  /** Dados da NF modelo 1/1A referenciada ou NF modelo 2 referenciada */
  refNF: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFType;
  /** Chave de acesso das NF-e referenciadas. Chave de acesso compostas por Código da UF (tabela do IBGE) + AAMM da emissão + CNPJ do Emitente + modelo, série e número da NF-e Referenciada + Código Numérico + DV. */
  refNFe: string;
  /** Grupo com as informações NF de produtor referenciada */
  refNFP: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPType;
}
interface TNFeInfNFeTypeIdeTypeNFrefType
  extends _TNFeInfNFeTypeIdeTypeNFrefType {
  constructor: { new (): TNFeInfNFeTypeIdeTypeNFrefType };
}

interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefECFType extends BaseType {
  /** Código do modelo do Documento Fiscal
   * Preencher com "2B", quando se tratar de Cupom Fiscal emitido por máquina registradora (não ECF), com "2C", quando se tratar de Cupom Fiscal PDV, ou "2D", quando se tratar de Cupom Fiscal (emitido por ECF) */
  mod: TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeModType;
  /** Informar o Número do Contador de Ordem de Operação - COO vinculado à NF-e */
  nCOO: string;
  /** Informar o número de ordem seqüencial do ECF que emitiu o Cupom Fiscal vinculado à NF-e */
  nECF: string;
}
interface TNFeInfNFeTypeIdeTypeNFrefTypeRefECFType
  extends _TNFeInfNFeTypeIdeTypeNFrefTypeRefECFType {
  constructor: { new (): TNFeInfNFeTypeIdeTypeNFrefTypeRefECFType };
}

type TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeModType = "2B" | "2C" | "2D";
interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeModType
  extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeModType;
}

type TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeNCOOType = string;
type _TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeNCOOType = Primitive._string;

type TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeNECFType = string;
type _TNFeInfNFeTypeIdeTypeNFrefTypeRefECFTypeNECFType = Primitive._string;

interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPType extends BaseType {
  /** AAMM da emissão da NF de produtor */
  AAMM: string;
  /** CNPJ do emitente da NF de produtor */
  CNPJ: string;
  /** CPF do emitente da NF de produtor */
  CPF: string;
  /** Código da UF do emitente do Documento FiscalUtilizar a Tabela do IBGE (Anexo IV - Tabela de UF, Município e País) */
  cUF: TCodUfIBGE;
  /** IE do emitente da NF de Produtor */
  IE: string;
  /** Código do modelo do Documento Fiscal - utilizar 04 para NF de produtor  ou 01 para NF Avulsa */
  mod: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeModType;
  /** Número do Documento Fiscal - 1 – 999999999 */
  nNF: string;
  /** Série do Documento Fiscal, informar zero se inexistentesérie */
  serie: string;
}
interface TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPType
  extends _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPType {
  constructor: { new (): TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPType };
}

type TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeAAMMType = string;
type _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeAAMMType = Primitive._string;

type TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeModType = "01" | "04";
interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeModType
  extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFPTypeModType;
}

interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFType extends BaseType {
  /** AAMM da emissão */
  AAMM: string;
  /** CNPJ do emitente do documento fiscal referenciado */
  CNPJ: string;
  /** Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE. */
  cUF: TCodUfIBGE;
  /** Código do modelo do Documento Fiscal. Utilizar 01 para NF modelo 1/1A e 02 para NF modelo 02 */
  mod: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeModType;
  /** Número do Documento Fiscal */
  nNF: string;
  /** Série do Documento Fiscal, informar zero se inexistente */
  serie: string;
}
interface TNFeInfNFeTypeIdeTypeNFrefTypeRefNFType
  extends _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFType {
  constructor: { new (): TNFeInfNFeTypeIdeTypeNFrefTypeRefNFType };
}

type TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeAAMMType = string;
type _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeAAMMType = Primitive._string;

type TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeModType = "01" | "02";
interface _TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeModType
  extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeNFrefTypeRefNFTypeModType;
}

type TNFeInfNFeTypeIdeTypeTpEmisType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "9";
interface _TNFeInfNFeTypeIdeTypeTpEmisType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeTpEmisType;
}

type TNFeInfNFeTypeIdeTypeTpImpType = "0" | "1" | "2" | "3" | "4" | "5";
interface _TNFeInfNFeTypeIdeTypeTpImpType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeTpImpType;
}

type TNFeInfNFeTypeIdeTypeTpNFType = "0" | "1";
interface _TNFeInfNFeTypeIdeTypeTpNFType extends Primitive._string {
  content: TNFeInfNFeTypeIdeTypeTpNFType;
}

type TNFeInfNFeTypeIdeTypeVerProcType = string;
type _TNFeInfNFeTypeIdeTypeVerProcType = _TString;

type TNFeInfNFeTypeIdeTypeXJustType = string;
type _TNFeInfNFeTypeIdeTypeXJustType = _TString;

type TNFeInfNFeTypeIdType = string;
type _TNFeInfNFeTypeIdType = Primitive._string;

interface _TNFeInfNFeTypeInfAdicType extends BaseType {
  /** Informações adicionais de interesse do Fisco (v2.0) */
  infAdFisco?: string;
  /** Informações complementares de interesse do Contribuinte */
  infCpl?: string;
  /** Campo de uso livre do contribuinte
   * informar o nome do campo no atributo xCampo
   * e o conteúdo do campo no xTexto */
  obsCont?: TNFeInfNFeTypeInfAdicTypeObsContType[];
  /** Campo de uso exclusivo do Fisco
   * informar o nome do campo no atributo xCampo
   * e o conteúdo do campo no xTexto */
  obsFisco?: TNFeInfNFeTypeInfAdicTypeObsFiscoType[];
  /** Grupo de informações do  processo referenciado */
  procRef?: TNFeInfNFeTypeInfAdicTypeProcRefType[];
}
interface TNFeInfNFeTypeInfAdicType extends _TNFeInfNFeTypeInfAdicType {
  constructor: { new (): TNFeInfNFeTypeInfAdicType };
}

type TNFeInfNFeTypeInfAdicTypeInfAdFiscoType = string;
type _TNFeInfNFeTypeInfAdicTypeInfAdFiscoType = _TString;

type TNFeInfNFeTypeInfAdicTypeInfCplType = string;
type _TNFeInfNFeTypeInfAdicTypeInfCplType = _TString;

interface _TNFeInfNFeTypeInfAdicTypeObsContType extends BaseType {
  xCampo: string;
  xTexto: string;
}
interface TNFeInfNFeTypeInfAdicTypeObsContType
  extends _TNFeInfNFeTypeInfAdicTypeObsContType {
  constructor: { new (): TNFeInfNFeTypeInfAdicTypeObsContType };
}

type TNFeInfNFeTypeInfAdicTypeObsContTypeXCampoType = string;
type _TNFeInfNFeTypeInfAdicTypeObsContTypeXCampoType = _TString;

type TNFeInfNFeTypeInfAdicTypeObsContTypeXTextoType = string;
type _TNFeInfNFeTypeInfAdicTypeObsContTypeXTextoType = _TString;

interface _TNFeInfNFeTypeInfAdicTypeObsFiscoType extends BaseType {
  xCampo: string;
  xTexto: string;
}
interface TNFeInfNFeTypeInfAdicTypeObsFiscoType
  extends _TNFeInfNFeTypeInfAdicTypeObsFiscoType {
  constructor: { new (): TNFeInfNFeTypeInfAdicTypeObsFiscoType };
}

type TNFeInfNFeTypeInfAdicTypeObsFiscoTypeXCampoType = string;
type _TNFeInfNFeTypeInfAdicTypeObsFiscoTypeXCampoType = _TString;

type TNFeInfNFeTypeInfAdicTypeObsFiscoTypeXTextoType = string;
type _TNFeInfNFeTypeInfAdicTypeObsFiscoTypeXTextoType = _TString;

interface _TNFeInfNFeTypeInfAdicTypeProcRefType extends BaseType {
  /** Origem do processo, informar com:
   * 0 - SEFAZ;
   * 1 - Justiça Federal;
   * 2 - Justiça Estadual;
   * 3 - Secex/RFB;
   * 9 - Outros */
  indProc: TNFeInfNFeTypeInfAdicTypeProcRefTypeIndProcType;
  /** Indentificador do processo ou ato
   * concessório */
  nProc: string;
}
interface TNFeInfNFeTypeInfAdicTypeProcRefType
  extends _TNFeInfNFeTypeInfAdicTypeProcRefType {
  constructor: { new (): TNFeInfNFeTypeInfAdicTypeProcRefType };
}

type TNFeInfNFeTypeInfAdicTypeProcRefTypeIndProcType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "9";
interface _TNFeInfNFeTypeInfAdicTypeProcRefTypeIndProcType
  extends Primitive._string {
  content: TNFeInfNFeTypeInfAdicTypeProcRefTypeIndProcType;
}

type TNFeInfNFeTypeInfAdicTypeProcRefTypeNProcType = string;
type _TNFeInfNFeTypeInfAdicTypeProcRefTypeNProcType = _TString;

interface _TNFeInfNFeTypeInfIntermedType extends BaseType {
  /** CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. */
  CNPJ: string;
  /** Identificador cadastrado no intermediador */
  idCadIntTran: string;
}
interface TNFeInfNFeTypeInfIntermedType extends _TNFeInfNFeTypeInfIntermedType {
  constructor: { new (): TNFeInfNFeTypeInfIntermedType };
}

type TNFeInfNFeTypeInfIntermedTypeIdCadIntTranType = string;
type _TNFeInfNFeTypeInfIntermedTypeIdCadIntTranType = _TString;

interface _TNFeInfNFeTypeInfSolicNFFType extends BaseType {
  /** Solicitação do pedido de emissão da NFF */
  xSolic: string;
}
interface TNFeInfNFeTypeInfSolicNFFType extends _TNFeInfNFeTypeInfSolicNFFType {
  constructor: { new (): TNFeInfNFeTypeInfSolicNFFType };
}

type TNFeInfNFeTypeInfSolicNFFTypeXSolicType = string;
type _TNFeInfNFeTypeInfSolicNFFTypeXSolicType = Primitive._string;

interface _TNFeInfNFeTypePagType extends BaseType {
  /** Grupo de detalhamento da forma de pagamento. */
  detPag: TNFeInfNFeTypePagTypeDetPagType[];
  /** Valor do Troco. */
  vTroco?: string;
}
interface TNFeInfNFeTypePagType extends _TNFeInfNFeTypePagType {
  constructor: { new (): TNFeInfNFeTypePagType };
}

interface _TNFeInfNFeTypePagTypeDetPagType extends BaseType {
  /** Grupo de Cartões */
  card?: TNFeInfNFeTypePagTypeDetPagTypeCardType;
  /** Indicador da Forma de Pagamento:0-Pagamento à Vista;1-Pagamento à Prazo; */
  indPag?: TNFeInfNFeTypePagTypeDetPagTypeIndPagType;
  /** Forma de Pagamento: 01-Dinheiro; 02-Cheque; 03-Cartão de Crédito; 04-Cartão de Débito; 05-Crédito Loja;
   * 10-Vale Alimentação; 11-Vale Refeição; 12-Vale Presente; 13-Vale Combustível; 14-Duplicata Mercantil; 15-Boleto Bancario; 16-Depósito Bancário;
   * 17-Pagamento Instantâneo (PIX); 18-Transferência bancária, Carteira Digital; 19-Programa de fidelidade, Cashback, Crédito Virtual; 90-Sem Pagamento; 99-Outros. */
  tPag: TNFeInfNFeTypePagTypeDetPagTypeTPagType;
  /** Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário deverá ser preenchida. */
  vPag: string;
  /** Descrição do Meio de Pagamento */
  xPag?: string;
}
interface TNFeInfNFeTypePagTypeDetPagType
  extends _TNFeInfNFeTypePagTypeDetPagType {
  constructor: { new (): TNFeInfNFeTypePagTypeDetPagType };
}

interface _TNFeInfNFeTypePagTypeDetPagTypeCardType extends BaseType {
  /** Número de autorização da operação cartão de crédito/débito */
  cAut?: string;
  /** CNPJ da instituição de pagamento */
  CNPJ?: string;
  /** Bandeira da operadora de cartão de crédito/débito:01–Visa; 02–Mastercard; 03–American Express; 04–Sorocred;05-Diners Club;06-Elo;07-Hipercard;08-Aura;09-Cabal
   * 10-Alelo; 11-Banes Card; 12-CalCard; 13-Credz; 14-Discover; 15-GoodCard; 16-GreenCard; 17-Hiper; 18-JcB; 19-Mais;20-MaxVan; 21-Policard;22-RedeCompras
   * 23-Sodexo; 24-ValeCard; 25-Verocheque; 26-VR; 27-Ticket;99–Outros */
  tBand?: TNFeInfNFeTypePagTypeDetPagTypeCardTypeTBandType;
  /** Tipo de Integração do processo de pagamento com o sistema de automação da empresa/
   * 1=Pagamento integrado com o sistema de automação da empresa Ex. equipamento TEF , Comercio Eletronico
   * 2=Pagamento não integrado com o sistema de automação da empresa Ex: equipamento POS */
  tpIntegra: TNFeInfNFeTypePagTypeDetPagTypeCardTypeTpIntegraType;
}
interface TNFeInfNFeTypePagTypeDetPagTypeCardType
  extends _TNFeInfNFeTypePagTypeDetPagTypeCardType {
  constructor: { new (): TNFeInfNFeTypePagTypeDetPagTypeCardType };
}

type TNFeInfNFeTypePagTypeDetPagTypeCardTypeCAutType = string;
type _TNFeInfNFeTypePagTypeDetPagTypeCardTypeCAutType = _TString;

type TNFeInfNFeTypePagTypeDetPagTypeCardTypeTBandType =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "99";
interface _TNFeInfNFeTypePagTypeDetPagTypeCardTypeTBandType
  extends Primitive._string {
  content: TNFeInfNFeTypePagTypeDetPagTypeCardTypeTBandType;
}

type TNFeInfNFeTypePagTypeDetPagTypeCardTypeTpIntegraType = "1" | "2";
interface _TNFeInfNFeTypePagTypeDetPagTypeCardTypeTpIntegraType
  extends Primitive._string {
  content: TNFeInfNFeTypePagTypeDetPagTypeCardTypeTpIntegraType;
}

type TNFeInfNFeTypePagTypeDetPagTypeIndPagType = "0" | "1";
interface _TNFeInfNFeTypePagTypeDetPagTypeIndPagType extends Primitive._string {
  content: TNFeInfNFeTypePagTypeDetPagTypeIndPagType;
}

type TNFeInfNFeTypePagTypeDetPagTypeTPagType =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "90"
  | "99";
interface _TNFeInfNFeTypePagTypeDetPagTypeTPagType extends Primitive._string {
  content: TNFeInfNFeTypePagTypeDetPagTypeTPagType;
}

type TNFeInfNFeTypePagTypeDetPagTypeXPagType = string;
type _TNFeInfNFeTypePagTypeDetPagTypeXPagType = _TString;

interface _TNFeInfNFeTypeTotalType extends BaseType {
  /** Totais referentes ao ICMS */
  ICMSTot: TNFeInfNFeTypeTotalTypeICMSTotType;
  /** Totais referentes ao ISSQN */
  ISSQNtot?: TNFeInfNFeTypeTotalTypeISSQNtotType;
  /** Retenção de Tributos Federais */
  retTrib?: TNFeInfNFeTypeTotalTypeRetTribType;
}
interface TNFeInfNFeTypeTotalType extends _TNFeInfNFeTypeTotalType {
  constructor: { new (): TNFeInfNFeTypeTotalType };
}

interface _TNFeInfNFeTypeTotalTypeICMSTotType extends BaseType {
  /** BC do ICMS */
  vBC: string;
  /** BC do ICMS ST */
  vBCST: string;
  /** Valor do COFINS */
  vCOFINS: string;
  /** Valor Total do Desconto */
  vDesc: string;
  /** Valor Total do FCP (Fundo de Combate à Pobreza). */
  vFCP: string;
  /** Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária. */
  vFCPST: string;
  /** Valor Total do FCP (Fundo de Combate à Pobreza) retido anteriormente por substituição tributária. */
  vFCPSTRet: string;
  /** Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino. */
  vFCPUFDest?: string;
  /** Valor Total do Frete */
  vFrete: string;
  /** Valor Total do ICMS */
  vICMS: string;
  /** Valor Total do ICMS desonerado */
  vICMSDeson: string;
  /** Valor total do ICMS de partilha para a UF do destinatário */
  vICMSUFDest?: string;
  /** Valor total do ICMS de partilha para a UF do remetente */
  vICMSUFRemet?: string;
  /** Valor Total do II */
  vII: string;
  /** Valor Total do IPI */
  vIPI: string;
  /** Valor Total do IPI devolvido. Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id: UA04. */
  vIPIDevol: string;
  /** Valor Total da NF-e */
  vNF: string;
  /** Outras Despesas acessórias */
  vOutro: string;
  /** Valor do PIS */
  vPIS: string;
  /** Valor Total dos produtos e serviços */
  vProd: string;
  /** Valor Total do Seguro */
  vSeg: string;
  /** Valor Total do ICMS ST */
  vST: string;
  /** Valor estimado total de impostos federais, estaduais e municipais */
  vTotTrib?: string;
}
interface TNFeInfNFeTypeTotalTypeICMSTotType
  extends _TNFeInfNFeTypeTotalTypeICMSTotType {
  constructor: { new (): TNFeInfNFeTypeTotalTypeICMSTotType };
}

interface _TNFeInfNFeTypeTotalTypeISSQNtotType extends BaseType {
  /** Código do regime especial de tributação */
  cRegTrib?: TNFeInfNFeTypeTotalTypeISSQNtotTypeCRegTribType;
  /** Data da prestação do serviço  (AAAA-MM-DD) */
  dCompet: string;
  /** Base de Cálculo do ISS */
  vBC?: string;
  /** Valor do COFINS sobre serviços */
  vCOFINS?: string;
  /** Valor dedução para redução da base de cálculo */
  vDeducao?: string;
  /** Valor desconto condicionado */
  vDescCond?: string;
  /** Valor desconto incondicionado */
  vDescIncond?: string;
  /** Valor Total do ISS */
  vISS?: string;
  /** Valor Total Retenção ISS */
  vISSRet?: string;
  /** Valor outras retenções */
  vOutro?: string;
  /** Valor do PIS sobre serviços */
  vPIS?: string;
  /** Valor Total dos Serviços sob não-incidência ou não tributados pelo ICMS */
  vServ?: string;
}
interface TNFeInfNFeTypeTotalTypeISSQNtotType
  extends _TNFeInfNFeTypeTotalTypeISSQNtotType {
  constructor: { new (): TNFeInfNFeTypeTotalTypeISSQNtotType };
}

type TNFeInfNFeTypeTotalTypeISSQNtotTypeCRegTribType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";
interface _TNFeInfNFeTypeTotalTypeISSQNtotTypeCRegTribType
  extends Primitive._string {
  content: TNFeInfNFeTypeTotalTypeISSQNtotTypeCRegTribType;
}

interface _TNFeInfNFeTypeTotalTypeRetTribType extends BaseType {
  /** Base de Cálculo do IRRF */
  vBCIRRF?: string;
  /** Base de Cálculo da Retenção da Previdêncica Social */
  vBCRetPrev?: string;
  /** Valor Retido de IRRF */
  vIRRF?: string;
  /** Valor Retido de COFINS */
  vRetCOFINS?: string;
  /** Valor Retido de CSLL */
  vRetCSLL?: string;
  /** Valor Retido de PIS */
  vRetPIS?: string;
  /** Valor da Retenção da Previdêncica Social */
  vRetPrev?: string;
}
interface TNFeInfNFeTypeTotalTypeRetTribType
  extends _TNFeInfNFeTypeTotalTypeRetTribType {
  constructor: { new (): TNFeInfNFeTypeTotalTypeRetTribType };
}

interface _TNFeInfNFeTypeTranspType extends BaseType {
  /** Identificação da balsa (v2.0) */
  balsa?: string;
  /** Modalidade do frete
   * 0- Contratação do Frete por conta do Remetente (CIF);
   * 1- Contratação do Frete por conta do destinatário/remetente (FOB);
   * 2- Contratação do Frete por conta de terceiros;
   * 3- Transporte próprio por conta do remetente;
   * 4- Transporte próprio por conta do destinatário;
   * 9- Sem Ocorrência de transporte. */
  modFrete: TNFeInfNFeTypeTranspTypeModFreteType;
  /** Dados do reboque/Dolly (v2.0) */
  reboque?: TVeiculo[];
  /** Dados da retenção  ICMS do Transporte */
  retTransp?: TNFeInfNFeTypeTranspTypeRetTranspType;
  /** Dados do transportador */
  transporta?: TNFeInfNFeTypeTranspTypeTransportaType;
  /** Identificação do vagão (v2.0) */
  vagao?: string;
  /** Dados do veículo */
  veicTransp?: TVeiculo;
  /** Dados dos volumes */
  vol?: TNFeInfNFeTypeTranspTypeVolType[];
}
interface TNFeInfNFeTypeTranspType extends _TNFeInfNFeTypeTranspType {
  constructor: { new (): TNFeInfNFeTypeTranspType };
}

type TNFeInfNFeTypeTranspTypeBalsaType = string;
type _TNFeInfNFeTypeTranspTypeBalsaType = _TString;

type TNFeInfNFeTypeTranspTypeModFreteType = "0" | "1" | "2" | "3" | "4" | "9";
interface _TNFeInfNFeTypeTranspTypeModFreteType extends Primitive._string {
  content: TNFeInfNFeTypeTranspTypeModFreteType;
}

interface _TNFeInfNFeTypeTranspTypeRetTranspType extends BaseType {
  /** Código Fiscal de Operações e Prestações */
  CFOP: string;
  /** Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE) */
  cMunFG: string;
  /** Alíquota da Retenção */
  pICMSRet: string;
  /** BC da Retenção do ICMS */
  vBCRet: string;
  /** Valor do ICMS Retido */
  vICMSRet: string;
  /** Valor do Serviço */
  vServ: string;
}
interface TNFeInfNFeTypeTranspTypeRetTranspType
  extends _TNFeInfNFeTypeTranspTypeRetTranspType {
  constructor: { new (): TNFeInfNFeTypeTranspTypeRetTranspType };
}

type TNFeInfNFeTypeTranspTypeRetTranspTypeCFOPType = string;
type _TNFeInfNFeTypeTranspTypeRetTranspTypeCFOPType = Primitive._string;

interface _TNFeInfNFeTypeTranspTypeTransportaType extends BaseType {
  /** CNPJ do transportador */
  CNPJ?: string;
  /** CPF do transportador */
  CPF?: string;
  /** Inscrição Estadual (v2.0) */
  IE?: string;
  /** Sigla da UF */
  UF?: TUf;
  /** Endereço completo */
  xEnder?: string;
  /** Nome do munícipio */
  xMun?: string;
  /** Razão Social ou nome do transportador */
  xNome?: string;
}
interface TNFeInfNFeTypeTranspTypeTransportaType
  extends _TNFeInfNFeTypeTranspTypeTransportaType {
  constructor: { new (): TNFeInfNFeTypeTranspTypeTransportaType };
}

type TNFeInfNFeTypeTranspTypeTransportaTypeXEnderType = string;
type _TNFeInfNFeTypeTranspTypeTransportaTypeXEnderType = _TString;

type TNFeInfNFeTypeTranspTypeTransportaTypeXMunType = string;
type _TNFeInfNFeTypeTranspTypeTransportaTypeXMunType = _TString;

type TNFeInfNFeTypeTranspTypeTransportaTypeXNomeType = string;
type _TNFeInfNFeTypeTranspTypeTransportaTypeXNomeType = _TString;

type TNFeInfNFeTypeTranspTypeVagaoType = string;
type _TNFeInfNFeTypeTranspTypeVagaoType = _TString;

interface _TNFeInfNFeTypeTranspTypeVolType extends BaseType {
  /** Espécie dos volumes transportados */
  esp?: string;
  lacres?: TNFeInfNFeTypeTranspTypeVolTypeLacresType[];
  /** Marca dos volumes transportados */
  marca?: string;
  /** Numeração dos volumes transportados */
  nVol?: string;
  /** Peso bruto (em kg) */
  pesoB?: string;
  /** Peso líquido (em kg) */
  pesoL?: string;
  /** Quantidade de volumes transportados */
  qVol?: string;
}
interface TNFeInfNFeTypeTranspTypeVolType
  extends _TNFeInfNFeTypeTranspTypeVolType {
  constructor: { new (): TNFeInfNFeTypeTranspTypeVolType };
}

type TNFeInfNFeTypeTranspTypeVolTypeEspType = string;
type _TNFeInfNFeTypeTranspTypeVolTypeEspType = _TString;

interface _TNFeInfNFeTypeTranspTypeVolTypeLacresType extends BaseType {
  /** Número dos Lacres */
  nLacre: string;
}
interface TNFeInfNFeTypeTranspTypeVolTypeLacresType
  extends _TNFeInfNFeTypeTranspTypeVolTypeLacresType {
  constructor: { new (): TNFeInfNFeTypeTranspTypeVolTypeLacresType };
}

type TNFeInfNFeTypeTranspTypeVolTypeLacresTypeNLacreType = string;
type _TNFeInfNFeTypeTranspTypeVolTypeLacresTypeNLacreType = _TString;

type TNFeInfNFeTypeTranspTypeVolTypeMarcaType = string;
type _TNFeInfNFeTypeTranspTypeVolTypeMarcaType = _TString;

type TNFeInfNFeTypeTranspTypeVolTypeNVolType = string;
type _TNFeInfNFeTypeTranspTypeVolTypeNVolType = _TString;

type TNFeInfNFeTypeTranspTypeVolTypeQVolType = string;
type _TNFeInfNFeTypeTranspTypeVolTypeQVolType = Primitive._string;

/** Tipo da NF-e processada */
interface _TNfeProc extends BaseType {
  versao: string;
  NFe: TNFe;
  protNFe: TProtNFe;
}
export interface TNfeProc extends _TNfeProc {
  constructor: { new (): TNfeProc };
}
export var TNfeProc: { new (): TNfeProc };

/** Tipo Origem da mercadoria CST ICMS  origem da mercadoria: 0-Nacional exceto as indicadas nos códigos 3, 4, 5 e 8;
 * 1-Estrangeira - Importação direta; 2-Estrangeira - Adquirida no mercado interno; 3-Nacional, conteudo superior 40% e inferior ou igual a 70%; 4-Nacional, processos produtivos básicos; 5-Nacional, conteudo inferior 40%; 6-Estrangeira - Importação direta, com similar nacional, lista CAMEX; 7-Estrangeira - mercado interno, sem simular,lista CAMEX;8-Nacional, Conteúdo de Importação superior a 70%. */
export type Torig = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
interface _Torig extends Primitive._string {
  content: Torig;
}

export type TPlaca = string;
type _TPlaca = Primitive._string;

/** Tipo processo de emissão da NF-e */
export type TProcEmi = "0" | "1" | "2" | "3";
interface _TProcEmi extends Primitive._string {
  content: TProcEmi;
}

/** Tipo Número do Protocolo de Status */
export type TProt = string;
type _TProt = Primitive._string;

/** Tipo Protocolo de status resultado do processamento da NF-e */
interface _TProtNFe extends BaseType {
  versao: string;
  /** Dados do protocolo de status */
  infProt: TProtNFeInfProtType;
  Signature?: ds.SignatureType;
}
export interface TProtNFe extends _TProtNFe {
  constructor: { new (): TProtNFe };
}
export var TProtNFe: { new (): TProtNFe };

interface _TProtNFeInfProtType extends BaseType {
  Id?: string;
  /** Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico+DV. */
  chNFe: string;
  /** Código da Mensagem. */
  cMsg?: string;
  /** Código do status da mensagem enviada. */
  cStat: string;
  /** Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Deve ser preenchida com data e hora da gravação no Banco em caso de Confirmação. Em caso de Rejeição, com data e hora do recebimento do Lote de NF-e enviado. */
  dhRecbto: string;
  /** Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original. */
  digVal?: string;
  /** Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano. */
  nProt?: string;
  /** Identificação do Ambiente:
   * 1 - Produção
   * 2 - Homologação */
  tpAmb: TAmb;
  /** Versão do Aplicativo que processou a NF-e */
  verAplic: string;
  /** Descrição literal do status do serviço solicitado. */
  xMotivo: string;
  /** Mensagem da SEFAZ para o emissor. */
  xMsg?: string;
}
interface TProtNFeInfProtType extends _TProtNFeInfProtType {
  constructor: { new (): TProtNFeInfProtType };
}

type TProtNFeInfProtTypeCMsgType = string;
type _TProtNFeInfProtTypeCMsgType = Primitive._string;

type TProtNFeInfProtTypeXMsgType = string;
type _TProtNFeInfProtTypeXMsgType = _TString;

/** Tipo Número do Recibo do envio de lote de NF-e */
export type TRec = string;
type _TRec = Primitive._string;

/** Tipo Retorno do Pedido de  Consulta do Recido do Lote de Notas Fiscais Eletrônicas */
interface _TRetConsReciNFe extends BaseType {
  versao: string;
  /** Código da Mensagem (v2.0)
   * alterado para tamanho variavel 1-4. (NT2011/004) */
  cMsg?: string;
  /** Código do status da mensagem enviada. */
  cStat: string;
  /** código da UF de atendimento */
  cUF: TCodUfIBGE;
  /** Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Em caso de Rejeição, com data e hora do recebimento do Lote de NF-e enviado. */
  dhRecbto: string;
  /** Número do Recibo Consultado */
  nRec: string;
  /** Protocolo de status resultado do processamento da NF-e */
  protNFe?: TProtNFe[];
  /** Identificação do Ambiente:
   * 1 - Produção
   * 2 - Homologação */
  tpAmb: TAmb;
  /** Versão do Aplicativo que processou a NF-e */
  verAplic: string;
  /** Descrição literal do status do serviço solicitado. */
  xMotivo: string;
  /** Mensagem da SEFAZ para o emissor. (v2.0) */
  xMsg?: string;
}
export interface TRetConsReciNFe extends _TRetConsReciNFe {
  constructor: { new (): TRetConsReciNFe };
}
export var TRetConsReciNFe: { new (): TRetConsReciNFe };

type TRetConsReciNFeCMsgType = string;
type _TRetConsReciNFeCMsgType = Primitive._string;

type TRetConsReciNFeXMsgType = string;
type _TRetConsReciNFeXMsgType = _TString;

/** Tipo Retorno do Pedido de Autorização da Nota Fiscal Eletrônica */
interface _TRetEnviNFe extends BaseType {
  versao: string;
  /** Código do status da mensagem enviada. */
  cStat: string;
  /** código da UF de atendimento */
  cUF: TCodUfIBGE;
  /** Data e hora do recebimento, no formato AAAA-MM-DDTHH:MM:SSTZD */
  dhRecbto: string;
  /** Dados do Recibo do Lote */
  infRec?: TRetEnviNFeInfRecType;
  /** Protocolo de status resultado do processamento sincrono da NFC-e */
  protNFe?: TProtNFe;
  /** Identificação do Ambiente:
   * 1 - Produção
   * 2 - Homologação */
  tpAmb: TAmb;
  /** Versão do Aplicativo que recebeu o Lote. */
  verAplic: string;
  /** Descrição literal do status do serviço solicitado. */
  xMotivo: string;
}
export interface TRetEnviNFe extends _TRetEnviNFe {
  constructor: { new (): TRetEnviNFe };
}
export var TRetEnviNFe: { new (): TRetEnviNFe };

interface _TRetEnviNFeInfRecType extends BaseType {
  /** Número do Recibo */
  nRec: string;
  /** Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos */
  tMed: string;
}
interface TRetEnviNFeInfRecType extends _TRetEnviNFeInfRecType {
  constructor: { new (): TRetEnviNFeInfRecType };
}

/** Tipo Série do Documento Fiscal */
export type TSerie = string;
type _TSerie = Primitive._string;

/** Tipo Serviço solicitado */
export type TServ = string;
type _TServ = _TString;

/** Tipo Código da Mensagem enviada */
export type TStat = string;
type _TStat = Primitive._string;

/** Tipo string genérico */
export type TString = string;
type _TString = Primitive._string;

/** Tipo hora HH:MM:SS // tipo acrescentado na v2.0 */
export type TTime = string;
type _TTime = Primitive._string;

/** Tipo Sigla da UF */
export type TUf =
  | "AC"
  | "AL"
  | "AM"
  | "AP"
  | "BA"
  | "CE"
  | "DF"
  | "ES"
  | "GO"
  | "MA"
  | "MG"
  | "MS"
  | "MT"
  | "PA"
  | "PB"
  | "PE"
  | "PI"
  | "PR"
  | "RJ"
  | "RN"
  | "RO"
  | "RR"
  | "RS"
  | "SC"
  | "SE"
  | "SP"
  | "TO"
  | "EX";
interface _TUf extends Primitive._string {
  content: TUf;
}

/** Tipo Sigla da UF de emissor // acrescentado em 24/10/08 */
export type TUfEmi =
  | "AC"
  | "AL"
  | "AM"
  | "AP"
  | "BA"
  | "CE"
  | "DF"
  | "ES"
  | "GO"
  | "MA"
  | "MG"
  | "MS"
  | "MT"
  | "PA"
  | "PB"
  | "PE"
  | "PI"
  | "PR"
  | "RJ"
  | "RN"
  | "RO"
  | "RR"
  | "RS"
  | "SC"
  | "SE"
  | "SP"
  | "TO";
interface _TUfEmi extends Primitive._string {
  content: TUfEmi;
}

/** Tipo Dados do Veículo */
interface _TVeiculo extends BaseType {
  /** Placa do veículo (NT2011/004) */
  placa: string;
  /** Registro Nacional de Transportador de Carga (ANTT) */
  RNTC?: string;
  /** Sigla da UF */
  UF?: TUf;
}
export interface TVeiculo extends _TVeiculo {
  constructor: { new (): TVeiculo };
}
export var TVeiculo: { new (): TVeiculo };

type TVeiculoPlacaType = string;
type _TVeiculoPlacaType = Primitive._string;

type TVeiculoRNTCType = string;
type _TVeiculoRNTCType = _TString;

/** Tipo Versão do Aplicativo */
export type TVerAplic = string;
type _TVerAplic = _TString;

/** Tipo Versão da NF-e - 4.00 */
export type TVerNFe = string;
type _TVerNFe = Primitive._string;

export interface document extends BaseType {}
export var document: document;
