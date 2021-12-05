import React from 'react';
import {
  Modal,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './styles';

export const DestinationField = ({
  onChange,
  value,
  loading,
  autoComplete,
  destinationList,
}) => (
  <View>
    <Text style={[styles.bold]}>Destination (Airport / City)</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder="Search for Airports and Cities"
    />
    <Text style={styles.small}>
      keyword that should represent the start of a word in a city or airport
      name or code
    </Text>

    <View
      contentInsetAdjustmentBehavior="automatic"
      style={styles.searchViewContainer}>
      {loading ? (
        <ActivityIndicator style={{marginTop: 24}} />
      ) : (
        <View>
          {destinationList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => autoComplete(item.name, item.address.cityCode)}>
              <View style={styles.destinationCard}>
                <Text
                  style={
                    styles.text
                  }>{`${item.name}, ${item.address.cityCode}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  </View>
);

export const HotelView = ({
  loading,
  hotelList,
  location,
  showBookingModal,
  getHotelOffers,
  loadingHotelOffers,
  hotelOffers,
  hotelOffersVisibility,
}) => {
  return (
    <View>
      <View style={styles.searchViewContainer}>
        {loading ? (
          <ActivityIndicator style={{marginTop: 24}} />
        ) : (
          <View>
            {location.length !== 0 && hotelList.length !== 0 && (
              <Text style={[styles.bold]}>
                Showing list of hotels in {location}
              </Text>
            )}
            {hotelList.map((item, index) => (
              <View key={index} style={styles.destinationCard}>
                <View>
                  <Text style={[styles.text, {fontSize: 18}]}>
                    {item.hotel.name}
                  </Text>
                  <Text style={styles.text}>
                    Address - {item.hotel.address.lines[0]}{' '}
                    {item.hotel.address.cityName},{' '}
                    {item.hotel.address.postalCode}
                  </Text>
                  <Text style={styles.text}>Rating - {item.hotel.rating}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    getHotelOffers(item.hotel.hotelId, index);
                  }}>
                  <View style={{marginTop: 10}}>
                    <Text style={styles.blueText}>Toggle Hotel Offers</Text>
                    {hotelOffersVisibility[index] === true &&
                      loadingHotelOffers && (
                        <ActivityIndicator style={{marginTop: 24}} />
                      )}
                  </View>
                </TouchableOpacity>

                {hotelOffersVisibility[index] === true && (
                  <HotelOffers
                    loadingHotelOffers={loadingHotelOffers}
                    hotelOffers={hotelOffers}
                    showBookingModal={showBookingModal}
                    hotelOffersVisibility={hotelOffersVisibility}
                    hotelIndex={index}
                  />
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export const HotelOffers = ({
  loadingHotelOffers,
  hotelOffers,
  showBookingModal,
  hotelOffersVisibility,
  hotelIndex,
}) => {
  return (
    <View>
      {hotelOffersVisibility[hotelIndex] === true && !loadingHotelOffers && (
        <View style={{marginTop: 12}}>
          <Text style={[styles.text, {fontSize: 16}]}>OFFERS</Text>
          {hotelOffers.map(
            (offer, offerIndex) =>
              offer && (
                <View key={offerIndex} style={{marginTop: 10}}>
                  <View
                    style={{
                      height: 3,
                      backgroundColor: '#ddd',
                      width: '100%',
                      marginBottom: 10,
                    }}
                  />

                  <Text>OFFER ID - {offer.id}</Text>
                  <Text>ROOM TYPE - {offer.room.type}</Text>
                  <Text style={{marginTop: 10}}>
                    DESCRIPTION - {offer.room.description.text}
                  </Text>
                  <Text style={{marginTop: 10}}>
                    PRICE - {offer.price.currency} {offer.price.base}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      showBookingModal(offer.id);
                    }}>
                    <View style={styles.buttonBg}>
                      <Text style={styles.buttonText}>Book</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ),
          )}
        </View>
      )}
    </View>
  );
};

export const BookHotel = ({
  bookingDetails,
  onChange,
  visibility,
  changeVisibility,
  submitBookingDetails,
  submitting,
}) => {
  const {
    firstNameVal,
    lastNameVal,
    phoneNumberVal,
    emailVal,
    cardNumberVal,
    expiryDateVal,
  } = bookingDetails;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        onRequestClose={() => {
          changeVisibility(!visibility);
        }}>
        <ScrollView style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Contact Details</Text>
            <View>
              <Text style={styles.modaltext}>First name</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('firstName', val)}
                value={firstNameVal}
                placeholder=""
              />
            </View>
            <View>
              <Text style={styles.modaltext}>Last name</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('lastName', val)}
                value={lastNameVal}
                placeholder=""
              />
            </View>
            <View>
              <Text style={styles.modaltext}>Phone number</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('phoneNumber', val)}
                value={phoneNumberVal}
                placeholder=""
              />
            </View>
            <View>
              <Text style={styles.modaltext}>Email</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('email', val)}
                value={emailVal}
                placeholder=""
              />
            </View>

            <Text style={{marginTop: 40}}>Payment Details</Text>
            <View>
              <Text style={styles.modaltext}>Card Number</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('cardNumber', val)}
                value={cardNumberVal}
                placeholder=""
              />
            </View>
            <View>
              <Text style={styles.modaltext}>Expiry Date</Text>
              <TextInput
                style={styles.modalinput}
                onChangeText={val => onChange('expiryDate', val)}
                value={expiryDateVal}
                placeholder=""
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                submitBookingDetails();
              }}>
              <View style={styles.buttonBg}>
                <Text style={styles.buttonText}>Submit</Text>
                {submitting && <ActivityIndicator />}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                changeVisibility(false);
              }}>
              <View style={styles.cancelBg}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};
