import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import pic1 from '../Image-1.jpeg';
import pic2 from '../dorehami.jpg';
import pic3 from '../magezines.jpg';
import pic4 from '../coachella.jpg';
import pic5 from '../cara delavin.jpg';
import pic6 from '../rihanna.jpg';
import pic7 from '../annahill.jpg';
import pic8 from '../niakim.jpg';
import pic9 from '../dakotajohnson.jpg'
import pic10 from '../neginmirsalehi.jpg';
import pic11 from '../gigihadid.jpg';
import pic12 from '../anashidhoseini.jpg';
import pic13 from '../nike.jpg';
import pic14 from '../parantezi.jpg';
import pic15 from '../irina-shayk.jpg';



 function Cards() {
     return (
         <div className='cards'>
             <h1 className='titr'>سبک استایل</h1>
             <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                         src={pic1}
                         text='فست فشن چیست و چه تاثیری بر محیط زیست دارد؟'
                         label='سبک استایل'
                         path='/services'
                        />
                        <CardItem 
                         src={pic2}
                         text='چه لباسی مناسب دورهمی دوستانه است؟ همراه با عکس'
                         label='سبک استایل'
                         path='/services'
                        />
                        <CardItem 
                         src={pic3}
                         text='معرفی بهترین و معروفترین مجلات مد و فشن دنیا'
                         label='سبک استایل'
                         path='/services'
                        />
                        <CardItem 
                         src={pic4}
                         text='انواع استایل در فستیوال کوچلا, همراه با عکس'
                         label='سبک استایل'
                         path='/services'
                        />
                    </ul>
                </div>
             </div>

             <div className='cards'>
             <h1 className='titr2'>آشنایی با مدل ها</h1>
             <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                         src={pic5}
                         text='بیوگرافی کارا دلاوین مدل و بازیگر معروف انگلیسی'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                        <CardItem 
                         src={pic6}
                         text='بیوگرافی ریحانا خواننده معروف پاپ + عکس'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                        <CardItem 
                         src={pic7}
                         text='بیوگرافی تیلورهیل مدل معروف آمریکایی به همراه راز موفقیتش'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                        <CardItem 
                         src={pic8}
                         text='نیاکیم گتوچ'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                    </ul>
                </div>
             </div>
         </div>

         <div className='cards'>
             {/* <h1 className='titr2'>آشنایی با مدل ها</h1> */}
             <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                         src={pic9}
                         text='داکوتا جانسون'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                        <CardItem 
                         src={pic10}
                         text='نگین میرصالحی'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                         <CardItem 
                         src={pic11}
                         text='جی جی حدید از بارداری تا زایمان در قرنطینه'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                         <CardItem 
                         src={pic12}
                         text='بیوگرافی کامل آناشید حسینی + عکس'
                         label='آشنایی با مدل ها'
                         path='/services'
                        />
                    </ul>
                </div>
             </div>
         </div>

         <div className='cards'>
             <h1 className='titr2'>انتخاب سردبیر</h1>
             <div className='cards__container cards__bottum'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                         src={pic13}
                         text='7 کفش نایکی که باید توی کمد هر ورزشکاری باشه'
                         label='برند'
                         path='/services'
                        />
                        <CardItem 
                         src={pic14}
                         text='پای پرانتزی'
                         label='ترفند'
                         path='/services'
                        />
                         <CardItem 
                         src={pic15}
                         text='ایرینا شایک'
                         label='مدل'
                         path='/services'
                        />
                    </ul>
                </div>
             </div>
         </div>


         </div>
     )
 }
 
 export default Cards