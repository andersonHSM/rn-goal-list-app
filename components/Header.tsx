import { Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type HeaderProps = {
	title?: string;
};
export default function Header({ title }: HeaderProps) {
	const backgroundColor = useThemeColor({}, 'background');
	return (
		<View
			style={{
				backgroundColor,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				height: 80,
				shadowRadius: 1,
				shadowColor: 'black',
				elevation: 1,
				marginBottom: 2,
				shadowOffset: { width: 0, height: 1 },
			}}
		>
			<Text>{title}</Text>
		</View>
	);
}
