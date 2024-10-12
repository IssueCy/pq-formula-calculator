
function calcFormula() {
    let p = prompt('Enter P:');
    let q = prompt('Enter Q;');

    p = Number(p);
    q = Number(q);

    if (isNaN(p) || isNaN(q)) {
        console.log("Enter a valid number");
        return;
    }

    let discriminant = Math.pow(p / 2, 2) - q;

    if (discriminant < 0) {
        console.log("Discriminant cant be negative");
        return;
    }
 
    let x1 = - p / 2 + Math.sqrt(discriminant);
    let x2 = - p / 2 - Math.sqrt(discriminant);
    
    console.log(`X1: ${x1.toFixed(2)}\nX2: ${x2.toFixed(2)}`);
}

calcFormula();

