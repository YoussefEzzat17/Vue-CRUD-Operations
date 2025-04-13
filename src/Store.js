import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await axios.get('http://localhost:2000/products');
      commit('setProducts', res.data);
    },
    async fetchProduct({ commit }, id) {
      const res = await axios.get(`http://localhost:2000/products/${id}`);
      commit('setProduct', res.data);
    },
    async deleteProduct({ dispatch }, id) {
      await axios.delete(`http://localhost:2000/products/${id}`);
      dispatch('fetchProducts');
    },
    async addProduct(_, product) {
      await axios.post("http://localhost:2000/products", product);
    },
    async updateProduct(_, { id, product }) {
      await axios.patch(`http://localhost:2000/products/${id}`, product);
    }
  },
  getters: {
    allProducts: (state) => state.products,
    singleProduct: (state) => state.product
  }
});
