import { useTranslation } from 'react-i18next';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
	const { t } = useTranslation();
	return (
		<>
			<ThemedView style={{ flex: 1 }}>
				<ThemedText>Home screen</ThemedText>
			</ThemedView>
		</>
	);
}
