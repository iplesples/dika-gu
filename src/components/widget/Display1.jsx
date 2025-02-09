const Display1 = ({background}) => {
  return (

    <div
    className="h-screen bg-contain bg-center bg-no-repeat bg-black"
    style= {{ backgroundImage: `url(${background})` }}
    >
          <div className=" h-screen bg-linear-to-t from-black to-transparent z-5">
            
          </div>
    </div>
        )
}

export default Display1;