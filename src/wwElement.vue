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
        const { toggleThisAccordion } = inject('weweb-assets/ww-accordion-item');

        return {
            toggleThisAccordion,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
        },
    },
    methods: {
        handleClick() {
            if (!this.isEditing) {
                this.toggleThisAccordion();
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
