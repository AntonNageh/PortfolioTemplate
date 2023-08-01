
const ContactInfo = () => {

    return (
        <>
            <div className='absolute w-full text-center justify-center flex'>
                <div className='mt-[50vh] absolute z-30'>
                Facebook: <br/><br/>
                <a className='text-white hoverBlue' href='https://www.facebook.com/anton.nageh/'>Anton Nageh</a>
                </div>
            
                <div className='mt-[150vh] absolute z-30'>
                LinkedIn: <br/><br/>
                <a className='text-white hoverBlue' href='https://linkedin.com/in/anton-nageh-772852169'>Anton Nageh</a>
                </div>

                <div className='mt-[250vh] absolute z-30'>
                Github: <br/><br/>
                <a className='text-white hoverBlue' href='https://github.com/AntonNageh'>Anton Nageh</a>
                </div>
           
                <div className='mt-[350vh] absolute z-30'>
                Gmail: <br/><br/>
                <a className='text-white hoverBlue' href='mailto:anton.nageh20@gmail.com'>Anton Nageh</a>
                </div>

                <div className='mt-[450vh] absolute z-30'>
                Phone Number: <br/><br/>
                <a className='text-white hoverBlue' href='tel:+201223967806'>+201223967806</a>
                </div>

                <div className='mt-[250rem] md:mt-[273rem] absolute z-30'>
                Thank you
                </div>
            </div>
        </>
  )
}

export default ContactInfo