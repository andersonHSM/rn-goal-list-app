import { Text, View } from 'react-native';
import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Page() {
	const backgroundColor = useThemeColor({}, 'background');
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				s<Header title={'Test'} />
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
