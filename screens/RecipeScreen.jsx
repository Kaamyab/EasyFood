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

        <Text style={{flex:1, textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: '600', marginTop: 16, fontFamily: 'Quicksand-SemiBold'}}>{title}</Text>

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

          {/* Rate */}
          <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, left: 16, top: 16, backgroundColor: 'rgba(255,255,255, 0.85)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 32}}>
              <Svg
              style={{marginRight: 4}}
              width={16}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16ZM18.7 14.462c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z"
                fill="rgb(152, 198, 10)"
                scale={0.675}
              />
            </Svg>
            <Text style={{color: 'rgba(0,0,0, 0.5)'}}>
              {rating}
            </Text>
          </View>

          {/* Timing */}
          <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, left: 16, bottom: 16, backgroundColor: 'rgba(255,255,255, 0.85)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 32}}>
            <Svg
              style={{marginRight: 4}}
              width={16}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z"
                fill="rgb(152, 198, 10)"
                scale={0.675}
              />
              </Svg>
            <Text style={{color: 'rgba(0,0,0, 0.5)'}}>
              {time}
            </Text>
          </View>

          {/* Difficuly */}
          <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, right: 16, bottom: 16}}>
            <Text style={{paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999,
              color: '#fff', backgroundColor:{'Easy': 'rgb(152, 198, 10)', 'Medium': 'rgb(242, 160, 65)', 'Hard' : 'rgb(253, 42, 49)'}[level]}}>{level}</Text>
          </View>

        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default RecipeScreen