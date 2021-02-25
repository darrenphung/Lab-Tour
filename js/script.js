function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectFloor = this.handleSelectFloor.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove() {
        this.setState({
            currentRotation: event.offsetX / event.target.clientWidth - 0.5
        });

    }

    handleSelectFloor(floorNum) {
        this.setState({
            selectedFloor: floorNum
        });
        this.nextSlide(floorNum);

    }

    componentWillMount() {
        this.setState({
            selectedFloor: -1,
            currentRotation: 0
        });

    }

    nextSlide(floorNum) {

        if (floorNum > 1) {
            forge.story.loadScene(`scene-${floorNum}`);
        }

    }


    render() {
        let floorPlatesArray = [0, 0, 0, 0, 0, 0]; // This array defines the number of floors
        let { selectedFloor } = this.state;
        let floorPlates = floorPlatesArray.map((floor, i) => {
            return (
                React.createElement(FloorPlate, {
                    floor: floorPlatesArray.length - i,
                    selectedFloor: selectedFloor,
                    onSelectFloor: this.handleSelectFloor,
                    currentRotation: this.state.currentRotation
                }));
        });

        let floorPlateSelectors = floorPlatesArray.map((floor, i) => {
            return (
                React.createElement(FloorPlateSelector, {
                    floor: floorPlatesArray.length - i,
                    selectedFloor: selectedFloor,
                    onSelectFloor: this.handleSelectFloor
                }));
        });

        return (
            React.createElement("div", { className: "container" },
                React.createElement("div", { id: "logg" }),
                React.createElement("ul", { className: "floor-plate-selector-container" },
                    floorPlateSelectors),



                React.createElement("ul", {
                    onMouseMove: this.handleMouseMove,
                    className: "floor-plate-container"
                },
                    floorPlates)));



    }
}


class FloorPlate extends React.Component {

