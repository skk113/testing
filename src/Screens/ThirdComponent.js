import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import Context from '../context/Context';

const ThirdComponent = () => {

    const {data, changeState} = useContext(Context);

    return (
        <View style={{top: 40}}>
            <Text>
                Context State: {data.term}
            </Text>
            <Button 
                title="Change state"
                onPress={changeState}
            />
        </View>
    )
}

export default ThirdComponent;