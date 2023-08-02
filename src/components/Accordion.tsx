import {View, Text, Pressable, StyleSheet} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type Props = {
    titles: string[];
    children: JSX.Element;
    activeIndex: number;
    setActiveIndex: (id: number)=> void; 
}

type AccordionItemProps = {
    title: string;
    content: JSX.Element;
    onPress: ()=> void;
    expanded: boolean;
}
const AccordionItem = ({title, content, onPress, expanded}:AccordionItemProps)=> {
    return (
        <View style={styles.accordionItem}>
        <Pressable onPress={onPress}>
            <View style={styles.itemHeader}>
                <Text>{title}</Text>
                <AntDesignIcon name={expanded ? 'minus':'plus'} size={20}/>
            </View>
        </Pressable>
        {expanded && content}
        </View>
    )
}
const Accordion = ({titles, children, activeIndex, setActiveIndex}: Props)=> {

    return (
        <View>
            {titles.map((title, index)=> <AccordionItem key={title} 
             title={title}
             content={children}
             expanded={activeIndex == index}
             onPress={()=> setActiveIndex(index)}
            />)}
        </View>
    )

}

export default Accordion;

const styles = StyleSheet.create({
    accordionItem: {
        borderWidth: 1,
        marginBottom: 4
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor:'lightgrey',
        padding: 10,
    }
})