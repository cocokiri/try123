//Nucleotide is like a digit or number or letter in an alphabet. In combination / sequence it can store information.

const Ntypes = {
    adenine:1,
    thymine:1,
    guanine:1,
    cytosine:1
}


Nucleotide = class{
    constructor(){

        this.base = "perfectly rotated hydrogen-bonding atoms";
        //GC => 3 hbonds
        //AT => 2 hbonds
        this.sugarPhosphate = "used to link nucleotides together"
    }
    readMe(hydrogenbond = "x") {

    }
}


NucleicAcid = class{ //double helix bc hydrophobic atoms (not charged, or too little electrons -- H+ you know) migrate away from water
    constructor(){
        this.isDNA = true;
        this.sequence = [new Nucleotide()];
        for (let i = 0; i < 50; i++) {
            if (isDNA) {
                //if the nucleotide one step before is a 'binding'(hydrogenbonds) one (A-T, G-C vice versa) then next is random (A-T...G)
                //if not add the ONE that has to be next (after CGA it has to be T) ...at my current knowledge
            }
        }
    }
    readMe(hydrogenbond = "x") {
    }
}
