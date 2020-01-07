import{
    checkForName
} from "./nameChecker";
test('It is a valid url',() =>{
    expect(checkForName('http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile')).toBeTruthy()
}) 