// Create a viewer
const viewer = new FORGE.Viewer("container", {
    story: {
        uid: "lab225B-cage",
        name: "Lab225B Cage",
        slug: "lab225B-cage",
        description: "Lab225B Cage",
        default: "scene-1",

        scenes: [
            {
                uid: "scene-1",
                name: "First scene",
                slug: "first-scene",
                description: "First Scene",

                media: {
                    uid: "media-0",
                    type: "image",

                    source: {
                        format: "equi",
                        url: "../forge scenes/img/Lab225B_Cage.jpg", //Lab225B_Cage.jpg
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
                            width: "20em",
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
                                theta: -110,
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
                                theta: 180,
                                phi: -12,
                            },
                        },
                    },
                ],
            },    
        ],
    },
});
