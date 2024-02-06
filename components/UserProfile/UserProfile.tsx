import style from '../Story/style';
import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';

const UserProfileImage: React.FC<IProfileImage> = ({
  imageDimention,
  profileImage,
  radiusImage,
}) => {
  return (
    <View style={[style.borderImage, {borderRadius: radiusImage}]}>
      <Image
        source={profileImage}
        style={{
          width: imageDimention,
          height: imageDimention,
          borderRadius: radiusImage,
        }}
      />
    </View>
  );
};

interface IProfileImage {
  profileImage: ImageSourcePropType;
  imageDimention: number;
  radiusImage: number;
}

export default UserProfileImage;
