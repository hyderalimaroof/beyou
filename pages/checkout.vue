<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="checkout" />

        <!-- checkout section start -->
        <div class="checkout-area pt-95 pb-100">
            <div class="container">
                <div class="row" v-if="products.length > 0">
                    <div class="col-lg-7">
                        <div class="billing-info-wrap">
                            <h3>Billing Details</h3>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>First Name</label>
                                        <input type="text" v-model="billingDetails.firstName">
                                        <span class="text-danger" v-if="errors.firstName">{{ errors.firstName }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>Last Name</label>
                                        <input type="text" v-model="billingDetails.lastName">
                                        <span class="text-danger" v-if="errors.lastName">{{ errors.lastName }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="billing-info mb-20">
                                        <label>Street Address</label>
                                        <input class="billing-address" placeholder="House number and street name"
                                            type="text" v-model="billingDetails.addressLine1">
                                        <span class="text-danger" v-if="errors.addressLine1">{{ errors.addressLine1
                                            }}</span>
                                        <input placeholder="Apartment, suite, unit etc." type="text"
                                            v-model="billingDetails.addressLine2">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="billing-select mb-20">
                                        <label>Town / City</label>
                                        <select v-model="billingDetails.city">
                                            <option value="">Select a town/city</option>
                                            <option>Karachi</option>
                                            <option>Lahore</option>
                                            <option>Islamabad</option>
                                            <option>Rawalpindi</option>
                                            <option>Faisalabad</option>
                                            <option>Peshawar</option>
                                            <option>Quetta</option>
                                            <option>Multan</option>
                                            <option>Hyderabad</option>
                                            <option>Sialkot</option>
                                            <option>Gujranwala</option>
                                            <option>Sukkur</option>
                                            <option>Bahawalpur</option>
                                            <option>Abbottabad</option>
                                            <option>Mansehra</option>
                                        </select>
                                        <span class="text-danger" v-if="errors.city">{{ errors.city }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>Phone</label>
                                        <input type="text" v-model="billingDetails.phone">
                                        <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>Email Address</label>
                                        <input type="text" v-model="billingDetails.email">
                                        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="additional-info-wrap">
                                <h4>Additional information</h4>
                                <div class="additional-info">
                                    <label>Order notes</label>
                                    <textarea placeholder="Notes about your order, e.g. special notes for delivery."
                                        v-model="billingDetails.orderNotes"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="your-order-area">
                            <h3>Your order</h3>
                            <div class="your-order-wrap gray-bg-4">
                                <div class="your-order-product-info">
                                    <div class="your-order-top">
                                        <ul>
                                            <li>Product</li>
                                            <li>Total</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-middle">
                                        <ul>
                                            <li v-for="(product, index) in products" :key="index">
                                                <span class="order-middle-left">{{ product.title }} X {{
                    product.cartQuantity }}</span>
                                                <span class="order-price">Rs{{ product.total }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="your-order-bottom">
                                        <ul>
                                            <li class="your-order-shipping">Shipping</li>
                                            <li>Free shipping</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-total">
                                        <ul>
                                            <li class="order-total">Total</li>
                                            <li>Rs{{ total }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="place-order mt-25">
                                <button class="btn-hover" @click="placeOrder">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cash"></i>
                            </div>
                            <h4>No items found in cart to checkout</h4>
                            <n-link to="/shop" class="empty-cart__button">Shop Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- checkout section end -->
        <TheFooter />
        <modal name="response-modal" height="auto" :width="'90%'" :draggable="false" :resizable="false"
            :clickToClose="false" :scrollable="true" :adaptive="true" :classes="['custom-modal']">
            <div class="modal-content">
                <i :class="['fa', modalIcon, 'modal-icon']"></i>
                <h3 class="modal-title">{{ modalTitle }}</h3>
                <p class="modal-message">{{ modalMessage }}</p>
                <p v-if="redirectCountdown > 0" class="modal-redirect">
                    Redirecting to the shop in {{ redirectCountdown }} seconds...
                </p>
                <div class="modal-buttons">
                    <button @click="continueShopping" class="btn btn-primary">
                        Continue Shopping
                    </button>
                    <button @click="$modal.hide('response-modal')" class="btn btn-secondary">
                        Close
                    </button>
                </div>
            </div>
        </modal>
    </div>
</template>

<style scoped>
.custom-modal .modal-content {
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
}

.modal-icon {
  font-size: 3rem;
  color: #28a745; /* Success color */
  margin-bottom: 15px;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.modal-message {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.modal-redirect {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 20px;
}

.modal-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-buttons .btn {
  padding: 10px 20px;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
}

.modal-buttons .btn-primary {
  background-color: #007bff;
  color: #fff;
}

.modal-buttons .btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

@media (min-width: 600px) {
  .modal-buttons {
    flex-direction: row;
    justify-content: center;
  }
  .modal-buttons .btn {
    width: auto;
    min-width: 120px;
  }
}
</style>

<script>
export default {
    components: {
        HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
        Breadcrumb: () => import("@/components/Breadcrumb"),
        TheFooter: () => import("@/components/TheFooter"),
    },
    data() {
        return {
            errors: {},
            modalIcon: '',
            modalTitle: '',
            modalMessage: '',
            redirectCountdown: 10,
            countdownInterval: null,
            billingDetails: {
                firstName: '',
                lastName: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                phone: '',
                email: '',
                orderNotes: ''
            }
        };
    },
    computed: {
        products() {
            return this.$store.getters.getCart
        },

        total() {
            return this.$store.getters.getTotal
        },
    },
    methods: {
        validateForm() {
            this.errors = {}; // Reset errors

            // Check if each field is filled out
            if (!this.billingDetails.firstName) {
                this.errors.firstName = 'First Name is required';
            }
            if (!this.billingDetails.lastName) {
                this.errors.lastName = 'Last Name is required';
            }
            if (!this.billingDetails.addressLine1) {
                this.errors.addressLine1 = 'Street Address is required';
            }
            if (!this.billingDetails.city) {
                this.errors.city = 'City is required';
            }
            if (!this.billingDetails.phone) {
                this.errors.phone = 'Phone number is required';
            } else if (!/^\d{10,15}$/.test(this.billingDetails.phone)) {
                this.errors.phone = 'Phone number must be valid';
            }
            if (!this.billingDetails.email) {
                this.errors.email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(this.billingDetails.email)) {
                this.errors.email = 'Email address must be valid';
            }

            return Object.keys(this.errors).length === 0;
        },
        async placeOrder() {
            if (this.validateForm()) {

                const orderData = {
                    first_name: this.billingDetails.firstName,
                    last_name: this.billingDetails.lastName,
                    address_line1: this.billingDetails.addressLine1,
                    address_line2: this.billingDetails.addressLine2,
                    city: this.billingDetails.city,
                    phone: this.billingDetails.phone,
                    email: this.billingDetails.email,
                    order_notes: this.billingDetails.orderNotes,
                    total: this.$store.getters.getTotal,
                    items: this.$store.getters.getCart.map(product => ({
                        product: product.id,
                        quantity: product.cartQuantity,
                        price: this.discountedPrice(product)
                    }))
                };

                try {
                    const response = await this.$store.dispatch('placeOrder', orderData);
                    if (response.status == 201) {
                        this.showModal('fa-check-circle', 'Order Placed Successfully', 'Thank you for your purchase!');
                    } else {
                        this.showModal('fa-exclamation-circle', 'Order Failed', 'There was a problem placing your order. Please try again.');
                    }
                } catch (error) {
                    console.error('Failed to place order:', error);
                    this.showModal('fa-exclamation-circle', 'Order Failed', 'There was a problem placing your order. Please try again.');
                }
            }
        },
        showModal(icon, title, message) {
            this.modalIcon = icon;
            this.modalTitle = title;
            this.modalMessage = message;
            this.$modal.show('response-modal');
            this.startCountdown();
        },
        discountedPrice(product) {
            if (product.discount) {
                return product.price - (product.price * product.discount / 100)
            }
            else {
                return product.price
            }
        },
        startCountdown() {
            this.redirectCountdown = 10; // Set the countdown duration
            this.countdownInterval = setInterval(() => {
                if (this.redirectCountdown > 0) {
                    this.redirectCountdown--;
                } else {
                    clearInterval(this.countdownInterval);
                    this.continueShopping(); // Automatically redirect when countdown ends
                }
            }, 1000);
        },
        continueShopping() {
            clearInterval(this.countdownInterval);
            this.$modal.hide('response-modal');
            this.$router.push('/shop'); // Redirect to the shop page
        },
    },
    beforeDestroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    },
    head() {
        return {
            title: "Checkout"
        }
    },
};
</script>
