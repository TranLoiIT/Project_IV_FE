<template>
    <nav
      class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 header-home"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
            <div
                class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
            >
                <div
                    class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer"
                    @click="$router.push('/')"
                >
                    Tailwind Starter Kit
                </div>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    v-on:click="toggleNavbar()"
                >
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>
            <div
                class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
                v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
            >
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <div
                            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                            @click="$router.push('/user/cart')"
                        >
                            <i class="lg:text-gray-300 text-gray-500 text-lg leading-lg fas fa-shopping-cart relative">
                                <div class="absolute -bottom-1 -right-2 bg-red-500 text-sm w-4 h-4 rounded-xl flex justify-center items-center">
                                    {{ (listCart && listCart.length) ? listCart.length : 0 }}
                                </div>
                            </i>
                            <span class="lg:hidden inline-block ml-2">Giỏ hàng</span>
                        </div>
                    </li>
                    <li class="flex items-center">
                        <div
                            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                        >
                            <template v-if="!user?.id">
                                <div
                                    class="flex item-center"
                                    @click="$router.push('/user/login')"
                                >
                                    <i class="lg:text-gray-300 text-gray-500 text-lg leading-lg fas fa-user"></i>
                                    <span class="ml-2 flex items-center">Đăng nhập</span>
                                </div>
                            </template>
                            <template v-else>
                                <div class="relative">
                                    <div
                                        class="flex items-center"
                                        @click="activeDropdown = !activeDropdown"
                                    >
                                        <div class="flex items-center lg:text-gray-300 text-gray-500 text-base leading-lg">
                                            {{ user.name }}
                                        </div>
                                        <i
                                            class="flex items-center lg:text-gray-300 text-gray-500 text-lg leading-lg ml-2 fas fa-caret-down"
                                            :style="activeDropdown ? 'transform: rotate(3.142rad);' : 'transform: rotate(0);'"
                                        ></i>
                                    </div>
                                    <div v-show="activeDropdown" class="absolute py-3 px-6 bg-white rounded-lg text-black w-64 nav_dorpdown">
                                        <div
                                            class="flex items-center hover:text-gray-400 cursor-pointer"
                                            @click="$router.push('/user/update-profile')"
                                        >
                                            <i class="flex items-center text-base leading-lg fas fa-user"></i>
                                            <span class="font-normal ml-2">Thông tin người dùng</span>
                                        </div>
                                        <div
                                            class="flex items-center hover:text-gray-400 cursor-pointer mt-4"
                                            @click="$router.push('/user/change-password')"
                                        >
                                            <i class="flex items-center text-base leading-lg fas fa-key"></i>
                                            <span class="font-normal ml-2">Đổi mật khẩu</span>
                                        </div>
                                        <div class="flex items-center hover:text-gray-400 cursor-pointer mt-4">
                                            <i class="flex items-center text-base leading-lg fas fa-sign-out-alt"></i>
                                            <span class="font-normal ml-2">Đăng xuất</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                showMenu: false,
                activeDropdown: false,
            }
        },
        computed: {
            ...mapState('cart', {
                listCart: (state) => state.cart || [],
            }),
            ...mapState('user', {
                user: (state) => state.user || {},
            }),
        },
        methods: {
            toggleNavbar() {
                this.showMenu = !this.showMenu;
            },
            hanlderLogin() {
                this.$router.push('/user/login');
            },
        }
    }
</script>

<style lang="scss" scoped>
.nav_dorpdown {
    top: 42px;
    right: 0;
}
</style>
  