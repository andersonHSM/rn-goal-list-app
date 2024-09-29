import { StyleSheet } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useTranslation } from 'react-i18next';

export default function Page() {
	const backgroundColor = useThemeColor({}, 'background');
	const { t } = useTranslation();
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<Header title={t('welcome')} />
				<View style={{ ...styles.viewContainer, backgroundColor }}>
					<Text>Edit app/index.tsx to edit this screen.</Text>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		padding: 10,
	},
});
