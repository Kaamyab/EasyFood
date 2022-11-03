// Modules
import React, { useLayoutEffect, useState } from 'react'
import { Pressable, View, ScrollView, TouchableOpacity, Image, ImageBackground, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from "react-native-svg"

// Images
import FoodImage from '../assets/images/asian-cuisine.jpg'
import FoodImage2 from '../assets/images/english-croissant.jpg'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    },[])

    const categoryItems = [
        {id: 1, bg: '#FBE6E3', title: 'Asian Cuisine'},{id: 2, bg: '#FFF0CF', title: 'Breakfast'},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},
      ]
    
      const foodTypes = [
        {id:1, title: 'Baking', selected: true},
        {id:2, title: 'Desserts', selected: true},
        {id:3, title: 'Salads', selected: true},
        {id:4, title: 'Drinks', selected: true},
    
      ]
    
      const foods = [
        {id: 1, title: 'English Croissant', rating: 4.2, kcal: 160, time: '5:30', new: true, level: 'Easy', steps: 4  },
        {id: 2, title: 'Pancakes', rating: 4.6, kcal: 250, time: '25:00', new: false, level: 'Medium', steps: 7  },
        {id: 3, title: 'Pancakes with Custard', rating: 5, kcal: 210, time: '30:00', new: false, level: 'Hard', steps: 8  },
        {id: 4, title: 'English Croissant', rating: 4.2, kcal: 160, time: '10:30', new: false, level: 'Easy', steps: 4  },
        {id: 5, title: 'English Croissant', rating: 4.2, kcal: 160, time: '10:30', new: false, level: 'Easy', steps: 4  },
        {id: 6, title: 'English Croissant', rating: 4.2, kcal: 160, time: '10:30', new: false, level: 'Easy', steps: 4  },
        {id: 7, title: 'English Croissant', rating: 4.2, kcal: 160, time: '10:30', new: false, level: 'Easy', steps: 4  },
        {id: 8, title: 'English Croissant', rating: 4.2, kcal: 160, time: '10:30', new: false, level: 'Easy', steps: 4  },
      ]
    
      const [selectedFilter, setSelectedFilter] = useState(1)    

  return (
    <SafeAreaView style={{marginHorizontal: 15, paddingTop: 10}}>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              scale={1.25}
              d="M19.96 8.958c-.67-.74-1.68-1.17-3.08-1.32v-.76c0-1.37-.58-2.69-1.6-3.61a4.847 4.847 0 0 0-3.76-1.25c-2.39.23-4.4 2.54-4.4 5.04v.58c-1.4.15-2.41.58-3.08 1.32-.97 1.08-.94 2.52-.83 3.52l.7 5.57c.21 1.95 1 3.95 5.3 3.95h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51Zm-8.3-5.55a3.482 3.482 0 0 1 3.83 3.47v.7H8.51v-.52c0-1.78 1.47-3.49 3.15-3.65Zm-3.24 9.74h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Zm7 0h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Z"
              fill="#85BD3A"
            />
          </Svg>
        </View>
        <View style={{flex:1}}>
          <Text style={{fontFamily: 'Quicksand-SemiBold', color: '#85BD3A', fontWeight: 'bold', textAlign: 'center', marginTop: 0, fontSize: 18}}>EASY<Text style={{color: '#292D32'}}>FOOD</Text></Text>
          <Text style={{textAlign: 'center', opacity: .3, fontFamily: 'Quicksand-Medium'}}>Online Recipes</Text>
        </View>
        <View>
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              scale={1.25}
              d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
              fill="#85BD3A"
            />
        </Svg>
        </View>
      </View>

      <ScrollView>

          <ScrollView style={{marginTop: 15}} horizontal showsHorizontalScrollIndicator={false} overScrollMode='never'>

            {/* Caregory Item */}
            {categoryItems.map((item)=> {
              return (
                <Pressable style={{borderRadius: 12}} android_ripple={{ color: 'white', foreground: true}} key={item.id}>
                <ImageBackground resizeMode="cover" imageStyle={{borderRadius: 12, opacity: 0.7}} style={{width: 288, height: 192, marginRight: 15, backgroundColor: '#000', borderRadius: 12}} source={FoodImage}>
                  <View>
                    <Text style={{marginTop: 16, marginLeft: 16, fontSize: 18, fontWeight: 'bold', color: '#fff', fontFamily: 'Quicksand-Medium'}}>{item.title}</Text>
                  </View>
                    </ImageBackground>
                </Pressable>
              )
            })}

          </ScrollView>

          <ScrollView style={{marginTop: 15}} horizontal showsHorizontalScrollIndicator={false}>
            {foodTypes.map( (item) => {
              return (
                  <TouchableOpacity key={item.id} onPress={()=> {setSelectedFilter(item.id)}}
                  style={{paddingHorizontal: 12, borderWidth: 1, borderColor: (selectedFilter === item.id) ? '#fff' : 'rgba(170, 170, 172, 0.3)', borderRadius: 999, marginRight: 8, flexDirection: 'row',
                  backgroundColor: (selectedFilter === item.id) ? '#85BC3C' : 'transparent'
                  }}
                  >
                    <Text style={{color: (selectedFilter === item.id) ? '#fff' : '#AAAAAC', paddingVertical: 6, paddingTop: 4, fontFamily: 'Quicksand-Regular'}}>{item.title}</Text>
                    {/* <View style={{width: 0.5, height: '100%', backgroundColor: '#AAAAAC', marginRight: 4}}></View> */}
                    {/* <View></View> */}
                  </TouchableOpacity>
              )
            })}
          </ScrollView>

          <View style={{marginBottom: 16}} horizontal={false}>
            {foods.map(item => {
              return (
                <Pressable onPress={()=> {
                    navigation.navigate('Recipe', {item})
                }} style={{marginTop: 16, position: 'relative'}} key={item.id}>
                  <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'rgba(170, 170, 172, 0.3)', borderRadius: 16, padding: 12, overflow: 'hidden'}}>
                    {item.new && <Text style={{position: 'absolute', right: 0, backgroundColor: '#84BD38', paddingHorizontal: 16, paddingVertical: 8, color: '#fff', borderBottomLeftRadius: 12, fontWeight: '400'}}>New</Text>}
                    <Image source={FoodImage2} style={{width: 96, height: 96, borderRadius: 12}} />
                    <View style={{marginLeft: 8, marginVertical: 4, justifyContent: 'space-between'}}>
                      <Text style={{fontWeight: '500', fontFamily: 'Quicksand-SemiBold'}}>{item.title}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 16, flexDirection: 'row', alignItems: 'center'}}>
                            <Svg
                            style={{marginRight: 4}}
                              width={16}
                              height={16}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <Path
                                d="m15.39 5.211 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.09-.48-.1-1.13-.43-1.46l-1.99-1.99c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01ZM8 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 19.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM3 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                                fill="rgb(152, 198, 10)"
                                scale={0.725}
                              />
                              </Svg>
                              <Text style={{fontSize: 12, color: '#ABAAAF', fontFamily: 'Dosis-Medium'}}>{item.rating} (5)</Text>
                          </View>
                        <View style={{marginRight: 16, flexDirection: 'row', alignItems: 'center'}}>
                          <Svg
                            style={{marginRight: 4}}
                            width={16}
                            height={16}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <Path
                              d="M6 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM10 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM14 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM22.25 13.252c0-2.62-2.03-4.74-4.59-4.96-.74-1.21-2.06-2.03-3.58-2.03H6.71c-2.32 0-4.21 1.89-4.21 4.21v.53h15.79v-.53c0-.19-.03-.38-.06-.56 1.45.43 2.52 1.75 2.52 3.34 0 1.57-1.04 2.88-2.46 3.32v-4.57H2.5v5.79c0 2.32 1.89 4.21 4.21 4.21h7.37c2.2 0 3.99-1.7 4.17-3.86 2.28-.46 4-2.48 4-4.89Z"
                              fill="#ABAAAF"
                              scale={0.725}

                            />
                          </Svg>
                          <Text style={{fontSize: 12, color: '#ABAAAF',  fontFamily: 'Dosis-Medium'}}>{item.kcal} Kcal</Text>
                          </View>
                        <View style={{marginRight: 16, flexDirection: 'row', alignItems: 'center'}}>
                          <Svg
                            style={{marginRight: 4}}
                            width={16}
                            height={16}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <Path
                              d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z"
                              fill="#ABAAAF"
                              scale={0.725}
                            />
                          </Svg>
                          <Text style={{fontSize: 12, color: '#ABAAAF',  fontFamily: 'Dosis-Medium'}}>{item.time}</Text>
                          </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, fontSize: 12,
                          color: '#fff', backgroundColor:{'Easy': 'rgb(152, 198, 10)', 'Medium': 'rgb(242, 160, 65)', 'Hard' : 'rgb(253, 42, 49)'}[item.level]}}>{item.level}</Text>
                        <Text style={{marginLeft: 8, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, fontSize: 12,
                          color:{'Easy': 'rgb(152, 198, 10)', 'Medium': 'rgb(242, 160, 65)', 'Hard' : 'rgb(253, 42, 49)'}[item.level],
                          backgroundColor:{'Easy': 'rgba(152, 198, 10, 0.1)', 'Medium': 'rgba(242, 160, 65, 0.1)', 'Hard' : 'rgba(253, 42, 49, 0.1)'}[item.level]}}>{item.steps} Steps</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )
            })}
          </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen