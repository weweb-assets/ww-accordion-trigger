<template>
    <button @click="toggleAccordion()">
        <wwLayout v-bind="$attrs" path="contentLayout" />
    </button>
</template>

<script>
import { inject } from 'vue';

export default {
    inheritAttrs: false,
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: [],
    setup() {
        const { toggleAccordion } = inject('weweb-assets/ww-accordion-item');

        return {
            toggleAccordion,
        };
    },
};
</script>

<style lang="scss" scoped></style>
