// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab435-soldering-room",
        name: "Lab435 Soldering Room",
        slug: "lab435-soldering-room",
        description: "Lab435 Soldering Room",
        default: "scene-5",

        scenes: [
            {
                uid: "scene-5",
                name: "Fifth scene",
                slug: "fifth-scene",
                description: "Fifth Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab435 Soldering Room.jpg", //Lab435_Soldering_Room.jpg
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
                            width: "30em",
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
                                theta: -170,
                                phi: -32,
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
                                theta: -158,
                                phi: -30,
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
                                theta: -150,
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
                                theta: 56,
                                phi: -20,
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
                                theta: -118,
                                phi: -15,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});
