import Header from '@/components/Header'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <>
      <SafeAreaView>
        <Header title={'Test header'} />
        <Slot />
      </SafeAreaView>
    </>
  )
}
