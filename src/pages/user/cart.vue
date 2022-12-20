<template>
    <div class="container">
        <div class="mt-12 mb-6 text-3xl font-semibold">
            <h4>Giỏ hàng</h4>
        </div>
        <div class="grid grid-cols-6 gap-12">
            <div class="col-span-4">
                <div class="overflow-y-auto scrollbar_style" style="height: 383px;">
                    <template v-if="(cart && cart.length) > 0">
                        <div v-for="(item, index) in cart" :key="index">
                            <ProductCartComponentsVue
                                :product="item"
                                :active-item="checkActive(item.id)"
                                @on-Click="hanldeActive"
                                @on-ClickMinus="hanldeClickMinus"
                                @on-ClickPlus="hanldeClickPlus"
                            />
                        </div>
                    </template>
                    <template v-else>
                        <div class="border-t p-8 text-center font-normal italic">
                            ( Giỏ hàng trống ! )
                        </div>
                </template>
                </div>
            </div>
            <div class="col-span-2">
                <div class="bg-gray-200 rounded-lg p-8">
                    <h4 class="text-xl font-semibold">Thanh toán</h4>
                    <div class="text-sm flex justify-between items-center border-b border-black py-3 px-1">
                        <div>Tổng tiền hàng</div>
                        <div class="text-base font-bold">{{ totalMoneyProduct() + ' VNĐ' }}</div>
                    </div>
                    <div class="text-sm flex justify-between items-center border-b border-black py-3 px-1">
                        <div>Tổng tiền vận chuyển</div>
                        <div class="text-base font-bold">{{ ((active.length > 0) ? formatNumber(shippingMoney) : '0' ) + ' VNĐ' }}</div>
                    </div>
                    <div class="pt-6 text-lg font-semibold flex justify-between items-center">
                        <div>Tổng hóa đơn:</div>
                        <div class="text-base font-bold">{{ ((active.length > 0) ? formatNumber(shippingMoney + totalMoney) : '0' ) + ' VNĐ' }}</div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <BaseButtonVue
                            :placeholder="'Thanh toán'"
                            :disabled="(active.length > 0) ? false : true"
                            @on-click="handlerPayment"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ProductCartComponentsVue from '~/components/user/ProductCartComponents.vue';
import BaseButtonVue from '~/components/user/BaseButton.vue';

export default {
    layout: 'home',
    components: {
        ProductCartComponentsVue,
        BaseButtonVue,
    },
    computed: {
        ...mapState('cart', {
            listCart: (state) => state.cart,
        }),
    },
    data() {
        return {
            active: [],
            cart: [],
            totalMoney: 0,
            shippingMoney: 100000,
        }
    },
    mounted() {
        this.cart = this.listCart;
    },
    watch: {
        cart: {
            handler() {
                this.$store.commit('cart/ADD_TO_CART', this.cart);
                this.$cookies.set('CART_USER', this.cart);
            },
            deep: true,
        },
    },
    methods: {
        hanldeActive(value) {
            let newActive = this.active;
            const isCheck = this.findIndex(value.id);
            if (isCheck >= 0) {
                newActive = this.active.filter((item) => item.id !== value.id);
            } else {
                newActive.push(value);
            }
            this.active = newActive;
        },
        hanldeClickMinus(value) {
            let listActive = this.active;
            let listCart = this.cart;

            this.cart = listCart.map((item) => {
                if (item.id === value.id) {
                    item = {
                        ...item,
                        size: item.size - 1,
                    }
                }
                return item;
            });

            this.active = listActive.map((item) => {
                if (item.id === value.id) {
                    item = {
                        ...item,
                        size: item.size - 1,
                    }
                }
                return item;
            });
        },
        hanldeClickPlus(value) {
            let listActive = this.active;
            let listCart = this.cart;

            this.cart = listCart.map((item) => {
                if (item.id === value.id) {
                    const size = item?.size || 1;
                    item = {
                        ...item,
                        size: size + 1,
                    }
                }
                return item;
            });

            this.active = listActive.map((item) => {
                if (item.id === value.id) {
                    const size = item?.size || 1;
                    item = {
                        ...item,
                        size: size + 1,
                    }
                }
                return item;
            });
        },
        checkActive(value) {
            const isCheck = this.findIndex(value);
            if (isCheck >= 0) {
                return true
            }
            return false;
        },
        findIndex(value) {
            const index = this.active.findIndex((item) => item.id === value);
            return index;
        },
        formatNumber(value) {
            const regex = /\B(?=(\d{3})+(?!\d))/g;
            const valueFormat = value.toString().replace(regex, ',');
            return valueFormat;
        },
        totalMoneyProduct() {
            let result = 0;
            for (let index = 0; index < this.active.length; index++) {
                const size = this.active[index]?.size || 1;
                result = result + this.active[index].price*size;
            };
            this.totalMoney = result;
            const formatValue = this.formatNumber(result);
            return formatValue;
        },
        handlerPayment() {
            console.log('payment !!!!!!!!!!!');
        }
    },
}
</script>
<style lang="scss" scoped>
::v-deep .header-home {
    background: rgb(209, 213, 219) !important;
}
</style>