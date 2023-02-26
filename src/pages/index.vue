<template>
    <div>
        <navbar-component></navbar-component>
            <main>
                <div
                    class="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style="min-height: 75vh;"
                >
                    <div
                        class="absolute top-0 w-full h-full bg-center bg-cover"
                        style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
                    >
                        <span
                        id="blackOverlay"
                        class="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div class="container relative mx-auto">
                        <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div class="pr-12">
                            <h1 class="text-white font-semibold text-5xl">
                                Your story starts with us.
                            </h1>
                            <p class="mt-4 text-lg text-gray-300">
                                This is a simple example of a Landing Page you can build using
                                Tailwind Starter Kit. It features multiple CSS components
                                based on the Tailwindcss design system.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style="height: 70px;"
                    >
                        <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            class="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                        </svg>
                    </div>
                </div>
                <section class="pb-20 bg-gray-300 -mt-24">
                    <div class="container mx-auto px-4">
                        <div class="grid lg:grid-cols-3 grid-cols-1">
                            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                                    >
                                    <i class="fas fa-award"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Awarded Agency</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                    Divide details about your product or agency work into parts.
                                    A paragraph describing a feature will be enough.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="w-full md:w-4/12 px-4 text-center">
                                <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                                    >
                                    <i class="fas fa-retweet"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Free Revisions</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                    Keep you user engaged by providing meaningful information.
                                    Remember that by this time, the user is curious.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                                    >
                                    <i class="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Verified Company</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                    Write a few lines about each one. A paragraph describing a
                                    feature will be enough. Keep you user engaged!
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="relative">
                    <div
                        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style="height: 80px;"
                    >
                        <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            class="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                        </svg>
                    </div>
                </section>
                <section class="pt-20 lg:pb-48 pb-20">
                    <div class="container mx-auto px-4">
                        <h2 class="text-4xl font-semibold text-black text-center">Sản phẩm</h2>
                        <div class="grid lg:grid-cols-3 tablet-600:grid-cols-2 grid-cols-1 gap-8">
                            <div v-for="(product, index) in products" :key="index">
                                <BaseCardComponentsVue :product="product" @on-click="addToCart" />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="pb-20 relative block bg-gray-900">
                    <div
                        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style="height: 80px;"
                    >
                        <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            class="text-gray-900 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                        </svg>
                    </div>
                    <div class="container mx-auto lg:pt-24 lg:pb-64">
                        <div class="flex flex-wrap text-center justify-center">
                            <div class="w-full lg:w-6/12 px-4">
                                <h2 class="text-4xl font-semibold text-white lg:mt-0 mt-12">Build something</h2>
                                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    Put the potentially record low maximum sea ice extent tihs year
                                    down to low ice. According to the National Oceanic and
                                    Atmospheric Administration, Ted, Scambos.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-12 justify-center">
                        <div class="w-full lg:w-3/12 px-4 text-center">
                            <div
                                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                            >
                                <i class="fas fa-medal text-xl"></i>
                            </div>
                            <h6 class="text-xl mt-5 font-semibold text-white">Excelent Services</h6>
                            <p class="mt-2 mb-4 text-gray-500">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                        <div class="w-full lg:w-3/12 px-4 text-center">
                            <div
                                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                            >
                                <i class="fas fa-poll text-xl"></i>
                            </div>
                            <h5 class="text-xl mt-5 font-semibold text-white">Grow your market</h5>
                            <p class="mt-2 mb-4 text-gray-500">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                        <div class="w-full lg:w-3/12 px-4 text-center">
                            <div
                                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                            >
                                <i class="fas fa-lightbulb text-xl"></i>
                            </div>
                            <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
                            <p class="mt-2 mb-4 text-gray-500">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
                <!-- <section class="relative block py-24 lg:pt-0 bg-gray-900" style="padding-top: 215px;">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div class="w-full lg:w-6/12 px-4">
                            <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                            >
                            <div class="flex-auto p-5 lg:p-10">
                                <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                                <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                                Complete this form and we will get back to you in 24 hours.
                                </p>
                                <div class="relative w-full mb-3 mt-8">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="full-name"
                                    >Full Name</label
                                ><input
                                    type="text"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Full Name"
                                    style="transition: all 0.15s ease 0s;"
                                />
                                </div>
                                <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="email"
                                    >Email</label
                                ><input
                                    type="email"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Email"
                                    style="transition: all 0.15s ease 0s;"
                                />
                                </div>
                                <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="message"
                                    >Message</label
                                ><textarea
                                    rows="4"
                                    cols="80"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Type a message..."
                                ></textarea>
                                </div>
                                <div class="text-center mt-6">
                                <button
                                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style="transition: all 0.15s ease 0s;"
                                >
                                    Send Message
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section> -->
            </main>
        <footer-component></footer-component>
        <LoadingVue :loading="loading" />
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import { getProducts } from '~/api/home';
    import { getInformation } from '~/api/user'
    import NavbarComponent from "~/components/user/Navabar.vue";
    import FooterComponent from "~/components/user/Footer.vue";
    import BaseCardComponentsVue from "~/components/user/BaseCardComponents.vue";
    import LoadingVue from '~/components/Loading.vue';

    export default {
        name: "landing-page",
        components: {
            NavbarComponent,
            FooterComponent,
            BaseCardComponentsVue,
            LoadingVue,
        },
        async asyncData({store}) {
            try {
                const { data } = await getInformation();
                if (data) {
                    store.commit('user/ADD_USER', data);
                }
            } catch (error) {
                console.log(error);
            }
        },
        data() {
            return {
                products:[],
                cart: [],
                loading: true,
                page: {
                    count: null,
                    next: null,
                    previous: null,
                },
            }
        },
        computed: {
            ...mapState('cart', {
                listCart: (state) => state.cart,
            }),
        },
        mounted() {
            this.getDataProducts();
        },
        methods: {
            async getDataProducts() {
                try {
                    this.loading = true;
                    const page = 1;
                    const page_size = 10;
                    const { data } = await getProducts({page, page_size});
                    if (data) {
                        this.products = data.results;
                        this.page = {
                            count: data.count,
                            next: data.next,
                            previous: data.previous,
                        }
                    }
                } catch (error) {
                    console.log('error: ', error);
                } finally {
                    this.loading = false;
                }
            },
            addToCart(data) {
                let cart = [];
                let newArr = [];
                const arr = this.listCart.filter((item) => item.id === data.id);
                if (arr.length > 0) {
                    const filterData = this.listCart.filter((item) => item.id !== data.id);
                    const size = arr[0]?.size || 1;
                    newArr = { ...arr[0], size: size + 1 };
                    cart = [newArr, ...filterData];
                } else {
                    cart = [ data, ...this.listCart ];
                }
                this.$store.commit('cart/ADD_TO_CART', cart);
                this.$cookies.set('CART_USER', cart);
                this.notification('success', 'Thêm sản phẩm thành công!');
            },
            notification(status, message) {
                this.$toast[status](message, {});
            },
        },
    }
</script>