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
        const { isEditing } = ref(props.wwEditorState.value.editMode);
        const { toggleAccordion } = inject('weweb-assets/ww-accordion-item');

        const handleClick = () => {
            if (isEditing === wwLib.wwEditorHelper.EDIT_MODES.EDITION) {
                toggleAccordion();
            }
        }

        return {
            toggleAccordion,
            handleClick,
        };
    },
};
</script>

<style lang="scss" scoped></style>
