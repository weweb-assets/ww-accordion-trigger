export default {
    inherit: {
        type: "ww-layout",
    },
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex', 'grid'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Accordion trigger',
            fr: 'Accordéon trigger',
        },
        icon: 'cursor-click',
    },
    states: ['focus', 'disabled'],
    properties: {
        toggleAccordion: {
            type: 'Button',
            editorOnly: true,
            options: {
                text: { en: 'Toggle accordion' },
                action: 'toggleAccordion',
            },
        },
        contentLayout: {
            hidden: true,
            defaultValue: [],
        },
    },
};
