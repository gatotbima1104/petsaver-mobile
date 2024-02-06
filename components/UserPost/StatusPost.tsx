import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react";
import { Text, TouchableOpacity, View } from "react-native"

const StatusPost: React.FC<IStatusPost> = ({ icon, text }) => {
    return (
        <>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon icon={icon} />
            </TouchableOpacity>
            <Text style={{ fontSize: 10, color: '#808080', marginLeft: -5 }}>{text}</Text>
        </>
    )
}


interface IStatusPost {
    text: string;
    icon: IconDefinition;
}
export default StatusPost