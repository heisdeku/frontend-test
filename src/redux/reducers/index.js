const initialState = {
  loading: true,
  order_id: '2432efa2',
  restaurant: {
    name: 'Fast Food Restaurant',
    street: 'aiyepe road',
    city: 'Bangalore',
    state: 'Karnataka',
    zipcode: '54312',
  },
  items: [
    {
      name: 'Veg cheese burger',
      category: 'Burgers',
      price: 150,
      currency: 'INR',
      tax_pct: 2.5,
      quantity: 2,
    },
    {
      name: 'Veg cheese burger',
      category: 'Burgers',
      price: 150,
      currency: 'INR',
      tax_pct: 2.5,
      quantity: 2,
    },
    {
      name: 'Veg cheese burger',
      category: 'Burgers',
      price: 150,
      currency: 'INR',
      tax_pct: 2.5,
      quantity: 2,
    },
    {
      name: 'Veg cheese burger',
      category: 'Burgers',
      price: 150,
      currency: 'INR',
      tax_pct: 2.5,
      quantity: 2,
    },
  ],
  user: {
    name: 'kumba',
    id: '090893',
    address: '19 alafia street, Ago Iwote',
    phone: '+2342342332523',
    about:
      "I'm a confused developer trying to create products that could be of great help to me and the future",
    likes: ['chicken', 'spciy', 'beer'],
    dislikes: ['fish', 'rum', 'oriental'],
  },
}
const init = {
  loading: false,
  info: {},
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        info: action.payload.data,
      }
    default:
      return state
  }
}
