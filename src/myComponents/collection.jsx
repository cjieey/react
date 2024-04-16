
function Collections(params) {
    return(
        <div className=" grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lx:grid-cols-2 p-5">
            {
                params.datac.map((items,index)=>{
                    return(
                        <div key={index} className="flex">
                            <img className="w-[700px] h-[400px]" src={items.Image} alt=""/>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Collections