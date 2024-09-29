import { Text, View } from 'react-native';
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
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						shadowRadius: 1,
						backgroundColor,
					}}
				>
					<Text>Edit app/index.tsx to edit this screen.</Text>
				</View>
			</SafeAreaView>
		</>
	);
}
