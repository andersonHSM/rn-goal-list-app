import ptBR from '@/assets/i18n/translations/pt-BR.json';
import enUS from '@/assets/i18n/translations/en-US.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

const resources = {
	'pt-BR': {
		translation: ptBR,
	},
	'en-US': {
		translation: enUS,
	},
};

i18n.use(initReactI18next)
	.use({
		type: 'languageDetector',
		async: false, // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example

		detect: function () {
			return getLocales().at(0)?.languageTag;
		},
	})
	.init({
		resources,
		compatibilityJSON: 'v3',
		fallbackLng: 'en-US',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
