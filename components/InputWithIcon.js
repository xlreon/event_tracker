import React, { Component } from 'react';
import { Input } from 'react-native-elements';

export default class InputWithIcon extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { title, icon, onChange, value } = this.props;
        const props = { 
            placeholder: title,
            onChangeText: onChange, 
            leftIcon: icon, 
            value: value}
            ;
        return (
            <Input {...props} />
        )

       }
    }