import { TNfeProc, TNFe } from "../xmlns/www.portalfiscal.inf.br/nfe";

const nfe: TNFe = new TNFe();
nfe.infNFe.ide.dhEmi = "2010-06-02T13:00:00-03:00";
console.log(nfe.infNFe.ide.dhEmi);

const nfeProc: TNfeProc = new TNfeProc();
nfeProc.NFe.infNFe.ide.dhEmi = "2012-09-01T13:00:00-03:00";
console.log(nfeProc.NFe.infNFe.ide.dhEmi);
