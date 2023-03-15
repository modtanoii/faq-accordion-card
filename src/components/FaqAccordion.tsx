import Card from './Card'
import BoxImg from '../assets/illustration-box-desktop.svg'
import WomanOnline from '../assets/illustration-woman-online-desktop.svg'
import BGDesktop from '../assets/bg-pattern-desktop.svg'
import './FaqAccordion.css'

export const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

function FaqAccordion() {
  return (
    <Card>
        <main className="main">
            <div className="left">
              <div className="bg"><img src={BGDesktop} alt="" /></div>
              <div className="woman-online"><img src={WomanOnline} alt="" /></div>
            </div>
            <div className="box"><img src={BoxImg} alt="" /></div>
            <div className="right">
              <h2>FAQ</h2>
              <div className="faq">
                <div className="question">
                  <p>How many team members can I invite?</p>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="answer">
                  <p>You can invite up to 2 additional users on the Free plan. There is no limit on 
                  team members for the Premium plan.</p>
                </div>
              </div>

              <div className="faq">
                <div className="question">
                  <p>What is the maximum file upload size?</p>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="answer">
                  <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </div>
              </div>

              <div className="faq">
                <div className="question">
                  <p>How do I reset my password?</p>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="answer">
                  <p>Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you.</p>
                </div>
              </div>

              <div className="faq">
                <div className="question">
                  <p>Can I cancel my subscription?</p>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="answer">
                  <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
                </div>
              </div>

              <div className="faq">
                <div className="question">
                  <p>Do you provide additional support?</p>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                </div>
                <div className="answer">
                  <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                </div>
              </div>
            </div>
        </main>
    </Card>
  )
}

export default FaqAccordion