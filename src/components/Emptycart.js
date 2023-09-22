import { Link } from "react-router-dom";
import Logo from "../../assets/img/Emptycard.webp"

const Emptycart=()=>{
    return (
        <>
            <div className="flex flex-col">
                <img src={Logo} className="w-96 mt-20 self-center" alt=""></img>
                <div className="self-center mt-5 flex flex-col">
                <div className="text-2xl self-center">Your Card is Empty</div>
                <div className="text-md mt-2 text-slate-600">You can go to home page to view more restaurants</div>
                </div>
                <div className="self-center mt-8 box-content ">
                    <Link  to="/" className="bg-slate-700 cursor-pointer text-center text-slate-50  p-4 text-md hover:bg-slate-300 hover:text-black">See your near Restaurant</Link>
                </div>
            </div>
        </>

    );
}

export default Emptycart;