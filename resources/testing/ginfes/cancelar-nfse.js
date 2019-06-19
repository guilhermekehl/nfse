const nfse = require('../../../');
const cancelarNfseGinfesItu = {
    "config": {
		"diretorioDoCertificado": "/home/ofm/Downloads/pfx/client-itu.pfx",
		"senhaDoCertificado": "brmed2018",
		"producaoHomologacao": "homologacao",
        "codigoMunicipio": "3523909",
        "acao": "cancelarNfse"
	},
	"prestador": {
		"cpfCnpj": "17845667000198",
		"inscricaoMunicipal": "25099",
	},
	"numeroNfse": 417
};
nfse.nfse(cancelarNfseGinfesItu);