class Calculator
{
   
    constructor(previousOpTextElement, currentOpTextElement){
        this.previousOpTextElement = previousOpTextElement;
        this.currentOpTextElement = currentOpTextElement;
        this.clear();
    }

    clear(){
        this.currentOp = '';
        this.previousOp = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOp = this.currentOp.toString().slice(0, -1)
        //  I have no shame copying this from Web Dev SImplified's video
        //  I could not find the .slice function and made my own bastardized,
        //  handmade version over the course of an hour. Screw that.

    }

    appendNumber(number){
        if (number === '.' && this.currentOp.includes('.')){return;}
        if(this.currentOp.toString().length >= 10){return;}
        if(this.currentOp.toString().length == 1 && 
            this.currentOp.toString() == '0'){
                this.currentOp = number.toString();
                console.log("yep, i saw you add shit...");
            }
        else if(this.justComputed){
            this.currentOp = number.toString();
            console.log("yep, i saw you add shit...");
            this.justComputed = false;
        }
        else{
            this.currentOp = this.currentOp.toString() + number.toString();
            console.log("yep, i saw you add shit...");
        }
    }

    chooseOperation(oper){
        if(this.currentOp === '' && this.operation == undefined){return;}
        if(this.currentOp === '' && this.operation != undefined){
            this.previousOp.toString().slice(0, -1);
            this.previousOp.toString().slice(0, -1);
            this.operation = oper;
            return;
        }
        
        if(this.previousOp !== ''){this.compute();}
        this.operation = oper;
        this.previousOp = this.currentOp; 
        this.currentOp = '';


    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOp);
        const curr = parseFloat(this.currentOp);

        if(isNaN(prev) || isNaN(curr)) {console.log("WHOOPS");return;}
        console.log("processing...");
        console.log(this.operation);

        switch(this.operation){
            case '+':
                computation = prev + curr;
                console.log("Adding...");
                break;
            case '-':
                computation = prev - curr;
                console.log("Subtracting...");
                break;
            case 'x':
                computation = prev * curr;
                console.log("Multiplying...");
                break;
            case '/':
                computation = prev / curr;
                console.log("Dividing...");
                break;
            default: return;
        }
        console.log("PROCESSING...");
        this.currentOp = computation;

        //  cut off code, after computing. I'll worry about rounding later
        if(computation.toString().length > 12){
            for(let i = 0; i < computation.toString().length-12; i++){
                this.currentOp = this.currentOp.toString().slice(0, -1);
            }

        }

        
        this.operation = undefined;
        this.previousOp = '';
        this.justComputed = true;
    }

    divideByHundred(){
        const curr = parseFloat(this.currentOp);
        
        if(isNaN(curr)) {return;}
        console.log("Dividing by 100...");
        this.currentOp = curr/100;
    }

    NegPosSwap(){
        var n = this.currentOp;
        var op = this.currentOp -n -n;
        console.log("Testing Swap:" + op);
        this.currentOp = op;

    }

    updateDisplay(){
        
        this.currentOpTextElement = this.currentOp.toString();
        document.getElementById("current-op").innerText = this.currentOpTextElement;
        
        if(this.operation != null){
            this.previousOpTextElement = `${this.previousOp} ${this.operation}`;
            document.getElementById("previous-op").innerText = this.previousOpTextElement;
        }
        else{
            this.previousOpTextElement = this.previousOp.toString();
            document.getElementById("previous-op").innerText = this.previousOpTextElement;
        
        }
        console.log("shoulda changed..." + this.currentOpTextElement)
    }


}


const previousOpTextElement = document.getElementById("previous-op");
const currentOpTextElement = document.getElementById("current-op");


const calculator = new Calculator(previousOpTextElement, currentOpTextElement);

function numpadClear(){
    console.log("CLEAR...");
    calculator.clear();
    calculator.updateDisplay();
}
function numpadDel(){
    console.log("Deleting...");
    calculator.delete();
    calculator.updateDisplay();
}

function numpadPercent(){
    console.log("Divinding by 100...");
    calculator.divideByHundred();
    calculator.updateDisplay();
}
function numpadSwap(){
    console.log("Swapping...");
    calculator.NegPosSwap();
    calculator.updateDisplay();
}

function numpadEqu(){
    console.log("Computing...");
    calculator.compute();
    calculator.updateDisplay();
}
/****/
function numpadAdd(){
    console.log("pressing +...");
    calculator.chooseOperation('+');
    calculator.updateDisplay();

}
function numpadSub(){
    console.log("pressing -...");
    calculator.chooseOperation('-');
    calculator.updateDisplay();

}
function numpadMul(){
    console.log("pressing x...");
    calculator.chooseOperation('x');
    calculator.updateDisplay();

}
function numpadDiv(){
    console.log("pressing /...");
    calculator.chooseOperation('/');
    calculator.updateDisplay();
}
/****/
function numpad1(){
    console.log("pressing 1...")
    calculator.appendNumber(1);
    calculator.updateDisplay();
}
function numpad2(){
    console.log("pressing 2...")
    calculator.appendNumber(2);
    calculator.updateDisplay();
}
function numpad3(){
    console.log("pressing 3...")
    calculator.appendNumber(3);
    calculator.updateDisplay();
}
function numpad4(){
    console.log("pressing 4...")
    calculator.appendNumber(4);
    calculator.updateDisplay();
}
function numpad5(){
    console.log("pressing 5...")
    calculator.appendNumber(5);
    calculator.updateDisplay();
}
function numpad6(){
    console.log("pressing 6...")
    calculator.appendNumber(6);
    calculator.updateDisplay();
}
function numpad7(){
    console.log("pressing 7...")
    calculator.appendNumber(7);
    calculator.updateDisplay();
}
function numpad8(){
    console.log("pressing 8...")
    calculator.appendNumber(8);
    calculator.updateDisplay();
}
function numpad9(){
    console.log("pressing 9...")
    calculator.appendNumber(9);
    calculator.updateDisplay();
}
function numpad0(){
    console.log("pressing 0...")
    calculator.appendNumber(0);
    calculator.updateDisplay();
}
function numpaddot(){
    console.log("pressing dot...")
    if(calculator.currentOp == ''){ 
        //  adds a 0 before the . if nothing is there to start.
        calculator.appendNumber(0);
        calculator.appendNumber('.');
        calculator.updateDisplay();
    }
    else{
        calculator.appendNumber('.');
        calculator.updateDisplay();
    
    }
}
