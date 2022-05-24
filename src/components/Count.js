import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../components/CSS/home.css"
import youtube from "./images/youtube.png";
import webinar from "./images/webinar.png";
import instagram from "./images/instagram.png";
import group from "./images/group.png";

const Count = () => {
//   const [marathiCount, setmarathiCount] = useState(0);
//   const fun = async () => {
//     return fetch(
//       "https://aqueous-mesa-28052.herokuapp.com/admin/processed_counts",
//       {
//         method: "get",
//         headers: { "Content-Type": "application/json" },
//       }
//     )
//       .then((res) => res.json())
//       .then((response) => setmarathiCount(response[0].marathi));
//   };
//   useEffect(() => {
//     fun();
//   }, []);

  return (
    <div className="my-5 pb-5">
      <section className="count text-white">
        <div className=" count_users  d-flex justify-content-center   ">
          <div className="count_parents">
            <div className="inside_counter d-flex">
              {/* <div className="count_box mx-2 google_rating">
                <img width={"45px"} src={google} alt="" />
                <div className="about_content_box">
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0">431</h2>
                  </div>
                  <div className="title_rating">GOOGLE RATING </div>
                </div>
              </div>
              <span></span> */}
              <div className="_count_upper_section1">

              
              <div className="count_box mx-2 google_rating">
                <div className="about_content_box">
                  <img width={"45px"} src={instagram} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={94} /> : 94.8}k</div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">INSTAGRAM FOLLOWERS </div>
              </div>
              <span></span>
              <div className="count_box mx-2 youtube_subs">
                <div className="about_content_box">
                  <img width={"45px"} src={youtube} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={20.4} /> : 20.4}K
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating"> YOUTUBE SUBSCRIBERS </div>
              </div>{" "}
              <span></span>{" "}
              <div className="count_box mx-2 batch">
                <div className="about_content_box">
                  <img width={"45px"} src={webinar} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={45} /> : 45}</div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">BATCHES HELD</div>
              </div>{" "}
              <span></span>
              <div className="count_box mx-2 student_mentored">
                <div className="about_content_box">
                  <img width={"45px"} src={group} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end ={1300} /> : 20039 }
                           
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">STUDENTS</div>
              </div>
              </div>
              <div className="_count_upper_section1 ">

              
              <div className="count_box mx-2 student_mentored">
                <div className="about_content_box">
                  <img width={"45px"} src={group} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end ={1300} /> : 20039 }
                           
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">STUDENTS</div>
              </div>
              <div className="count_box mx-2 student_mentored">
                <div className="about_content_box">
                  <img width={"45px"} src={group} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end ={1300} /> : 20039 }
                           
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">STUDENTS</div>
              </div>
              <div className="count_box mx-2 student_mentored">
                <div className="about_content_box">
                  <img width={"45px"} src={group} alt="" />
                  <div className="count_numbers ">
                    <h2 className="m-0 p-0 d-flex">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end ={1300} /> : 20039 }
                           
                          </div>
                        )}
                      </VisibilitySensor>
                    </h2>
                  </div>
                </div>
                <div className="title_rating">STUDENTS</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Count;
