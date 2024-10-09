import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';
import Picker from 'react-native-ui-lib/picker';
import { useTranslation } from 'react-i18next';
import { PickerModes } from 'react-native-ui-lib';
import { Globe } from 'lucide-react-native';
import { ThemedText } from '@/components/ThemedText';

type HeaderProps = {
	title?: string;
};
export default function InitialHeader({ title }: HeaderProps) {
	const backgroundColor = useThemeColor({}, 'background');
	const tintColor = useThemeColor({}, 'tint');
	const altTextColor = useThemeColor({}, 'altText');
	const textColor = useThemeColor({}, 'text');

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
					margin: 'auto',
				}}
			>
				<ThemedView
					style={{
						flexGrow: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginLeft: 'auto',
					}}
				>
					<ThemedText style={{ marginLeft: 44 }}>{title}</ThemedText>
				</ThemedView>
				<Picker
					onChange={(value) => {
						if (typeof value !== 'string' || i18n.language === value) return;

						void i18n.changeLanguage(value);
					}}
					mode={PickerModes.SINGLE}
					value={i18n.language}
					renderInput={() => {
						return <Globe style={{ marginRight: 10 }} size={24} color={'black'} />;
					}}
					style={{ marginRight: 10, flexShrink: 1 }}
					items={languages}
					renderItem={(value, { isSelected }, label) => {
						return (
							<ThemedView
								style={{
									width: '90%',
									marginHorizontal: 'auto',
									padding: 10,
									borderBottomWidth: 0.5,
									borderBottomColor: tintColor,
									alignItems: 'center',
								}}
							>
								<ThemedText style={{ color: isSelected ? altTextColor : textColor }}>
									{t(value as string)}
								</ThemedText>
							</ThemedView>
						);
					}}
				/>
			</ThemedView>
		</ThemedView>
	);
}
