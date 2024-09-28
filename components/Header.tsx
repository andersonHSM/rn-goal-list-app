import { Text, View } from 'react-native'

type HeaderProps = {
  title?: string
}
export default function Header({ title }: HeaderProps) {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
      }}
    >
      <Text>{title}</Text>
    </View>
  )
}
