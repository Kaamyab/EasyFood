// Modules
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Svg, { Path } from "react-native-svg"

// Images
import FoodImage2 from '../assets/images/english-croissant.jpg'
import { SafeAreaView } from 'react-native-safe-area-context'

const RecipeScreen = () => {

  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const {
    params: 
    {item: {
    id, title, rating, kcal, time, level, steps
  }}
  } = useRoute()

  return (
    <ScrollView>
      <SafeAreaView style={{position: 'relative'}}>

      {/* Header */}
        <View style={{flexDirection: 'row'}}>

        <TouchableOpacity onPress={navigation.goBack} style={{marginHorizontal: 16, paddingTop: 16}}>
            <Svg
              width={32}
              height={32}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-2.4 13c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L9.2 12.53a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3 3 3Z"
                fill="#85BD3A"
                scale={1.25}
              />
            </Svg>
        </TouchableOpacity>

        <Text style={{flex:1, textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: '600', marginTop: 16}}>{title}</Text>

        <TouchableOpacity style={{marginHorizontal: 16, paddingTop: 16}}>
            <Svg
              width={32}
              height={32}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                stroke="#85BD3A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                scale={1.25}
              />
            </Svg>
        </TouchableOpacity>

        </View>

        {/* Photo */}
        <View style={{position: 'relative', marginTop: 24, paddingHorizontal: 16, overflow: 'hidden'}}>
          <Image style={{width: '100%', height: 240, borderRadius: 12}} resizeMode='cover' source={FoodImage2} />
          <Text style={{position: 'absolute', marginHorizontal: 16, left: 16, top: 16, color: 'rgba(0,0,0, 0.6)', backgroundColor: 'rgba(255,255,255, 0.6)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 32}}>{rating}</Text>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default RecipeScreen