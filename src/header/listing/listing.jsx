
function Listing(props){
    const {title, listData, showName} = props

    const afterClick = (evt)=>{
        console.log(evt);
        // showName("Parent Name is ")
    }

    return <div className="list">
        <h2>{title}</h2>
        {
           listData.map((item, index)=>{
               return <span key={index}>{item}</span>
           })
        }

        <input onChange={(evt)=>{
            afterClick(evt)
        }} />
        <button onClick={afterClick}>Click to get Parent name</button>
    </div>

}

export default Listing
