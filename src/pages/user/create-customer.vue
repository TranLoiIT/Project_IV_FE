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
                         <div class="w-full lg:w-2/5 px-4">
                         <div
                              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                         >
                              <div class="rounded-t mb-0 px-6 py-6">
                                   <div class="text-center mb-3">
                                        <div class="text-gray-600 text-xl font-bold">Đăng ký tài khoản</div>
                                   </div>
                                   <hr class="mt-6 border-b-1 border-gray-400" />
                              </div>
                              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                   <div>
                                        <div class="relative w-full mb-3">
                                             <BaseLableVue :label="'Tài khoản'" :compulsory="true" />
                                             <BaseInputVue v-model="formData.username" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                             <BaseLableVue :label="'Họ và tên'" :compulsory="true" />
                                             <BaseInputVue v-model="formData.name" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                             <BaseLableVue :label="'Số điện thoại'" :compulsory="true" />
                                             <BaseInputVue v-model="formData.phone" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                             <BaseLableVue :label="'Email'" :compulsory="true" />
                                             <BaseInputVue v-model="formData.email" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                             <BaseLableVue :label="'Mật Khẩu'" :compulsory="true" />
                                             <BaseInputVue v-model="formData.password" :type="'password'" />
                                        </div>
                                        <div class="text-center mt-6">
                                             <button
                                                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                  :class="(checkEmty) ? 'opacity-30 cursor-not-allowed' : ''"
                                                  type="button"
                                                  style="transition: all 0.15s ease 0s;"
                                                  :disabled="checkEmty"
                                                  @click="handlerClick"
                                             >
                                                  Tạo Tài khoản
                                             </button>
                                        </div>
                                        <div class="text-center text-gray-500 mt-3">
                                             Bạn đã có tài khoản?
                                             <span
                                                  class="text-red-500 font-medium italic cursor-pointer"
                                                  @click="$router.push('/user/login')"
                                             >Đăng nhập</span>
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
import BaseLableVue from '~/components/BaseLable.vue';
import { registerUser } from '~/api/user';

export default {
     components: {
          BaseInputVue,
          BaseLableVue,
     },
     data() {
          return {
               formData: {
                    username: '',
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
               },
               loading: false,
               checkEmty: true,
          }
     },
     watch: {
          formData: {
               handler() {
                    if (
                         this.formData.username !== '' && this.formData.password !== '' &&
                         this.formData.name !== '' && this.formData.phone !== '' && this.formData.email !== ''
                    ) {
                         this.checkEmty = false
                    } else {
                         this.checkEmty = true;
                    }
               },
               deep: true
          }
     },
     methods: {
          async createAccont() {
               try {
                    const {data} = await registerUser(this.formData);
                    if (data) {
                         this.notification('success', 'Đăng ký tài khoản thành công thành công');
                         this.$router.push('/user/login');
                    }
               } catch (error) {
                    let message = 'đã tồn tại!';
                    if (error.response.data.email) {
                         message = `email ${message}`;
                    }   
                    if (error.response.data.phone) {
                         message = `số điện thoại, ${message}`;
                    }
                    if (error.response.data.username) {
                         message = `tài khoản, ${message}`;
                    }
                    this.notification('error', message);
               } finally {
                    this.loading = false;
               }
          },
          notification(status, message) {
               this.$toast[status](message, {});
          },
          handlerClick() {
               if (this.checkEmty === true) {
                    this.notification('error', 'Vui lòng điền đầy đủ thông tin!')
               } else {
                    this.createAccont();
               }
          },
     },
}
</script>