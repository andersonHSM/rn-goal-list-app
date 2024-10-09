import { StyleSheet } from 'react-native';
import Button from 'react-native-ui-lib/button';

import InitialHeader from '@/components/InitialHeader';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Page() {
	const backgroundColor = useThemeColor({}, 'background');
	const router = useRouter();
	const { t } = useTranslation();

	return (
		<>
			<InitialHeader title={t('welcome')} />
			<ThemedView style={{ ...styles.viewContainer, backgroundColor }}>
				<ThemedText numberOfLines={3} style={styles.headingText}>
					{t('appWelcomeHeading')}
				</ThemedText>
				<Button onPress={() => router.replace('/home')} label={t('start')} />
			</ThemedView>
		</>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	headingText: {
		fontSize: 36,
		padding: 15,
		lineHeight: 36,
		textAlign: 'center',
		fontWeight: 600,
		marginBottom: 12,
	},
});
