<template>
    <div>
        <section class="absolute w-full h-full">
            <div
                class="absolute top-0 w-full h-full bg-gray-900"
                style="background-size: 100%; background-repeat: no-repeat;"
                :style="{'background-image': 'url(' + require('../../assets/image/register_bg_2.png') + ')'}"
            />
            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-full lg:w-4/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                        >
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div class="text-center mb-3">
                                    <div class="text-gray-600 text-xl font-bold">Đăng nhập</div>
                                </div>
                                <hr class="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="text-gray-700 text-sm font-bold mb-2"
                                        >Tài khoản</label>
                                        <BaseInputVue v-model="formData.username" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="text-gray-700 text-sm font-bold mb-2"
                                        >Mật Khẩu</label>
                                        <BaseInputVue v-model="formData.password" :type="'password'" />
                                    </div>
                                    <div class="flex justify-between items-center mt-2">
                                        <div
                                            class="ml-2 text-sm font-semibold text-gray-700 cursor-pointer underline hover:text-red-600"
                                        >
                                            Quên mật khẩu?
                                        </div>
                                        <div
                                            class="ml-2 text-sm font-semibold text-gray-700 cursor-pointer underline hover:text-red-600"
                                            @click="$router.push('/user/create-customer')"
                                        >
                                            Đăng ký tài khoản.
                                        </div>
                                    </div>
                                    <div class="text-center mt-6">
                                        <button
                                            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                            :class="(checkEmty) ? 'opacity-30 cursor-not-allowed' : ''"
                                            type="button"
                                            style="transition: all 0.15s ease 0s;"
                                            :disabled="checkEmty"
                                            @click="hanlderLogin"
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import BaseInputVue from '~/components/BaseInput.vue';
import { loginUser } from '~/api/user';

export default {
    components: {
        BaseInputVue,
    },
    data() {
        return {
            formData: {
                username: '',
                password: '',
                device_name: null,
            },
            loading: false,
            checkEmty: true,
        }
    },
    mounted() {
        this.formData.device_name = this.getUA();
    },
    watch: {
        formData: {
            handler() {
                if (this.formData.username !== '' && this.formData.password !== '') {
                    this.checkEmty = false;
                } else {
                    this.checkEmty = true;
                }
            },
            deep: true
        }
    },
    methods: {
        getUA() {
            let device = "Unknown";
            const ua = {
                "Generic Linux": /Linux/i,
                "Android": /Android/i,
                "BlackBerry": /BlackBerry/i,
                "Bluebird": /EF500/i,
                "Chrome OS": /CrOS/i,
                "Datalogic": /DL-AXIS/i,
                "Honeywell": /CT50/i,
                "iPad": /iPad/i,
                "iPhone": /iPhone/i,
                "iPod": /iPod/i,
                "macOS": /Macintosh/i,
                "Windows": /IEMobile|Windows/i,
                "Zebra": /TC70|TC55/i,
            }
            Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
            return device;
        },
        async hanlderLogin() {
            try {
                const {data} = await loginUser(this.formData);
                if (data) {
                    const dataUser = {
                        role: 'user',
                        token: data.token,
                    }
                    this.$cookies.set('TOKEN', dataUser);
                    this.$store.commit('auth/ADD_TOKEN', dataUser);
                    this.notification('success', 'Đăng nhập thành công!');
                    this.$router.push('/');
                }
            } catch (error) {
                this.notification('error', error.message);
            } finally {
                this.loading = false;
            }
        },
        notification(status, message) {
            this.$toast[status](message, {});
        },
    },
}
</script>