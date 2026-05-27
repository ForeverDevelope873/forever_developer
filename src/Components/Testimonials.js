import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import kartik from "../IMG/kartik.jpg";
import milan from "../IMG/milan.jpg";
import drparesh from "../IMG/dr paresh.jpg";
import jaydipraval from '../IMG/jaydip raval.jpg';

function Testimonials() {
  return (
    <div>
      <section className="testimonial text-center">
        <Container>
          <div data-aos="zoom-in" className="heading white-heading">Client Review</div>
          <Carousel
            id="testimonial4"
            pause="hover"
            interval={2000}
            slide={true}
          >
            <Carousel.Item>
              <div className="testimonial4_slide">
                <img
                  src={kartik}
                  className="img-circle img-responsive"
                  alt="Client 1"
                  style={{ borderRadius: '50%', maxWidth: '150px', margin: '0 auto' }}
                />
                <h4 className='mt-5'>Kartik Vyas</h4>
                <p className='text-align-justyfiy'>
                  Forever Developer transformed our initial concept into a fully functional e-commerce platform that
                  perfectly matched our vision. Their team is highly skilled, inventive, and professional qualities
                  that made the entire development process smooth and successful. I wouldn’t hesitate to recommend Forever Developer to anyone seeking a reliable and forward-thinking tech partner.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial4_slide">
                <img
                  src={milan}
                  className="img-circle img-responsive"
                  alt="Milan Ghoghari"
                  style={{ borderRadius: '50%', maxWidth: '150px', margin: '0 auto' }}
                />
                <h4 className='mt-5'>Milan Ghoghari</h4>
                <p className='text-align-justyfiy'>
                  Forever Developer is a game-changer when it comes to delivering top-notch solutions on time. Their
                  team is highly skilled, detail-oriented, and truly understands the client’s vision. From planning
                  to execution, they maintain excellent communication, ensuring a smooth and efficient workflow.
                  Their ability to innovate and adapt to project needs makes them a reliable partner for any
                  development task. If you're looking for a team that guarantees quality, creativity, and
                  professionalism, Forever Developer is the perfect choice.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial4_slide">
                <img
                  src={drparesh}
                  className="img-circle img-responsive"
                  alt="Client 3"
                  style={{ borderRadius: '50%', maxWidth: '150px', margin: '0 auto' }}
                />
                <h4 className='mt-5'>Dr.Paresh Ghoghari</h4>
                <p className='text-align-justyfiy'>
                  I am extremely pleased with the website developed by Forever Developer for my medical
                  practice. Their team understood my requirements perfectly and created a professional,
                  user-friendly, and visually appealing website that enhances my online presence. The site is
                  well-optimized for both desktop and mobile, making it easier for my patients to access
                  important information. I highly recommend Forever Developer for their expertise,
                  responsiveness, and dedication to delivering high-quality web solutions.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial4_slide">
                <img
                  src={jaydipraval}
                  className="img-circle img-responsive"
                  alt="Client 3"
                  style={{ borderRadius: '50%', maxWidth: '150px', margin: '0 auto' }}
                />
                <h4 className='mt-5'>Jaydip Raval</h4>
                <p className='text-align-justyfiy'>
                  Forever Developer has truly outdone itself with the website built for our client in the diamond industry. Their team is dedicated, skilled, and focused on bringing the client's vision to life. The website showcases a perfect blend of elegance and functionality, tailored to highlight the luxurious nature of the diamond business. From initial design to final execution, Forever Developer ensured every detail was perfect, delivering a seamless user experience. Their communication and project management skills ensured that the project stayed on track and was completed on time. If you're seeking a team that combines creativity, technical expertise, and a keen understanding of your business needs, Forever Developer is the ultimate choice.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </div>
  );
}

export default Testimonials;