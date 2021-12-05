import axios from 'axios';

const BASE_URL = 'http://localhost:8888';

export const fetchDestination = async searchItem => {
  const {data} = await axios({
    method: 'get',
    url: `${BASE_URL}/api/search-location`,
    params: {
      subType: 'AIRPORT,CITY',
      keyword: searchItem,
      pageLimit: 20,
      pageOffset: 0,
    },
  });
  return data.data;
};

export const fetchCityHotels = async cityCode => {
  const {data} = await axios({
    method: 'get',
    url: `${BASE_URL}/api/city-hotels`,
    params: {
      cityCode,
    },
  });
  return data.data;
};

export const fetchHotelOffers = async hotelId => {
  const {data} = await axios({
    method: 'get',
    url: `${BASE_URL}/api/hotel-offers`,
    params: {
      hotelId,
    },
  });
  return data.data;
};

export const confirmHotelOfferDetails = async offerId => {
  const {data} = await axios({
    method: 'get',
    url: `${BASE_URL}/api/hotel-offer`,
    params: {
      offerId,
    },
  });
  return data.data;
};

export const postBookingDetails = async bookingDetails => {
  const {
    firstNameVal,
    lastNameVal,
    phoneNumberVal,
    emailVal,
    cardNumberVal,
    expiryDateVal,
    offerId,
  } = bookingDetails;
  const {data} = await axios({
    method: 'post',
    url: `${BASE_URL}/api/book-hotel`,
    data: {
      offerId,
      guests: [
        {
          name: {
            firstName: firstNameVal,
            lastName: lastNameVal,
          },
          contact: {
            phone: phoneNumberVal,
            email: emailVal,
          },
        },
      ],
      payments: [
        {
          method: 'creditCard',
          card: {
            vendorCode: 'VI',
            cardNumber: cardNumberVal,
            expiryDate: expiryDateVal,
          },
        },
      ],
    },
  });
  return data.data;
};
