<template>
    <button @click="handleClick()">
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
    methods: {
        handleClick() {
            if (this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION) {
                toggleAccordion();
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
