"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nfe_1 = require("../xmlns/www.portalfiscal.inf.br/nfe");
const nfe = new nfe_1.TNFe();
nfe.infNFe.ide.dhEmi = "2010-06-02T13:00:00-03:00";
console.log(nfe.infNFe.ide.dhEmi);
const nfeProc = new nfe_1.TNfeProc();
nfeProc.NFe.infNFe.ide.dhEmi = "2012-09-01T13:00:00-03:00";
console.log(nfeProc.NFe.infNFe.ide.dhEmi);
//# sourceMappingURL=index.js.map