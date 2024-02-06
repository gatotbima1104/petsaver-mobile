import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/Style/globalStyle';
import { Story } from './constants/UserStory';
import UserStory from './components/Story/UserStory';
import UserPost from './components/UserPost/UserPost';
import { Post } from './constants/UserPost';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.postUser}>
        <FlatList
          ListHeaderComponent={<>
            <View style={globalStyle.header}>
              <Title title="Let's Explore" />
              <TouchableOpacity style={globalStyle.iconMessage}>
                <FontAwesomeIcon icon={faEnvelope} size={20} />
                <View style={globalStyle.textHeader}>
                  <Text style={{ fontSize: 10, color: 'white' }}>2</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={globalStyle.statusUser}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={Story}
                renderItem={({ item }) => (
                  <UserStory
                    key={item.id}
                    profilImage={item.profilePicture}
                    username={item.username}
                  />
                )}
              />
            </View>
          </>}
          showsVerticalScrollIndicator={false}
          data={Post}
          renderItem={({ item }) => (
            <UserPost
              key={item.id}
              firstName={item.firstName}
              location={item.location}
              postImage={item.postImage}
              profilePicture={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
