// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab430",
        name: "Lab430",
        slug: "lab430",
        description: "Lab430",
        default: "scene-3",

        scenes: [
            {
                uid: "scene-3",
                name: "Third scene",
                slug: "third-scene",
                description: "Third Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab430.jpg", //Lab430.jpg
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
                                theta: -60,
                                phi: -12,
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
                                theta:  135,
                                phi: -15,
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
                                theta:  -90,
                                phi: -10,
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
                                theta:  -45,
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
                                theta:  -20,
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
                                theta: -150,
                                phi: -8,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});
