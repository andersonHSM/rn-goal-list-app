import { Stack } from 'expo-router';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import '@/constants/i18nConfig';
import '@/constants/gesture-handler.native';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<SafeAreaView style={{ flex: 1 }}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='index' />
					<Stack.Screen name='[home]/index' />
				</Stack>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
