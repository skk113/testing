import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native';
import Context from '../context/Context';


const FunctionalComponent = (props) => {

    const externalComputation = () => {
        array = [6,5,2,3,5];
        return array
    }

    const {data, changeState} = useContext(Context);


    const [state, setState] = useState(() => {
        const initialState = externalComputation();
        return initialState;
    })

    const update = () => {
        setState([...state, 99])
    }

    return (
        <View style={{top: 40}}>
            <Text>
                FunctionalComponent | state: {state}
            </Text>
            <Button
                title="Change Functional Component State"
                onPress={update}
            />
            <Text>
                Context State: {data.term}
            </Text>
            <Button
                title="Change Context State"
                onPress={changeState}
            />
        </View>
    )
}

FunctionalComponent.navigationOptions = ({navigation}) =>  ({
    title: ' Functional Component',
    headerRight: <Button title="info" onPress={() => navigation.navigate('class')}/>
});

export default FunctionalComponent;