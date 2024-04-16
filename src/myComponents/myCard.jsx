
function Card(props) {
    return(
        <div className="gap-3 mx-auto grid grid-cols-5 mt-2 m-12 md:grid-cols-5 lx:grid-cols-4">
            {
                props.datav.map((items,index)=> {
                    return(
                        <div key={index} className="flex w-80 ml-6">
                            <img className="w-[50px] h-[50px] rounded-full m-2" src={items.Image} alt=""/>
                            <h6 className="text-1xl mt-3">{items.firstName}<p className="text-sm">{items.Title}</p></h6>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Card