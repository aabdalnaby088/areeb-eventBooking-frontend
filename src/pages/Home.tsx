
import CategorySection from "../sections/CategorySection";
import EventsSection from "../sections/EventsSection";



export default function Home() {

  
  
  return (
    <div className="">
      {/* Hero section */}
      <section className="mx-auto py-10 relative ">
        <div className="relative py-10 ">
          {/* ******************************************************* */}
          {/* Text Section */}
          <h1 className=" max-md:text-[30px] max-md:leading-[35px] max-md:text-center text-[90px] font-extrabold text-primary leading-[115px] flex-1">
            Find Amazing Events Happening in
          </h1>
          {/* ******************************************************* */}

          {/* ******************************************************* */}
          {/* Video Section */}
          <div className=" max-md:hidden w-[500px] h-[110px] rounded-full overflow-hidden ml-5 absolute top-40 left-[47%] ">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/pabloHeroSection.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* ******************************************************* */}

        {/* second section with another video */}
        <div className="flex justify-evenly max-md:justify-center max-md:mx-auto items-center w-[60%] mt-[-30px] ms-[-40px]   ">
          <h1 className="max-md:text-[30px]  text-[90px] font-extrabold text-primary">Your</h1>

          <div className=" max-md:hidden w-[250px] h-[110px] rounded-full overflow-hidden ml-5  ">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/operaHero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h1 className=" max-md:text-[30px] text-[90px] font-extrabold text-primary">City</h1>
        </div>

           <div className=" md:hidden mt-5 w-[300px] h-[110px] rounded-full overflow-hidden mx-auto ">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/operaHero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


        {/* ******************************************************* */}

        <div className=" mt-12 flex justify-between max-md:flex-col max-md:justify-center ">

          {/* for the paragraph */}

          <div className="w-[55%] max-md:w-[100%]  max-md:text-center max-md:flex max-md:justify-center border-b-2 pb-5 ">
          <p className=" text-[18px] text-secondary font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nulla ultrices tincidunt. Proin porttitor, urna ac pretium pharetra, justo felis facilisis nulla, non blandit lorem turpis sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices urna ac pretium pharetra, justo felis facilisis nulla, non blandit lorem turpis sed sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices </p>
          </div>

          {/* for the tickets images */}

          <div className="w-[45%] flex justify-center mt-[-80px] max-md:hidden ">

                    <img
                    src="/DoubleTickets.png"
                    alt="TicketsImage"
                    width={300}
                    height={300}
                    className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]  mt-[-40px]  "
                  />

          </div>

        </div>


        {/* sponsors section */}

        <div className="  w-[55%] max-md:w-full mt-5 flex max-md:flex-col items-center max-md:text-center ">

          <h3 className=" text-4xl max-md:text-3xl text-primary font-extrabold ">Sponsors</h3>

          {/* sponsors logos */}

          <div className="flex justify-evenly w-[50%] max-md:w-[90%] max-md:ms-0 max-md:mt-5 max-md:justify-between  ms-16 ">

                  <img
                    src="/sponsorRedbullLogo.png"
                    alt="SponsorImage"
                    width={100}
                    height={100}
 
                  />
                  <img
                    src="/sponsorMalahyLogo.png"
                    alt="SponsorImage"
                    width={100}
                    height={100}

                  />
                  <img
                    src="/sponsorOraLogo.png"
                    alt="SponsorImage"
                    width={100}
                    height={100}
                  />

          </div>

        </div>
      </section>

      {/* Upcoming Events Section */}
      <EventsSection/>

      {/* Categories section */}
      <CategorySection/>
    </div>
  );
}
