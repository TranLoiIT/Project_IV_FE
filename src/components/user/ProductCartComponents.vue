<template>
    <div class="border-t">
        <div class="grid grid-cols-10">
            <div class="col-span-3">
                <img class="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image">
            </div>
            <div class="col-span-7 py-8">
                <div class="flex justify-start">
                    <div class="w-3/5">
                        <div class="text-lg font-normal flex justify-start">
                            <div class="cursor-pointer" @click="$emit('on-Click', product)">
                                <template v-if="activeItem">
                                    <i class="fas fa-check-square text-gray-500 text-lg leading-lg"></i>
                                </template>
                                <template v-else>
                                    <i class="far fa-check-square text-gray-500 text-lg leading-lg"></i>
                                </template>
                            </div>
                            <div class="ml-4">
                                {{ product.name }}
                            </div>
                        </div>
                        <div class="mt-2">{{ product.description }}</div>
                        <div class="mt-2 font-medium text-lg">{{ `price: ` + formatNumber(product.price) + ' VNĐ' }}</div>
                    </div>
                    <div class="w-2/5">
                        <div class="flex justify-end items-center">
                            <div>Số lượng:</div>
                            <div class="ml-2 border rounded-md py-1 px-4">
                                <span @click="(product.size > 1)?$emit('on-ClickMinus', product):''"
                                    class="cursor-pointer"
                                    :class="`${(product.size > 1) ? '' : 'opacity-30 cursor-not-allowed'}`"
                                >
                                    <i class="fas fa-minus text-sm leading-lg hover:text-gray-500"></i>
                                </span>
                                <span class="px-2">{{ ((product.size) ? product.size : 1) }}</span>
                                <span @click="$emit('on-ClickPlus', product)" class="cursor-pointer">
                                    <i class="fas fa-plus text-sm leading-lg hover:text-gray-500"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        activeItem: {
            type: Boolean,
            default: false,
        },
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        formatNumber(value) {
            const regex = /\B(?=(\d{3})+(?!\d))/g;
            const valueFormat = value.toString().replace(regex, ',');
            return valueFormat;
        }
    },
}
</script>
<style lang="">
    
</style>