import { Stack } from 'expo-router';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import '@/constants/i18nConfig';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='index' />
			</Stack>
		</SafeAreaProvider>
	);
}
