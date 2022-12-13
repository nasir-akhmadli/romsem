import React, { useState } from 'react'

const Rew = () => {
    const [isReviewInputOpen, setIsReviewInputOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {
            'name': "Елена",
            'time': "02.23.21",
            "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
        },
        {
            'name': "Розалия",
            'time': "02.23.21",
            "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
        },
        {
            'name': "Сергей Гаврилюк",
            'time': "02.23.21",
            "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
        }
    ])

    function addReview(e){
        if(e.key === 'Enter'){
            var newReviews = reviews.slice()
            newReviews.unshift({'name': 'Nasir', 'time': new Date().toDateString(), 'description': e.target.value})
            setReviews(newReviews)
        }
    }

  return (
    <>
    <section className="reviews-main" >
                <div className="reviews-header">
                    <h1>Отзывы</h1>
                    <div>
                        {isReviewInputOpen 
                            && <input className='new-rev' onKeyPress={(e) => addReview(e)}  />
                        }
                    </div>
                    <div className="reviews-add">
                        <h2 onClick={()=>setIsReviewInputOpen(isReviewInputOpen => !isReviewInputOpen)}>+ Добавить отзыв</h2>
                    </div>
                </div>
                <div className="reviews-cards">
                    {reviews.map(review => {
                        return(
                            <div className="reviews-rosalia" data-aos="flip-up">
                                <h1>{review.name}<span>{review.time}</span></h1>
                                <p>{review.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
    </>
  )
}

export default Rew