import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import Accordion from './src/components/Accordion';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ['New York', 'Bangalore','New Delhi', 'Kolkata'];
  const areas = [100,70, 80, 50];

  const getContent = ()=> {
    return <Text>{titles[activeIndex]} has an area of {areas[activeIndex]} square km</Text>
  }
  return (
    <SafeAreaView>
      <Accordion titles={titles} setActiveIndex={setActiveIndex} activeIndex={activeIndex}> 
        {getContent()}
        </Accordion>
    </SafeAreaView>
  );
};

export default App;