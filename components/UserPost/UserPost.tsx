import { Text, ImageSourcePropType, View, TouchableOpacity, Image, FlatList } from 'react-native';
import UserProfileImage from '../UserProfile/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import StatusPost from './StatusPost';
import { SummaryPost } from '../../constants/SummaryPost';

const UserPost: React.FC<IPost> = ({
  location,
  firstName,
  lastName,
  profilePicture,
  postImage
}) => {
  return (
    <View style={{ marginBottom: 20, marginVertical: 20, borderBottomColor: '#EFF2F6', borderBottomWidth: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View style={{ flexDirection: 'row' }}>
          <UserProfileImage
            imageDimention={40}
            profileImage={profilePicture}
            radiusImage={40}
          />
          <View style={{ marginLeft: 10 }}>
            <Text>
              {firstName} {lastName}
            </Text>
            <Text style={{ fontSize: 10, color: '#808080' }}>{location}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <FontAwesomeIcon icon={faEllipsisH} />
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', alignContent: 'center', marginVertical: 10 }}>
        <Image source={postImage} style={{ width: 335, height: 250, borderRadius: 20, objectFit: 'cover' }} />
      </View>

      <View style={{ marginTop: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          {SummaryPost && SummaryPost.map((item) => (
            <StatusPost key={item.id} icon={item.icon} text={item.text} />
          ))}
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <StatusPost icon={faBookmark} text='2' />
        </View>
      </View>
    </View>
  );
};

interface IPost {
  firstName: string;
  lastName?: string;
  location: string;
  profilePicture: ImageSourcePropType;
  postImage: ImageSourcePropType;
}

export default UserPost;
