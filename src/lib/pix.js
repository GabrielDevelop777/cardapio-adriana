// Função para normalizar o texto (remove acentos, converte para maiúsculo)
const normalizeText = (text) => {
	return (
		text
			.normalize("NFD")
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
			.replace(/[\u0300-\u036f]/g, "")
			.toUpperCase()
	);
};

// Função principal para gerar o código PIX
export const generatePixCode = (
	pixKey,
	merchantName,
	city,
	amount,
	txid = "***",
) => {
	// Normaliza e limita o tamanho dos campos, conforme o padrão PIX
	const normalizedMerchantName = normalizeText(merchantName).substring(0, 25);
	const normalizedCity = normalizeText(city).substring(0, 15);

	const formatValue = (fieldId, value) => {
		const len = value.length.toString().padStart(2, "0");
		return `${fieldId}${len}${value}`;
	};

	const payload = [
		formatValue("00", "01"), // Payload Format Indicator
		formatValue(
			"26",
			`${formatValue("00", "br.gov.bcb.pix")}${formatValue("01", pixKey)}`,
		), // Merchant Account Information
		formatValue("52", "0000"), // Merchant Category Code
		formatValue("53", "986"), // Transaction Currency (BRL)
		formatValue("54", amount.toFixed(2)), // Transaction Amount
		formatValue("58", "BR"), // Country Code
		formatValue("59", normalizedMerchantName), // Merchant Name (Normalizado)
		formatValue("60", normalizedCity), // Merchant City (Normalizado)
		formatValue("62", formatValue("05", txid)), // Transaction ID
	].join("");

	const fullPayload = `${payload}6304`; // CRC16 ID and Length

	// Cálculo do CRC16 (padrão do PIX)
	let crc = 0xffff;
	for (let i = 0; i < fullPayload.length; i++) {
		crc ^= fullPayload.charCodeAt(i) << 8;
		for (let j = 0; j < 8; j++) {
			crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
		}
	}
	const crc16 = (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");

	return `${fullPayload}${crc16}`;
};
