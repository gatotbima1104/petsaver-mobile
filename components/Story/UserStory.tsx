import {ImageSourcePropType, Text, View} from 'react-native';
import UserProfileImage from '../UserProfile/UserProfile';
import React from 'react';

const UserStory: React.FC<IStory> = ({profilImage, username}) => {
  return (
    <View style={{marginRight: 12, alignItems: 'center', gap: 5}}>
      <UserProfileImage
        profileImage={profilImage}
        imageDimention={60}
        radiusImage={100}
      />
      <Text style={{fontFamily: 'Inter'}}>{username}</Text>
    </View>
  );
};

interface IStory {
  username: string;
  profilImage: ImageSourcePropType;
}

export default UserStory;
