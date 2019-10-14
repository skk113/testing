import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const DATA = [5,4,2,6,1];

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {term: 'Hello'};
        this.func = this.func.bind(this);
    }

    static navigationOptions = {
        title: 'Class Component'
    }

    func = function(){
        this.setState({term: 'New Hello'}, () => {
            console.log(this.state);
        });
    }

    content = this.props.navigation.getParam('content');

    render(){
        return (
            <View style={{top: 40}}>
                <Text>
                    ClassComponent {this.state.term}
                </Text>
                <Button 
                    title="Change Class Component State"
                    onPress={this.func}
                />
            </View>
        )
    }
}

export default ClassComponent;