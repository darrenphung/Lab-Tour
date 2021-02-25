// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab630",
        name: "Lab630",
        slug: "lab630",
        description: "Lab630",
        default: "scene-8",

        scenes: [
            {
                uid: "scene-8",
                name: "Eighth scene",
                slug: "eighth-scene",
                description: "Eighth Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab630.jpg", //Lab630.jpg
                    },
                },

                hotspots: [
                    {
                        uid: "hotspot-dom-title",
                        interactive: false,
                        cursor: "crosshair",
                        type: "dom",

                        dom:
                        {
                            id: "hotspot-title",
                            width: "15em",
                            height: "5em",
                            color: "#f49a1a",
                            index: 7
                        },

                        transform:
                        {
                            position: {
                                theta: 0,
                                phi: 40,
                            }
                        }
                    },
                    {
                        uid: "hotspot-dom-one",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-one",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: -80,
                                phi: -10,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-two",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-two",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 0,
                                phi: -10,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-three",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-three",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 138,
                                phi: -12,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-four",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-four",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: -143,
                                phi: -15,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-five",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-five",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: -50,
                                phi: -10,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-six",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-six",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 138,
                                phi: -5,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-seven",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-seven",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 168,
                                phi: -10,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});