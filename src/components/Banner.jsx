
const Banner = () => {
  return (
    <div 
    className="h-[400px] flex items-center justify-center bg-cover bg-center relative  w-[80vw]"
    style={{backgroundImage:'url(banner.jpeg)',backgroundPosition:'center',backgroundBlendMode:'darken',  backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
        <div className="text-black absolute left-0 ml-[10%] flex flex-col gap-4">
            <h2 className="text-xl">Join the club of </h2>
            <h1 className="text-3xl font-extrabold">REAL MEN</h1>
            <p className="tracking- tracking-wide text-sm font-semibold">Lorem ipsum dolor sit amet, consectetur  <br />
                 expedita ducimus odit laudantium  deserunt quibusdam <br />
                et delectus hic, nihil perferendis similique.</p>
            <button className="bg-black text-white rounded-xl py-2 px-3 w-max">Start Shopping</button>
        </div>
    </div>
  )
}

export default Banner