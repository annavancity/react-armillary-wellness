import Certificates from "./Certificates";

function About() {
    return(
        <div className="container"> 
            <div className="about">
                <img src="https://images.unsplash.com/photo-1594744803086-b902dd06f88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" width="150px" alt="owner"/>
                <h1>About Ashley</h1>
                <p>.... The Biomagnetic Pair is a non-invasive, integrative technique discovered by Mexican scientist Dr. Isaac Goiz-Durán over 33 years ago. This technique consists of the specific placement of pairs of magnets on a body. The placements facilitate a natural process of internal balance in the body, which restores and maintains an optimal state of health and wellbeing. It can be used as prevention, during conventional medical treatments or in rehabilitation, eg after surgery, to aid recovery, without altering prescriptions or medical interventions</p>
            </div>
            <div>
                < Certificates />
            </div>
            
        </div>
    )
}
export default About;