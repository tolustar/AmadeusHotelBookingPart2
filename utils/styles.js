import {StyleSheet} from 'react-native';

const Colors = {
  lighter: '#f2f2f2',
  darker: '#444444',
  white: '#fff',
  black: '#000',
  blue: '#015eb8',
};

export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 24,
    color: Colors.blue,
  },

  bold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    color: Colors.black,
  },

  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    color: Colors.black,
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    marginVertical: 3,
  },

  blueText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.blue,
  },

  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  backgroundContainer: {
    backgroundColor: Colors.lighter,
    paddingHorizontal: 24,
  },

  screenContainer: {
    backgroundColor: Colors.lighter,
    height: '100%',
    width: '100%',
  },

  small: {
    fontSize: 12,
    marginBottom: 10,
  },

  searchViewContainer: {
    backgroundColor: Colors.lighter,
    marginTop: 0,
    width: '100%',
  },

  destinationCard: {
    marginTop: 12,
    backgroundColor: Colors.white,
    padding: 16,
  },

  buttonBg: {
    backgroundColor: Colors.blue,
    padding: 12,
    borderRadius: 8,
    marginTop: 14,
    marginBottom: 16,
  },

  buttonBgSecondary: {
    backgroundColor: Colors.darker,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },

  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },

  cancelBg: {
    backgroundColor: Colors.black,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },

  cancelText: {
    color: Colors.white,
    textAlign: 'center',
  },

  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    height: '100%',
  },

  modalView: {
    marginHorizontal: 20,
    marginVertical: 60,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },

  modalinput: {
    height: 40,
    marginVertical: 4,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  modaltext: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
