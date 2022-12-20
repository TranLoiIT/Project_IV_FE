<template>
    <div>
        <NavabarVue></NavabarVue>
        <main>
            <div
                class="relative pt-16 pb-32"
                style="min-height: 40vh;"
            >
                <nuxt></nuxt>
            </div>
        </main>
        <FooterVue></FooterVue>
    </div>
</template>
<script>
import NavabarVue from '~/components/user/Navabar.vue';
import FooterVue from '~/components/user/Footer.vue';

export default {
    components: {
        NavabarVue,
        FooterVue,
    },
}
</script>
<style lang="scss" scoped>
::v-deep .header-home {
    background: rgba(51, 51, 51, 0.5) !important;
}
</style>