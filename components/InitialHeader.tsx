import { Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';
import Picker from 'react-native-ui-lib/picker';
import { useTranslation } from 'react-i18next';
import { PickerModes } from 'react-native-ui-lib';
import { Languages } from 'lucide-react-native';

type HeaderProps = {
	title?: string;
};
export default function InitialHeader({ title }: HeaderProps) {
	const backgroundColor = useThemeColor({}, 'background');
	const { t, i18n } = useTranslation();
	const languages = [
		{ label: 'en-US', value: 'en-US' },
		{ label: 'pt-BR', value: 'pt-BR' },
	];

	return (
		<ThemedView
			style={{
				backgroundColor,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				height: 80,
			}}
		>
			<ThemedView
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,

					marginLeft: 'auto',
				}}
			>
				<Text>{title}</Text>
				<Picker
					mode={PickerModes.SINGLE}
					label={i18n.language}
					topTrailingAccessory={<Languages style={{ marginLeft: 4 }} size={24} color={'black'} />}
					style={{ marginRight: 10, flexShrink: 1 }}
					items={languages}
				/>
			</ThemedView>
		</ThemedView>
	);
}
