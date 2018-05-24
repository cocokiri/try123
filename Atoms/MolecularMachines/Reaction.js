
function React(A, B) {
    //A.charge
    //B.charge
    //B.valenceSpace().

    //hydrogen bond (how strong?)
    //covalent { nonpolar, polar}
    //
    A.bound = true;
    B.bound = true;
    B.parent = 'createdMolecule'

    //destroy A, B and make AB
    if ('islegit') {
        return new Molecule(A, B)
    }
}

Molecule = class {
    constructor(...compounds) {} //might already contain bigger molecules
        let what = [...compounds];

        //sum of compound charges == 0 ? go ahead : return error or try with less compounds
        //sort
}

