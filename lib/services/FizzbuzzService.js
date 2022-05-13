class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
        }else{
            explorer.trick = explorer.score;
        }
        return explorer;
    }

    static applyValidationInNumber(number){
        let trick = "";
        if(number%5 === 0 && number%3 === 0){
            trick = "FIZZBUZZ";
        }else if(number%3 === 0){
            trick = "FIZZ";
        }else if(number%5 === 0){
            trick = "BUZZ";
        }else{
            trick = number;
        }
        return trick;
    }
}

module.exports = FizzbuzzService;