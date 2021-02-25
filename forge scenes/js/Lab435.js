// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab435",
        name: "Lab435",
        slug: "lab435",
        description: "Lab435",
        default: "scene-4",

        scenes: [
            {
                uid: "scene-4",
                name: "Fourth scene",
                slug: "fourth-scene",
                description: "Fourth Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab435.jpg", //Lab435.jpg
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
                                theta: -105,
                                phi: -10,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-one-one",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-one-one",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 85,
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
                                theta: 12,
                                phi: -5,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-three-one",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-three-one",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: -60,
                                phi: 0,
                            },
                        },
                    },
                    {
                        uid: "hotspot-dom-three-two",
                        interactive: true,
                        type: "dom",

                        dom: {
                            id: "hotspot-three-two",
                            width: "5em",
                            height: "5em",
                            color: "transparent",
                            index: 1,
                            class: ["media-style__primary", "content-style__primary"],
                        },

                        transform: {
                            position: {
                                theta: 40,
                                phi: 0,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});
