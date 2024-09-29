import { Stack } from 'expo-router';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import ptBR from '@/assets/i18n/translations/pt-BR.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	'pt-BR': {
		translation: ptBR,
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		compatibilityJSON: 'v3',
		lng: 'pt-BR',
		fallbackLng: 'en-US',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='index' />
			</Stack>
		</SafeAreaProvider>
	);
}
