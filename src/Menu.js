export default function Menu({menu, filterItem}){
    return(
        <div className="text-center">
            {menu.map((item,i) => {
                return <button 
                            key={i}
                            className='btn btn-danger mx-2'
                            onClick={() =>filterItem(item)}
                        >
                            {item}
                        </button>
                })
            }
        </div>
    )
}