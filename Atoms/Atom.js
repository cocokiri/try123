const OrbitCapacity = [
    2,
    8,
    18
];

const Molecule = {
    children: [],
    symbol_1: this.MoleculeFormular(children.slice()),
    MoleculeFormular: function (atoms) {
        const symbols = atoms.map(a = > a.symbol)
        const formula = symbols.reduce((el, composite) = > el + "-" + composite, "")
        return formula;
    }
//parent: [], //biological terms at some point
}


const AtomSigns = ["Zero", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne"];

const BondTypes = {
    //if it's over 0.4 it's polar (unequal sharing), if it's beyond 1.8 it's ionic bond (stealing the electron)
    covalent: {
        pure: 0.4,
        polar: 1.8,
        ionic: 1.81,
    }
}

//nomenclature nomenclature -- find the names for chem struct
//or make a straight up molecule class with no view rendering yet -- and make parent


const PeriodicTable = {
    H: {
        symbol:"H",
        protons: 1,
        name: "Hydrogen",
        electroNegativity: 2.2, //Pauling Skala
        VdWRadius: 120, //pm picometer
        atomRadius: 25,
    },
    He: {
        symbol:"He",
        protons: 2,
        name: "Helium",
        electroNegativity: 0, //not observed reacting with anything
    },
    Li: {
        symbol:"Li",
        protons: 3,
        name: "Lithium",
        electroNegativity: 0.98
    },
    Be: {
        symbol:"Be",
        protons: 4,
        name: "Beryllium",
        electroNegativity: 1.57
    },
    B: {
        symbol:"B",
        protons: 5,
        name: "Boron",
        electroNegativity: 2.04
    },
    C: {
        symbol:"C",
        protons: 6,
        name: "Carbon",
        electroNegativity: 2.55
    },
    N: {
        symbol:"N",
        protons: 7,
        name: "Nitrogen",
        electroNegativity: 3.04
    },
    O: {
        symbol:"G",
        protons: 8,
        name: "Oxygen",
        electroNegativity: 3.44
    },
    F: {
        symbol:"F",
        protons: 9,
        name: "Fluorine",
        electroNegativity: 4
    },
}


Atom = class {
    constructor(atomnumber) {

        this.state = {
            name: "test",
            parent: null,
            connections: ["s"],
            protons: atomnumber,
            wants: 2,
            canGive: 6, //valence
            spaceLeft: function () {
                this.orbitalLimit - this.orbit.vElectrons;
            },
            charge: +3,
            abbr: "HJ"

        }
    }

    electronConfig(totalElectrons, orbitCapacity) {
        orbits = [];
        for (let i = 0; i < orbitCapacity.length; i++) {
            const cap = orbitCapacity[i]
            if (cap < totalElectrons) {
                orbits[i] = cap;
                totalElectrons -= cap;
            }
            else {
                orbits[i] = totalElectrons;
            }
        }
        orbits = orbits.filter(e = > e > 0
    )
        ; //filter entries with no electrons
        return orbits;
    }

    openSpots() {
        return this.state.wants;
    }

    deductName(atomNumber) {
        return periodicTable[atomNumber];
    }
}


//check if there is open positions in Valence A shell
//compare with B valence shell
//bind them
//The atom wants a filled shell ... no matter if it gets or gives ...
Molecule = class {
    constructor(A, B) {
        this.state.children = [A, B];
    }

    isBondable(A, B) {

    }

    chemCode1(structure) {
        return "A–B" // – is only when bonded so H–H–O isn't possible
    }

    react(A, B) { //oxygen, hydrogen,
        //check electronegativity difference -- sheme

        if (A.state.canGive() < B.state.openSpots() || B.state.canGive() < A.state.openSpots()) {
            //A.donateTo(B)(2);
            //A.shareWith(B)(2);
            return new Molecule(A, B); //just abstracted...relations are kept in the atom class
        }
    }
}