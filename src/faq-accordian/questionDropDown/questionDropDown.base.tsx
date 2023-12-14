import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import './questionDropDown.styles.css'
import { useState } from 'react';

export interface QuestionDropDownProps {
    question: string;
    description: string;
}

export const QuestionDropDown = (props: QuestionDropDownProps) => {

    const {question, description} = props;
    const [isSelected, setIsSselected] = useState(false);


    return (
    <div className={`questionOuter ${isSelected ? 'open' : 'closed'}`} onClick={() => setIsSselected(!isSelected)}>
        <div className="title">
            <div className='question'>
                {question}
            </div>
            <div className='icon'>
                <img src={isSelected ? iconMinus : iconPlus} alt="Icon" />
            </div>
        </div>
        <div className="description">
            {description}
        </div>
    </div>
    )
}