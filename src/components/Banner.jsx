
const Banner = () => {
  return (
    <div 
    className="h-[400px] flex items-center justify-center bg-cover bg-center relative  w-[100vw]"
    style={{backgroundImage:'url(banner.jpeg)',backgroundPosition:'center',backgroundBlendMode:'darken',  backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <div className="text-black absolute left-0 ml-[10%] flex flex-col gap-4">
            <h2 className="text-xl">Join the club of </h2>
            <h1 className="text-3xl font-extrabold">REAL MEN</h1>
            Discover timeless elegance at Doclan Co. Shop <br />
            our curated collection of carefully crafted men&apos;s <br />
            watches and elevate your stature effortlessly
            <button className="bg-black text-white rounded-xl py-2 px-3 w-max">Start Shopping</button>
        </div>
    </div>
  )
}

export default Banner