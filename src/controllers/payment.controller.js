import Stripe from 'stripe'

const stripe = new Stripe(
    'sk_test_51PnRuxP5KMdeoZMie620JTUb3uWEUyLHm8VpIcnO2TlOn2T4Oz0kltmGydcrVIZvulA9Hplq1OYu8IQwBX3cjzUh00cIae68ri'
)

export const createSession = async (requ, res) =>{
 const session =  await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                   product_data:{
                        id:1,
                        name:'Jordan',
                        description:'Air Jordan'
                   },
                   currency:'mxn',
                   unit_amount:'550000',
                },
                quantity:1
            },
            {
                price_data:{
                   product_data:{
                        name:'Camisa GymShark',
                        description:'Lo nuevo de GymShark'
                   },
                   currency:'mxn',
                   unit_amount:'150000',
                },
                quantity:1
            },

           
        ],
        mode:'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })

    return res.json(session);
}