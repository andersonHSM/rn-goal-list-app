import { Text, View } from 'react-native'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={'Test'} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
        {/*</ScrollView>*/}
      </SafeAreaView>
    </>
  )
}
