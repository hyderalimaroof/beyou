import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Utility function to filter products by a specific property
const filterProductsByProperty = (products, property) => {
    return products.filter(item => item[property]);
};

export const state = () => ({
    products: [],
    cart: [],
    wishlist: [],
    compare: []
});

// Root getters
export const getters = {
    getProducts(state) {
        return state.products;
    },

    getCart(state) {
        return state.cart || [];
    },

    cartItemCount(state) {
        return state.cart.length;
    },

    getWishlist(state) {
        return state.wishlist;
    },

    getCompare(state) {
        return state.compare;
    },

    wishlistItemCount(state) {
        return state.wishlist.length;
    },

    compareItemCount(state) {
        return state.compare.length;
    },

    getTotal(state) {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price * (item.discount) / 100) : item.price;
            total += price * item.cartQuantity;
        });
        return total;
    },

    getNewProducts(state) {
        return filterProductsByProperty(state.products, 'is_new');
    },

    getBestProducts(state) {
        return filterProductsByProperty(state.products, 'is_best');
    },

    getSaleProducts(state) {
        return state.products.filter(item => item.discount);
    },

    categoryList(state) {
        return ["all categories", ...new Set(state.products.map((list) => list.category).flat())];
    },

    tagList(state) {
        return [...new Set(state.products.map((list) => list.tag).flat())];
    },

    sizeList(state) {
        return ["all sizes", ...new Set(state.products.map((list) => list.variation?.sizes).flat())].filter(Boolean);
    },

    colorList(state) {
        return ["all colors", ...new Set(state.products.map((list) => list.variation?.color).flat())].filter(Boolean);
    },
};

// Mutations
export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },

    DECREMENT_PRODUCT_QUANTITY(state, payload) {
        payload.forEach(({ productId, quantity }) => {
            const product = state.products.find(product => product.id === productId);
            if (product) {
                product.quantity -= quantity;
            }
        });
    },

    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id);
        if (item) {
            const price = item.discount ? item.price - (item.price * (item.discount) / 100) : item.price;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity;
            item.total = item.cartQuantity * price;
        } else {
            const price = payload.discount ? payload.price - (payload.price * (payload.discount) / 100) : payload.price;
            state.cart.push({ ...payload, cartQuantity: payload.cartQuantity, total: price });
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => product.id !== item.id);
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id);
        const price = found.discount ? found.price - (found.price * (found.discount) / 100) : found.price;
        found.cartQuantity -= payload.cartQuantity;
        found.total = found.cartQuantity * price;
    },

    CLEAR_CART(state) {
        state.cart = [];
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id);
        if (!item) {
            state.wishlist.push(product);
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => product.id !== item.id);
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id);
        if (!item) {
            state.compare.push(product);
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => product.id !== item.id);
    },
};

// Actions
export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('fetchProducts');
    },

    async fetchProducts({ commit }) {
        try {
            const response = await axios.get('https://api.beyou.com.pk/api/products/');
            commit('SET_PRODUCTS', response.data);
        } catch (error) {
            console.error('An error occurred while fetching products:', error);
        }
    },

    addToCartItem({ commit }, payload) {
        commit('UPDATE_CART', payload);
    },

    removeProductFromCart({ commit }, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product);
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product);
    },

    addToWishlist({ commit }, payload) {
        commit('ADD_TO_WISHLIST', payload);
    },

    addToCompare({ commit }, payload) {
        commit('ADD_TO_COMPARE', payload);
    },

    removeProductFromWishlist({ commit }, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product);
    },

    removeFromCompare({ commit }, product) {
        commit('REMOVE_FROM_COMPARE', product);
    },

    async placeOrder({ commit }, orderData) {
        try {
            const response = await axios.post('https://api.beyou.com.pk/orders/', orderData);
            if (response.status === 200 || response.status === 201) {
                // Update quantities in the store
                const updatedQuantities = orderData.items.map(item => ({
                    productId: item.id,
                    quantity: item.cartQuantity,
                }));
                commit('DECREMENT_PRODUCT_QUANTITY', updatedQuantities);

                // Clear the cart
                commit('CLEAR_CART');

                return response;
            }
        } catch (error) {
            console.error('Failed to place order:', error);
            throw error;
        }
    },
};
