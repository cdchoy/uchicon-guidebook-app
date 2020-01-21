import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Overlay, ListItem} from 'react-native-elements';

export default class ScheduleItem extends Component {
  state = {
    popupVisible: false,
  };

  setPopupVisible(visible) {
    this.setState({popupVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 0}}>
        <Overlay
          isVisible={this.state.popupVisible}
          onBackdropPress={() => this.setState({ popupVisible: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="#fff8d9" 
          borderRadius={5}
          height="auto"
          width="95%"
        >
          <View style={styles.infoBlock}>
            <Text style={styles.title}>{this.props.item.title}</Text>
            <Text style={styles.locationTime}>{this.props.item.location} ({this.props.item.start_time} - {this.props.item.end_time})</Text>
            <Text style={styles.description}>{this.props.item.description}</Text>

            <Button
              title="Close"
              type="solid"
              style={styles.popupButton}
              pad={10}
              onPress={() => this.setState({ popupVisible: false})}
            />
          </View>
        </Overlay>

        <ListItem
          title={this.props.item.title}
          subtitle={this.props.item.location}
          subtitleStyle={{color: '#1f8cf2'}}
          rightTitle={this.props.item.start_time}
          rightSubtitle={'-' + this.props.item.end_time}
          bottomDivider
          pad={8}
          onPress={() => {
            this.setPopupVisible(true);
          }}
          chevron
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoBlock: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
  },
  locationTime: {
    color: "#1f8cf2"
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  popupButton: {
    marginTop: 15,
    marginBottom: 0,
    justifyContent: 'space-between'
  }
})