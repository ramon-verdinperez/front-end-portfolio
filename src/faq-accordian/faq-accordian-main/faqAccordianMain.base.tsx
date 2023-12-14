import { QuestionDropDown, QuestionDropDownProps } from "../questionDropDown/questionDropDown.base"
import './faqAccordianMain.styles.css';
import iconStar from '../assets/images/icon-star.svg';

export const FaqAccordianMain = () => {

    const questions: QuestionDropDownProps[] = [
        {question: 'What is Frontend Mentor, and how will it help me?',
        description: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`
        },
        {question: 'Is Frontend Mentor free?',
        description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`
        },
        {question: 'Can I use Frontend Mentor projects in my portfolio?',
        description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`
        },
        {question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
        description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`
        },
    ]

    return (
        <div className="accordianOuter">
            <div className="accordianPanelOuter">
                <div className="title">
                    <img src={iconStar} alt="icon start"/>
                    <h1>FAQs</h1>
                </div>

                <div className="questionContainer">
                    {questions.map((q: QuestionDropDownProps, index: number) => {
                        return(<div>
                                <QuestionDropDown question={q.question} description={q.description} />
                                {index !== (questions.length - 1) && <hr/>}
                            </div>)
                    })}
                </div>
            </div>

        </div>
    )
}