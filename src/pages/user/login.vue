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
                                    <h6 class="text-gray-600 text-lg font-bold">
                                        Login Admin
                                    </h6>
                                </div>
                                <hr class="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <!-- <div class="text-gray-500 text-center mb-3 font-bold">
                                    <small>Or sign in with credentials</small>
                                </div> -->
                                <div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-base font-bold mb-2"
                                            for="grid-password"
                                        >Email</label>
                                        <BaseInputVue v-model="username" :placeholder="'email'" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-base font-bold mb-2"
                                            for="grid-password"
                                        >Password</label>
                                        <BaseInputVue v-model="password" :type="'password'" :placeholder="'password'" />
                                    </div>
                                    <div>
                                        <label class="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                style="transition: all 0.15s ease 0s;"
                                            />
                                            <span class="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
                                        </label>
                                    </div>
                                    <div class="text-center mt-6">
                                        <button
                                            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                            type="button"
                                            style="transition: all 0.15s ease 0s;"
                                            @click="login"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-6">
                            <div class="w-1/2">
                                <a href="#pablo" class="text-gray-300">
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div class="w-1/2 text-right">
                                <a href="#pablo" class="text-gray-300"><small>Create new account</small></a>
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
import { loginUser } from '~/api/login';

export default {
    name: "login-page",
    components: {
        BaseInputVue,
    },
    data() {
        return {
            username: '',
            password: '',
            device_name: null,
            loading: false,
        }
    },
    mounted() {
        this.device_name = this.getUA();
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
        async login() {
            try {
                const {data} = await loginUser({
                    username: this.username,
                    password: this.password,
                    device_name: this.device_name,
                });
                if (data) {
                    const token = data.token;
                    this.$cookies.set('TOKEN_USER', token);
                    this.notification('success', 'Đăng nhập thành công!');
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