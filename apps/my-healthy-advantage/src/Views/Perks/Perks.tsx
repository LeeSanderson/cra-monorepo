import HelloFresh from "../../assets/HelloFresh.jpg";
import HelloFreshLogo from "../../assets/HelloFreshLogo.png";
import Fitbit from "../../assets/Fitbit.jpg";
import FitbitLogo from "../../assets/FitbitLogo.jpg";

export const Perks = () => {
    return (
        <>
            <section className=" bg-slate-200 m-auto w-full pl-4 pr-4 h-full">
                <h1 className="font-bold text-lg">Perks & Discounts</h1>
                <p className="font-normal">
                    Enjoy fantastic discounts and offers from our partners. As
                    Health Assured don't gain financially from the perks, we can
                    offer you the best deals possible. Find out how much you can
                    save today.
                </p>
                <div className="sm:w-full rounded-xl ml-2 mt-5 overflow-hidden bg-white relative">
                    <img
                        alt="Hello Fresh"
                        src={HelloFresh}
                        className="object-cover w-full h-36"
                    />
                    <img
                        alt="Hello Fresh Logo"
                        src={HelloFreshLogo}
                        className="p-1 w-10 h-10 bg-white rounded-lg border-black border float-left absolute top-32 ml-10"
                    />
                    <div className="p-5">
                        <h1 className="font-bold text-lg mt-5">
                            £15 off four HelloFresh Boxes
                        </h1>
                        <div className="text-slate-600">HelloFresh</div>
                        <div className="text-slate-600">
                            Code: HELLOHEALTH15
                        </div>
                    </div>
                </div>
                <div className="sm:w-full rounded-xl ml-2 mt-5 overflow-hidden bg-white relative">
                    <img
                        alt="Fitbit"
                        src={Fitbit}
                        className="object-cover w-full h-36"
                    />
                    <img
                        alt="Fitbit Logo"
                        src={FitbitLogo}
                        className="p-1 w-10 h-10 bg-white rounded-lg border-black border float-left absolute top-32 ml-10"
                    />
                    <div className="p-5">
                        <h1 className="font-bold text-lg mt-5">
                            Up to 20% off a Fitbit device!
                        </h1>
                        <div className="text-slate-600">Fitbit</div>
                        <div className="text-slate-600">
                            Access: GOFIT / Discount: FITBIT20HA
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
