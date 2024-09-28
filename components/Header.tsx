import { Text, View } from 'react-native'

type HeaderProps = {
  title?: string
}
export default function Header({ title }: HeaderProps) {
  return <View style={{ backgroundColor: 'blue', height: 40, flex: 1 }}>{<Text>{title}</Text>}</View>
}
