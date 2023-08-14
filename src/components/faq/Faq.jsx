import React from 'react'
import './faq.css'

const Faq = () => {
    const data = [
        {
            question: 'What Is The Meaning Of Insurance?',
            ans: 'Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection and losses are paid out of the premiums collected from the insuring public.'
        },

        {
            question: 'Why Do I Need Insurance?',
            ans: 'Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection and losses are paid out of the premiums collected from the insuring public.'
        },

        {
            question: 'Why Should One Cover Oneself Immediately?',
            ans: 'Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection and losses are paid out of the premiums collected from the insuring public.'
        },

        {
            question: 'What Is A Premium?',
            ans: 'Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection and losses are paid out of the premiums collected from the insuring public.'
        },

        {
            question: 'What Is Deductible?',
            ans: 'Insurance is a protection against financial loss arising on the happening of an unexpected event. Insurance companies collect premiums to provide for this protection and losses are paid out of the premiums collected from the insuring public.'
        },
    ]

    return (
        <div className='container mb-5'>
            <h1 className='text-center page-heading'>Frequently Asked Questions</h1>
            <p className='text-center page-sub-heading' style={{ maxWidthwidth: 659 }}>Our team of insurance experts come across many questions that are common across all insurance segments. Here, we ask them the most burning ones to help you out!</p>

            <div className='faq-container px-lg-5 p-3 py-lg-4'>
                <div className="accordion accordion-flush d-flex flex-column gap-2" id="accordionFlushExample">
                    {
                        data.map((item, i) => (
                            <div key={i} className="accordion-item">
                                <h2 className="accordion-header border-bottom" id={"flush-heading"+i}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+i} aria-expanded="false" aria-controls={"flush-collapseOne"+i}>
                                       {item.question}
                                    </button>
                                </h2>
                                <div id={"flush-collapse"+i} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+i} data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">{item.ans}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq