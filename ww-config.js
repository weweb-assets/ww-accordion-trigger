export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Accordion trigger',
            fr: 'Accordéon trigger',
        },
        icon: 'cursor-click',
        infoTags: () => {
            return [];
        },
        workflowHint: () => {
            return false;
        },
    },
    states: ['focus', 'disabled'],
    triggerEvents: [],
    actions: [
        {
            label: 'Toggle dialog',
            action: 'toggleDialog',
        },
        {
            label: 'Open dialog',
            action: 'openDialog',
        },
        {
            label: 'Close dialog',
            action: 'closeDialog',
        },
    ],
    properties: {
        contentLayout: {
            hidden: true,
            defaultValue: [],
        },
    },
};
