<template>
    <div>
        <div class="product-area pt-95 pb-95">
            <div class="container">
                <ul class="nav product-tab-list-2 pb-55">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#new-product" role="tab">New
                            Arrivals</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#best-product"
                            role="tab">Best Sellers</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#sale-product" role="tab">Sale
                            Items</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade" id="new-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in newProducts"
                                :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show active" id="best-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in bestProducts"
                                :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="sale-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in saleProducts"
                                :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="view-more text-center mt-20 toggle-btn2">
                        <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
                    </div>
                </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
export default {
    async created() {
        await this.$store.dispatch('fetchProducts');
    },
    components: {
        ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
        QuickView: () => import('@/components/QuickView'),
    },

    computed: {
        newProducts() {
            return this.$store.getters.getNewProducts
        },
        bestProducts() {
            return this.$store.getters.getBestProducts
        },
        saleProducts() {
            return this.$store.getters.getSaleProducts
        },
    },
};
</script>