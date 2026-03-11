import Image from "next/image";
import CollegeLayout from "@/components/sr-college/SrCollegeLayout";
export default function facility() {
  return (
    <CollegeLayout>
      <div className="facilities-container">

        <h2 className="facilities-title">FACILITIES</h2>

        {/* Library */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc-1.jpg" alt="Sports" width={4000} height={6000} />
          </div>

          <div className="facility-text">
            <h3>Library and Reading Room</h3>
            <p>
              The library serves as the backbone to all academic activities. Our well-furnished library 
              houses a collection of texts and reference materials, journals, magazines, audio-videos,
              CDROMs and research reports which have been carefully selected from a number of national 
              professional institutions. The library also subscribes to Periodicals and Newspapers.              Library working hours are 9.30 am to 5.00 pm. There are separate reading room facilities
              for UG and PG students. The reading room is kept open during 9.30 am to 5.00 pm on all 
              working days. However, this facility is made available from 9.30 am to 10.00 pm during 
              the examination period and also on Sunday. All students have direct access to library 
              resources to develop a reading habit as well as to promote interdisciplinary interaction.                Our library subscribes to 96 periodicals/journals, 12 news papers and we have 111080 
              books for the readers. The library is repository of newspaper ‘Marathwada’ which used to 
              be published from this region since 1940s and serves as the primary data source for many 
              researches, it is acclaimed by the National Archives of India by financially supporting
              its conservation and digitisation.
            </p>
          </div>
        </div>




        {/* Departments */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc3.jpg" alt="Sports" width={1800} height={1600} />
          </div> */}

          <div className="facility-text">
            <h3>Well Equipped Department</h3>
            <p>
              There are subject wise separate departments in the college. Commerce and Management 
              Science Department is having State of Art facilities with more than 30 workstations 
              equipped with 10 MBPS optic cable broadband connections for computers. Music and Drama
               departments are housed in a separate building where all the special needs are made 
               available. These departments also have musical instruments like Tabla, Harmonium, Sitar, 
               Sarod, Sarangi, Flute, Tambora, etc and a theatre. In all the other departments intercom, 
               computer and internet facility is available.
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc2.jpg" alt="Building" width={3000} height={2400} />
          </div>
        </div>

        

        {/* Sports */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc4.jpg" alt="Sports" width={800} height={600} />
          </div>

          <div className="facility-text">
            <h3>Sports and Gymnasium</h3>
            <p>
              The college is having well equipped gymnasium of international standard 
              with badminton courts, multi gym, table tennis and professional 
              athletic training facilities for students.
            </p>
          </div>

          {/* <div className="facility-img">
            <Image src="/facilities/fc5.jpg" alt="Building" width={800} height={600} />
          </div> */}
        </div>



        {/* Hostel */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc4.jpg" alt="Sports" width={800} height={600} />
          </div> */}

          <div className="facility-text">
            <h3>Hostel for Boys and Girls</h3>
            <p>
              College provides hostel accommodation for boys and girls. For boys there is an 
              accommodation of 102 beds and for girls 106 beds. It is shared by SBES College of
               Arts and Commerce and SBES College of Science. Hostel facility is purely based on the 
               merit (performance in last examination). Seats are reserved for reservation category 
               students as per Government rules. Hostel admission forms are available in the college
                office. Students willing to seek admission should go through information booklet of the 
                hostel. For admissions contact rector girls hostel (0240-2361739) and boys hostel 
                (9423394506).
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc19.jpg" alt="Building" width={3000} height={2400} />
          </div>
        </div>

        {/* Computer */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc7.jpg" alt="Sports" width={2200} height={1800} />
          </div>

          <div className="facility-text">
            <h3>Computer Laboratory</h3>
            <p>
              The college has the air-conditioned computer laboratory equipped with a server 
              interconnecting 85 computers. The broadband internet connection & color printing facilities
               are available. Well-qualified staff takes care of the student. Students pursuing their 
               studies where computer related papers are prescribed avails this facility. Power generator
                facility is available for uninterrupted electricity supply for the computer laboratory.
            </p>
          </div>

          {/* <div className="facility-img">
            <Image src="/facilities/fc19.jpg" alt="Building" width={3000} height={2400} />
          </div> */}
        </div>

          {/* Auditorium */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc7.jpg" alt="Sports" width={2200} height={1800} />
          </div> */}

          <div className="facility-text">
            <h3>Auditorium</h3>
            <p>
              We have well equipped air cooled mini auditorium with a sitting capacity of 200 persons
              where drama performances are organised and it is a vibrant forum made available to the 
              students of performing arts to manifest their creative and artistic talents.
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc10.jpg" alt="Building" width={1400} height={900} />
          </div>
        </div>


          {/* Conference Hall */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc12.jpg" alt="Sports" width={2200} height={1800} />
          </div>

          <div className="facility-text">
            <h3>Conference Hall</h3>
            <p>
              The ‘Bhoomkar Hall’ is the conference hall in the college where discussions and deliberations 
              on various themes and areas are organised. It also serves as the presentation hall.
              Competitions with limited number of participants are organised here. The hall is air
              conditioned with DLP, internet and sound system facility with the seating capacity for 100 persons.
            </p>
          </div>

          {/* <div className="facility-img">
            <Image src="/facilities/fc10.jpg" alt="Building" width={1400} height={900} />
          </div> */}
        </div>


         {/* ICT Enabled Classrooms */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc12.jpg" alt="Sports" width={2200} height={1800} />
          </div> */}

          <div className="facility-text">
            <h3>ICT Enabled Classrooms</h3>
            <p>
              The ground and first floor of our college building are having Wi-Fi inter-facility. 
              The classrooms on these two floors are equipped with green, white and blackboards and 
              also with roof mounted digital laser projector and screen. All these classrooms also have
              public address system.s.
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc13.jpg" alt="Building" width={1700} height={1000} />
          </div>
        </div>


        {/* Language Lab */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc14.jpg" alt="Sports" width={2200} height={1800} />
          </div>

          <div className="facility-text">
            <h3>Language Lab</h3>
            <p>
              SBES College of Arts and Commerce is having a language laboratory supported by ACEN hardware
               and software. It facilitates the inculcation of language competencies in our students. Apart 
               from spoken English College is looking forward to make available German and Japanese 
               language courses. Language lab also offers faculty development programme for school teachers.
            </p>
          </div>

          {/* <div className="facility-img">
            <Image src="/facilities/fc13.jpg" alt="Building" width={1400} height={900} />
          </div> */}
        </div>


        {/* Girl's Common Room */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc14.jpg" alt="Sports" width={2200} height={1800} />
          </div> */}

          <div className="facility-text">
            <h3>Girl's Common Room</h3>
            <p>
              The college provides the facility of a specious and secured common room only for its girl 
              students. During proxies and recess, girls can have their privacy and relax there.
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc15.jpg" alt="Building" width={1000} height={800} />
          </div>
        </div>


        {/* Cafeteria */}
        <div className="facility-row">
          <div className="facility-img">
            <Image src="/facilities/fc17.jpg" alt="Sports" width={1400} height={800} />
          </div>

          <div className="facility-text">
            <h3>Cafeteria</h3>
            <p>
              Cafeteria of the college is the most sought after space in student's life for connecting
              with friends, discussion for hours, memories to cherish. College Cafeteria serves hygienic
              snacks at an affordable cost for all the students.
            </p>
          </div>

          {/* <div className="facility-img">
            <Image src="/facilities/fc15.jpg" alt="Building" width={1400} height={900} />
          </div> */}
        </div>

          
        {/* Office */}
        <div className="facility-row">
          {/* <div className="facility-img">
            <Image src="/facilities/fc17.jpg" alt="Sports" width={1400} height={800} />
          </div> */}

          <div className="facility-text">
            <h3>Office</h3>
            <p>
              The college is having an efficient office with full automation. The office makes use of
               ERP solutions for business transactions. Computerised admission system and online 
               integration to the university and governmental portals is made available here. The ambience
                of the office is conducive for effective working.
            </p>
          </div>

          <div className="facility-img">
            <Image src="/facilities/fc18.jpg" alt="Building" width={1600} height={1400} />
          </div>
        </div>
        


      </div>
    </CollegeLayout>
  );
}