    constructor(props) {
        super(props); _defineProperty(this, "outputTransform",


            () => {
                let { floor, selectedFloor, currentRotation } = this.props;
                let floorOffset = -200;

                if (selectedFloor < 0) {
                    floorOffset = -200;
                } else
                    if (floor > selectedFloor) {
                        floorOffset = -10;
                    } else
                        if (floor < selectedFloor) {
                            floorOffset = -200;
                        }
                // here we should also hide the floors above the selected one as currently they are just sneakily moved off the screen to the top. or we could make it less crappy some other way I guess.
                let rX = `60deg`;
                let rZ = `${60 + currentRotation * 10}deg`;
                let tX = `100px`;
                let tZ = `${floorOffset * floor}px`;
                return {
                    transform: `rotateX(${rX}) rotateZ(${rZ}) translateX(${tX}) translateZ(${tZ})`
                };

            }); 
            this.handleSelectFloor = this.handleSelectFloor.bind(this);
            this.load_home = this.load_225B_Cage.bind(this);
            this.load_home = this.load_225B_PSS.bind(this);
            this.load_home = this.load_430.bind(this);
            this.load_home = this.load_435.bind(this);
            this.load_home = this.load_435_Soldering.bind(this);
            this.load_home = this.load_440.bind(this);
            this.load_home = this.load_612.bind(this);
            this.load_home = this.load_630.bind(this);
    }
    handleSelectFloor() { this.props.onSelectFloor(this.props.floor); }
    //functions loading data specific to the lab 
    load_225B_Cage() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab225B_Cage.html" width="100%" height="100%" ></object>';
    }
    load_225B_PSS() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab225B_PSS.html" width="100%" height="100%" ></object>';
    }
    load_430() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab430.html" width="100%" height="100%" ></object>';
    }
    load_435() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab435.html" width="100%" height="100%" ></object>';
    }
    load_435_Soldering() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab435_Soldering_Room.html" width="100%" height="100%" ></object>';
    }
    load_440() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab440.html" width="100%" height="100%" ></object>';
    }
    load_612() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab612.html" width="100%" height="100%" ></object>';
    }
    load_630() {
        document.getElementById("container").innerHTML = '<object type="text/html" data="../forge scenes/Lab630.html" width="100%" height="100%" ></object>';
    }
    render() {
        let { floor, selectedFloor } = this.props;
        let recentFloor = selectedFloor;
        let thisTransform = this.outputTransform();
        let isActive = selectedFloor == floor;
        let selectedStyle = isActive ?
            {
                border: `3px solid #fff`,
                opacity: 0.8
            } :
            {};

        let style = {
            ...thisTransform,
            zIndex: this.props.floor,
            ...selectedStyle
        };


        let defaultCopyStyles = {
            position: 'absolute',
            width: '95%',
            marginLeft: '1%',
            height: 150,
            transform: `translateY(${200 * this.props.floor - 360}px)`
        };
        //for floor 1 and 3with no labs
        let defaultCopyStyles2 = {
            position: 'absolute',
            width: '95%',
            marginLeft: '1%',
            height: 150,
            transform: `translateY(${200 * this.props.floor - 100}px)`
        };
        // for floor 2 with 2 labs
        let defaultCopyStyles3 = {
            position: 'absolute',
            width: '95%',
            marginLeft: '1%',
            height: 150,
            transform: `translateY(${200 * this.props.floor - 260}px)`
        };
        // for floor 4 with 4 labs
        let defaultCopyStyles4 = {
            position: 'absolute',
            width: '95%',
            marginLeft: '1%',
            height: 150,
            transform: `translateY(${200 * this.props.floor - 520}px)`
        };


        let copyStyles = isActive ?
            {
                ...defaultCopyStyles,
                opacity: 1,
                transition: `all 1000ms ease-in-out`
            } :


            {
                ...defaultCopyStyles,
                transform: `translateY(${175 * this.props.floor - 65}px)`,
                opacity: 0
            };
        let copyStyles2 = isActive ?
            {
                ...defaultCopyStyles2,
                opacity: 1,
                transition: `all 1000ms ease-in-out`
            } :


            {
                ...defaultCopyStyles2,
                transform: `translateY(${175 * this.props.floor - 65}px)`,
                opacity: 0
            };
        let copyStyles3 = isActive ?
            {
                ...defaultCopyStyles3,
                opacity: 1,
                transition: `all 1000ms ease-in-out`
            } :


            {
                ...defaultCopyStyles3,
                transform: `translateY(${175 * this.props.floor - 65}px)`,
                opacity: 0
            };
        let copyStyles4 = isActive ?
            {
                ...defaultCopyStyles4,
                opacity: 1,
                transition: `all 1000ms ease-in-out`
            } :


            {
                ...defaultCopyStyles4,
                transform: `translateY(${175 * this.props.floor - 65}px)`,
                opacity: 0
            };

        let copyItemContainer = {
            display: 'flex',
            color: '#ccc',
            fontFamily: 'sans-serif',
            fontSize: 11,
            width: '380px',
            lineHeight: 1,
            zIndex: 100
        };

        let copyItemTitle = {
            border: `1px solid #666`,
            padding: 2,
            width: '30%',
            fontWeight: 1000
        };

        let copyItemContent = {
            border: `1px solid #666`,
            padding: 4,
            width: '70%'
        };

        let linkStyle = {
            color: '#fff'
        };

        // all data will be stored here and is labelled so can be changed easily with real time data
        let floors = [
            // list of labs on 1st floor
            [
                {
                    labname: 'No labs on floor 1',
                    labdesciption: ''
                },

            ],
            // list of labs on 2nd floor
            [
                {
                    labname: 'Lab225B - Cage',
                    labdesciption: 'High Voltage Engineering Lab: the lab teaches students practical skills in High Voltage Experiments, and Power Systems Analysis and Protection.'
                },
                {
                    labname: 'Lab225B - PSS',
                    labdesciption: 'Power System Simulator: the lab teaches students practical skills in modelling every section in electrical power systems including  power generation, electricity distribution, transmission and loads.'
                },
            ],
            // list of labs on 3rd floor
            [
                {
                    labname: 'No labs on floor 3',
                    labdesciption: ''
                },
            ],
            // list of labs on 4th floor
            [
                {
                    labname: 'lab440',
                    labdesciption: 'Electrical Engineering Labs: the lab teaches students practical skills in fundamental principles of electronics, computer systems, circuit theories, and digital systems through hands-on experiments.'
                },
                {
                    labname: 'lab435',
                    labdesciption: 'Energy Lab: this lab teaches students practical skills in advanced power electronics and energy systems such as renewable energy systems and three-phase electrical machineries.'
                },
                {
                    labname: 'lab435 - Soldering Room',
                    labdesciption: 'Soldering Room: the lab provides purpose-built facility for students to work on print circuit boards and electronics components.'
                },
                {
                    labname: 'lab430',
                    labdesciption: 'Electronics and Communications Lab: the lab teaches students practical skills through experiments of RF Engineering, Communication Electronics, Antennas and Propagations, and Wireless Communications.'
                },
            ],
            // list of labs on 5th floor
            [
                {
                    labname: 'lab533',
                    labdesciption: 'Computer and Software Engineering Lab: the lab is equipped with 28 high-specification computers with advanced NVIDIA GPUs. The lab teaches students with practical skills in IoT, Deep Learning, Software Defined Networks and Multidimensional Signal Processing.'
                }
            ],
            // list of labs on 6th floor
            [
                {
                    labname: 'lab630',
                    labdesciption: 'Digital Systems and Modelling Lab: the lab teaches students with practical skills in embedded systems, digital logics  (modern FPGA), communication systems with TIMS, and modern digital systems with software defined radios.'
                },
                {
                    labname: 'lab612',
                    labdesciption: 'Project Workshop: the lab provides common electrical benchtop instruments for project and thesis students to experiment on their designs.'
                }
            ]

        ];
        let recent = 0;
        console.log(floors[0][0].labdesciption);
        console.log(recentFloor);
        if (this.props.floor === 1) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { style: copyStyles2 },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                            React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Labs"),
                            React.createElement("div", { style: copyItemContent }, floors[0][0].labname)),
                    ),


                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }
        if (this.props.floor === 2) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { className: "textbox", style: copyStyles3 },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                            React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_225B_Cage}, "Lab 225B_Cage (Press to View)")),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[1][0].labdesciption)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_225B_PSS}, "Lab 225B_PSS (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[1][1].labdesciption))),


                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }
        if (this.props.floor === 3) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { className: "textbox", style: copyStyles2 },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", { style: copyItemTitle }, "Floor"),
                            React.createElement("div", { style: copyItemContent }, this.props.floor)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Labs"),
                            React.createElement("div", { style: copyItemContent }, floors[2][0].labname)),

                    ),


                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }
        if (this.props.floor === 4) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { className: "textbox", style: copyStyles4 },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                            React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),

                        //labs data
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_440}, "Lab 440 (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[3][0].labdesciption)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_435 }, "Lab 435 (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[3][1].labdesciption)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_435_Soldering }, "Lab 435 - Soldering Room (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[3][2].labdesciption)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_430 }, "Lab 430 (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[3][3].labdesciption)),

                    ),

                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }
        if (this.props.floor === 5) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { className: "textbox", style: copyStyles3 },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                            React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),

                            //labs data
                            React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#"}, "Lab 522 (360° view currently unavailable)")),
                            React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[4][0].labdesciption)),
                    ),


                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }
        if (this.props.floor === 6) {
            return (
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { className: "textbox", style: copyStyles },
                        React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                            React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                            React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),

                        //floor 6 hay 2 labs
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_630 }, "Lab 630 (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[5][0].labdesciption)),

                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { className:"labname", style: copyItemTitle }, "Name of Lab"),
                            React.createElement("a", { className: "button textbox", href: "#", onClick: this.load_612 }, "Lab 612 (Press to View)")),
                        React.createElement("div", { style: copyItemContainer },
                            React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                            React.createElement("div", { style: copyItemContent }, floors[5][1].labdesciption))
                    ),

                    React.createElement("li", {
                        className: `floor-plate layer${this.props.floor}`,
                        style: style,
                        onClick: this.handleSelectFloor
                    }))
            );
        }


        return (
            React.createElement("div", { className: "textbox", style: { position: 'relative' } },
                React.createElement("div", { style: copyStyles },
                    React.createElement("div", { style: { ...copyItemContainer, fontSize: 12 } },
                        React.createElement("div", {className:"floor", style: copyItemTitle }, "Floor"),
                        React.createElement("div", {className:"floor", style: copyItemContent }, this.props.floor)),
                    //recent=this.props.floor,
                    React.createElement("div", { style: copyItemContainer },
                        React.createElement("div", {className:"labname", style: copyItemTitle }, "Name of Lab"),
                        React.createElement("div", { style: copyItemContent }, floors[2][0].labname)),

                    React.createElement("div", { style: copyItemContainer },
                        React.createElement("div", { style: copyItemTitle }, "Lab Space Description"),
                        React.createElement("div", { style: copyItemContent }, floors[2][0].labdesciption))),


                React.createElement("li", {
                    className: `floor-plate layer${this.props.floor}`,
                    style: style,
                    onClick: this.handleSelectFloor
                }))
        );

    }
} _defineProperty(FloorPlate, "propTypes", { floor: React.PropTypes.array.isRequired, selectedFloor: React.PropTypes.number, onSelectFloor: React.PropTypes.func.isRequired });


class FloorPlateSelector extends React.Component {



    constructor(props) {
        super(props);
        this.handleSelectFloor = this.handleSelectFloor.bind(this);
    }

    handleSelectFloor() {
        this.props.onSelectFloor(this.props.floor);
    }

    render() {
        let { floor, selectedFloor } = this.props;
        let isActive = selectedFloor == floor;
        let selectedStyle = isActive ?
            {
                color: '#ccc',
                background: '#999'
            } :
            {};

        return (
            React.createElement("li", {
                onClick: this.handleSelectFloor,
                style: selectedStyle
            }, floor));

    }
}


/* Render the above component into the div#app*/
_defineProperty(FloorPlateSelector, "propTypes", { floor: React.PropTypes.array.isRequired, selectedFloor: React.PropTypes.number, onSelectFloor: React.PropTypes.func.isRequired });
React.render(React.createElement(Application, null), document.getElementById('app'));


