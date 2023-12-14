import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import './questionDropDown.styles.css'

export interface QuestionDropDownProps {
    question: string;
    description: string;
    isSelected: boolean;
}

export const QuestionDropDown = (props: QuestionDropDownProps) => {

    const {question, description, isSelected} = props;

    return (
    <div className='questionOuter' >
        <div className="title">
            <div className='question'>
                <h4>{question}</h4>
            </div>
            <div className='icon'>
                <img src={isSelected ? iconMinus : iconPlus} alt="Icon" />
            </div>
        </div>
        <div className={`description ${isSelected ? 'open' : ''}`}>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </div>
    )
}