import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './Text/Text'

export default function PlanetSection({title, value}) {
  return (
    <View style={styles.planetSection}>
      <Text preset='small' >{title}</Text>
      <Text preset='h2' >{value}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    planetSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing[4],
        marginHorizontal: spacing[6],
        marginVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey
    }
})