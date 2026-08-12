import '../App.css';
import type {ReactNode} from "react";

type MyComponentTestType = {
    text: string;
    children?: ReactNode;
};

function FirstComponent({text, children}: MyComponentTestType){
    return <div>
        <h2>{text}</h2>
        <p>{children}</p>
    </div>

}

export default FirstComponent;