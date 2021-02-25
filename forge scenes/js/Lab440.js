// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab440",
        name: "Lab440",
        slug: "lab440",
        description: "Lab440",
        default: "scene-6",

        scenes: [
            {
                uid: "scene-6",
                name: "Sixth scene",
                slug: "sixth-scene",
                description: "Sixth Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab440.jpg", //Lab440.jpg
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
                                theta: -65,
                                phi: -5,
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
                                theta: -50,
                                phi: -5,
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
                                theta: -70,
                                phi: -18,
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
                                theta: 40,
                                phi: -5,
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
                                theta: 155,
                                phi: -5,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});
