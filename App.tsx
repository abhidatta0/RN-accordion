import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  UIManager,LayoutAnimation,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Accordion from './src/components/Accordion';

if(Platform.OS === 'android'){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ['New York', 'Bangalore','New Delhi', 'Kolkata'];
  const areas = [100,70, 80, 50];

  const updateIndex = (id: number)=> {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setActiveIndex(id);
  }

  const getContent = ()=> {
    return <Text>{titles[activeIndex]} has an area of {areas[activeIndex]} square km</Text>
  }
  return (
    <SafeAreaView>
      <Accordion titles={titles} setActiveIndex={updateIndex} activeIndex={activeIndex}> 
        <View style={styles.content}>
        {getContent()}
        </View>
        </Accordion>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  content: {
    minHeight:100,
  }
})