import React from "react";
import { Text } from "react-native";

import style from './style'

const Title: React.FC<ITitle> = ({ title }) => {
    return <Text style={style.title}>{title}</Text>
}

interface ITitle {
    title: string
}

export default Title;
