import Search from "../search/search";
import Listing from "./listing/listing";

function showName(text){
    alert(text + 'Header')
}

const MyHeader = function MyHeader(){
    const data = ['Nikhil', 'Anmol', 'Sunny', 'Shubham']
    let permissions = {admin: true}

    return <div className="header">
        <Search className="search" />

        <div className="navigation"> <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Careers</a>
       </div>
    </div>

}

export default MyHeader
