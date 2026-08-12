import '../App.css';

type MyComponentTestType = { text: string };

function FirstComponent({text}: MyComponentTestType){
    return <div>
        {text}
    </div>

}

export default FirstComponent;